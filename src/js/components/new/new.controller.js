(function() {

  'use strict';

  angular
    .module('kittehs.components.new', [])
    .controller('newKittenController', newKittenController);

  newKittenController.$inject = ['kittenService', '$location'];

  function newKittenController(kittenService, $location) {
    /*jshint validthis: true */
    var vm = this;

    vm.name = '';
    vm.url = '';
    vm.bio = '';

    vm.submitForm = function() {

      var newID = kittenService.kittens.length + 1;

      kittenService.kittens.push({
        id: newID,
        name: vm.name,
        url: vm.url,
        bio: vm.bio,
        likes: 1
      });

      kittenService.comments.push({
        kitten_id: newID,
        comments: []
      });

      vm.name = '';
      vm.url = '';
      vm.bio = '';
      $location.path('/');

    };

  }

})();
