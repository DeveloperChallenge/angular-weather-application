angular.module('weatherApp')

.service('serveWeather', ['$http','$rootScope','$q', function($http, $rootScope, $q){

	var serveWeather = this;

	serveWeather.getWeather = function(searchValue){
		
		var defer = $q.defer();
		var request = {
				method: 'GET',
				url: $rootScope.endPointApi+'/forecast/daily',
				params: {
					q: searchValue,
					mode: 'json',
					units: 'imperial',
					cnt: '7',
					appid: $rootScope.endPointApiKey
				}
			}


		$http(request)
		.then(function(res){
			defer.resolve(res);
		}, function(error, status){
			defer.reject(error.statusText);
		})

		return defer.promise;
	}
	return serveWeather;
}]);