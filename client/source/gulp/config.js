/**
 * Configuration file for Gulp plugins
 */

/**
 * Returns the path the source resource
 *
 * @param  {String} pattern Any pattern for a file
 * @return {String}
 */
function getSource(pattern) {
    return sourceFilesPath + pattern;
}

/**
 * Returns the path to the build resource
 *
 * @param  {String} pattern Any pattern for a file
 * @return {String}
 */
function getBuild(pattern) {
    return buildFilesPath + pattern;
}

/**
 * Returns the path to the vendor resources
 *
 * @param  {String} pattern Any pattern for a file
 * @return {String}         The path to bower dependencies
 */
function getVendor(pattern) {
    return vendorFilesPath + pattern;
}

function getTest(pattern) {
    "use strict";
    return testFilesPath + pattern;
}

const DEVELOPMENT_ENVIRONMENT = 'development',
      PRODUCTION_ENVIRONMENT  = 'production',
      HTML_NO_FOLLOW_TAG      = '<meta name="robots" content="noindex,nofollow"/>',
      GOOGLE_ANALYTICS_SCRIPT = "<script>" +
          "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){" +
          "(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o)," +
          "m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)" +
          "})(window,document,'script','//www.google-analytics.com/analytics.js','ga');" +
          "ga('create', 'UA-63821792-1', 'auto');" +
          "ga('send', 'pageview');" +
          "</script>",
      DEVELOPMENT_ROBOTS      = 'User-agent: * \nDisallow: /',
      PRODUCTION_ROBOTS       = 'User-agent: *',
      ROBOTS_PATTERN          = '<!--rules-->',
      BASE_CSS_PATTERN        = '<!--base-css-->',
      APP_CSS_PATTERN         = '<!--app-css-->',
      BASE_JS_PATTERN         = '<!--base-js-->',
      APP_JS_PATTERN          = '<!--app-js-->';

var sourceFilesPath = 'source/',
    buildFilesPath  = './build/',
    vendorFilesPath = './bower_components/',
    testFilesPath   = './test/unit/',
    minimist        = require('minimist'),
    arguments       = minimist(process.argv.slice(2)),
    gulpUtil        = require('gulp-util'),
    pngQuant        = require('imagemin-pngquant'),
    randomString    = require('randomstring'),
    cacheToken      = randomString.generate({
        length:  6,
        charset: 'alphanumeric'
    }),
    config          = {
        ENVIRONMENT:             arguments.env || DEVELOPMENT_ENVIRONMENT,
        DEVELOPMENT_ENVIRONMENT: DEVELOPMENT_ENVIRONMENT,
        PRODUCTION_ENVIRONMENT:  PRODUCTION_ENVIRONMENT,
        productionSettings:      {
            htmlNoFollowTagSearchString:  HTML_NO_FOLLOW_TAG,
            htmlNoFollowTagReplaceString: '',
            googleAnalyticsPlaceholder:   '<!--google-analytics-->',
            googleAnalyticsScript:        GOOGLE_ANALYTICS_SCRIPT,
            robotsPattern:                ROBOTS_PATTERN,
            developmentRobots:            DEVELOPMENT_ROBOTS,
            productionRobots:             PRODUCTION_ROBOTS
        },
        cacheBusts:              {
            baseCssPattern: BASE_CSS_PATTERN,
            appCssPattern:  APP_CSS_PATTERN,
            baseJsPattern:  BASE_JS_PATTERN,
            appJsPattern:   APP_JS_PATTERN,
            baseCssTag:     '<link rel="stylesheet" href="css/base.css?v=' + cacheToken + '" />',
            appCssTag:      '<link rel="stylesheet" href="css/app.css?v=' + cacheToken + '" />',
            baseJsTag:      '<script src="js/base.js?v=' + cacheToken + '"></script>',
            appJsTag:       '<script src="js/app.js?v=' + cacheToken + '"></script>'
        },
        source:                  {
            scripts:       {
                vendor:      [
                    getVendor('jquery/dist/jquery.min.js'),
                    getVendor('bootstrap/dist/js/bootstrap.min.js'),
                    getVendor('angular/angular.min.js'),
                    getVendor('angular-sanitize/angular-sanitize.min.js'),
                    getVendor('angular-route/angular-route.min.js'),
                    getVendor('ngstorage/ngStorage.min.js'),
                ],
                application: [
                    getSource('scripts/init.js'),
                    getSource('scripts/**/*.js')
                ]
            },
            styles:        {
                vendor:      [
                    getVendor('bootstrap/dist/css/bootstrap.min.css')
                ],
                application: [
                    getSource('styles/*.scss'),
                    getSource('styles/**/*.scss')
                ]
            },
            views:         {
                watchList: [
                    getSource('views/*.html'),
                    getSource('views/**/*.html')
                ],
                partials:  [
                    getSource('views/*.html'),
                    getSource('views/**/*.html'),
                    '!' + getSource('views/index.html')
                ],
                index:     getSource('views/index.html')
            },
            images:        {
                files: [
                    getSource('images/*.{png,jpg,jpeg,gif}'),
                    getSource('images/**/*.{png,jpg,jpeg,gif}'),
                    '!' + getSource('images/*.{svg}'),
                    '!' + getSource('images/**/*.{svg}')
                ],
                icons: {
                    files: [
                        getSource('images/icons/*'),
                        getSource('images/icons/**/*')
                    ]
                }
            },
            fonts:         {
                files: [
                    getSource('fonts/**')
                ]
            },
            data:          {
                files: [
                    getSource('data/*.json'),
                    getSource('data/**/*.json')
                ]
            },
            miscellaneous: {
                files: [
                    getSource('robots.txt'),
                    getSource('favicon.ico')
                ]
            }
        },
        build:                   {
            scripts:       {
                directory:   getBuild('js/'),
                vendor:      {
                    fileName: 'base.js'
                },
                application: {
                    fileName: 'app.js'
                }
            },
            styles:        {
                directory:   getBuild('css/'),
                vendor:      {
                    fileName: 'base.css'
                },
                application: {
                    fileName: 'app.css'
                }
            },
            views:         {
                directory: getBuild('views'),
                index:     getBuild('')
            },
            images:        {
                directory: getBuild('img')
            },
            icons: {
                directory: getBuild('img/icons')
            },
            fonts:         {
                directory: getBuild('font')
            },
            data:          {
                directory: getBuild('data')
            },
            miscellaneous: {
                directory: getBuild('')
            }
        },
        plugins:                 {
            imageMin:   {
                progressive: true,
                use:         [pngQuant()]
            },
            htmlHint:   { // see https://github.com/yaniswang/HTMLHint/wiki/Rules
                "doctype-first":        false,
                "tagname-lowercase":    true,
                "attr-lowercase":       true,
                "attr-no-duplication":  true,
                "tag-self-close":       true,
                "id-unique":            true,
                "style-disabled":       true,
                "id-class-ad-disabled": true
            },
            minifyHtml: {
                empty:  true,
                quotes: true
            }
        },
        tests:                   {
            files: [
                getVendor('angular-mocks/angular-mocks.js'),
                getTest('*.js'),
                getTest('**/*.js')
            ]
        }
    };

gulpUtil.log('Enviroment: ' + config.ENVIRONMENT);

module.exports = config;
