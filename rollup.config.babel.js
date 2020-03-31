import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import builtins from 'rollup-plugin-node-builtins';
import alias from 'rollup-plugin-alias';
import filesize from 'rollup-plugin-filesize';
import camelCase from 'camelcase';

// @ts-ignore
import pkg from './package.json';

const LIBRARY_NAME = 'halo';

const GLOBAL_LIBS = {
  classnames: 'classnames',
  react: 'React',
  lodash: 'lodash',
  'react-dom': 'ReactDOM',
};

const EXTERNAL_LIBS = ['classnames', 'react', 'react-dom', 'lodash'];

export default {
  input: './src/index.tsx',
  output: [
    {
      external: EXTERNAL_LIBS,
      file: `${pkg.main}`,
      format: 'umd',
      globals: GLOBAL_LIBS,
      name: LIBRARY_NAME,
      sourcemap: true,
    },
    {
      external: EXTERNAL_LIBS,
      file: `${pkg.module}`,
      format: 'es',
      globals: GLOBAL_LIBS,
      name: LIBRARY_NAME,
      sourcemap: true,
    },
  ],
  external: EXTERNAL_LIBS,
  plugins: [
    // note: alias not currently used; busted after tsc compilation
    alias({
      resolve: ['.tsx', '.ts', '.jsx', '.js'],
      '~': path.join(__dirname, 'src'),
    }),
    builtins(),
    resolve({
      mainFields: ['module', 'main'],
      customResolveOptions: {
        moduleDirectory: 'node_modules',
      },
      dedupe: ['react', 'react-dom', 'lodash'],
    }),
    postcss({
      modules: true,
      extract: true,
      extensions: ['.css', '.sass', '.scss'],
      minimize: {
        preset: 'default',
      },
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
    typescript(),
    replace({
      exclude: 'node_modules/**',
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    commonjs({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      include: 'node_modules/**',
    }),
    filesize(),
  ],
};
