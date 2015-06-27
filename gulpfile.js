var gulp = require('gulp');
var jshint = require('gulp-jshint');
 
gulp.task('lint', function() {
  return gulp.src('./15.js')
    .pipe(jshint())
    .pipe(jshint.reporter('gulp-jshint-file-reporter', {
      filename :'./jshint-output.log'
    }));
});

 gulp.task('watch', function() {


      gulp.watch('./15.js', function() {
        gulp.run('lint');
 });
});      