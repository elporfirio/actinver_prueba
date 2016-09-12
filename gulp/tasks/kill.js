/**
 * Created by elporfirio on 10/09/16.
 */
var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    config = require('../config.js');

gulp.task('kill', function(){
    var stream = gulp.src(config.paths.devfolder).pipe(webserver());
    stream.emit('kill');
});

