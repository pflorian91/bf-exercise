/**
 * TodosService created on 8/3/16 12:58 AM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */
(function () {
    "use strict"; // jshint ignore:line

    angular
        .module('BFExercise')
        .factory('TodosService', ['$http', '$q', 'UserDataService', function ($http, $q, UserDataService) {

            function setHeaders() {
                var user = UserDataService.getUser();
                if (user) {
                    $http.defaults.headers.common['Authorization'] = user.token;
                } else {
                    $http.defaults.headers.common['Authorization'] = null;
                }
            }


            function getAll() {
                setHeaders();
                var deferred = $q.defer();

                $http
                    .get('http://127.0.0.1:8007/api/todos')
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.reject(response);
                    });

                return deferred.promise;
            }

            function create(text) {
                setHeaders();
                var deferred = $q.defer();

                $http
                    .post('http://127.0.0.1:8007/api/todos', {text: text})
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.reject(response);
                    });

                return deferred.promise;
            }

            function deleteOne(todo_id) {
                setHeaders();
                var deferred = $q.defer();

                $http
                    .delete('http://127.0.0.1:8007/api/todos/' + todo_id)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.reject(response);
                    });

                return deferred.promise;
            }

            return {
                getAll: getAll,
                create: create,
                delete: deleteOne
            };

        }]);

})();
