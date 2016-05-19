var solar = angular.module('solar', []);

solar.controller('diagram', function ($scope, $http) {
    $http({ method: 'GET', url: 'data.json'})
            .then(function successCallback(response) {
                $scope.planets = response.data;
                $scope.names = $scope.planets[0]["v"]
              }, function errorCallback(response) {
                  console.log(response);
              });
    $scope.names = $scope.planets[0]["v"];
})