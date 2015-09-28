'use strict';

angular.module('fcc4bookApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/mybooks', {
        templateUrl: 'app/mybooks/mybooks.html',
        controller: 'MybooksCtrl'
      });
  });
