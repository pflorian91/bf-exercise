/**
 * LoginController created on 8/2/16 11:44 PM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */
(function () {
    "use strict"; // jshint ignore:line

    angular
        .module('BFExercise')
        .controller('LoginController', ['$scope', 'AuthenticationService', '$location', function ($scope, AuthenticationService, $location) {

            $scope.user = {
                name:     '',
                password: ''
            };
            $scope.showError = false;

            $scope.submit = function (form) {
                if (form.$valid) {
                    $scope.showError = false;

                    AuthenticationService
                        .authenticate($scope.user)
                        .then(function () {
                            $location.path('/');
                        }, function () {
                            $scope.showError = true;
                        });

                } else {
                    $scope.showError = true;
                }
            }
        }]);

})();
