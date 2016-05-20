var solar = angular.module('solar', ['ngRoute', 'solarController']);

solar.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/mass', {
        templateUrl: 'mass.html'
      }).
      otherwise({
        redirectTo: '/mass'
      });
  }]);