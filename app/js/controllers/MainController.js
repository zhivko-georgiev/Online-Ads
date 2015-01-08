onlineAdsApp.controller('MainController', function ($scope, $log, adsData, categoriesData, townsData) {
	adsData.getAds(function(resp) {
		$scope.data = resp;
	});

	townsData.getTowns(function(resp) {
		$scope.towns = resp;
	});

	categoriesData.getCategories(function(resp) {
		$scope.categories = resp;
	});
})