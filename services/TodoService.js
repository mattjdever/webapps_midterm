angular.module('mattTodo').service('TodoService', function($http,$filter) {
    var service = {
      getTasks: function() {
        //return $http.get('data/shows.json');
          return $http.get('data/todos.json', { cache: true }).then(function(resp) {
              console.log(resp.data);
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
      },
      getTotalTasks: function() {
          return service.getTasks().then(function (tasks){
              return tasks.length;
          })
      }, 
        addTask: function() {
            
//$scope.newTodo.id = cuid()
//$scope.todoList.push($scope.newTodo)
            return 1;
            
        }
        
    }
  return service;
});
