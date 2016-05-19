var app = angular.module('app', ['ngRoute', 'ngCookies', 'ngMaterial', 'ngMdIcons', 'ui.bootstrap',
	,'app.homeCtrl'
	])
.config(['$routeProvider', '$locationProvider', '$controllerProvider', function($routeProvider, $locationProvider, $controllerProvider){
	$locationProvider.html5Mode(true);
	$routeProvider
            .when('/', {
                templateUrl: 'partials/homeCtrl'
                // controller: 'homeCtrl' // : by adding this line, controller will be called twice :( [NOT GOOD :(]
            });
	$controllerProvider.allowGlobals();
}]);

app.controller('appCtrl', function($scope) {


});