/**
 * IndexController created on 8/2/16 11:33 PM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */
(function () {
    "use strict"; // jshint ignore:line

    angular
        .module('BFExercise')
        .controller('IndexController', ['$scope', 'UserDataService', 'TodosService', function ($scope, UserDataService, TodosService) {

            $scope.user = UserDataService.getUser();
            $scope.newItem = null;
            $scope.todos = [];

            $scope.deleteItem = function (todo_id) {
                TodosService
                    .delete(todo_id)
                    .then(function (todos) {
                        $scope.todos = todos;
                    });
            };

            $scope.createItem = function (text) {
                TodosService
                    .create(text)
                    .then(function (todos) {
                        $scope.todos = todos;
                        $scope.newItem = '';
                    });
            };

            if ($scope.user) {
                TodosService
                    .getAll()
                    .then(function (todos) {
                        $scope.todos = todos;
                    }, function () {
                        $scope.todos = [];
                    });
            }

        }]);

})();
