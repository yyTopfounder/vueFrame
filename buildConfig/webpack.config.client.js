const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.base");

let clientConfig;
const isDev = process.env.NODE_ENV == "development";
const devServer = {
  port: 8085,
  host: "0.0.0.0",
  overlay: {
    errors: true
  },
  hot: true
}
const clientBasePlugin = [
  new VueLoaderPlugin(),
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: isDev? "'development'":"'production'"
    }
  }),
  new HtmlWebpackPlugin({
    template: path.join(__dirname, "../src/index.html")
  })
];

if(isDev){
  clientConfig = merge(baseConfig,{
    devtool: "#cheap-module-eval-source-map",
    devServer,
    module: {
      rules: [
        {
          test: /\.styl/,
          use: [
            "vue-style-loader",
            'css-loader',
            {
              loader: "postcss-loader",
              options: {
                source:true
              }
            },
            "stylus-loader"
          ]
        }
      ]
    },
    plugins: clientBasePlugin.concat([
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ])
  })
}else {
  clientConfig = merge(baseConfig,{
    entry: {
      app: path.join(__dirname, "../src/index.js"),
      vendor: ["vue"]
    },
    output: {
      filename: "[name].[chunkHash:8].js"
    },
    module: {
      rules: [
        {
          test:/\.styl/,
          loader: ExtractTextWebpackPlugin.extract({
            fallback: "vue-style-loader",
            use: [
              "css-loader",
              {
                loader: "postcss-loader",
                options: {
                  sourceMap: true
                }
              },
              "stylus-loader"
            ]
          })
        }
      ]
    },
    plugins: clientBasePlugin.concat([
      new ExtractTextWebpackPlugin("styles.[chunkhash:8].css"),
      new webpack.optimize.SplitChunksPlugin({
        name: "vendor"
      })
    ])
  })
}

module.exports = clientConfig;