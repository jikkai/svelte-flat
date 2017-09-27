const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

const base = require('./webpack.base')

base.entry.index = './src/index.js'
base.stats = { children: false }

// Plugins Configuration
base.plugins.push(
  new ProgressBarPlugin(),
  // new ExtractTextPlugin('index.css'),
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
  })
)

// // Rules Configuration
// base.module.rules.push({
//   test: /\.css$/,
//   loader: ExtractTextPlugin.extract({
//     use: [{ loader: 'css-loader?minimize=true' }, 'postcss-loader'],
//     fallback: 'style-loader'
//   })
// })

module.exports = base
