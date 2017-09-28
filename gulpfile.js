const gulp = require('gulp')
const postcss = require('gulp-postcss')

const saladrc = require('./postcss.config').plugins['postcss-salad']

gulp.task('css', _ => gulp
  .src('./packages/theme-default/**/*.css')
  .pipe(postcss([
    require('postcss-salad')(saladrc),
    require('postcss-color-mix')
  ]))
  .pipe(gulp.dest('./lib/theme-default'))
)
