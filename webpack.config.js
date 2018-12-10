const path = require('path');

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
     },
     {
        test: /\.scss?$/,
        use: {
          loader: 'typings-for-css-modules-loader?modules&sass',
          options: { sourceMap: true, importLoaders: 3, modules: true, namedExport: true, camelCase: true }
        },
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  }
};
