/**
 * Created by Administrator on 2017/3/26.
 */

 var app = angular.module('responsive',['ngRoute']);

app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider.when('/my05',{
        templateUrl:'responsive/responsive.html',
        controller:'responsiveController'
    })

}])

app.controller('responsiveController',['$scope',
    function(){





    }])
