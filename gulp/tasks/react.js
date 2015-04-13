var Gulp = require('gulp');
var React = require('gulp-react');
var Config = require('../config').react;

Gulp.task('react', function() {

    return Gulp.src(Config.src)
        .pipe(React())
        .pipe(Gulp.dest(Config.dest));
});
