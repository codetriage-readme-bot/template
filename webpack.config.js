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
    new webpack.NodeEnvironmentPlugin('NODE_ENV')
	]
};
