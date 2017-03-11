/* Matthew's MidTerm Assignment for Web Applications - Winter 2017
*
Requirements:
- the app will list all todo items 
X- completed items should be grouped at the bottom of the list and styled in a way that indicates their state
- a user should see the description and due date for each item
- each todo will have the following properties:
- description
- due date
- completed flag
- user can create, delete & edit items
X- Use Bootstrap for the UI 
- Local Storage is to be used to persist items from session to session ( including edits )
* ToDO: Look into CUID
*************/
var app = angular.module('mattTodo', ['ui.router'] );
//app.$scope.appName = 'Matthew\'s ToDo-ly Awesome List';
//app.constant('appData',{
//    name:  'Matthew\'s ToDo-ly Awesome List'
//    });
//app.value()

app.config(
   function($stateProvider, $urlRouterProvider){
       $urlRouterProvider.otherwise('/tasks');
     var states = [
       {
           name: 'tasks',
           url: '/tasks',
           component: 'tasks'
//           ,
//           resolve: {
//                tasks: function(TodoService) {
//                    return TodoService.getTasks();
//                }
//            }
           
       }

       
     ]
     // Loop over the state definitions and register them
      states.forEach(function(state) {
        $stateProvider.state(state);
      });
   }
);

