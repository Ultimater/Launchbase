'use strict';

/**
 * @ngdoc function
 * @name launchbaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the launchbaseApp
 */
angular.module('launchbaseApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
