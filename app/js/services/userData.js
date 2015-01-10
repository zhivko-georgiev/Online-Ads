onlineAdsApp.factory('userData', ['$resource', 'BaseServiceUrl', 'authentication', function($resource, BaseServiceUrl, authentication) {
	function registerUser(user) {
		return $resource(BaseServiceUrl + 'user/register')
			.save(user)
			.$promise
			.then(function (data) {
				authentication.saveUser(data);
				authentication.getHeaders();
			});                                               
	}

	function loginUser(user) {
		return $resource(BaseServiceUrl + 'user/login ')
			.save(user)
			.$promise
			.then(function (data) {
				authentication.saveUser(data);
				authentication.getHeaders();
			});
	}

	function logoutUser() {
		return $resource(BaseServiceUrl + 'user/logout ')
			.save(user)
			.$promise
			.then(function (data) {
				authentication.removeUser();
			});
	}

	return {
		register: registerUser,
		login: loginUser,
		logout: logoutUser	
	}
}])