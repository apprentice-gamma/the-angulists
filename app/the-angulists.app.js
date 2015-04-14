angular.module('the-angulists', ['ngRoute', 'ui.bootstrap']);
angular.module('the-angulists').config(Configuration);


function Configuration($routeProvider) {
    var home = '/';
    $routeProvider
        .when(home, {
            templateUrl: 'templates/[COME BACK]',
        })
        .otherwise({
            redirectTo: home,
        });
}