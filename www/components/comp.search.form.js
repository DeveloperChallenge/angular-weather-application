var searchForm  = {
	templateUrl: 'templates/search-form.html',
	bindings: {
		search: '&',
		errorMsg: '=',
		data:'@'
	},
	controller: function(){
	},
	controllerAs: 'ctrlForm'
}

angular.module('weatherApp')

.component('searchForm', searchForm);