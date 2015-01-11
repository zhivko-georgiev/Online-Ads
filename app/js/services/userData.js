onlineAdsApp.factory('userData', ['$resource', '$location', 'BaseServiceUrl', 'authentication', 'messaging', function($resource, $location,BaseServiceUrl, authentication, messaging) {
	function registerUser(user) {
		return $resource(BaseServiceUrl + 'user/register')
			.save(user)
			.$promise
			.then(function (data) {
				authentication.saveUser(data);
				authentication.getHeaders();
				$location.path('/ads');
			}, function(error) {

				messaging.messageError('' + error.data.message);
			});
	}

	function loginUser(user) {
		return $resource(BaseServiceUrl + 'user/login ')
			.save(user)
			.$promise
			.then(function (data) {
				authentication.saveUser(data);
				authentication.getHeaders();
				messaging.messageSuccess('Login Successful!');
				$location.path('/ads');
			}, function(error) {
				messaging.messageError('Invalid User or Password!');
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