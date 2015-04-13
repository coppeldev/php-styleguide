var Gulp = require('gulp');
var Browserify = require('gulp-browserify');
//var Watchify = require('watchify');
var Rename = require('gulp-rename');
//var Babelify = require('babelify');
//var BundleLogger = require('../util/bundleLogger');
var HandleErrors = require('../util/handleErrors');
//var Source = require('vinyl-source-stream');
var Config = require('../config').browserify;

Gulp.task('browserify', function() {

    return Gulp.src(Config.src)
        .pipe(Browserify(Config.browserify))
        .on('error', HandleErrors)
        .pipe(Rename(Config.outputName))
        .pipe(Gulp.dest(Config.dest));
});
