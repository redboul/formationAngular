'use strict';

/**
 * @ngdoc function
 * @name poneyracerApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the poneyracerApp
 */
angular.module('poneyracerApp')
  .controller('RegisterCtrl', function ($scope, $http, $location, $cookies, Login, SERVER_BASE_URL) {
    $scope.isMineur = function(birthYear){
         return birthYear>1994;
    };
    $scope.register = function(user){
      $http.post(SERVER_BASE_URL+'/users', user).success(function(data){
        $cookies.token = data;
        Login.init();
        $location.path('#/');
      });
    };
  });
