'use strict';

/**
 * @ngdoc overview
 * @name craicLadApp
 * @description
 * # craicLadApp
 *
 * Main module of the application.
 */
angular
  .module('craicLadApp', [
    'wu.masonry',
    'ui.bootstrap',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
