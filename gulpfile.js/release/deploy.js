var gulp = require('gulp');
var config = require('../config');
var ghpages = require('gulp-gh-pages');

gulp.task('deploy', ['build'], function() {
  return gulp.src(config.tasks.deploy.baseDir)
    .pipe(ghpages(config.tasks.deploy));
});