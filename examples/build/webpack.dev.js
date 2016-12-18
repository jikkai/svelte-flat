'use strict'
const webpack = require('webpack')
const path = require('path')

const base = require('./webpack.base')
const config = require('./config')

base.devtool = 'eval-source-map'
base.output.publicPath = '/assets/'
base.performance.hints = false

// Plugins Configuration
base.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: config.postcss
    }
  })
)

base.module.rules.push({
  test: /\.css$/,
  loader: 'style-loader!css-loader!postcss-loader',
  exclude: path.resolve(__dirname, '../node_modules')
})

base.module.rules.push({
  test: /\.css$/,
  loader: 'style-loader!css-loader',
  include: path.resolve(__dirname, '../node_modules')
})

module.exports = base
