(function() {

  angular
    .module('myApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope', '$rootScope'];

  function mainController($scope, $rootScope) {
    this.cats = $rootScope.cats
    this.add = function (num) {
      $rootScope.cats[num].likes +=1
    }
  }

})();
