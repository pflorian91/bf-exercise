/**
 * Process partial views
 *
 * @param  {Object} gulp
 * @param  {Object} plugins
 * @param  {Object} config
 * @return {Object}
 */
module.exports = function (gulp, plugins, config) {
    return function () {
        gulp
            .src(config.source.views.partials)
            .pipe(plugins.if(config.ENVIRONMENT === config.PRODUCTION_ENVIRONMENT, plugins.minifyHtml(config.plugins.minifyHtml)))
            .pipe(gulp.dest(config.build.views.directory));
    };
};
