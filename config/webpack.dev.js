var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-source-map',

  output: {
    path: helpers.root('dist'),
    filename: '[name].js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});
