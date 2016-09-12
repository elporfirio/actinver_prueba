/**
 * Created by elporfirio on 10/09/16.
 */

var gulp = require('gulp'),
    del = require('del'),
    config = require('../config.js');

gulp.task('clean', function () {
    return del([
        config.paths.devfolder
    ]);
});

gulp.task('clean:dist', function () {
    return del([
        config.paths.distfolder
    ]);
});