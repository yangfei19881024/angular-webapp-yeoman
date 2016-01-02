'use strict';

/**
 * @ngdoc overview
 * @name angularWebappApp
 * @description
 * # angularWebappApp
 *
 * Main module of the application.
 */
angular.module("Admin.controller",[]);
angular.module("Admin.directive",[]);
angular.module("Admin.services",[]);
angular.module("Admin.filters",[]);

angular
  .module('Admin', [
    'ngTouch',
    'Admin.controller',
    'Admin.directive',
    'Admin.services',
    'Admin.filters',
    'ui.router'
  ])
