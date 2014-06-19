'use strict';

/**
 * @ngdoc function
 * @name poneyracerApp.controller:RaceCtrl
 * @description
 * # RaceCtrl
 * Controller of the poneyracerApp
 */
angular.module('controllers')
  .controller('RaceCtrl', function ($scope, $http, $routeParams, $log, $location, SERVER_BASE_URL) {
    var raceId = $routeParams.raceId;
    $scope.racesDetails = {};
    var getRaces = function(){
      $http.get(SERVER_BASE_URL + '/races/' + raceId).success(function(data){
        $scope.racesDetails = data;
      });
    };
    getRaces();
    $scope.bet = function(raceId, poneyName){
      $http.post(SERVER_BASE_URL+'/bets', {'raceId': raceId, poney : poneyName}).success(function(){
        $log.debug('I bet on '+ poneyName + ' on race #'+raceId);
        getRaces();
      });
    };
    $scope.cancel = function(raceId, poneyName){
      $http.delete(SERVER_BASE_URL+'/bets/' + raceId).success(function(){
        $log.debug('I canceled bet on '+ poneyName + ' on race #'+raceId);
        getRaces();
      });
    };
  });
/*
RaceWithBet {
bettedPoney (string, optional),
race (Race, optional)
}
Race {
id (long, optional),
status (RaceStatus, optional) = ['READY' or 'STARTED' or 'FINISHED'],
name (string, optional),
poneys (Set[string], optional)
}
RaceStatus {
}
*/
