var app = angular.module('cvApp', ['pascalprecht.translate']);

ap.config(['$translateProvider', function($translateProvider) {
	$translateProvider.translations('es', {
		'': '',
		'': '',
		'': '',
		'': '',
		'': '',
		'': '',
		'': '',
		'': '',
		'': '',
	});
	$translateProvider.translations('en', {
		'': '',
		'': '',
		'': '',
		'': '',
		'': '',
		'': '',
		'': '',
		'': '',
		'': '',
	});
	$translateProvider.translations('pt', {
		'': '',
		'': '',
		'': '',
		'': '',
		'': '',
		'': '',
		'': '',
		'': '',
		'': '',
	});
	$translateProvider.preferredLanguage('es');
}]);


app.controller('principalCtrl', function(){

});