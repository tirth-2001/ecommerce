const htmlWebpackPlugin = require('html-webpack-plugin')
const moduleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
	mode: 'development',
	devServer: {
		port: 8080,
	},
	plugins: [
		new moduleFederationPlugin({
			name: 'container',
			remotes: {
				// products: 'products2@http://localhost:8081/remoteEntry.js',
				products: 'products2@https://microfrontend-ecommerce-products.vercel.app/remoteEntry.js',
				// cart1: 'cart11@http://localhost:8082/remoteEntry.js',
				cart1: 'cart11@https://microfrontend-ecommerce-cart.vercel.app/remoteEntry.js',
			},
		}),
		new htmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
}
