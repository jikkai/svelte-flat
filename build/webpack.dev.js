const webpack = require('webpack')

const base = require('./webpack.base')
const config = require('./config')

base.entry.index = './example/index.js'
base.devtool = 'eval-source-map'
base.output.publicPath = '/assets/'
base.performance.hints = false

// Plugins Configuration
base.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
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
  use: [
    'style-loader',
    { loader: 'css-loader', options: { importLoaders: 1 } },
    'postcss-loader'
  ]
})

module.exports = base
