const path = require('path');

module.exports = {
	entry: './src/index.ts',
	// devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		fallback: {
			crypto: require.resolve('crypto-browserify'),
			os: require.resolve('os-browserify/browser'),
			stream: require.resolve('stream-browserify'),
			path: require.resolve('path-browserify'),
			http: require.resolve('stream-http'),
			zlib: require.resolve('browserify-zlib'),
			fs: false,
			net: false,
			tls: false,
		},
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'api'),
	},
};
