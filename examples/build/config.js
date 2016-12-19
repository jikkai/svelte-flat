'use strict'

module.exports = {
  port: '8080',
  title: 'Svelte Flat',
  vendor: [
    'react',
    'react-dom',
    'react-router'
  ],
  postcss: [
    require('postcss-cssnext')({
      browsers: ['last 2 versions', 'ie > 8']
    }),
    require('postcss-import')
  ],
  cssModules: false
}
