let gulp = require('gulp');
let vinylPaths = require('vinyl-paths');
let del = require('del');

/**
 * Generic gulp clean task
 * @param {string|string[]} path
 */
module.exports = function clean(path) {
    return () => gulp
        .src(path)
        .pipe(vinylPaths(paths => del(paths)))
};
