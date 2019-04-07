
angular.module("aplicacaoEvento").service("requestServiceUrl", function ($http) {

    this.getDelegacias = function () {
        return new Promise(function (resolve, reject) {
            $http.get("https://pgeo3.rio.rj.gov.br/arcgis/rest/services/Basicos/mapa_basico_UTM/MapServer/5/query?where=1%3D1&outFields=Nome,Endereco,Telefone&outSR=4326&f=json").then((response) => {
                resolve(response.data);
                console.log(response.data.features[0].attributes);
            }).catch((error) => {
                reject(error)
            });
        })
    };
});
