angular.module('dictator', ['ngRoute', 'ui.bootstrap']);
angular.module('dictator').config(Configuration);

function Configuration($routeProvider){
	var home = '/';
	$routeProvider
		.when(home, {
			templateUrl: 'templates/view-home.html',
		})
		.otherwise({
			redirectTo: home,
		});
}