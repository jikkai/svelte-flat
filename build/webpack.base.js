const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HappyPack = require('happypack')

const config = require('./config')

module.exports = {
  entry: {},
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: './'
  },
  resolve: {
    extensions: ['.js', '.css', '.json'],
    alias: {
      '~': path.join(__dirname, '../src')
    }
  },
  performance: {},
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'svelte-loader',
        exclude: [/build/]
      },
      {
        test: /\.js$/,
        use: 'happypack/loader?id=babel',
        exclude: [/node_modules/]
      },
      {
        test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: 'file-loader?limit=8192'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: config.title,
      template: path.resolve(__dirname, './index.html'),
      favicon: path.resolve(__dirname, './logo.png'),
      filename: './index.html'
    }),
    new HappyPack({
      id: 'babel',
      loaders: ['babel-loader'],
      threads: 4
    })
  ]
}
