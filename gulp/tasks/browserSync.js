var Gulp = require('gulp');
var BrowserSync = require('browser-sync');
var Config = require('../config').browserSync;

Gulp.task('browserSync', ['build'], function() {
    BrowserSync(Config);
});
