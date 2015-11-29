var gulp = require('gulp'),
    rev = require('gulp-rev'),
    revNapkin = require('gulp-rev-napkin');

gulp.task('revisioning', ['build'], function () {
    return gulp.src('dist/assets/*.*')
        .pipe(rev())
        .pipe(gulp.dest('dist/assets'))
        .pipe(revNapkin({verbose: false}))
        .pipe(rev.manifest())
        .pipe(gulp.dest('dist/assets'));
});