var Gulp = require('gulp');
var Config = require('../config').markup;

Gulp.task('markup', function() {
    return Gulp.src(Config.src)
        .pipe(Gulp.dest(Config.dest));
});
