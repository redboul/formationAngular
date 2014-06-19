'use strict';

/**
 * @ngdoc function
 * @name poneyracerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the poneyracerApp
 */
angular.module('controllers')
  .controller('MainCtrl', function ($scope, $http,SERVER_BASE_URL) {
    $scope.list = function(){
      $http.get(SERVER_BASE_URL+'/users').success(function(data){
        $scope.users = data;
      });
    };
    $scope.list();
  });
