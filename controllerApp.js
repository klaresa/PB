angular.module("aplicacaoEvento").controller("aplicacaoEventoCtrl", function($scope, $location, listarAPI, detalheAPI){

    $scope.redirecionar = function(parametro){
        if(parametro.servico = 'delegacia'){
            $location.path('/buscaDelegacia')
        }
    }
    
})