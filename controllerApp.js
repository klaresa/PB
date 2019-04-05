
angular.module("aplicacaoEvento")
    .controller("aplicacaoEventoCtrl", function($scope, $location, listarAPI){

    $scope.redirecionar = function(parametro){
        if(parametro.servico = 'delegacia'){
            $location.path('/buscaDelegacia')
        }
    }

    $scope.listar = function () {

    }
    
})
