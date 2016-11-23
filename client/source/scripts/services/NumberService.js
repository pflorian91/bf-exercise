/**
 * NumberService created on 11/23/16 7:43 PM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */
(function () {
    "use strict"; // jshint ignore:line

    angular
        .module('BFExercise')
        .factory('NumberService', ['$http', '$q', function ($http, $q) {

            function create(number, userCode) {
                var deferred = $q.defer();

                $http
                    .post('http://127.0.0.1:8007/api/number', {
                        number: number,
                        userCode: userCode
                    })
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.reject(response);
                    });

                return deferred.promise;
            }

            return {
                create: create
            };

        }]);

})();
