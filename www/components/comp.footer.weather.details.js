var footerWeather = {
	require: {
		parentComp:'^weather'
	},
	bindings: {
		data: '<'
	},
	templateUrl: 'templates/footer-weather-details.html',
	controller: footerWeatherController,
	controllerAs: 'ctrlFoo'
}

function footerWeatherController(){
	var foo = this;

	foo.$postLink = function(){
		foo.data = this.parentComp.data.list;
	}

	foo.$doCheck= function(){
		foo.data = this.parentComp.data.list;
	};
}

angular.module('weatherApp')
	.component('footerWeather', footerWeather);