var solar = angular.module('solar', []);

solar.controller('diagram', function ($scope, $http) {
    $http({ method: 'GET', url: 'data.json'})
        .then(function successCallback(response) {
            $scope.planets = response.data;
            $scope.names = $scope.planets.col[0].v;
        }, function errorCallback(response) {
            console.log(response);
        });
    
    $scope.planetIncludes = [];
    
    $scope.includePlanet = function(planet) {
        var i = $.inArray(planet, $scope.planetIncludes);
        if (i > -1) {
            $scope.planetIncludes.splice(i, 1);
        } else {
            $scope.planetIncludes.push(planet);
        }
    }
    
    $scope.planetFilter = function(planet) {
        if ($scope.colourIncludes.length > 0) {
            if ($.inArray(planet, $scope.planetIncludes) < 0)
                return;
        }
        
        return planet;
    }
    
})