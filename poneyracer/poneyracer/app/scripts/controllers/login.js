'use strict';

/**
 * @ngdoc function
 * @name poneyracerApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the poneyracerApp
 */
angular.module('controllers')
  .controller('LoginCtrl', function ($scope, Login) {
    $scope.user = {};
    $scope.login = Login.login;
  });
