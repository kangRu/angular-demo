/**
 * Created by Administrator on 2017/3/9.
 */
(function(angular){
    var app = angular.module('my_01',['ngRoute']);
    app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
        $locationProvider.hashPrefix('');
        $routeProvider.when('/my01',{
            templateUrl:'my01/01.html',
            controller:'my01Controller'
        })

    }])
    app.controller('my01Controller',['$scope','$window',function($scope,$window){




    }])


})(angular)