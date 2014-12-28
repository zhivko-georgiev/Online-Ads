var app = angular.module('onlineAdsApp', ['ngRoute'])
	.config(function ($routeProvider) {
		$routeProvider.when('/login', {
			templateUrl: 'templates/login.html'
		})
	});



