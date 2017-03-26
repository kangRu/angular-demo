/**
 * Created by Administrator on 2017/3/9.
 */
(function(angular){
    var app = angular.module('my_02',['ngRoute']);
    app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
        $locationProvider.hashPrefix('');
        $routeProvider.when('/my02',{
            templateUrl:'my02/02.html',
            controller:'my02Controller'
        })

    }])
    app.controller('my02Controller',['$scope',function($scope){

        var flag = true;//表示节流阀是打开的

        var config = [
            {
                "width": 400,
                "top": 20,
                "left": 50,
                //"opacity": 0.2,
                "zIndex": 2
            },//0
            {
                "width":500,
                "top": 70,
                "left": 0,
                //"opacity": 0.8,
                "zIndex": 3
            },//1
            {
                "width":700,
                "top": 100,
                "left": 200,
                //"opacity": 1,
                "zIndex": 4
            },//2
            {
                width: 500,
                top: 70,
                left: 600,
                //opacity: 0.8,
                zIndex: 3
            },//3
            {
                "width": 400,
                "top": 20,
                "left": 750,
                //"opacity": 0.2,
                "zIndex": 2
            }//4
        ];//其实就是一个配置单 规定了每张图片的大小位置层级透明度
        //找人
        var wrap = document.getElementById("wrap1");
        var slide = document.getElementById("slide");
        var ul = slide.children[0];
        var lis = ul.children;
        var arrow = document.getElementById("arrow");
        var arrLeft = document.getElementById("arrLeft");
        var arrRight = document.getElementById("arrRight");
        var timer = null;
        //alert("加载成功");
        //鼠标经过盒子 让箭头 渐渐地 显示出来

        //$scope.over = function(){
            wrap.onmouseover = function () {
                animate(arrow, {"opacity": 1});
            };
        //}
        //$scope.over();


        //离开盒子渐渐隐藏

        //$scope.out = function(){
            wrap.onmouseout = function () {
                animate(arrow, {"opacity":.7});
            };
        //}
        //$scope.out();
        //$scope.assign =
            function assign() {
            //让所有的li 按照配置单 渐渐地 各就各位
                for (var i = 0; i < lis.length; i++) {
                    //
                    animate(lis[i], config[i], function () {
                        flag = true;//动画执行完成后 让falg为true 打开节流阀
                    });
                }
            }

        //$scope.
        assign();

        //3.点击箭头 实现旋转
        //点击右箭头 让配置单 把最前的放到最后
       //$scope.clickR = function(){

           arrRight.onclick = function () {
               if (flag) {//如果节流阀是打开的 才能执行动画
                   flag = false;//只要执行了 就把节流阀先关闭
                   //arr.push(arr.shift());
                   config.push(config.shift());
                   //然后还要让每一个li 根据新生成的配置单 重新从当前位置跑到新的位置
                   //$scope.
                       assign();
               }
           };


       //}

        //$scope.clickR();



        //$scope.clickL= function(){

            arrLeft.onclick = function () {
                //把最后的元素放到最前
                //arr.unshift(arr.pop());
                config.unshift(config.pop());
                //$scope.
                    assign();
            };


        //}

        //$scope.clickL();
        //4.节流阀 点击箭头后就不能再点击了 当前动画执行完成后 才能再点击
        timer = setInterval(function(){
           //$scope.clickR();
            arrRight.onclick();

        },2000)


        angular.element(slide).on('mouseover',function(){
            clearInterval(timer);


        })

        slide.onmouseout =function(){
            timer = setInterval(function(){
                arrRight.onclick();
            },2000)
        }





        function animate(obj, json, fn) {
            clearInterval(obj.timer);
            obj.timer = setInterval(function () {
                var flag = true;
                for (var k in json) {
                    if (k === "opacity") {
                        var leader = getStyle(obj, k) * 100;
                        var target = json[k] * 100;
                        var step = (target - leader) / 10;
                        step = step > 0 ? Math.ceil(step) : Math.floor(step);
                        leader = leader + step;
                        obj.style[k] = leader / 100;
                    } else if (k === "zIndex") {
                        obj.style.zIndex = json[k];
                    } else {
                        var leader = parseInt(getStyle(obj, k)) || 0;
                        var target = json[k];
                        var step = (target - leader) / 10;
                        step = step > 0 ? Math.ceil(step) : Math.floor(step);
                        leader = leader + step;
                        obj.style[k] = leader + "px";
                    }
                    if (leader != target) {
                        flag = false;
                    }
                }
                if (flag) {
                    clearInterval(obj.timer);
                    if (fn) {
                        fn();
                    }
                }
            }, 15);
        }
        function getStyle(obj, attr) {
            if (window.getComputedStyle) {
                return window.getComputedStyle(obj, null)[attr];
            } else {
                return obj.currentStyle[attr];
            }
        }



        $scope.none = function(){

            angular.element('.mask').css({
                display:'none'
            })
        }







    }])


})(angular)