const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {	
	entry: './src/app.js',	
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist/',
	},
	resolve: {
    	alias: {
			vue: "@vue/runtime-dom"
    	}
	},
	module: {
		rules: [
		{
        	test: /\.vue$/,
			loader: 'vue-loader'
		}
		]
	},
	plugins: [
		new VueLoaderPlugin()
	],
	devServer: {
    	inline: true,
    	hot: true,
    	stats: 'minimal',
    	contentBase: __dirname,
    	overlay: true
	}
}
