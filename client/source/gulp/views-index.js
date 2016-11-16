/**
 * Process index views
 *
 * @param  {Object} gulp
 * @param  {Object} plugins
 * @param  {Object} config
 * @return {Object}
 */
module.exports = function (gulp, plugins, config) {
    return function () {
        gulp
            .src(config.source.views.index)
            .pipe(plugins.replace(config.cacheBusts.baseCssPattern, config.cacheBusts.baseCssTag))
            .pipe(plugins.replace(config.cacheBusts.appCssPattern, config.cacheBusts.appCssTag))

            .pipe(plugins.replace(config.cacheBusts.baseJsPattern, config.cacheBusts.baseJsTag))
            .pipe(plugins.replace(config.cacheBusts.appJsPattern, config.cacheBusts.appJsTag))

            .pipe(plugins.if(config.ENVIRONMENT === config.PRODUCTION_ENVIRONMENT, plugins.replace(config.productionSettings.htmlNoFollowTagSearchString, config.productionSettings.htmlNoFollowTagReplaceString)))
            .pipe(plugins.if(config.ENVIRONMENT === config.PRODUCTION_ENVIRONMENT, plugins.replace(config.productionSettings.googleAnalyticsPlaceholder, config.productionSettings.googleAnalyticsScript)))
            .pipe(plugins.if(config.ENVIRONMENT === config.PRODUCTION_ENVIRONMENT, plugins.minifyHtml(config.plugins.minifyHtml)))
            .pipe(gulp.dest(config.build.views.index));
    };
};
