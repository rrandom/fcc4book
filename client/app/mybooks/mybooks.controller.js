'use strict';

angular.module('fcc4bookApp')
  .controller('MybooksCtrl', function ($scope, $http, Auth) {
    $scope.books = [];
    $scope.user = Auth.getCurrentUser();

    function getMyBooks() {
      console.log('$scope.user._id:', $scope.user._id);
      $http.get('/api/books/my').success(function (books) {
        $scope.books = books;
      });
    }

    $scope.addBook = function () {
      if ($scope.newBook === '') {
        return;
      }
      $http.post('/api/books', {
        name: $scope.newBook,
        cover: '#',
        owner: $scope.user
      }).success(function () {
        console.log('Add new book sucess');
        getMyBooks();
      });
      $scope.newBook = '';
    };

    getMyBooks();

  });
