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
    .state('ui-daily', {
      url: "/ui-daily",
      templateUrl: "public/ng/views/ui-daily.html",
      controller: 'projectCtrl'
    })
    .state('ui-daily.ui-component', {
      url: "/:ui_component",
      templateUrl: function(params){ return '/public/ng/views/ui-daily-components/'+params.ui_component+'.html' },
      controller: 'projectCtrl'
    })
    .state('ui-daily.ui-title', {
      url: "/:ui_component/:ui_title",
      templateUrl: function(params){ return '/public/ng/views/ui-daily-components/'+params.ui_component+'/'+params.uititle+'.html' },
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

