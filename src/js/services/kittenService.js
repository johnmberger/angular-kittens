(function() {
  'use strict';

  angular
    .module('kittens', [])
    .service('kittenService', [KittenService]);

  function KittenService() {
    var vm = this;

    vm.kittens = [
      {
        id: 1,
        name: 'John',
        url: 'http://placekitten.com/300/300',
        bio: 'He really likes tuna.',
        likes: 1
      }
    ];

    vm.comments = [
      {
        kitten_id: 1,
        comments: [
          'He\'s so cute!',
          'I like tuna, too!',
          'Much kitten'
        ]
      }
    ];

  }

}());
