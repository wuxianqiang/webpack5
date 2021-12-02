const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CustomPlugin = require("./plugins/CustomPlugin")
// const ReplacePlugin = require('webpack-plugin-replace');
const TerserJSPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
  mode: "development",
  entry: "./src/index.js",
  cache: {
    type: "filesystem", // 'memory' | 'filesystem'
    cacheDirectory: path.resolve(__dirname, "node_modules/.cache/webpack"), // 保存目录
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  // optimization: {
  //   minimizer: [
  //     new TerserJSPlugin({
  //       terserOptions: {
  //         format: {
  //           comments: /(\s*#if)|(\s*#end)/i,
  //         },
  //       },
  //     }),
  //   ],
  // },
  devtool: false,
  module: {
    rules: [
    ],
  },
  devServer: {},
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'json'
    // })
  ],
};
