// angular.module('weatherApp')

// 	.controller('mainController',mainController);
// 		mainController.$inject = ['$scope','serveWeather'];

// 		function mainController($scope,serveWeather){
// 			console.log('mainController');

// 			$scope.fetchData = function(searchValue){
// 			var promise = serveWeather.getWeather(searchValue);
//     			promise.then(function(res){
//     			$scope.data = res.data;
//     			console.log($scope.data)
//     			console.log('from controller');
//     			$scope.errorMsg= null;
// 			}, function(error){
// 				if (error=='Not Found') {
// 					$scope.errorMsg = 'Unable to find the city.'+ 
// 					+'Please enter the correct location name';
// 				}
// 			});

//     			$scope.fetchData();
// 		}
// 		}