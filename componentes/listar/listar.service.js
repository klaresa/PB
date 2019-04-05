angular.module("aplicacaoEvento").factory("listarAPI", function($http, config){
    var _getDados = function(tipoDado){
        return $http.get(config.baseUrl + tipoDado)
    }

    var _saveDado = function(dado){
        return $http.post(config.baseUrl + tipoDado, dado)
    }

    return {
        getContatos: _getDados,
        saveContato: _saveDado
    }
})