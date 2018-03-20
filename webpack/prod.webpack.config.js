const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const path = require('path');

module.exports = {
  entry: path.resolve(__dirname + '/../src/index.js'),
  output: {
    path: path.resolve(__dirname + '/../', 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js(x)?$/, use: 'babel-loader', exclude: /node_modules/ },
      { 
        test: /\.css$/,
        include: path.resolve(__dirname + '/../', 'src'),
        use: ExtractTextPlugin.extract('css-loader?modules&importLoaders=1&minimize=1&localIdentName=[name]__[local]___[hash:base64:5]')
      },
      { 
        test: /\.(png|jpg|svg)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  optimization: {
    runtimeChunk: false,
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true)
    }),
    new HTMLWebpackPlugin({ template: path.resolve(__dirname + '/../', 'src/index.html')}),
    new ExtractTextPlugin('styles.css'),
    new UglifyJSPlugin({
      uglifyOptions: {
        sourceMap: true, 
        minimize: true,
        compress: {
          warnings: false,
          conditionals: true,
          drop_console: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true,
        },
        output: {
          comments: false
        }
      }
    }),
    // new BundleAnalyzer()
  ]
};