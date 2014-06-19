'use strict';

/**
 * @ngdoc directive
 * @name poneyracerApp.directive:poney
 * @description
 * # poney
 */
angular.module('directives')
  .directive('poney', function () {
    return {
      templateUrl: 'views/poney.html',
      transclude: true,
      restrict: 'A',
      scope : {
        poneyName : '@',
        betPoney : '='
      }
    };
  });
