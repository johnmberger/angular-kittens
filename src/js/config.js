(function() {

  'use strict';

  angular
    .module('kittehs.config', [])
    .config(appConfig);

  function appConfig($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'js/components/main/main.view.html',
      controller: 'mainController',
      controllerAs: 'mainCtrl'
    })
    .when('/new', {
      templateUrl: 'js/components/new/new.view.html',
      controller: 'newKittenController',
      controllerAs: 'newCtrl'
    })
    .otherwise('/');
  }

})();
