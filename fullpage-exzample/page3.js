/**
 * Created by Administrator on 2017/3/15.
 */
(function(angular){

    var app = angular.module('fullpage3',['ngRoute']);
    app.config(['$routeProvider','$locationProvider',
        function($routeProvider,$locationProvider){
            $locationProvider.hashPrefix('');
            $routeProvider.when('/page3',{

                templateUrl:'fullpage-exzample/page3.html',
                controller:'fullpage3Controller'

            })

        }])
    app.controller('fullpage3Controller',['$scope',
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
