angular.module("Admin.controller")
.controller('ProductController',($scope,$state,$stateParams)=>{
  $scope.product_name = $stateParams.pname;
})
