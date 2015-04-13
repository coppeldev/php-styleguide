var src = './src';
var dest = './build';

module.exports = {
    browserify: {
        // Enable source maps
        src: src + '/app/app.jsx',
        dest: dest,
        outputName: 'app.js',
        browserify: {
            transform: ['babelify', 'reactify'],
            debug: true,
            extensions: [ '.jsx' ]
        }
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
