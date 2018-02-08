var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass',function() {
  return gulp.src('./scss/**/*.scss')/* Pipe in the stylesheet */
             .pipe(sass()) /* Convert Sass to CSS */
             .pipe(gulp.dest('./css'))
});
gulp.task('default',function(){
  gulp.watch('./scss/**/*.scss',['sass'] );
});