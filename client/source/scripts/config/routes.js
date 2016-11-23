/**
 * routes created on 8/2/16 11:07 PM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */
(function () {
    "use strict"; // jshint ignore:line

    angular
        .module('BFExercise')
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

            $routeProvider
                .when('/', {
                    templateUrl: 'views/partials/index.html',
                    controller:  'IndexController'
                })
                .otherwise({
                    redirectTo: '/'
                });

            $locationProvider.html5Mode(true);
        }]);

})();
