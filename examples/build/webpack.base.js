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
      components: path.join(__dirname, '../src/components'),
      sf: path.join(__dirname, '../../packages')
    }
  },
  performance: {},
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /.js[x]?$/,
        loader: 'eslint-loader',
        exclude: [/node_modules/, /lib/]
      },
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/, /lib/]
      },
      {
        test: /\.md$/,
        loader: 'html-loader!markdown-loader'
      },
      {
        test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|mp3)(\?.*)?$/,
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
