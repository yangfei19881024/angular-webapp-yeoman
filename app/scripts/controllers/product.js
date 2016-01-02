angular.module("Admin.controller")
.controller('ProductController',($scope,$state,$stateParams)=>{
  $scope.product_name = $stateParams.pname;
  console.log(`a:${$stateParams.a}`);
  console.log(`b:${$stateParams.b}`);
})
