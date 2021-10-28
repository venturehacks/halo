/* eslint-disable sort-keys-fix/sort-keys-fix */
import path from 'path';
import { camelCase } from 'change-case';
import { defineConfig } from 'rollup';

// 1st party plugins
import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';

// 3rd party
import filesize from 'rollup-plugin-filesize';
import postcss from 'rollup-plugin-postcss';
import builtins from 'rollup-plugin-node-builtins';
import analyze from 'rollup-plugin-analyzer';

// @ts-ignore
import pkg from './package.json';

const GLOBAL_LIBS = {
  '@tippyjs/react': 'Tippy',
  'change-case': 'changeCase',
  classnames: 'classNames',
  lodash: 'lodash',
  react: 'React',
  'react-spinners': 'reactSpinners',
};

const EXTERNAL_LIBS = [
  '@tippyjs/react',
  'change-case',
  'classnames',
  'lodash',
  'react-dom',
  'react-spinners',
  'react',
];

let analyzePluginIterations = 0;

export default defineConfig({
  external: EXTERNAL_LIBS,
  input: './src/index.tsx',
  moduleContext: id => {
    if (/react-spinners\/esm/.test(id)) {
      return 'window';
    }

    return 'undefined';
  },
  output: [
    {
      name: pkg.name,
      format: 'esm',
      interop: 'auto',
      sourcemap: true,
      file: `${pkg.module}`,
      // TREE SHAKING
      // NOTE(drew): experiencing issues with this
      //
      // dir: `dist/esm`,
      // NOTE(drew): might be necessary for tree shaking, not sure.
      // preserveModules: true
    },
    {
      name: pkg.name,
      file: `${pkg.main}`,
      format: 'umd',
      globals: GLOBAL_LIBS,

      sourcemap: true,
    },
  ],
  plugins: [
    // note: alias not currently used; busted after tsc compilation
    alias({
      resolve: ['.tsx', '.ts', '.jsx', '.js'],
      '~': path.join(__dirname, 'src'),
    }),
    builtins(),
    resolve({
      customResolveOptions: {
        moduleDirectories: ['node_modules', '../../node_modules'],
      },
      dedupe: EXTERNAL_LIBS,
      mainFields: ['module', 'main'],
      extensions: ['.mjs', '.js'],
    }),
    postcss({
      extensions: ['.css', '.sass', '.scss'],
      extract: true,
      minimize: {
        preset: 'default',
      },
      modules: true,
      namedExports: name => {
        // converts scss dashes to camelCase:
        // styles.slate--200 => styles.slate200
        return camelCase(name);
      },
      use: [
        [
          'sass',
          {
            includePaths: [path.resolve(__dirname, 'scss')],
          },
        ],
      ],
    }),
    typescript({
      outputToFilesystem: true,
      tsconfig: './tsconfig.json',
    }),
    replace({
      exclude: ['node_modules/**', '../../node_modules/**'],
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    analyze({
      limit: 20, // 20 file limit
      onAnalysis: () => {
        if (analyzePluginIterations > 0) {
          throw new Error('(expected error) skipping 2nd analysis pass...'); // We only want reports on the first output
        }
        analyzePluginIterations++;
      },
      // showExports: true, // which named exports are used?
    }),
    filesize(),
  ],
});
