/**
 * Created by Administrator on 2017/3/14.
 */

(function(angular){

    var app = angular.module('waterFull',['ngRoute','myWaterService']);

    app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
        //$locationProvider.hashPrefix('');

        $routeProvider.when('/my06',{
            templateUrl:'waterFull/index1.html',
            controller:'waterController'
        })

    }])
    app.controller('waterController',['$scope',
          '$http',
          'MyWaterServer',
          '$window',
           function($scope,$http,MyWaterServer,$window){


               //var $ = $scope.element;
                $http.get('./waterFull/index1.json')
                .then(function(data) {
                        console.log(data);
                        $scope.data = data;
                        //$scope.$apply();
                        //console.log(angular.element('.items').children());

                        //  MyWaterServer.waterFall({
                        //       gap: 20,
                        //       dom:angular.element('.items')
                        //  })

                        MyWaterServer.onload(angular.element('img'),
                            MyWaterServer.waterFall({
                                dom: angular.element('.items'),
                                gap: 20

                            })
                        )


                }




           )




   }])


})(angular)
