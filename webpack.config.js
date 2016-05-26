var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');

module.exports = {
	entry: [
<<<<<<< HEAD
		'webpack-dev-server/client?http://0.0.0.0:8081', // WebpackDevServer host and port
=======
		'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
>>>>>>> 82fda27b8f608826e537fdbfa8d1426cb123eb6b
		'webpack/hot/only-dev-server',
		'./index.jsx' // Your appʼs entry point
	],
	devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: loaders
	},
	devServer: {
		contentBase: "./public",
			noInfo: true, //  --no-info option
			hot: true,
			inline: true,
			port: process.env.PORT,
			host: process.env.IP
		},
	plugins: [
		new webpack.NoErrorsPlugin()
	]
};
