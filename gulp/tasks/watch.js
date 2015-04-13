var Gulp = require('gulp');
var Config = require('../config')

Gulp.task('watch', ['setWatch', 'browserSync'], function() {
    Gulp.watch(Config.less.watch, ['less']);
    Gulp.watch(Config.markup.src, ['markup']);
});
