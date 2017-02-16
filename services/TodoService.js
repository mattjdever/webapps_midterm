angular.module('mattTodo').service('TodosService', function($http,$filter) {
    var service = {
      getTasks: function() {
        //return $http.get('data/shows.json');
          return $http.get('data/todos.json', { cache: true }).then(function(resp) {
            return resp.data;
          });
      },
      getTask: function(taskId) {
        function taskMatchesParam(task) {
            return task.id === taskId;
        }
      
        return service.getTasks().then(function (tasks) {
            return tasks.find(taskMatchesParam)
        });
      }
    }
  return service;
});