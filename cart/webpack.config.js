const htmlWebpackPlugin = require('html-webpack-plugin')
const moduleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
	mode: 'development',
	devServer: {
		port: 8082,
	},
	plugins: [
		new moduleFederationPlugin({
			name: 'cart11',
			filename: 'remoteEntry.js',
			exposes: {
				'./CartIndex': './src/bootstrap.js',
			},
			shared: {
				faker: {
					singleton: true,
				},
			},
		}),
		new htmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
}
