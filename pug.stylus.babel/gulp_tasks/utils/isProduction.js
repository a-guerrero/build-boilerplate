let minimist = require('minimist');

module.exports = function isProduction() {
    let argv = minimist(process.argv.slice(2));
    return !!(argv.p || argv.production);
}
