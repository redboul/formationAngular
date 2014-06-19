'use strict';

/**
 * @ngdoc overview
 * @name poneyracerApp
 * @description
 * # poneyracerApp
 *
 * Main module of the application.
 */
angular.module('controllers',[]) ;
angular.module('services',[]) ;
angular.module('directives',[]) ;
angular
  .module('poneyracerApp', [
    'ngCookies',
    'ngRoute',
    'controllers',
    'services',
    'directives'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/races', {
        templateUrl: 'views/races.html',
        controller: 'RacesCtrl'
      })
      .when('/logout', {
        templateUrl: 'views/logout.html',
        controller: 'LogoutCtrl'
      })
      .when('/race/:raceId', {
        templateUrl: 'views/race.html',
        controller: 'RaceCtrl'
      })
      .when('/race/:raceId/live', {
        templateUrl: 'views/live.html',
        controller: 'LiveCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function(Login){
      Login.init();
  });

