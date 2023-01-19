const { dirname } = require('path');
const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')



module.exports = {
    mode : 'development',
    resolve: {
      fallback: {
        util: require.resolve("util/")
      },
      fallback: {
        "fs": false,
        "tls": false,
        "net": false,
        "path": false,
        "zlib": false,
        "http": false,
        "https": false,
        "stream": false,
        "crypto": false,
        "url": false,
        "vm": false,
        "querystring": false,
        "os": false ,
        "constants": false,
        "assert": false
      },
  },
    entry: {
        index: './src/index.js',
        print: './src/project.js',
        ui: './src/ui.js',
     },
     devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'To Do',
            template: 'src/index.html',
            filename: 'index.html',
            inject: false
        }),
        new webpack.ProvidePlugin({
          process: 'process/browser',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    "module": {
        "rules": [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
}