var Gulp = require('gulp');
var Less = require('gulp-less');
var HandleErrors = require('../util/handleErrors');
var Config = require('../config').less;

Gulp.task('less', function() {

    return Gulp.src(Config.src)
        .pipe(Less())
        .on('error', HandleErrors)
        .pipe(Gulp.dest(Config.dest));
});
