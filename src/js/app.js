// sample angular code

(function() {

  'use strict';

  angular
    .module('kittehs', [
      'ngRoute',
      'kittens',
      'likeDirective',
      'kittehs.config',
      'kittehs.components.main',
      'kittehs.components.new',
      'kittehs.components.comments'
    ]);

})();
