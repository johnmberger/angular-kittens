// sample angular code

(function() {

  'use strict';

  angular
    .module('kittehs', [
      'ngRoute',
      'kittehs.config',
      'kittehs.components.main',
      'kittehs.components.new'
    ]);

})();
