angular.module('atividade').directive('atividadeDirective', [function(){
  return {
    restrict: 'E',
    template: '<input type="text" placeholder="{{placeHold}}" ng-model="model" ></input>',
    scope:{
      placeHold: '@',
      model: '='
    },
    link: function(scope){
      // console.log(scope);
    }
  }
}])
