/**
 * IndexController created on 8/2/16 11:33 PM.
 *
 * @description Index controller for BF application
 * @author Florian Popa <florian@webgenerals.com>
 */
(function () {
    "use strict"; // jshint ignore:line

    var userCode = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);

    angular
        .module('BFExercise')
        .controller('IndexController', ['$scope', 'NumberService', function ($scope, NumberService) {

            $scope.data = {
                number: null,
                count: 0,
                left: 0,
                right: 10,
                numberToGuess: Math.floor((Math.random() * 10) + 1),
                showSuccess: false
            };

            /**
             * Sends number to API
             *
             * @param {Number} number
             */
            $scope.tryNumber = function (number) {
                if (number === null || typeof number !== 'number') {
                    return;
                }

                if (number == $scope.data.numberToGuess) {
                    $scope.data.showSuccess = true;
                    return;
                }

                if (3 <= $scope.data.count) {
                    return;
                }

                NumberService
                    .create(number, userCode)
                    .then(function (numbers) {
                        $scope.data.count = numbers.length;
                    });
            };

            console.log('If you want to cheat you can enter ' + $scope.data.numberToGuess + ' directly!');
        }]);

})();
