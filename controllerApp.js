
angular.module("aplicacaoEvento")
    .controller("aplicacaoEventoCtrl", function($scope, $route, requestServiceUrl){


    $scope.listar = function () {
        let data = requestServiceUrl.getDelegacias();
        $scope.lista = data;
    }
    
});
