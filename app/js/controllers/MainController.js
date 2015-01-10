onlineAdsApp.controller('MainController', function ($scope, $log, adsData, categoriesData, townsData) {
	
	adsData.getPublicAds()
		.$promise
		.then(function (data) {
			$scope.data = data;
		})

	townsData.getTowns(function(resp) {
		$scope.towns = resp;
	});

	categoriesData.getCategories(function(resp) {
		$scope.categories = resp;
	});
})