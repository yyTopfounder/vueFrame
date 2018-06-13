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
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          modules: true,
          localIdentName: '[hash:base64:5]'
        }
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
            name: "assets/[name].[hash:8].[ext]"
          }
        }]
      }
    ]
  }
};

module.exports = config;