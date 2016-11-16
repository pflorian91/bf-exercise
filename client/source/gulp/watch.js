/**
 * A set of tasks to run when a file changes
 *
 * @param  {Object} gulp
 * @param  {Object} plugins
 * @param  {Object} config
 * @return {Object}
 */
module.exports = function (gulp, plugins, config) {
    return function () {
        gulp.watch(config.source.views.watchList, ['views-partials', 'views-index']);
        gulp.watch(config.source.scripts.application, ['scripts-application']);
        gulp.watch(config.source.styles.application, ['styles-application']);
        gulp.watch(config.source.images.files, ['images']);
        gulp.watch(config.source.images.icons.files, ['icons']);
        gulp.watch(config.source.fonts.files, ['fonts']);
        gulp.watch(config.source.data.files, ['data']);
        gulp.watch(config.source.miscellaneous.files, ['miscellaneous']);
    };
};
