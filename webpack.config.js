import path from 'path';
const __dirname = path.resolve(path.dirname(''));

const config = {
	entry: './src/index.js',
	mode: 'development',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		]
	},
	devServer: {
		static: path.join(__dirname, 'dist'),
		port: 3020,
		historyApiFallback: true
	}
}

export default config;