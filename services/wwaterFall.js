/**
 * Created by Administrator on 2017/3/14.
 */
(function (angular) {

    // 1、left值 = 固定的宽度 * 当前列的索引值
    // 2、top值 = 当前最低列的高度
    // 3、列里，每添加一个元素，对应列的高度要发生更新

    // 1.创建模块
    var app = angular.module('myWaterService', []);

    //2、创建服务
    app.service('MyWaterServer', ['$window','$timeout', function ($window,$timeout) {

        this.onload =function(dom,callback){
            dom.on('load',function(){
                callback();
            })
        },
        this.waterFall = function (opts) {
            console.log(1);
            var defaults = { // 默认参数
                gap: 15
            }

            // 扩张默认参数
            defaults = angular.element.extend(defaults, opts);

            var ddom = opts.dom;
            //alert(111)
            ddom.css({
                "display":"none"
            })
            $timeout(function () {
                ddom.css({
                    "display":"block"
                })
              // 遍历所有子元素
              items = ddom.children(), // 所有子元素

                  gap = defaults.gap,

                  wrap = ddom.width(),     // 获取父元素的宽度
                  width = items.width(),   // 子元素宽度
                  height = 0,
                  colums = Math.floor((wrap / width)),
                  h = []; // 每一列的高

              //console.log(ddom);
              //console.log(items);

              items.each(function (key, val) {
                  height = angular.element(val).height(); // 每一个元素的高度

                  if (key < colums) {

                      h[key] = height; // 初始化每列的高度

                      angular.element(val).css({
                          top: 0,
                          left: key * (width + gap)
                      });
                  } else {
                      // 找到最小值和最小值下标
                      var min_val = h[0];
                      var min_key = 0;

                      for (var i = 0; i < h.length; i++) {
                          if (h[i] < min_val) {
                              min_val = h[i];
                              min_key = i;
                          }
                      }

                      // 更新列高
                      h[min_key] = h[min_key] + height;

                      // 设置定位坐标
                      angular.element(val).css({
                          top: min_val + gap,
                          left: min_key * (width + gap)
                      });
                  }

              });


              var max_key = h[0];

              for (var j = 0; j < h.length; j++) {
                  if (h[j] > max_key) {
                      max_key = h[j];
                  }
              }

              // 设置父元素的高度
              ddom.height(max_key + 1);
          },200)

        }
    }])
})(angular);