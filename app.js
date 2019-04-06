
angular.module("aplicacaoEvento", ['ngMessages','ngRoute']).config(function($routeProvider) {
    $routeProvider

        .when('/', {
            template: "Home",
        })
        .when('/eventos', {
            templateUrl: "componentes/listar/listar.html",
        })

});