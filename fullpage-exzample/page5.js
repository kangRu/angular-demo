/**
 * Created by Administrator on 2017/3/27.
 */
(function(angular){

    var app = angular.module('fullpage5',['ngRoute']);
    app.config(['$routeProvider','$locationProvider',
        function($routeProvider,$locationProvider){
            $locationProvider.hashPrefix('');
            $routeProvider.when('/page5',{

                templateUrl:'fullpage-exzample/page4.html',
                controller:'fullpage5Controller'

            })

        }])
    app.controller('fullpage5Controller',['$scope',
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