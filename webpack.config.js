'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
	context: __dirname + '/frontend/javascript',

	entry: {
		home: "./home",
		about: "./about",
    common: './common'
  },

  output: {
    path: __dirname + "/public",
    filename: "[name].js",
    library: "[name]"
  },

  watch: NODE_ENV == 'development',

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: NODE_ENV == 'development' ? "cheap-module-eval-source-map" : "source-map",

	plugins: [
	  new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(NODE_ENV),
      LANG: JSON.stringify('en')
		}),
    new webpack.optimize.CommonsChunkPlugin({
      name: "common",
      minChunks : 2 /* number of modules used at assembly points */
    })
	],

	module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }]
  }
};

if (NODE_ENV == 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    })
  );
}
