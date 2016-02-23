var app = angular.module('gerrymi', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider.
        when('/', {templateUrl: '/public/ng/views/home.html', controller: 'projectCtrl'}).
        when('/projects', {templateUrl: '/public/ng/views/projects.html', controller: 'projectCtrl'}).
        when('/projects/:name', {templateUrl: function(params){ return '/public/ng/views/projects' + params.name +'.html' }, controller: 'projectCtrl'}).
        when('/projects/:name', {templateUrl: '/public/ng/views/project.html', controller: 'projectCtrl'}).
        otherwise({ redirectTo: '/' });
});

app.directive('errSrc', function() {
  return {
    link: function(scope, element, attrs) {
      element.bind('error', function() {
        if (attrs.src != attrs.errSrc) {
          attrs.$set('class', 'hide');
        }
      });
    }
  }
});

