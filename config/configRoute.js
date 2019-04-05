angular.module("aplicacaoEvento").config(function($routeProvider, $locationProvider){

    $locationProvider.hashPrefix('');
    $routeProvider.when("/login", {
        templateUrl : "./componentes/login.html"
        
    });

    $routeProvider.when("/home", {
        templateUrl: "./index.html"
        
    });

    $routeProvider.otherwise({
        redirectTo : "/"
    });

})