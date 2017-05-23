angular.module('weatherApp')

  .filter('celsius', [function() {
    return function (value) {
    	var celsius = (value - 32) * 5.0/9.0;
      return celsius.toFixed(2);
    };
  }])
