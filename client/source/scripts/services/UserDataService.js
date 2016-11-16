/**
 * UserDataService created on 8/3/16 12:03 AM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */
(function () {
    "use strict"; // jshint ignore:line

    angular
        .module('BFExercise')
        .factory('UserDataService', ['$localStorage', '$http', function ($localStorage, $http) {

            function getUser() {
                if ($localStorage.token !== null && $localStorage.name) {
                    return {
                        token: $localStorage.token,
                        name:  $localStorage.name
                    };
                } else {
                    return false;
                }
            }

            /**
             *
             * @param token
             * @param name
             */
            function storeUser(token, name) {
                $localStorage.token = token;
                $localStorage.name = name;
            }

            function clearUser() {
                $localStorage.token = null;
                $localStorage.name = null;
            }

            return {
                storeUser: storeUser,
                clearUser: clearUser,
                getUser:   getUser
            };

        }]);

})();
