/**
 * Created by Administrator on 2017/3/14.
 */

(function(angular){

    var app = angular.module('fullpage',['ngRoute']);
    app.config(['$routeProvider','$locationProvider',
        function($routeProvider,$locationProvider){
            $locationProvider.hashPrefix('');
            $routeProvider.when('/my07',{

                templateUrl:'fullpage-exzample/index.html',
                controller:'fullpageController'

            })

        }])
    app.controller('fullpageController',['$scope',
    function($scope){
          $scope.full = function (){
              //angular.element(function(){
                  angular.element(".con").fullpage({

                      sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90','#4BBFC3'],
                      //'navigation': true,
                      anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
                      menu:"#menu",
                      verticalCentered:false,
                      scrollOverflow:true

                  })
              //})
          }

        $scope.full();


    }])













})(angular)
