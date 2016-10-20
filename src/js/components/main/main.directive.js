(function() {
  'use strict';

  angular
    .module('likeDirective', [])
    .directive('likeButton', ['kittenService', LikeButton]);

  function LikeButton(kittenService) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        element.on('click', function() {
          kittenService.kittens[attrs.index].likes++;
          scope.$apply();
        });
      }
    };
  }

}());
