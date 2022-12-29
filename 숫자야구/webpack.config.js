const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");

module.exports = {
	mode: "development",
	devtool: "eval", // hidden-source-map
	resolve: {
		extensions: [".js", ".vue"], // 확장자를 작성안해도 인지 가능
	},
	entry: {
		app: "./main.js",
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: "vue-loader",
			},
		],
	},
	plugins: [new VueLoaderPlugin()],
	output: {
		filename: "[name].js",
		path: path.join(__dirname, "dist"),
	},
};
