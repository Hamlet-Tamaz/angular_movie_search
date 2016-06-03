var app = angular.module('movieSearchApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '../templates/home.html',
			controller: 'homeController'
		})
		.when('/show/:id', {
			templateUrl: '../templates/show.html',
			controller: 'showController'
		})
	$locationProvider.html5Mode(true);
})