(function() {

  'use strict';

  angular
    .module('kittehs.components.new', [])
    .controller('newKittenController', newKittenController);

  newKittenController.$inject = ['$scope', '$rootScope', '$location'];

  function newKittenController($scope, $rootScope, $location) {
    /*jshint validthis: true */

    $rootScope.kittens = $rootScope.kittens || [{
      name: 'John',
      url: 'http://placekitten.com/300/230',
      bio: 'He likes feathers and tuna',
      likes: 0
    }];

    this.name = '';
    this.url = '';
    this.bio = '';

    this.submitForm = function() {

      $rootScope.kittens.push({
        name: this.name,
        url: this.url,
        bio: this.bio,
        likes: 0
      });

      this.name = '';
      this.url = '';
      this.bio = '';
      $location.path('/');

    };

  }

})();
