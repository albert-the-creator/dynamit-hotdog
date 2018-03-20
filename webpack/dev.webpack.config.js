const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname + '/../src/index.js'),
  output: {
    path: path.resolve(__dirname + '/../', 'dist'),
    filename: '[name].bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname + '/../', 'dist'),
    hot: true
  },
  module: {
    rules: [
      { test: /\.js(x)?$/, use: 'babel-loader', exclude: /node_modules/ },
      { 
        test: /\.css$/,
        include: path.resolve(__dirname + '/../', 'src'),
        use: [
          { loader: 'style-loader' },
          { 
            loader: 'css-loader',
            options: { 
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          }
        ]
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
  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false)
    }),
    new HTMLWebpackPlugin({ template: path.resolve(__dirname + '/../', 'src/index.html')}),
    new ExtractTextPlugin('styles.css'),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};