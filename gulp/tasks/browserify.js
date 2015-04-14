var Gulp = require('gulp');
var Browserify = require('gulp-browserify');
var Rename = require('gulp-rename');
var HandleErrors = require('../util/handleErrors');
var Config = require('../config').browserify;

Gulp.task('browserify', function() {

    return Gulp.src(Config.src)
        .pipe(Browserify(Config.browserify))
        .on('error', HandleErrors)
        .pipe(Rename(Config.outputName))
        .pipe(Gulp.dest(Config.dest));
});
