


(function ($) {
	// 1、left值 = 固定的宽度 * 当前列的索引值
	// 2、top值 = 当前最低列的高度
	// 3、列里，每添加一个元素，对应列的高度要发生更新

	$.fn.waterFall = function (opts) {


		var defaults = { // 默认参数
			gap: 15
		}

		// 扩张默认参数
		defaults = $.extend(defaults, opts);

		var _this = $(this),//这里的this指的是调用waterFull函数的对象
			gap = defaults.gap,
			items = _this.children(), // 所有子元素
			wrap = _this.width(), // 获取父元素的宽度
			width = items.width(), // 子元素宽度
			height = 0,
			colums = Math.floor((wrap / width)),
			h = []; // 每一列的高

		// 遍历所有子元素
		items.each(function (key, val) {
			height = $(val).height(); // 每一个元素的高度

			if(key < colums) {

				h[key] = height; // 初始化每列的高度

				$(val).css({
					top: 0,
					left: key * (width + gap)
				});
			} else {


				// 找到最小值和最小值下标
				var min_val = h[0];
				var min_key = 0;

				for(var i=0; i<h.length; i++) {
					if(h[i] < min_val) {
						min_val = h[i];
						min_key = i;
					}
				}

				// 更新列高
				h[min_key] = h[min_key] + height;

				// 设置定位坐标
				$(val).css({
					top: min_val + gap,
					left: min_key * (width + gap)
				});
			}
		});

		// this 指的是items

		var max_key = h[0];

		for(var j=0; j<h.length; j++) {
			if(h[j] > max_key) {
				max_key = h[j];
			}
		}

		// 设置父元素的高度
		_this.height(max_key + 1);
	}
})(jQuery);





// (function(){


// 	$.fn.waterFall = function(options){

// 	var defaults = {
// 		gap:15
// 	}
// 	defaults = $.extend(defaults,options)
// 	var _this = $(this);
// 	var gap = defaults.gap;
// 	var items = _this.children();
// 	var fatherWidth = _this.width();
// 	var childWidth = items.width();
// 	var colums = Math.floor(fatherWidth/childWidth);
// 	var height = 0;
// 	var  h = [];

// 	items.each(function(index,val){
// 			var height = $(val).height();
// 			if(index<colums){
// 				h[index] = height; 
// 				$(val).css({
// 					top:0,
// 					left:index*(childWidth+gap)
// 				})
// 			}else{
// 				var min_val = h[0];
// 				var minVal_index =0;

// 				for(var i = 0;i<h.length;i++){
// 					if(min_val>h[i]){
// 						min_val = h[i];
// 						minVal_index = i;
// 					}
// 				}

// 				h[minVal_index] = h[minVal_index]+height;

// 				$(val).css({
// 					top:min_val+gap,
// 					left:minVal_index*(childWidth+gap)
// 				})


// 			}
// 	})
// 	var max_key = h[0];

// 			for(var j=0; j<h.length; j++) {
// 				if(h[j] > max_key) {
// 					max_key = h[j];
// 				}
// 			}

// 			// 设置父元素的高度
// 			_this.height(max_key + 1);

//    }
// })(jQuery)

