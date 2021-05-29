const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
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
  optimization: {
    usedExports: true,
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react"],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.png$/,
        type: 'asset/resource'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  devServer: {},
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
