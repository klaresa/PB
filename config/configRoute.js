angular.module("aplicacaoEvento").config(function($routeProvider, $locationProvider){

    $locationProvider.hashPrefix('');
    $routeProvider.when("/login", {
        templateUrl : "./componentes/login.html"
        
    });

    $routeProvider.when("/home", {
        templateUrl: "./index.html"
        
    });

    $routeProvider.when("/listar", {
        templateUrl: "./componentes/listar/listar.html"
        
    });

    $routeProvider.when("/detalhes", {
        templateUrl: "./componentes/detalhes/detalhes.html"
        
    });


    $routeProvider.otherwise({
        redirectTo : "/"
    });

})