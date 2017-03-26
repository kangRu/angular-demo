(function(angular){

        var app = angular.module('app',[
            'my_01','my_02','my_03','my_04','responsive',
            'waterFull','fullpage','fullpage2','fullpage3','todosApp','fullpage4','fullpage5'
        ])

      app.controller('appController',['$scope','$window','$timeout',function($scope,$window){
         $scope.height =$window.screen.availHeight;
          console.log( $scope.height);
          angular.element('.content').height($scope.height);


          $window.onscroll = function() {

              angular.element('.mask-box').css({
                  "display":"none"
              })
          }



      }])




})(angular)