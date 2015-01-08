onlineAdsApp.controller('RegisterController', function ($scope, $log, townsData, userData) {
	townsData.getTowns(function(resp) {
		$scope.towns = resp;
	});

	$scope.register = function (user) {
		userData.register(user);
	}
})