'use strict';

/**
 * @ngdoc function
 * @name poneyracerApp.controller:RacesCtrl
 * @description
 * # RacesCtrl
 * Controller of the poneyracerApp
 */
angular.module('poneyracerApp')
  .controller('RacesCtrl', function ($scope, $http, SERVER_BASE_URL) {
    $scope.allStatus = ['', 'READY', 'STARTED', 'FINISHED'];
    $scope.races = [];
    $http.get(SERVER_BASE_URL+'/races').success(function(data){
      $scope.races = data;
    });
  });
