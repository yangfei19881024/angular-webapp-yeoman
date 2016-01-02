/**
 * 只定义 无需手动注入    
*/
angular.module("Admin.filters")
.filter('toKm',function(){
  return function(content){
    if( content.toString().length > 4 ){
      return `${Math.floor(content/1000)}km`;
    }
    return `${content}km`;
  }
})
