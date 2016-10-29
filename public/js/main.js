angular.module('atividade', ['ngRoute']).config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'js/index/AtividadeIndex.html',
    controller: 'AtividadeController'
  });


}]);
