/**
 * Created by elporfirio on 10/09/16.
 */
var gulp = require('gulp'),
    config = require('../config.js'),
    debug = require('gulp-debug'),
    uglify = require('gulp-uglify'),
    merge = require('merge-stream'),
    rename = require('gulp-rename'),
    htmlmin = require('gulp-htmlmin');

gulp.task('compile-components', function(){
    var js = gulp.src(config.paths.components.modules.source)
        .pipe(debug({verbose: true}))
        .pipe(gulp.dest(config.paths.components.modules.destiny));

    var html = gulp.src(config.paths.components.views.source)
        .pipe(debug({verbose: true}))
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(config.paths.components.views.destiny));

    return merge(js,html);
});

gulp.task('compile-components:dist', function(){
    var js = gulp.src(config.paths.components.modules.source)
        .pipe(debug({verbose: true}))
        .pipe(uglify())
        .pipe(gulp.dest(config.paths.components.modules.dist));

    var html = gulp.src(config.paths.components.views.source)
        .pipe(debug({verbose: true}))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(config.paths.components.views.dist));

    return merge(js,html);
});