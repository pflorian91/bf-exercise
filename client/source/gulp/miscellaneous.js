/**
 * Process miscellaneous files
 *
 * @param  {Object} gulp
 * @param  {Object} plugins
 * @param  {Object} config
 * @return {Object}
 */
module.exports = function (gulp, plugins, config) {
    return function () {
        gulp
            .src(config.source.miscellaneous.files)
            .pipe(plugins.if(function (file) {
                    if (config.ENVIRONMENT === config.PRODUCTION_ENVIRONMENT && file.path.indexOf('robots.txt') !== -1) {
                        return true;
                    }
                },
                plugins.replace(config.productionSettings.robotsPattern, config.productionSettings.productionRobots),
                plugins.replace(config.productionSettings.robotsPattern, config.productionSettings.developmentRobots)))
            .pipe(gulp.dest(config.build.miscellaneous.directory));
    };
};
