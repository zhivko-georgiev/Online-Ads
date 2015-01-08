onlineAdsApp.factory('townsData', function ($http, $log) {
	function getAllTowns(success) {
		$http({
			method: 'GET',
			url: 'http://softuni-ads.azurewebsites.net/api/towns'
		})
		.success(function (data, status, headers, config) {
			success(data, status, headers(), config);
		})
		.error(function (data, status, headers, config) {
			$log.warn(data);
		});
	}

	return {
		getTowns: getAllTowns
	}
})