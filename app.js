
angular.module("aplicacaoEvento", ['ngMessages','ngRoute']).config(function($routeProvider) {
    $routeProvider

        .when('/', {
            template: "Home",
        })
        .when('/eventos', {
        templateUrl: "componentes/listar/listar.html",
    })
        .when('/categoria', {
            templateUrl: "<categoria></categoria>",
        })
        .when('/eventos', {
            templateUrl: "componentes/listar/listar.html",
        })
        .when('/eventos', {
            templateUrl: "componentes/listar/listar.html",
        })
        .when('/eventos', {
            templateUrl: "componentes/listar/listar.html",
        })
        .when('/eventos', {
            templateUrl: "componentes/listar/listar.html",
        });

});