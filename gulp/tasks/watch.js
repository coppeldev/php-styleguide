var Gulp = require('gulp');
var Config = require('../config')

Gulp.task('watch', ['setWatch', 'browserSync'], function() {
    Gulp.watch(['src/app/**/*.jsx'], function () {
		Gulp.start('browserify');
	});
    Gulp.watch(Config.less.watch, ['less']);
    Gulp.watch(Config.markup.src, ['markup']);
});
