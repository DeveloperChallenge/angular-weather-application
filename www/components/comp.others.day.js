var othersDay = 
	{
		require: {
			parentComp: '^weather'
		},
		templateUrl: "templates/others-day.html",
		controller: otherDaysController,
		controllerAs:'ctrlOthersDay'
	}

function otherDaysController(){

	var otherWeather = this;
	// otherWeather.$postLink = function () {
	// 	otherWeather.weatherData = this.parentComp.data.list[0].dt;
	// }
}


angular.module('weatherApp')
.component('othersDay',othersDay);