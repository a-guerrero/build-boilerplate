let gulp = require('gulp');
let webpack = require('webpack');
let gulpWebpack = require('gulp-webpack');
let webpackConfig = require('./webpack.config.js');

gulp.task('scripts', () =>
    gulp
        .src('app/scripts/main.js')
        .pipe(gulpWebpack(webpackConfig, webpack))
        .pipe(gulp.dest('dist/scripts'))
);
