'use strict';

angular.module('fcc4bookApp')
  .controller('MybooksCtrl', function ($scope, $http, Auth) {
    $scope.books = [];
    $scope.user = Auth.getCurrentUser();

    var doubanSearchApi = 'https://api.douban.com/v2/book/search';

    function getMyBooks() {
      $http.get('/api/books/my').success(function (books) {
        $scope.books = books;
      });
    }

    // Since douban api dont return jsonp when use $http.jsonp,
    // should define a new callback function.
    // see http://www.douban.com/group/topic/73507847/
    window.doubanCallback = function (bookinfo) {
      var book = bookinfo.books[0];

      $http.post('/api/books', {
        name: book.title,
        cover: book.images.large,
        owner: $scope.user
      }).success(function () {
        console.log('Add new book sucess');
        getMyBooks();
      });
      $scope.newBook = '';
    };

    $scope.addBook = function () {
      if ($scope.newBook === '') {
        return;
      }
      $http.jsonp(doubanSearchApi, {
        params: {
          q: $scope.newBook,
          fields: 'title,images',
          callback: 'doubanCallback'
        }
      });
    };

    getMyBooks();
  });
