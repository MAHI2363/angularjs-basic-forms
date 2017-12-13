angular.module('myapp')
.directive('nameTrailDirective',function(){
    return{
        restrict: 'A',
        controller: function(){
            this.sayHello = function(){
                alert('hello');
            };
        }
        }    
});

angular.module('myapp')
.directive('nameCustomCheck',function(){
    return{
        restrict: 'A',
        require: ['ngModel', 'nameTrailDirective'],
        link:function(scope, element, attrs, ctrls){
            var ngModelCtrl = ctrls[0];
            var trailDirectiveCtrl = ctrls[1];
            
           console.log(ngModelCtrl);
           ngModelCtrl.$validators.nameCustomCheck =  function(val){
               if(val && val.startsWith('a')){
                   return false;
               }
               return true;
           };
           trailDirectiveCtrl.sayHello();
        }
    }
});

/*angular.module('myapp')
  .directive('nameCustomCheck',function(){
      return{
          restrict: 'A',
          require: 'ngModel',
          link:function(scope, element, attrs, ngModelCtrl){
             console.log(ngModelCtrl);
             ngModelCtrl.$validators.nameCustomCheck =  function(val){
                 if(val && val.startsWith('a')){
                     return false;
                 }
                 return true;
             }
          }
      }
  });*/