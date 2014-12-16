'use strict';

/**
 * @ngdoc function
 * @name craicLadApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the craicLadApp
 */
angular.module('craicLadApp')
  .controller('HomeController', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.posts = [
      {
        imagePath: '/images/home-image-3.jpg',
        title: 'There\'s a brand new dude in town',
        subtitle: 'Some random cool divttle subtitle'
      },
      {
        imagePath: '/images/home-image-1.jpg',
        title:'There\'s a brand new dude in town',
        subtitle:'Some random cool divttle subtitle'
      },
      {
        imagePath: '/images/home-image-2.jpg',
        title:'There\'s a brand new dude in town',
        subtitle:'Some random cool divttle subtitle'
      },
      {
        imagePath: '/images/home-image-5.jpg',
        title:'There\'s a brand new dude in town',
        subtitle:'Some random cool divttle subtitle'
      },
      {
        imagePath: '/images/home-image-4.png',
        title:'There\'s a brand new dude in town',
        subtitle:'Some random cool divttle subtitle'
      },
      {
        imagePath: '/images/home-image-3.jpg',
        title:'There\'s a brand new dude in town',
        subtitle:'Some random cool divttle subtitle'
      },
      {
        imagePath: '/images/home-image-6.jpg',
        title:'There\'s a brand new dude in town',
        subtitle:'Some random cool divttle subtitle'
      },
      {
        imagePath: '/images/home-image-4.png',
        title:'There\'s a brand new dude in town',
        subtitle:'Some random cool divttle subtitle'
      },
      {
        imagePath: '/images/home-image-5.jpg',
        title:'There\'s a brand new dude in town',
        subtitle:'Some random cool divttle subtitle'
      },      {
        imagePath: '/images/home-image-6.jpg',
        title:'There\'s a brand new dude in town',
        subtitle:'Some random cool divttle subtitle'
      },
      {
        imagePath: '/images/home-image-1.jpg',
        title:'There\'s a brand new dude in town',
        subtitle:'Some random cool divttle subtitle'
      },
      {
        imagePath: '/images/home-image-2.jpg',
        title:'There\'s a brand new dude in town',
        subtitle:'Some random cool divttle subtitle'
      }

    ];
  });
