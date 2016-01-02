'use strict';

/**
 * @ngdoc function
 * @name angularWebappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWebappApp
 */
angular.module('Admin.controller')
  .controller('HomeController', function ($scope,User) { //此处注入 User服务
    $scope.name = "Hello";
    console.log(User.getUser());
  });
