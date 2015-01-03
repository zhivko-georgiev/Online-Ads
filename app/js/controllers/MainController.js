onlineAdsApp.controller('MainController', function ($scope, $log, adsData) {
	adsData.getAds(function(resp) {
		$scope.data = resp;
	});

	adsData.getTowns(function(resp) {
		$scope.towns = resp;
	});

	adsData.getCategories(function(resp) {
		$scope.categories = resp;
	});
})