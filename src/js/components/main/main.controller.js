(function() {

  'use strict';

  angular
    .module('kittehs.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope', '$rootScope'];

  function mainController($scope, $rootScope) {
    /*jshint validthis: true */

    $rootScope.kittens = $rootScope.kittens || [{
      name: 'John',
      url: 'http://placekitten.com/300/230',
      bio: 'He likes feathers and tuna',
      likes: 0
    }];

    this.kittens = $rootScope.kittens;

  }

})();
