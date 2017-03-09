let gulp = require('gulp');

// Task to clean dist scripts folder contents
let clean = require('./utils/clean.js')
gulp.task('clean:scripts', clean('dist/scripts'))

// Build scripts using webpack
// check: ../webpack.config.js
let webpack = require('webpack');
let gulpWebpack = require('gulp-webpack');
let webpackConfig = require('../webpack.config.js');
gulp.task('build:scripts', () =>
    gulp
        .src('app/scripts/**/*.js')
        .pipe(gulpWebpack(webpackConfig, webpack))
        .pipe(gulp.dest('dist/scripts'))
);

// Scripts: clean then build
let runSequence = require('run-sequence');
gulp.task('scripts', callback => {
    runSequence('clean:scripts', 'build:scripts', callback);
});

// Watch
let watch = require('./utils/watch.js')
gulp.task('watch:scripts', ['scripts'], watch('app/scripts/**/*.js', ['scripts']));
