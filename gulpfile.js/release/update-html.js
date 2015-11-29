var gulp = require('gulp'),
    revReplace = require('gulp-rev-replace');

gulp.task('update-html', ['revisioning'], function(){
  var manifest = gulp.src("dist/assets/rev-manifest.json")
  return gulp.src("dist/*.html")
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest("dist"))
})