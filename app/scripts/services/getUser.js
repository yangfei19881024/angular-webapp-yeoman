angular.module('Admin.services')
//1. factory 方法创建自己的服务
.factory('User',function(){ //这里面也可以 使用内置服务 比如 $http
  var users = ['yang','fei'];
  return {
    getUser: ()=> users,
    addUser: ()=> {}
  }
})
