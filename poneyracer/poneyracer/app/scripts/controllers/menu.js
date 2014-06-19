'use strict';

/**
 * @ngdoc function
 * @name poneyracerApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the poneyracerApp
 */
angular.module('controllers')
  .controller('MenuCtrl', function ($scope, $cookies) {
    $scope.isAuthenticated = function(){
      return !!$cookies.token;
    };
    $scope.logout = function(){
      delete $cookies.token;
    };
  });
