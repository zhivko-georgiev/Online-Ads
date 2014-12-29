onlineAdsApp.factory('adsData', function ($http) {
	function getAllAds(success) {
		$http({
			method: 'GET',
			url: 'http://softuni-ads.azurewebsites.net/api/Ads'
		})
		.success(function (data, status, headers, config) {
			success(data, status, headers(), config);
		})
		.error(function (data, status, headers, config) {
			error(data, status, headers(), config);
		});
	}

	return {
		getAds: getAllAds,
	}
})