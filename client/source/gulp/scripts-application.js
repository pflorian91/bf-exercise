/**
 * Application scripts  task.
 * Processes application scripts
 *
 * @param  {Object} gulp
 * @param  {Object} plugins
 * @param  {Object} config
 * @return {Object}
 */
module.exports = function(gulp, plugins, config) {
    return function() {
        gulp
            .src(config.source.scripts.application)
            /*.pipe(plugins.babel({
                presets: ['es2015']
            }))*/
            .pipe(plugins.concat(config.build.scripts.application.fileName))
            .pipe(plugins.if(config.ENVIRONMENT === config.PRODUCTION_ENVIRONMENT, plugins.uglify()))
            .pipe(gulp.dest(config.build.scripts.directory));
    };
};
