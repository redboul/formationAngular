'use strict';

/**
 * @ngdoc function
 * @name poneyracerApp.controller:LiveCtrl
 * @description
 * # LiveCtrl
 * Controller of the poneyracerApp
 */
angular.module('controllers')
  .controller('LiveCtrl', function ($scope, $http, $routeParams, $log, SERVER_BASE_URL) {
    $scope.raceId = $routeParams.raceId;
    $scope.init = function(){
      $http.post(SERVER_BASE_URL + '/running', $routeParams.raceId);
    };
    //$scope.init();
    var socket = new SockJS(SERVER_BASE_URL + '/race');
    var stompClient = Stomp.over(socket);

    stompClient.connect('', function() {
      stompClient.subscribe('/topic/' + $scope.raceId, function(message) {
        $scope.positions = angular.fromJson(message.body).positions;
        $log.debug($scope.positions);
        $scope.$apply();
      });
    });


  });
