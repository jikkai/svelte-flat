const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const base = require('./webpack.base')
const config = require('./config')

base.output.path = path.join(__dirname, '../docs')
base.entry.index = './example/index.js'
base.stats = { children: false }

// Plugins Configuration
base.plugins.push(
  new ProgressBarPlugin(),
  new ExtractTextPlugin('index.css'),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    output: {
      comments: false
    }
  }),
  new HtmlWebpackPlugin({
    title: config.title,
    template: path.resolve(__dirname, './index.html'),
    favicon: path.resolve(__dirname, './logo.png'),
    filename: './index.html'
  })
)

// Rules Configuration
base.module.rules.push({
  test: /\.css$/,
  loader: ExtractTextPlugin.extract({
    use: [{ loader: 'css-loader?minimize=true' }, 'postcss-loader'],
    fallback: 'style-loader'
  })
})

module.exports = base
