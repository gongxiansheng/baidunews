$(function(){
	refreshNews("精选");
	var type = null;
	$("nav li").click(function(){
		if (!$(this).children().hasClass("click-this")) {
			type = $(this).children().addClass("click-this").text();
			$(this).siblings().each(function(){
				$(this).children().removeClass("click-this");
			});
			
			refreshNews(type);
		}else{
			return;
		}
	});
	console.log(type);
	//滚动条滑动
	//$(window).on("scroll",function(type){//绑定滚动条事件，确定加载
		//console.log(type);
		// if (checkScroll) {//如果触发滚动条，加载
		// 	$.ajax({
		// 		url:"./server/getnews.php",
		// 		// url:"http://localhost/eight_week/server/getnews.php",//此为第二种引用方式（笔记）
		// 		dataType:"json",
		// 		type: "get",
		// 		data:{newstype:type},
		// 		success:function(data){
		// 			console.log(data);
		// 			for( var p in data){
		// 				if (data[p].newstype =="图片") {
		// 					var $li = $("<li>").addClass("imgnews-container clearfix").appendTo($lists);
		// 					var $a = $("<a>").addClass('img-a').prependTo($li);
		// 					var $image = $("<img>").attr("src",data[p].newsimg).addClass('img-item').appendTo($a);
		// 					var $h4 = $("<h4>").addClass('title').html(data[p].newstitle).prependTo($a);
		// 				}else{
		// 				// console.log(data[p].newsimg);
		// 					var $li = $("<li>").addClass("list clearfix").appendTo($lists);
		// 					var $a = $("<a>").addClass('list-a').prependTo($li);
		// 					var $image = $("<div>").addClass('list-image').prependTo($a);
		// 					var $img = $("<img>").attr("src",data[p].newsimg).addClass('newsimg').prependTo($image);
		// 					var $info = $("<div>").addClass("info").appendTo($a);
		// 					var $h4 = $("<h4>").addClass('newstitle').html(data[p].newstitle).prependTo($info);
		// 					var $datetime = $("<div>").addClass("datetime").appendTo($info);
		// 					var $newstime = $("<span>").addClass("newstime").html(data[p].newstime).prependTo($datetime);
		// 					var $hobby = $("<span>").addClass('hobby').html(data[p].newssrc).appendTo($datetime);
		// 				}
		// 			}
		// 		},
		// 		error:function() {
		// 			console.log("请求失败");
		// 		},
		// 	});
		// }
        
    // });
});


function refreshNews(type){
	var $lists =$("article ul");
	$lists.empty();
	$.ajax({
		url:"./server/getnews.php",
		// url:"http://localhost/eight_week/server/getnews.php",//此为第二种引用方式（笔记）
		dataType:"json",
		type: "get",
		data:{newstype:type},
		success:function(data){
			console.log(data);
			for( var p in data){
				if (data[p].newstype =="图片") {
					var $li = $("<li>").addClass("imgnews-container clearfix").appendTo($lists);
					var $a = $("<a>").addClass('img-a').prependTo($li);
					var $image = $("<img>").attr("src",data[p].newsimg).addClass('img-item').appendTo($a);
					var $h4 = $("<h4>").addClass('title').html(data[p].newstitle).prependTo($a);
				}else{
				// console.log(data[p].newsimg);
					var $li = $("<li>").addClass("list clearfix").appendTo($lists);
					var $a = $("<a>").addClass('list-a').prependTo($li);
					var $image = $("<div>").addClass('list-image').prependTo($a);
					var $img = $("<img>").attr("src",data[p].newsimg).addClass('newsimg').prependTo($image);
					var $info = $("<div>").addClass("info").appendTo($a);
					var $h4 = $("<h4>").addClass('newstitle').html(data[p].newstitle).prependTo($info);
					var $datetime = $("<div>").addClass("datetime").appendTo($info);
					var $newstime = $("<span>").addClass("newstime").html(data[p].newstime).prependTo($datetime);
					var $hobby = $("<span>").addClass('hobby').html(data[p].newssrc).appendTo($datetime);
				}
			}
		},
		error:function() {
			console.log("请求失败");
		},
	});
}
function checkScroll(){
    var $lastli = $(".lists").last();//获取最后一个盒子
    console.log($lastli);
    var lastLiH = $lastli.offset().top;//获取最后一个盒子距离页面顶部的距离
    var lastLiDis = lastLiH + Math.floor($lastli.outerHeight()/2);//最后一个盒子中心距离页面高度
    var $h = $(window).height();//获取页面高度
    var $scrollH = $(window).scrollTop();//获取滚动条滑动的距离
    return (lastLiDis<$h+$scrollH)?true:false;
}