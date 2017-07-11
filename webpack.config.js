'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
  entry: "./template/javascript/home",
  output: {
    path: __dirname + "/assets",
    filename: "build.js",
    library: "home"
  },

  watch: NODE_ENV == 'development',

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: NODE_ENV == 'development' ? "cheap-module-eval-source-map" : "source-map",

	plugins: [
    new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(NODE_ENV),
      LANG: JSON.stringify('en')
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
