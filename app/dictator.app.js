angular.module('dictator', ['ngRoute', 'ui.bootstrap']);
angular.module('dictator').config(Configuration);

function Configuration($routeProvider){
	var root = '/';
	$routeProvider
		.when(root, {
			templateUrl: 'templates/view-root.html',
		})
    .when('/result', {
      templateUrl: 'templates/view-result.html',
    })
    .when('/add', {
      templateUrl: 'templates/view-add-dictator.html',
    })
		.otherwise({
			redirectTo: root,
	});
}

