onlineAdsApp.controller('RegisterController', function ($scope, $log, userData) {

	$scope.register = function (user) {
		userData.register(user);
	}
})