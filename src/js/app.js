// sample angular code

(function() {

  'use strict';

  angular
    .module('kittehs', [
      'ngRoute',
      'kittens',
      'kittehs.config',
      'kittehs.components.main',
      'kittehs.components.new',
      'kittehs.components.comments'
    ]);

})();
