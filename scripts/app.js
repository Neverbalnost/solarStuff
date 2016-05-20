var solar = angular.module('solar', ['ngRoute', 'solarController']);

solar.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/mass', {
        templateUrl: 'mass.html'
      }).
      when('/diameter', {
        templateUrl: 'diameter.html'
      }).
      when('/density', {
        templateUrl: 'density.html'
      }).
      when('/gravity', {
        templateUrl: 'gravity.html'
      }).
      when('/temperature', {
        templateUrl: 'temperature.html'
      }).    
      otherwise({
        redirectTo: '/mass'
      });
  }]);