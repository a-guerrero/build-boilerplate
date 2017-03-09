let gulp = require('gulp');
let runSequence = require('run-sequence');
let requireDir = require('require-dir');
let tasks = requireDir('./gulp_tasks');

gulp.task('build', callback => {
    runSequence('scripts', callback);
});
