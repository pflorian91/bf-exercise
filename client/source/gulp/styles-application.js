/**
 * Application styles task.
 * Processes application styles from .sass to .css
 * [TODO]
 * 		- what it does?
 * 		- validation
 * 		- etc..
 *
 * @param  {Object} gulp
 * @param  {Object} plugins
 * @param  {Object} config
 * @return {Object}
 */
module.exports = function(gulp, plugins, config) {
    return function() {
        gulp
            .src(config.source.styles.application)
            .pipe(plugins.sass())
            .on('error', plugins.util.log)
            .pipe(plugins.concat(config.build.styles.application.fileName))
            .pipe(plugins.if(config.ENVIRONMENT === config.PRODUCTION_ENVIRONMENT, plugins.minifyCss()))
            .pipe(gulp.dest(config.build.styles.directory));
    };
};
