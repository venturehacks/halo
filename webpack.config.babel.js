import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';
// import CleanWebpackPlugin from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import nodeExternals from 'webpack-node-externals';

const devMode = process.env.NODE_ENV !== 'production'

const plugins = [
  // new CleanWebpackPlugin(['dist']),
  new CopyWebpackPlugin([
    { from: './README.md' },
    // { from: './package.json' },
  ]),
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: "[name].css",
    chunkFilename: "[id].css"
  }),
];

export default {
  devtool: 'inline-source-map',
  entry: './src/index.tsx',
  output: {
    path: path.resolve('./dist'),
    filename: 'halo.min.js',
    libraryTarget: 'umd',
    library: 'halo',
    publicPath: path.resolve('./dist'),
    umdNamedDefine: true,
    globalObject: 'this'
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.scss']
  },
  plugins,
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        loader: 'tslint-loader'
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.svg(\?.*)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml&name=fonts/[hash].[ext]'
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'url-loader?limit=1000&name=images/[hash].[ext]'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        include: path.resolve('./src'),
        use: [{
          loader: MiniCssExtractPlugin.loader, //devMode ? 'style-loader' :
          options: {
            modules: true,
            sourceMap: true,
            importLoader: 2
          }
        }, {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }],
        exclude: /node_modules/
      }
    ]
  },
};
