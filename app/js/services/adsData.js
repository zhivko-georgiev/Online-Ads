onlineAdsApp.factory('adsData', function ($http, $log) {
	function getAllAds(success) {
		$http({
			method: 'GET',
			url: 'http://softuni-ads.azurewebsites.net/api/ads'
		})
		.success(function (data, status, headers, config) {
			success(data, status, headers(), config);
		})
		.error(function (data, status, headers, config) {
			$log.warn(data);
		});
	}

	return {
		getAds: getAllAds
	}
})