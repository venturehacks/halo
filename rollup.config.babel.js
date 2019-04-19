import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript';
import builtins from 'rollup-plugin-node-builtins';
import alias from 'rollup-plugin-alias';
// @ts-ignore
import pkg from './package.json';

const LIBRARY_NAME = 'halo';

const GLOBAL_LIBS = {
  classnames: 'classnames',
  react: 'React',
  'react-dom': 'ReactDOM',
};

const EXTERNAL_LIBS = [
  'classnames',
  'react',
  'react-dom',
];

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
      use: [
        [
          'sass', {
            includePaths: [path.join(__dirname, 'scss')]
          }
        ]
      ]
    }),
    typescript(),
    replace({
      exclude: 'node_modules/**',
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    resolve({
      mainFields: ['module', 'main'],
      customResolveOptions: {
        moduleDirectory: 'node_modules',
      },
      dedupe: ['react', 'react-dom'],
    }),
    commonjs({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      include: 'node_modules/**',
    })
  ],
  external: ['react', 'react-dom'],
};
