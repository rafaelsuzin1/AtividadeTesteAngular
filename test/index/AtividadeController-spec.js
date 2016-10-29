describe('AtividadeController', function(){
  var $scope;

  beforeEach(module('atividade'));
  beforeEach(inject(function($rootScope, $controller){
    $scope = $rootScope.$new();
    $controller('AtividadeController',  {
      $scope: $scope
    });
  }));
  it ('Verifica se existe um valor no campo', function(){
    expect($scope.adicionarBemVindo('rafael')).toEqual('rafael bem vindo');
  });
})
