/**
 * Processes images
 *
 * @param  {Object} gulp
 * @param  {Object} plugins
 * @param  {Object} config
 * @return {Object}
 */
module.exports = function(gulp, plugins, config) {
    return function() {
        gulp
            .src(config.source.images.files)
            .pipe(plugins.if(config.ENVIRONMENT === config.PRODUCTION_ENVIRONMENT, plugins.imagemin(config.plugins.imageMin)))
            .pipe(gulp.dest(config.build.images.directory));
    };
};
