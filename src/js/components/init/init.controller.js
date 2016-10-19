(function() {

  angular
    .module('myApp.components.init', [])
    .controller('initController', initController);

  initController.$inject = ['$scope', '$rootScope'];

  function initController($scope, $rootScope) {
    $rootScope.cats = [{name: 'Austin', bio:"This is a bio", img:"http://placekitten.com/200/300", likes: 2}];
  }

})();
