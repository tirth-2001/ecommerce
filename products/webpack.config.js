const htmlWebpackPlugin = require('html-webpack-plugin')
const moduleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
	mode: 'development',
	devServer: {
		port: 8081,
	},
	plugins: [
		new moduleFederationPlugin({
			name: 'products2',
			filename: 'remoteEntry.js',
			exposes: {
				'./ProductsIndex1': './src/bootstrap.js',
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
