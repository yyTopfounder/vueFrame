const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

const isDev = process.env.NODE_ENV == "development";

const config = {
  target: "web",
  mode: "development",
  entry: path.join(__dirname, "src/index.js"),
  output: {
    filename: "bundle.[hash:8].js",
    path: path.join(__dirname, "dist")
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
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
          NODE_ENV: isDev? "'development'":"'production'"
      }
    }),
    new HtmlWebpackPlugin()
  ]
}

if(isDev){
  config.devtool = "#cheap-module-eval-source-map"

  config.devServer = {
    port: 8085,
    host: "0.0.0.0",
    overlay: {
        errors: true
    },
    hot: true
  }

  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )

  config.module.rules.push({
    test: /\.styl/,
    use: [
      "style-loader",
      "css-loader",
      {
        loader: "postcss-loader",
        options: {
          source:true
        }
      },
      "stylus-loader"
    ]
  })
}else {
  config.entry = {
    app: path.join(__dirname, "src/index.js"),
    vendor: ["vue"]
  },
  config.output.filename = "[name].[chunkHash:8].js"
  config.module.rules.push({
    test:/\.styl/,
    loader: ExtractTextWebpackPlugin.extract({
      fallback: "style-loader",
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
  });

  config.plugins.push(
    new ExtractTextWebpackPlugin("styles.[chunkhash:8].css"),
    new webpack.optimize.SplitChunksPlugin({
        name: "vendor"
    })
  )
}

module.exports = config