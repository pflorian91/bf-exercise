/**
 * Styles vendor task.
 * Processes style dependencies for the application
 *
 * @param  {Object} gulp
 * @param  {Object} plugins
 * @param  {Object} config
 * @return {Object}
 */
module.exports = function (gulp, plugins, config) {
  return function () {
    gulp
      .src(config.source.styles.vendor)
      .pipe(plugins.concat(config.build.styles.vendor.fileName))
      .pipe(plugins.if(config.ENVIRONMENT === config.PRODUCTION_ENVIRONMENT, plugins.minifyCss()))
      .pipe(gulp.dest(config.build.styles.directory));
  };
};
