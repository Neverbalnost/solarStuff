var solar = angular.module('solar', ['ngRoute', 'solarController']);

solar.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/mass', {
        templateUrl: 'partials/mass.html'
      }).
      otherwise({
        redirectTo: '/mass'
      });
  }]);