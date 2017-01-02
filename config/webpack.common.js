const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const helpers = require('./helpers');

module.exports = {
  entry: {
    'polyfills': './client/polyfills.ts',
    'vendor': './client/vendor.ts',
    'app': './client/main.ts'
  },

  resolve: {
    extensions: ['.js', '.ts']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.ico$/,
		loader: 'file-loader?name=assets/[name].[ext]'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot)$/,
		loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
		test: /.css$/,
		exclude: helpers.root('src', 'client', 'app'),
		loaders: [ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader' }), 'to-string-loader', 'css-loader']
	  }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'client/index.html'
    }),

	new ExtractTextPlugin("styles.css"),

	new ContextReplacementPlugin(
		// The (\\|\/) piece accounts for path separators in *nix and Windows
		/angular(\\|\/)core(\\|\/)src(\\|\/)linker/,
		helpers.root(''), // location of your src
		{
			// your Angular Async Route paths relative to this root directory
		}
	)
  ]
};
