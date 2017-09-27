const path = require('path')
const HappyPack = require('happypack')

module.exports = {
  entry: {},
  output: {
    path: path.join(__dirname, '../lib'),
    filename: 'index.js',
    publicPath: './'
  },
  resolve: {
    extensions: ['.js', '.css', '.json'],
    alias: {
      '~': path.join(__dirname, '../src'),
      '~packages': path.join(__dirname, '../packages')
    }
  },
  performance: {},
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['happypack/loader?id=babel', 'svelte-loader'],
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
    new HappyPack({
      id: 'babel',
      loaders: ['babel-loader'],
      threads: 4
    })
  ]
}
