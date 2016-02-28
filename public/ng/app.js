var app = angular.module('gerrymi', ['ui.router', 'angulartics', 'angulartics.google.analytics']);
app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('index', {
      url: "/",
      templateUrl: "public/ng/views/home.html",
      controller: 'projectCtrl'
    })
    .state('projects', {
      url: "/projects",
      templateUrl: "public/ng/views/project.html",
      controller: 'projectCtrl'
    })
    .state('project', {
      url: "/projects/:name",
      templateUrl: function(params){ return '/public/ng/views/projects/'+params.name+'.html' },
      controller: 'projectCtrl'
    })
    .state('g-project', {
      url: "/projects/g/:name",
      templateUrl: "public/ng/views/project.html",
      controller: 'projectCtrl'
    })
    .state('', {
      url: "/projects/g/:name",
      templateUrl: "public/ng/views/project.html",
      controller: 'projectCtrl'
    })
  $urlRouterProvider.otherwise("/")
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

