'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
	context: __dirname + '/frontend',

/*	resolve: {
		root: __dirname + '/vendor'
	},*/

	entry: {
/*		home: "./home",
		about: "./about",
    common: './common',*/
		menu: './components/main',
    app: './javascript/app'
  },

  output: {
    path: __dirname + "/public",
    publicPath: '/',
    filename: '[name].js',
    library: '[name]',
		chunkFilename: '[id].[name].js'
  },

  watch: NODE_ENV == 'development',

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: NODE_ENV == 'development' ? "cheap-module-eval-source-map" : "source-map",

	plugins: [
/*	  new webpack.ProvidePlugin({
			$: "jquery",
			_: 'lodash'
		}),*/
	  new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(NODE_ENV),
      LANG: JSON.stringify('en')
		}),
/*    new webpack.optimize.CommonsChunkPlugin({
      name: "common",
      minChunks : 2 /!* number of modules used at assembly points *!/
    })*/
	],

	module: {
    loaders: [{
      test: /\.js$/,
			/*exclude: /\/node_modules\//,*/
			include: __dirname + '/frontend',
      loader: 'babel-loader'
		}, {
			test:   /\.pug$/,
			loader: "pug-loader"
		}, {
			test:   /\.styl$/,
			loader: 'style-loader!css-loader!stylus-loader'
		}, {
			test:   /\.css$/,
			loader: 'style-loader!css!autoprefixer?browsers=last 2 version!'
		}, {
			test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
			loader: 'file-loader?name=[path][name].[ext]'
    }],
/* /\/node_modules\/(angular\/angular|jquery|...)/ */
		noParse: wrapRegexp(/angular\/angular.js/, 'noParse')
  },

	/* CDN require libs*/
/*	externals: {
		lodash: "_"
	}
*/

};

/*if (NODE_ENV == 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    })
  );
}*/

function wrapRegexp(regexp, label) {
	regexp.test = function(path) {
		console.log(label, path);
		return RegExp.prototype.test.call(this, path);
	};
	return regexp;
}
