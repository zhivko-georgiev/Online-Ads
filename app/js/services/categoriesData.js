onlineAdsApp.factory('categoriesData', function ($http, $log) {
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
		getCategories: getAllCategories
	}
})