var onlineAdsApp = angular.module('onlineAdsApp', ['ngRoute'])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/login', {
				templateUrl: 'templates/login.html'
			})
			.when('/register', {
				templateUrl: 'templates/register.html'
			})
			.when('/ads', {
				templateUrl: 'templates/all-ads.html'
			})
			.otherwise({redirectTo: '#'});
	});



