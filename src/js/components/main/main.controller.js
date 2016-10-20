(function() {

  'use strict';

  angular
    .module('kittehs.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['kittenService'];

  function mainController(kittenService) {
    /*jshint validthis: true */
    var vm = this;
    vm.kittens = kittenService.kittens;
  }

})();
