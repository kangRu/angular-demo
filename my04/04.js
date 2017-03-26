/**
 * Created by Administrator on 2017/3/9.
 */
(function(angular){
    var app = angular.module('my_04',['ngRoute']);
    app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
        $locationProvider.hashPrefix('');
        $routeProvider.when('/my04',{
            templateUrl:'my04/04.html',
            controller:'my04Controller'
        })

    }])
    app.controller('my04Controller',['$scope',function(){

        // 百度地图API功能
        var map = new BMap.Map("allmap");    // 创建Map实例
        //map.centerAndZoom(new BMap.Point(34.271,108.943), 11);  // 初始化地图,设置中心点坐标和地图级别
        map.centerAndZoom("西安",12);
        map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
        //map.setCurrentCity("西安");          // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    }])


})(angular)