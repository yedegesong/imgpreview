/*--
author:夜的歌颂
time:2015-09-01
--*/
;
(function (window, $) {
	$.fn.zoomImg = function (index) {
		var _this = this,
		_index = _this.index(),
		lis,
		config={
			PreviewBox:$('#Jslider'),
			closeDom:$("#J-close"),
			baseImgSrc:'data:image/gif;base64,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'
		},
		pics={},
		ImgArr=[];
		//存放DOM元素长度
		var domArr=[];
		//判断是否是移动端
		var hasTouch = function(){
		  var touchObj={};
		  touchObj.isSupportTouch = "ontouchend" in document ? true : false;
		  touchObj.isEvent=touchObj.isSupportTouch?'tap':'click';
		  return touchObj.isEvent;
		};
		//默认模板属性
		var __ = {
			aTel : '<div class="J-slider" id="Jslider"><div class="J-slider-cont"></div></div>',
			bTel : '<div class="slide"><div class="pinch-zoom"><img src="'+config.baseImgSrc+'"/></div></div>',
			closeTel : '<div class="ctrlbar">' +
			'<a id="J-close" href="javascript:;">关闭</a>' +
			'<span id="J-curPage">0</span><span id="J-pageCount">/0</span>' +
			'</div>',
			index : _index
		};
		__.closeCak = function () {
			$("#J-close").on('click', function () {
				$('#Jslider').remove();
			});
			$(window).off("touchmove");
		};
		//图片全部加载完成
		/*__.addHtml = function () {
			$(__.aTel).appendTo('body');
			$(__.closeTel).appendTo('#Jslider');
			lis = _this.parent().children('li');
			lis.each(function (i, v) {
				var _this=$(this);
				var a = $(__.bTel).appendTo(".J-slider-cont");
				//单张的时候使用
				//var s=$(".pinch-zoom").eq(i);
				pics[i]=new Image();
				pics[i].src=$(this).find("img").attr("data-src");
				$(pics[i]).on('load',function(){
                    ImgArr.push(pics[i]);
                   __.initPis();
                });
			});
		};*/
		//单张加载完成
		__.addHtml = function () {
			$(__.aTel).appendTo('body');
			$(__.closeTel).appendTo('#Jslider');
			lis = _this.parent().children('li');
			lis.each(function (i, v) {
				var _this=$(this);
				var a = $(__.bTel).appendTo(".J-slider-cont");
				//var s=$(".pinch-zoom").eq(i);
				var src=$(this).find("img").attr("data-src");
				ImgArr.push(src);
			});
		};
		__.showImg = function(index){
			var s=$(".pinch-zoom").eq(index).find('img');
			console.log(s.attr('src')+'---'+ImgArr[index])
			//判断创建过一次对象后不再创建
			if(s.attr('src')==ImgArr[index]){return false;}
			var pic = new Image();
			pic.src=ImgArr[index];
			
			$(pic).on('load',function(){
                   s.attr({'src':pic.src})
                });
		};
		//图片加载完成之后调用
		/*__.initPis = function(){
			if(ImgArr.length===lis.length){
				console.log(pics)
　　　　　　　　//当图片都加载完成后执行的方法
                $.each(pics,function(i,n){
                	var s=$(".pinch-zoom").eq(i);
                	s.find('img').attr({'src':n.src});
                });
            }
		};*/
		__.allPage = function () {
			$("#J-pageCount").html('/' + lis.length);
		};
		__.nowPage = function (index) {
			$("#J-curPage").html(index + 1);
		};
		__.zoomImgCalk = function () {
			$('div.pinch-zoom').each(function () {
				new RTP.PinchZoom($(this), {});
			});
		};
		__.anAddCls = function () {
			var t = setTimeout(function () {
					$("#J-sliderImg").addClass("on");
					clearTimeout(t);
				}, 500)
		};
		__.swipeChange = function (a) {
			$(".J-slider-cont").css({
				"-webkit-transform" : "translate(" + ((-a) * 100) + "%, 0px) translateZ(0px)"
			});
			__.nowPage(a);
			//显示相对应图片
			__.showImg(a);
		}
		__.addEvent = function () {
			$("#Jslider").swipe({
				swipeLeft:function(event, direction, distance, duration, fingerCount){
					__.index++;
					if (__.index > lis.length - 1) {
						__.index = lis.length - 1;
						return false;
					}
					__.swipeChange(__.index)
				},
				swipeRight:function(){
					__.index--;
					if (__.index < 0) {
						__.index = 0;
						return false;
					}
					__.swipeChange(__.index);
				},
				threshold:5
			})
		};
		__.anAddCls = function () {
			var t = setTimeout(function () {
					$("#Jslider img").addClass("on");
					clearTimeout(t);
				}, 500);
		};
		//主入口函数
		__.init = function () {
			$(window).on("touchmove", function (t) {
				t.preventDefault()
			});
			__.addHtml();
			__.zoomImgCalk();
			__.allPage();
			__.nowPage(_index);
			__.addEvent();
			__.closeCak();
			__.swipeChange(_index);
			__.anAddCls();
		};
		__.init();
	}
})(window, Zepto);
