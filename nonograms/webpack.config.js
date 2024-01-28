const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
  mode: 'development',
  entry: { index: path.resolve(__dirname, "js", "app.js") },
  output: {
    path: path.resolve(__dirname, "build")
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer : {
    static: './build'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html")
    }),
    new CopyPlugin({
        patterns: [
          { from: "img", to: "img", noErrorOnMissing: true },
        ],
      })
  ]
};