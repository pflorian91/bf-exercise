/**
 * LogoutController created on 8/2/16 11:44 PM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */
(function () {
    "use strict"; // jshint ignore:line

    angular
        .module('BFExercise')
        .controller('LogoutController', ['UserDataService', '$location', function (UserDataService, $location) {

            UserDataService.clearUser();

            $location.path('/');

        }]);

})();
