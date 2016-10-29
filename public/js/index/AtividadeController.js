angular.module('atividade').controller('AtividadeController', ['$scope', function($scope){

  $scope.valor = '';
  $scope.valorResultado = '';
  $scope.adicionarBemVindo = function(valor){
    $scope.valorResultado = valor + ' bem vindo';
    return valor + ' bem vindo';
  }

}]);
