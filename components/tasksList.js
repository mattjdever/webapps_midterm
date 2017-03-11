angular.module('mattTodo').component('tasksList', {
    templateUrl: 'templates/tasks-list.template.html',
    controller: function TaskListController($scope,$http){
        console.log("Loading tasks...");
        $http.get('data/todos.json').success(function(data, status, headers, config) {
          $scope.tasks = data;
            $scope.totalTasks = data.length;
        }).
        error(function(data, status, headers, config) {
          // log error
            console.log("error");
        });
    }
});