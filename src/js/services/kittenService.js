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
      },
      {
        id: 2,
        name: 'Steven McGrumples',
        url: 'http://placekitten.com/310/300',
        bio: 'Man, he\'s a little shithead.',
        likes: 500
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
      },
      {
        kitten_id: 2,
        comments: [
          'What a grumpypants',
          'Haha, he\'s funny.'
        ]
      }
    ];

  }

}());
