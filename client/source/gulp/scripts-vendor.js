/**
 * Scripts vendor task.
 * Processes dependencies for the application
 *
 * @param  {Object} gulp
 * @param  {Object} plugins
 * @param  {Object} config
 * @return {Object}
 */
module.exports = function (gulp, plugins, config) {
  return function () {
    gulp
      .src(config.source.scripts.vendor)
      .pipe(plugins.concat(config.build.scripts.vendor.fileName))
      .pipe(plugins.if(config.ENVIRONMENT === config.PRODUCTION_ENVIRONMENT, plugins.uglify()))
      .pipe(gulp.dest(config.build.scripts.directory));
  };
};
