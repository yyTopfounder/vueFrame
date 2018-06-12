const path = require("path");
const webpack = require("webpack");

const isDev = process.env.NODE_ENV == "development";

const config = {
  target: "web",
  mode: "development",
  entry: path.join(__dirname, "../src/index.js"),
  output: {
    filename: "bundle.[hash:8].js",
    path: path.join(__dirname, "../dist")
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.jsx$/,
        loader: "babel-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|gif|png|svg|jpeg)$/,
        use: [{
          loader: "url-loader",
          options: {
            limit:1024,
            name: "[name].[ext]"
          }
        }]
      }
    ]
  }
};

module.exports = config;