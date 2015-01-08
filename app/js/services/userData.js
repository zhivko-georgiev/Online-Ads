onlineAdsApp.factory('userData', ['$resource', 'BaseServiceUrl', function($resource, BaseServiceUrl) {
	function registerUser(user) {
		return $resource(BaseServiceUrl + 'user/register')
			.save(user);
	}

	function loginUser(user) {

	}

	function logoutUser() {

	}

	return {
		register: registerUser,
		login: loginUser,
		logout: logoutUser	
	}
}])