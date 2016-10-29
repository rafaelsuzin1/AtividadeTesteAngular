describe('AtividadeService', function(){
  var service;

    beforeEach(module('atividade'));
    beforeEach(inject(function($injector){
      service = $injector.get('AtividadeService');
    }));

    it ('Verficar retorno do valor da funcao', function (){

      expect(service.adicionarBemVindo('rafael')).toEqual('rafael bem vindo');
    });
})
