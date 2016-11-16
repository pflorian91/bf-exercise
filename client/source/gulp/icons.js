/**
 * icons Gulp task created on 3/30/16 8:18 PM.
 *
 * @description Processes icons
 * @author Florian Popa <florian@webgenerals.com>
 */
module.exports = function (gulp, plugins, config) {
    "use strict"; // jshint ignore:line
    return function () {
        gulp
            .src(config.source.images.icons.files)
            .pipe(gulp.dest(config.build.icons.directory));
    };
};
