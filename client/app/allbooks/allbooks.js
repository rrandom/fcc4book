'use strict';

angular.module('fcc4bookApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/allbooks', {
        templateUrl: 'app/allbooks/allbooks.html',
        controller: 'AllbooksCtrl'
      });
  });
