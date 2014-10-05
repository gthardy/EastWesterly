'use strict';

var app = angular.module('EastWesterly', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', 
	function($routeProvider, $locationProvider){
	$routeProvider

		.when('/', {
			templateUrl: '/views/main/index.html', 
			controller: 'mainController'
		})
        .when('/services', {
            templateUrl: '/views/main/services.html',
            controller: 'servicesController'
        })
        .when('/testimonials', {
            templateUrl: '/views/main/testimonials.html',
            controller: 'testimonialsController'
        })
        .when('/about', {
            templateUrl: '/views/main/about.html',
            controller: 'aboutController'
        })
        .when('/contact', {
            templateUrl: '/views/main/contact.html',
            controller: 'contactController'
        })
		.otherwise({ redirectTo: '/' });		

	$locationProvider.html5Mode(true);
}]);