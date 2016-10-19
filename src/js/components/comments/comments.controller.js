(function() {

  'use strict';

  angular
    .module('kittehs.components.comments', [])
    .controller('commentController', commentController);

  commentController.$inject = ['kittenService', '$routeParams'];

  function commentController(kittenService, $routeParams) {
    /*jshint validthis: true */
    var vm = this;

    vm.kitten = kittenService.kittens[$routeParams.id - 1];
    vm.comments = kittenService.comments[$routeParams.id - 1].comments;

    vm.comment = '';
    vm.showCommentForm = false;

    vm.addComment = () => {
      kittenService.comments[$routeParams.id - 1].comments.push(vm.comment);
      vm.comment = '';
      vm.showCommentForm = false;
    };

  }

})();
