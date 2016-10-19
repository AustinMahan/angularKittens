(function() {

  angular
    .module('myApp.components.new', [])
    .controller('newController', newController);

  newController.$inject = ['$scope', '$rootScope', '$location'];

  function newController($scope, $rootScope, $location) {
    var This = this;
    this.newCat = function () {
      var obj = {name: This.name, bio: This.bio, img: This.img, likes:0}
      $rootScope.cats.push(obj)
      $location.path('/')
    }
  }

})();
