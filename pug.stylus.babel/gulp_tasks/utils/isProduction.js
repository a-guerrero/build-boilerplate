let minimist = require('minimist');

/**
 * Checks if production flag was passed
 * @returns {boolean}
 */
module.exports = function isProduction() {
    let argv = minimist(process.argv.slice(2));
    return !!(argv.p || argv.production);
}
