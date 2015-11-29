var config = require('../config');
var gulp = require('gulp');
var path = require('path');
var browserSync = require('browser-sync');

var paths = {
    styles: path.join(config.root.src, config.tasks.styles.src),
    html: path.join(config.root.src, config.tasks.html.src),
    scripts: path.join(config.root.src, config.tasks.scripts.src)
}

gulp.task('serve', ['styles'], function(){
    browserSync({
        notify: false,
        server: {
            baseDir: [config.root.src, config.root.dest],
            routes: {
                '/node_modules': 'node_modules'
            }
        }
    });

    gulp.watch(paths.styles, ['styles']);
    gulp.watch(paths.html).on('change', browserSync.reload);
    gulp.watch(paths.scripts).on('change', browserSync.reload);
});
