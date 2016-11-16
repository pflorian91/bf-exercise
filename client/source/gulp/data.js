/**
 * Processes data
 *
 * @param  {Object} gulp
 * @param  {Object} plugins
 * @param  {Object} config
 * @return {Object}
 */
module.exports = function(gulp, plugins, config) {
    return function() {
        gulp
            .src(config.source.data.files)
            .pipe(gulp.dest(config.build.data.directory));
    };
};
