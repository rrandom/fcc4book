'use strict';

angular.module('fcc4bookApp')
  .controller('SettingsCtrl', function ($scope, User, Auth) {
    $scope.errors = {};
    $scope.user = Auth.getCurrentUser();

    $scope.updateProfile = function(){
      Auth.updateProfile($scope.user.state, $scope.user.city, $scope.user.fullName).then(function() {
          $scope.message = 'Profile successfully changed.';
        });
    };

    $scope.changePassword = function(form) {
      $scope.submitted = true;
      if(form.$valid) {
        Auth.changePassword( $scope.user.oldPassword, $scope.user.newPassword )
        .then( function() {
          $scope.message = 'Password successfully changed.';
        })
        .catch( function() {
          form.password.$setValidity('mongoose', false);
          $scope.errors.other = 'Incorrect password';
          $scope.message = '';
        });
      }
		};
  });
