var solarController = angular.module('solarController', []);


solarController.controller('diagram', function ($scope, $http) {
    $http({ method: 'GET', url: 'data.json'})
        .then(function successCallback(response) {
            $scope.planets = []
            for (var i = 0; i< response.data.col[0].v.length; i++) {
                var planet = {
                    name: {value: response.data.col[0].v[i], label: response.data.col[0].col.label},
                    mass: {value: response.data.col[1].v[i], label: response.data.col[1].col.label},
                    diameter: {value: parseInt(response.data.col[2].v[i].replace(/,/g, ""), 10)/1000, label: response.data.col[2].col.label},
                    density: {value: parseInt(response.data.col[3].v[i].replace(/,/g, ""), 10)/100, label: response.data.col[3].col.label},
                    gravity: {value: response.data.col[4].v[i], label: response.data.col[4].col.label},
                    temperature: {value: response.data.col[5].v[i], label: response.data.col[5].col.label},
                }
                $scope.planets.push(planet);
            }
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
        if ($scope.planetIncludes.length > 0)  {
            if ($.inArray(planet.name.value, $scope.planetIncludes) < 0)
                return;
        }
        
        return planet;
    }
    
})