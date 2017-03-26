/**
 * Created by Administrator on 2017/3/15.
 */

(function(angular){

    var app = angular.module('fullpage2',['ngRoute']);
    app.config(['$routeProvider','$locationProvider',
        function($routeProvider,$locationProvider){
            $locationProvider.hashPrefix('');
            $routeProvider.when('/page2',{

                templateUrl:'fullpage-exzample/page2.html',
                controller:'fullpage2Controller'

            })

        }])
    app.controller('fullpage2Controller',['$scope',
        function($scope){
            $scope.full = function(){
                angular.element(".con").fullpage({

                    sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90','#4BBFC3'],
                    //'navigation': true,
                    anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
                    menu:"#menu",
                    verticalCentered:false
                })
            }

            $scope.full();


        }])













})(angular)