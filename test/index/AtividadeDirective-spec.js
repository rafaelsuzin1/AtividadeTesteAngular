describe('IndexDirective', function(){

  var $compile, $rootScope;

  beforeEach(module('atividade'));
  beforeEach(inject(function(_$compile_, _$rootScope_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));
  describe('Render', function(){
    it('Render value', function(){
      $rootScope.passarValor = "teste";
      var elemento = $compile('<atividade-directive'+
      ' place-hold="{{passarValor}}"></atividade-directive>')($rootScope);
      $rootScope.$digest();
      expect(elemento.find('input').attr('placeholder')).toEqual($rootScope.passarValor);
    });
  })

});
