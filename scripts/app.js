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
      otherwise({
        redirectTo: '/mass'
      });
  }]);