var onlineAdsApp = angular.module('onlineAdsApp', ['ngRoute'])
	.config(function ($routeProvider) {
				$routeProvider
			.when('/login', {
				templateUrl: 'templates/login.html'
			})
			.when('/register', {
				templateUrl: 'templates/register.html'
			})
			.otherwise({redirectTo: '#'});
	});



