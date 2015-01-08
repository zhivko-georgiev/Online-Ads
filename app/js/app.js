'use strict'

var onlineAdsApp = angular.module('onlineAdsApp', ['ngRoute', 'ngResource'])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/login', {
				templateUrl: 'templates/login.html'
			})
			.when('/register', {
				templateUrl: 'templates/register.html',
				controller: 'RegisterController'
			})
			.when('/ads', {
				templateUrl: 'templates/all-ads.html',
				controller: 'MainController'
			})
			.otherwise({redirectTo: '/ads'});
	});

onlineAdsApp.constant('BaseServiceUrl', 'http://softuni-ads.azurewebsites.net/api/');

