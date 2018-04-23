const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = env => ({
  context: path.join(__dirname, "src"),

  entry: "./bootstrap.jsx",

  mode: env.production ? "production" : "development",

  devtool: env.development ? "source-map" : "",

  resolve: {
    extensions: [".js", ".jsx"]
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "#2 Webpack",
      hash: true,
      template: path.resolve(__dirname, "./index.html")
    })
  ],
  devServer: env.development
    ? {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
      }
    : {}
});
