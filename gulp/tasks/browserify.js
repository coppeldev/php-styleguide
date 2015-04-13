var Gulp = require('gulp');
var Browserify = require('browserify');
var Watchify = require('watchify');
var Babelify = require('babelify');
var BundleLogger = require('../util/bundleLogger');
var HandleErrors = require('../util/handleErrors');
var Source = require('vinyl-source-stream');
var Config = require('../config').browserify;

Gulp.task('browserify', function(callback) {

    var bundleQueue = Config.bundleConfigs.length;

    var browserifyThis = function(bundleConfig) {

        var bundler = Browserify({
            cache: {},
            packageCache: {},
            fullPaths: false,
            entries: bundleConfig.entries,
            debug: Config.debug
        });

        /*
        bundler.transform({
            global: true
        }, 'uglifyify');

        bundler.plugin('minifyify', {
            map: './build/app.map.json',
            //output: './build/app.js'
        });
        //*/

        var bundle = function() {

            BundleLogger.start(bundleConfig.outputName);

            return bundler
                .transform(Babelify)
                .bundle()
                .on('error', HandleErrors)
                .pipe(Source(bundleConfig.outputName))
                .pipe(Gulp.dest(bundleConfig.dest))
                .on('end', reportFinished);
        };

        if (global.isWatching) {
            bundler = Watchify(bundler);
            bundler.on('update', bundle);
        }

        var reportFinished = function() {
            BundleLogger.end(bundleConfig.outputName);

            if(bundleQueue) {
                bundleQueue--;
                if(bundleQueue === 0) {
                    callback();
                }
            }
        };

        return bundle();
    };

    Config.bundleConfigs.forEach(browserifyThis);
});
