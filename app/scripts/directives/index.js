'use strict';
angular.module("Admin.directive")
.directive("times",function(){
  return {
    restrict:'AE',
    compile:function(element,attr,transclude){
      var child = element.children();
      for( var i=0;i<attr.times;i++ ){
        var e = child.clone();
        if( i%2 == 0 ){
          e.css("color","red");
        }

        element.append(e);
      }
      return function(scope,element,attr){

      }
    },

  }
})
