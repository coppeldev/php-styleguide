var src = './src';
var dest = './build';

module.exports = {
    browserify: {
        // Enable source maps
        debug: true,
        extensions: [ '.jsx' ],
        // A separate bundle will be generated for each
        // bundle config in the list below
        bundleConfigs: [{
            entries: src + '/app/app.jsx',
            dest: dest,
            outputName: 'app.js'
        }]
    },
    browserSync: {
        server: {
            baseDir: [dest]
        },
        files: [
            dest + '/**'
        ]
    },
    less: {
        src: src + '/less/main.less',
        watch: [
            src + '/less/**'
        ],
        dest: dest
    },
    react: {
        src: src + '/app/**/*.jsx',
        dest: './.react'
    },
    markup: {
        src: src + '/www/**',
        dest: dest
    }
};
