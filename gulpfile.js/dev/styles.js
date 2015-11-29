var config = require('../config');
var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var path = require('path');

var paths = {
    src: path.join(config.root.src, config.tasks.styles.src),
    dest: path.join(config.root.dest, config.tasks.styles.dest)
}

gulp.task('styles', function(){
    return gulp.src(paths.src)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass.sync({
            outputStyle: 'expanded',
            precision: 10,
            includePaths: ['.']
        }).on('error', sass.logError))
        .pipe(autoprefixer(config.tasks.styles.autoprefixer))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.dest))
        .pipe(browserSync.reload({stream: true}));
});
