angular.module('atividade').service('AtividadeService', [function(){
  function adicionarBemVindo(valor){
    return valor + " bem vindo";
  }
  return {
    adicionarBemVindo:adicionarBemVindo
  }
}])
