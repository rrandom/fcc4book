'use strict';

angular.module('fcc4bookApp')
  .controller('AllbooksCtrl', function ($scope, $http) {
    $scope.books = [];

    $http.get('/api/books').success(function(books){
      $scope.books = books;
    });

  });
