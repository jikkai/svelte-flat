module.exports = {
  plugins: {
    'postcss-salad': {
      browsers: ['ie > 8', 'last 2 version'],
      features: {
        bem: {
          shortcuts: { component: 'c', modifier: 'm', descendent: 'd' },
          separators: { modifier: '--', descendent: '__' }
        }
      }
    }
  }
}
