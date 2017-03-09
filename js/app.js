/* Matthew's MidTerm Assignment for Web Applications - Winter 2017
*
Requirements:
- the app will list all todo items 
- completed items should be grouped at the bottom of the list and styled in a way that indicates their state
- a user should see the description and due date for each item
- each todo will have the following properties:
- description
- due date
- completed flag
- user can create, delete & edit items
- Use Bootstrap for the UI 
- Local Storage is to be used to persist items from session to session ( including edits )
*
*************/
var app = angular.module('mattTodo', ['ngRoute'] );
//app.$scope.appName = 'Matthew\'s ToDo-ly Awesome List';
app.constant('appData',{
 name:  'Matthew\'s ToDo-ly Awesome List'
    });
app.config(['$routeProvider',
   function($routeProvider){

       $routeProvider.
        when('/tasks', {
           templateUrl: 'templates/tasks-list.template.html',
           controller: 'TaskListController'
       }).
        when('/tasks/:task', {
           templateUrl: 'templates/show-detail.template.html',
           controller: 'ShowDetailController'
       }).
           otherwise({
                 template: '<h3>Please select a show from the sidebar.</h3>'
       });
   }
]);