var weather = {
	templateUrl: 'templates/panel-light.html',
	bindings:{
		queryData:'@', 
		data:'<'
	},
	controller: weatherController,
	controllerAs: 'ctrlWeather'
}


function weatherController($scope,$http, $rootScope, serveWeather){
		var vm = this;
		vm.testData = 'my data test';
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
			return (iconName ? $rootScope.iconUrl + iconName + '.png' : '');
		}
    }


angular.module('weatherApp')
.component("weather", weather);