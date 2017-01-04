export default {
  entry: './src/index.js',
  plugins: [
    require('rollup-plugin-svelte')(),
    require('rollup-plugin-uglify')(),
    require('rollup-plugin-babel')({
      exclude: 'node_modules/**'
    })
  ],
  format: 'umd',
  moduleName: 'Slider',
  dest: './lib/index.js'
}
