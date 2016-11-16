var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    config = require('./source/gulp/config'),
    sourcesPath = './source/gulp/';

gulp.task('scripts-vendor', getTask('scripts-vendor'));
gulp.task('scripts-application', getTask('scripts-application'));

gulp.task('styles-vendor', getTask('styles-vendor'));
gulp.task('styles-application', getTask('styles-application'));

gulp.task('views-index', getTask('views-index'));
gulp.task('views-partials', getTask('views-partials'));

gulp.task('miscellaneous', getTask('miscellaneous'));
gulp.task('fonts', getTask('fonts'));
gulp.task('images', getTask('images'));
gulp.task('icons', getTask('icons'));
gulp.task('data', getTask('data'));

gulp.task('watch', getTask('watch'));

/**
 * The default Gulp task
 * Run in your shell > gulp
 * @param  {String} 'default' The default task in Gulp
 * @param  {Array}            List of tasks to be run be default
 */
gulp.task('default', [
    'scripts-vendor',
    'scripts-application',
    'styles-vendor',
    'styles-application',
    'views-index',
    'views-partials',
    'miscellaneous',
    'fonts',
    'images',
    'icons',
    'data'
]);

/**
 * Retrieves a file containing the gulp task
 * @param  {String} taskName The fileName of the task
 * @return {Function}        Node module containing the executable function
 */
function getTask(taskName) {
    return require(sourcesPath + taskName)(gulp, plugins, config);
}
