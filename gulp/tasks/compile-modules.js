/**
 * Created by elporfirio on 10/09/16.
 */
var gulp = require('gulp'),
    config = require('../config.js'),
    debug = require('gulp-debug'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    htmlmin = require('gulp-htmlmin'),
    merge = require('merge-stream');


gulp.task('compile-modules', function(){
    var js = gulp.src(config.paths.modules.js.source)
        .pipe(debug({verbose: true}))
        .pipe(gulp.dest(config.paths.modules.js.destiny));

    var html = gulp.src(config.paths.modules.views.html)
        .pipe(debug({verbose: true}))
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(config.paths.modules.views.destiny));

    return merge(js,html);
});

gulp.task('compile-modules:dist', function(){
    var js = gulp.src(config.paths.modules.js.source)
        .pipe(debug({verbose: true}))
        .pipe(uglify())
        .pipe(gulp.dest(config.paths.modules.js.dist));

    var html = gulp.src(config.paths.modules.views.html)
        .pipe(debug({verbose: true}))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(config.paths.modules.views.dist));

    return merge(js,html);
});