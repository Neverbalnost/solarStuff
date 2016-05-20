var solarController = angular.module('solarController', []);


solarController.controller('diagram', function ($scope, $http) {
    $http({ method: 'GET', url: 'data.json'})
        .then(function successCallback(response) {
            $scope.planets = [];
			
			for (var i = 1; i < response.data.col.length; i++) {
				
				var values = [],
					max,
					min,
					percents = [];
					
				response.data.col[i].v.forEach(function(item) {values.push(parseFloat(item.replace(/,/g, "")))});
				
				max = Math.max.apply(null, values);
				min = Math.min.apply(null, values);
				
				if (min < 0) {
					values.forEach(function(val, index, array) {
						array[index] = val + Math.abs(min);
					})
					
					max = Math.max.apply(null, values);
				}
					
				values.forEach(function(val) {
					percents.push(val*100/max);
				})
				response.data.col[i].p = percents;
			}
			
            for (var i = 0; i < response.data.col[0].v.length; i++) {
                var planet = {
                    name: {value: response.data.col[0].v[i], label: response.data.col[0].col.label},
                    mass: {value: response.data.col[1].v[i], height: response.data.col[1].p[i],  label: response.data.col[1].col.label},
                    diameter: {value: response.data.col[2].v[i], height: response.data.col[2].p[i],  label: response.data.col[2].col.label},
                    density: {value: response.data.col[3].v[i], height: response.data.col[3].p[i],  label: response.data.col[3].col.label},
                    gravity: {value: response.data.col[4].v[i], height: response.data.col[4].p[i],  label: response.data.col[4].col.label},
                    temperature: {value: response.data.col[5].v[i], height: response.data.col[5].p[i], label: response.data.col[5].col.label},
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