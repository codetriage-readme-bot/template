'use strict'

const NODE_ENV = process.env.NODE_ENV || 'development'
const webpack = require('webpack')
const AssetsPlugin = require('assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
/* const ExtractTextPlugin = require('extract-text-webpack-plugin'); */
const rimraf = require('rimraf')

function addHash (template, hash) {
  return NODE_ENV == 'production'
		? template.replace(/\.[^.]+$/, `.[${hash}]$&`) : `${template}?hash=[${hash}]`
}

module.exports = {
  context: __dirname + '/frontend',

/*	resolve: {
		root: __dirname + '/vendor'
	}, */

  entry: {
    menu: './components/main',
    app: './javascript/app',
    auth: './javascript/auth'
  },

  output: {
    path: __dirname + '/public/assets',
    publicPath: '/assets/',
    filename: addHash('[name].js', 'chunkhash'),
    library: '[name]',
    chunkFilename: addHash('[id].[name].js', 'chunkhash')
  },

  watch: NODE_ENV == 'development',

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: NODE_ENV == 'development' ? 'cheap-module-eval-source-map' : 'source-map',

  plugins: [
    {
      apply: (compiler) => {
        rimraf.sync(compiler.options.output.path)
      }
    },
/*	  new webpack.ProvidePlugin({
			$: "jquery",
			_: 'lodash'
		}), */
	  new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
      LANG: JSON.stringify('en')
    }),
    new AssetsPlugin({
      filename: 'assets.json',
      path: __dirname + '/public/assets'
    }),
    new HtmlWebpackPlugin({
      filename: 'main.html'
    })
/*    new webpack.optimize.CommonsChunkPlugin({
      name: "common",
      minChunks : 2 /!* number of modules used at assembly points *!/
    }) */
  ],

  module: {
    loaders: [{
      test: /\.js$/,
			/* exclude: /\/node_modules\//, */
      include: __dirname + '/frontend',
      loader: 'babel-loader'
    }, {
      test: /\.pug$/,
      loader: 'pug-loader'
    }, {
      test: /\.styl$/,
      loader: 'style-loader!css-loader!stylus-loader?resolve url'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css!autoprefixer?browsers=last 2 version!'
    }, {
      test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      include: /\/node_modules\//,
      loader: addHash('file-loader?name=[1].[ext]&regExp=node_modules/(.*)', 'hash:6')
    }, {
      test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      exclude: /\/node_modules\//,
      loader: addHash('file-loader?name=[path][name].[ext]', 'hash:6')
    }],
/* /\/node_modules\/(angular\/angular|jquery|...)/ */
    noParse: wrapRegexp(/angular\/angular.js/, 'noParse')
  },

  devServer: {
    contentBase: __dirname + '/backend', // static files, cwd() by default, false to disable
    historyApiFallback: true // if static file not found, go /index.html
		/*
		 // middlware ->
		 //   proxy ->
		 //     historyApiFallback ? -> historyApiFallback, middleware
		 //       -> contentBase
		 proxy: [{ // array in proxy allows regexp path so using it
		 path: "dynamic/* or /regexp/",
		 host: "http://proxy.host", // if another HOST header needed for proxy,
		 bypass: function(req, res, options) {
		 // return URL to rewrite req.url and SKIP PROXY
		 // return false otherwise
		 },
		 rewrite: function(req, options) {
		 // do something with req if needed
		 },
		 configure: function(proxy) {
		 // do something with http-proxy server instance if needed (add handlers etc)
		 }
		 }],
		 contentBase: __dirname + '/backend', // static files, cwd() by default, false to disable
		 historyApiFallback: true // if static file not found, go /index.html
		 */
  }

	/* CDN require libs */
/*	externals: {
		lodash: "_"
	}
*/

}

/* if (NODE_ENV == 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    })
  );
} */

function wrapRegexp (regexp, label) {
  regexp.test = function (path) {
    console.log(label, path)
    return RegExp.prototype.test.call(this, path)
  }
  return regexp
}
