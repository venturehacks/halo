import path from 'path';
import { camelCase } from 'change-case';
import { defineConfig } from 'rollup';

// 1st party plugins
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
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
  classnames: 'classnames',
  lodash: 'lodash',
  react: 'React',
  'react-dom': 'ReactDOM',
};

const EXTERNAL_LIBS = [
  'classnames',
  'react',
  'react-dom',
  'react-modal',
  'lodash',
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
      file: `${pkg.module}`,
      format: 'es',
      globals: GLOBAL_LIBS,
      interop: 'auto',
      name: pkg.name,
      sourcemap: true,
    },
    {
      file: `${pkg.main}`,
      format: 'umd',
      globals: GLOBAL_LIBS,
      name: pkg.name,
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
    }),
    replace({
      exclude: ['node_modules/**', '../../node_modules/**'],
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    commonjs({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      include: [
        'node_modules/**',
        // '../../node_modules/**',
        '../../node_modules/tippy.js/**/*',
        '../../node_modules/@tippyjs/react/**/*',
        '../../node_modules/react-spinners/**/*',
        '../../node_modules/@popperjs/**/*',
        '../../node_modules/hoist-non-react-statics/**/*',
        '../../node_modules/@emotion/**/*',
        '../../node_modules/react/**/*',
      ],
    }),
    analyze({
      limit: 10, // 10 file limit
      onAnalysis: () => {
        if (analyzePluginIterations > 0) {
          throw new Error('(expected error) skipping 2nd analysis pass...'); // We only want reports on the first output
        }
        analyzePluginIterations++;
      },
      showExports: true,
    }),
    filesize(),
  ],
});
