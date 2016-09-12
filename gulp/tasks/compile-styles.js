/**
 * Created by elporfirio on 10/09/16.
 */
var gulp = require('gulp'),
    config = require('../config.js'),
    sass = require('gulp-sass'),
    debug = require('gulp-debug'),
    cleancss = require('gulp-clean-css');

gulp.task('compile-styles', function(){
    return gulp.src(config.paths.styles.main)
        .pipe(debug({verbose: true}))
        .pipe(sass({
            includePaths: [config.paths.bootstrap.source, config.paths.styles.source],
            errLogToConsole: true
        }))
        .pipe(gulp.dest(config.paths.styles.destiny));
});

gulp.task('compile-styles:dist', function(){
    return gulp.src(config.paths.styles.main)
        .pipe(debug({verbose: true}))
        .pipe(sass({
            includePaths: [config.paths.bootstrap.source, config.paths.styles.source],
            errLogToConsole: true
        }))
        .pipe(cleancss())
        .pipe(gulp.dest(config.paths.styles.dist));
});