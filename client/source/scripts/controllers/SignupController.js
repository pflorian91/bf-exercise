/**
 * SignupController created on 8/3/16 12:51 AM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */
(function () {
    "use strict"; // jshint ignore:line

    angular
        .module('BFExercise')
        .controller('SignupController', ['$scope', 'AuthenticationService', '$location', function ($scope, AuthenticationService, $location) {

            $scope.user = {
                name:     '',
                password: ''
            };
            $scope.showError = false;

            $scope.submit = function (form) {
                if (form.$valid) {
                    $scope.showError = false;

                    AuthenticationService
                        .signup($scope.user)
                        .then(function () {
                            $location.path('/login');
                        }, function () {
                            $scope.showError = true;
                        });

                } else {
                    $scope.showError = true;
                }
            }

        }]);

})();
