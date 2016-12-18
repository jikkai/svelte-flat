'use strict'

module.exports = {
  port: '4000',
  title: 'examples',
  vendor: [
    'react',
    'react-dom',
    'react-router'
  ],
  postcss: [
    require('postcss-cssnext')({
      browsers: ['last 2 versions', 'ie > 8']
    })
  ],
  cssModules: false
}
