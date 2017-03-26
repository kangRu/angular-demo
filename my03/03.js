/**
 * Created by Administrator on 2017/3/9.
 */
(function(angular){
    var app = angular.module('my_03',['ngRoute']);
    app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
        $locationProvider.hashPrefix('');
        $routeProvider.when('/my03',{
            templateUrl:'my03/03.html',
            controller:'my03Controller'
        })

    }])
    app.controller('my03Controller',['$scope',function($scope){

        var box = document.getElementById("box");
        var smallBox = document.getElementById("smallBox");
        var mask = document.getElementById("masks");
        var bigBox = document.getElementById("bigBox");
        var bigImg = bigBox.children[0];

        //鼠标经过盒子 显示 mask 和 bigBox
        angular.element(smallBox).on('mouseover',function () {
            bigBox.style.display = "block";
            mask.style.display = "block";
        })
        //离开盒子隐藏 mask 和 bigBox
        smallBox.onmouseout = function () {
            bigBox.style.display = "none";
            mask.style.display = "none";
        };

        //遮罩跟随鼠标
        //鼠标在盒子中移动 计算鼠标在盒子中的座标 根据鼠标座标 设置mask的位置
        smallBox.onmousemove = function (event) {
            var event = event || window.event;
            //获取鼠标在页面上的座标
            var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft;
            var pageY = event.pageY || event.clientY + document.documentElement.scrollTop;
            //计算鼠标在盒子中的座标
            //鼠标在页面上的水平位置 - 盒子在页面上的水平位置
            //注意 这里计算盒子在页面的水平位置的时候 不能用smallBox的offsetLeft因为父盒子有定位
            var boxX = pageX - box.offsetLeft;
            var boxY = pageY - box.offsetTop;
            //根据鼠标在盒子中的座标 设置遮罩的位置
            var maskX = boxX - mask.offsetWidth / 2-70;
            var maskY = boxY - mask.offsetHeight / 2;

            //根据数值设置位置之前要做判断
            if (maskX < 0) {
                maskX = 0;
            }
            //向右的最大移动范围 是 smallBox的宽度-mask的宽度
            if (maskX > smallBox.offsetWidth - mask.offsetWidth) {
                maskX = smallBox.offsetWidth - mask.offsetWidth;
            }
            if (maskY < 0) {
                maskY = 0;
            }
            if (maskY > smallBox.offsetHeight - mask.offsetHeight) {
                maskY = smallBox.offsetHeight - mask.offsetHeight;
            }
            // console.log(maskX + "---" + maskY);

            //按照遮罩的位置设置left和top
            mask.style.left = maskX + "px";
            mask.style.top = maskY + "px";


            //按照比例移动大图


            //rate = 大图移动的总距离 / 遮罩移动的总距离

            // 大图移动的总距离 = 大图片的宽度 - 大盒子的宽度
            var bigToMove = bigImg.offsetWidth - bigBox.offsetWidth;
            // 遮罩移动的总距离 = 小盒子的宽度 - 遮罩的宽度
            var maskToMove = smallBox.offsetWidth - mask.offsetWidth;

            var rate = bigToMove / maskToMove;

            //大图片现在的位置 = 大图片可以移动的总距离 / 遮罩可以移动的总距离 * 遮罩现在的位置

            //大图当前的位置 = - rate *  遮罩当前的位置 注意 移动方向相反

            bigImg.style.left = -rate * maskX + "px";
            bigImg.style.top = -rate * maskY + "px";


        };



    }])

})(angular)