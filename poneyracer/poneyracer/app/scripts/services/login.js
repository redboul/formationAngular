'use strict';

/**
 * @ngdoc service
 * @name poneyracerApp.Login
 * @description
 * # Login
 * Service in the poneyracerApp.
 */
angular.module('services')
  .factory('Login', function Login($http, $cookies, $location, SERVER_BASE_URL) {
    var init = function(){
      $http.defaults.headers.common['Custom-Authentication'] = $cookies.token;
    };
    var login = function(user){
      $http.post(SERVER_BASE_URL + '/authentication', user).success(function(data){
        $cookies.token = data;
        init();
        $location.path('#/');
      });
    };

    return {
      'login': login,
      'init': init
    };
  });
