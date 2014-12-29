onlineAdsApp.controller('MainController', function ($scope, $log, adsData) {
	adsData.getAds(function(resp) {
		$scope.data = resp;
	});
})