angular.module("weatherApp",[])
.run(function($rootScope){
	$rootScope.endPointApi = 'http://api.openweathermap.org/data/2.5';
	$rootScope.endPointApiKey= '5398cc50813e955331050df61f057e86';
	$rootScope.iconUrl = 'http://openweathermap.org/img/w/'
});

angular.element(function() {
    angular.bootstrap(document, ['weatherApp']);
});