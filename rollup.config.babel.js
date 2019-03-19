import path from 'path';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript';
import builtins from 'rollup-plugin-node-builtins';
import alias from 'rollup-plugin-alias';
import pkg from './package.json';

const libraryName = 'halo'
const globalLibs = {
  classnames: 'classnames',
  react: 'React',
  'react-dom': 'ReactDOM',
};
const externalLibs = ['classnames', 'react', 'react-dom'];

export default {
  input: './src/index.tsx',
  output: [
    {
      external: externalLibs,
      file: `${pkg.main}`,
      format: 'umd',
      globals: globalLibs,
      name: libraryName,
      sourcemap: true,
    },
    {
      external: externalLibs,
      file: `${pkg.module}`,
      format: 'es',
      globals: globalLibs,
      name: libraryName,
      sourcemap: true,
    },
  ],

  plugins: [
    builtins(),
    alias({
      resolve: ['.tsx', '.ts', '.jsx', '.js'],
      '~': path.join(__dirname, 'src'),
    }),
    postcss({
      modules: true,
      extensions: ['.css', '.sass', '.scss'],
      namedExports: true,
    }),
    typescript(),
    replace({
      exclude: 'node_modules/**',
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    nodeResolve({
      // pass custom options to the resolve plugin
      jsnext: true,
      main: true,
      customResolveOptions: {
        moduleDirectory: 'node_modules',
      },
    }),
    commonjs({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      include: 'node_modules/**',
    }),
  ],

  external: ['react', 'react-dom'],
};
