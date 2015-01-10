onlineAdsApp.factory('userData', ['$resource', 'BaseServiceUrl', 'authentication', function($resource, BaseServiceUrl, authentication) {
	function registerUser(user) {
		return $resource(BaseServiceUrl + 'user/register')
			.save(user)
			.$promise
			.then(function (data) {
				authentication.saveUser(angular.toJson(data));
			});                                                                                                                                                                                 
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