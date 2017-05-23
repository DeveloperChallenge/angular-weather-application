var weather = {
	templateUrl: 'templates/weather.html',
	bindings:{
		queryData:'@', 
		data:'<'
	},
	controller: weatherController,
	controllerAs: 'ctrlWeather'
}


function weatherController($scope,$rootScope, serveWeather){
		var vm = this;
		vm.data = {};
		vm.errorMsg  = null;

		vm.$onInit = function() {
			vm.fetchData('siliguri');
		};

		vm.fetchData = function(searchValue){
			var promise = serveWeather.getWeather(searchValue);
				promise.then(function(res){
				vm.data = res.data;
				vm.errorMsg= null;
			}, function(error){
				if (error=='Not Found') {
					vm.errorMsg = 'Unable to find the city.'+ 
					+'Please enter the correct location name';
				}
			});
		}


		vm.getIconImageUrl = function(iconName){
			return serveWeather.getImageIcon(iconName);
		}
    }


angular.module('weatherApp')
.component("weather", weather);