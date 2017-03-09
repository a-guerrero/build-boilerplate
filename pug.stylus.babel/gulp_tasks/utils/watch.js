let gulpWatch = require('gulp-watch');
let runSequence = require('run-sequence');

/**
 * Generic gulp watch task
 * @param {string|string[]} src
 * @param {string[]} tasksSequence
 */
module.exports = function watch(src, tasksSequence) {
    return () => gulpWatch(src, () => runSequence(...tasksSequence))
}
