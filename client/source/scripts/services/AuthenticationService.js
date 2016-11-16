/**
 * AuthenticationService created on 8/2/16 11:58 PM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */
(function () {
    "use strict"; // jshint ignore:line

    angular
        .module('BFExercise')
        .factory('AuthenticationService', ['$http', '$q', 'UserDataService', function ($http, $q, UserDataService) {

            function signup(credentials) {
                var deferred = $q.defer();

                $http
                    .post('http://127.0.0.1:8007/api/signup', credentials)
                    .then(function (response) {
                        if (response.data.success) {
                            deferred.resolve(response.data);
                        } else {
                            deferred.reject(response);
                        }
                    }, function (response) {
                        deferred.reject(response);
                    });

                return deferred.promise;
            }

            function authenticate(credentials) {
                var deferred = $q.defer();

                $http
                    .post('http://127.0.0.1:8007/api/authenticate', credentials)
                    .then(function (response) {

                        if (response.data.success) {
                            UserDataService.storeUser(response.data.token, credentials.name);
                            deferred.resolve(response.data);
                        } else {
                            deferred.reject(response);
                        }

                    }, function (response) {
                        deferred.reject(response);
                    });

                return deferred.promise;
            }

            return {
                authenticate: authenticate,
                signup: signup
            };

        }]);

})();
