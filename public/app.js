'use strict';

var app = angular.module('EastWesterly', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', 
	function($routeProvider, $locationProvider){
	$routeProvider

		// Home Page
		.when('/', { 
			templateUrl: '/views/main/index.html', 
			controller: 'mainController'
		})

		.otherwise({ redirectTo: '/' });		

	$locationProvider.html5Mode(true);
}]);