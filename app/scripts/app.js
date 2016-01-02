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

angular
  .module('Admin', [
    'ngTouch',
    'Admin.controller',
    'ui.router',
  ])
  
