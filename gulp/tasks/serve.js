/**
 * Created by elporfirio on 10/09/16.
 */
var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    config = require('../config.js');

gulp.task('serve', ['enviroment', 'compile'], function(){
    gulp.watch(config.paths.styles.source, ['compile-styles']);
    gulp.watch(config.paths.libs.js, ['compile-libs']);
    gulp.watch(config.paths.libs.css, ['compile-libs']);
    gulp.watch(config.paths.modules.js.source, ['compile-modules']);
    gulp.watch(config.paths.modules.views.html, ['compile-modules']);
    gulp.watch(config.paths.images.source , ['compile-images']);
    gulp.watch(config.paths.components.modules.source, ['compile-components']);
    gulp.watch(config.paths.components.views.source, ['compile-components']);

    gulp.src(config.paths.devfolder)
        .pipe(webserver({
            livereload: true,
            //directoryListing: true,
            open: true,
            //fallback: 'index.html',
            // FIX PARA NODE en VAGRANT
            host: '0.0.0.0',
            port: 3000
        }));
});