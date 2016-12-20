'use strict'
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = require('./config')

module.exports = {
  entry: {
    client: './src/index.js'
  },
  output: {
    path: path.join(__dirname, '../../docs'),
    filename: '[name].js',
    publicPath: './'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      root: path.join(__dirname, '../src'),
      components: path.join(__dirname, '../src/components')
    }
  },
  performance: {},
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /.js[x]?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4)(\?.*)?$/,
        loader: 'file-loader?limit=8192'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: config.title,
      favicon: __dirname + '/favicon.png',
      template: __dirname + '/index.html',
      filename: './index.html'
    })
  ]
}
