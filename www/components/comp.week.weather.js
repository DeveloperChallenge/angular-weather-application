var weekWeather = {
	require: {
		parentComp: '^weather'
	},
	bindings: {
		data:'<'
	},
	templateUrl: 'templates/week-weather.html',
	controller: weekWeatherController,
	controllerAs: 'ctrlWeek',
}

function weekWeatherController($rootScope){
	var weekCtrl=  this;

	weekCtrl.$postLink = function () {
		weekCtrl.data = this.parentComp.data.list;
	}

	weekCtrl.$doCheck= function(){
		weekCtrl.data = this.parentComp.data.list;
	};

	weekCtrl.getIconImageUrl = function(iconName){
			return (iconName ? $rootScope.iconUrl + iconName + '.png' : '');
		}
		
	weekCtrl.parseDate = function (time) {
          return new Date(time * 1000);
        };
}




angular.module('weatherApp')

.component('weekWeather', weekWeather);