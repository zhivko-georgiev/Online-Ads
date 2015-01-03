onlineAdsApp.factory('adsData', function ($http, $log) {
	function getAllAds(success) {
		$http({
			method: 'GET',
			url: 'http://softuni-ads.azurewebsites.net/api/Ads'
		})
		.success(function (data, status, headers, config) {
			success(data, status, headers(), config);
		})
		.error(function (data, status, headers, config) {
			$log.warn(data);
		});
	}

	function getAllTowns(success) {
		$http({
			method: 'GET',
			url: 'http://softuni-ads.azurewebsites.net/api/Towns'
		})
		.success(function (data, status, headers, config) {
			success(data, status, headers(), config);
		})
		.error(function (data, status, headers, config) {
			$log.warn(data);
		});
	}

	function getAllCategories(success) {
		$http({
			method: 'GET',
			url: 'http://softuni-ads.azurewebsites.net/api/categories'
		})
		.success(function (data, status, headers, config) {
			success(data, status, headers(), config);
		})
		.error(function (data, status, headers, config) {
			$log.warn(data);
		});
	}

	return {
		getAds: getAllAds,
		getTowns: getAllTowns,
		getCategories: getAllCategories
	}
})