$(function(){
	// 页面加载完刷新新闻列表
	refreshNews("");
	// 导航栏 新闻编辑切换
	$("#btn-addnews").on("click",function(){
		console.log($(this).hasClass("none"));
		if (!$("#addnews").hasClass('none')) {
			return;
		}else{
			$("#addnews").removeClass("none").siblings().addClass("none");
		}
	});
	// 导航栏 新闻详情切换
	$("#btn-newslists").on("click",function(){
		console.log($(this).hasClass("none"));
		if (!$("#newslists").hasClass('none')) {
			return;
		}else{
			$("#newslists").removeClass("none").siblings().addClass("none");
			refreshNews("");
		}
	});
	//新闻提交按钮
	$(".submit").on("click",function(event){
		event.preventDefault();
		var $newstitle = $("#newstitle").val();
		var $newstype = $("#newstype").val();
		var $newsimg = $("#newsimg").val();
		var $newssrc = $("#newssrc").val();
		var $newstime = $("#newstime").val();
		var imgReg = /^img\/\d+\.(jpg|png|jpeg)$/;
		var isImg = imgReg.test($newsimg);
		console.log(isImg);
		if ($newstitle=="" || $newsimg=="") {
			if ($newstitle==""){
				$("#newstitle").next().css({"opacity":"1","transform":"translateY(0)"});
				if(isImg==false && $newsimg){
					console.log($("#newsimg").next().next());
					$("#newsimg").next().next().css({"opacity":"1","transform":"translateY(0)"});
				}
			}
			if ($newsimg==""){
				$("#newsimg").next().css({"opacity":"1","transform":"translateY(0)"});
			}
			// if ($newssrc==""){
			// 	$("#newssrc").next().css({"opacity":"1","transform":"translateY(0)"});
			// 	if(isImg==false && $newsimg){
			// 		console.log($("#newsimg").next().next());
			// 		$("#newsimg").next().next().css({"opacity":"1","transform":"translateY(0)"});
			// 	}
			// }
			
		}else if(isImg==false){
			$(".form-group .blank").css({"opacity":"0","transform":"translateY(-20px)"});
			console.log($("#newsimg").next().next());
			$("#newsimg").next().next().css({"opacity":"1","transform":"translateY(0)"});
		}else{
			$("#newsimg").next().next().css({"opacity":"0","transform":"translateY(-30px)"});
			var jsonNews = {
							newstitle:$newstitle,
							newstype:$newstype,
							newsimg:$newsimg,
							newssrc:$newssrc,
							newstime:$newstime,
							};
			console.log(jsonNews);
			$.ajax({
				url:"./server/addnews.php",
				type:"post",
				data:jsonNews,
				dataType: "json",
				success:function(data){
					console.log(data);
					alert("提交成功");
					$("#newstitle").val("");
					$("#newstype").val("精选");
					$("#newsimg").val("");
					$("#newssrc").val("");
					$("#newstime").val("");
					$("#btn-newslists").click();
				},
				error:function() {
					console.log("失败");
				},
			});
		
		}
	});
	//输入框获取焦点
	$("#newstitle,#newsimg,#newssrc").focus(function(){
		$(this).next(".blank").css({"opacity":"0","transform":"translateY(-20px)"});
		$(this).nextAll(".rformat").css({"opacity":"0","transform":"translateY(-20px)"});
	})



	//新闻重置按钮
	$("#addnews .btn-default").click(function(){
		$("#newsimg").next().next().css({"opacity":"0","transform":"translateY(-30px)"});
		$(".form-group .blank").css({"opacity":"0","transform":"translateY(-20px)"});
	})
	var $newsid = null;
	// 修改按钮
	$("#newstable tbody").on("click","#modifynews",function(){
		$("#modifyModal").modal('show');

		$newsid = $(this).parent().prevAll().eq(5).text();
		$.ajax({
			url:"./server/getnew.php",
			type:"post",
			data:{newsid: $newsid},
			dataType:"json",
			success:function(data){
				console.log(data);
				for( var p in data){
					$("#m-newstitle").val(data[p].newstitle);
					$("#m-newstype").val(data[p].newstype);
					$("#m-newsimg").val(data[p].newsimg);
					$("#m-newstime").val(data[p].newstime);
					$("#m-newssrc").val(data[p].newssrc);
				}
				

			}
		});
	});
	//修改确认按钮
	$("#modifyconfirm").on("click",function(){
		var jsonNews = {
						newsid:$newsid,
						newstitle:$("#m-newstitle").val(),
						newstype:$("#m-newstype").val(),
						newsimg:$("#m-newsimg").val(),
						newssrc:$("#m-newssrc").val(),
						newstime:$("#m-newstime").val(),
						};
		console.log(jsonNews);
		if ($newsid) {
			$.ajax({
				url:"./server/modifyenews.php",
				dataType:"json",
				data:jsonNews,
				type: "post",
				success:function(data){
					console.log(data);
					$("#modifyModal").modal('hide');
					refreshNews("");

				},
				error:function(){
					console.log("修改失败");
				}
			});
		}
	});

	//新闻删除按钮
	$("#newstable tbody").on("click","#deletenews",function(){
		$("#deleteModal").modal('show');
		$newsid = $(this).parent().prevAll().eq(5).text();
		
	});

	//删除确认按钮
	$("#deleteconfirm").on("click",function(){
		console.log($newsid);
		if ($newsid) {
			$.ajax({
				url:"./server/deletenews.php",
				dataType:"json",
				data:{newsid: $newsid},
				type: "post",
				success:function(data){
					console.log(data);
					$("#deleteModal").modal('hide');
					refreshNews("");

				},
				error:function(){
					console.log("删除失败");
				}
			});
		}
	});
});


function refreshNews(type){
	var $newstable = $("#newstable tbody");
	$newstable.empty();
	$.ajax({
		url:"./server/getnews.php",
		// url:"http://localhost/eight_week/server/getnews.php",
		dataType:"json",
		type: "get",
		data:{newstype:type},
		success:function(data){
			console.log(data);
			for( var p in data){
				console.log(data[p].newsimg);
				var $tr = $("<tr>").appendTo($newstable);
				var $newsid = $("<td>").html(data[p].newsid).prependTo($tr);
				var $newstitle = $("<td>").html(data[p].newstitle).appendTo($tr);
				var $newstype = $("<td>").html(data[p].newstype).appendTo($tr);
				var $newsimg = $("<td>").html(data[p].newsimg).appendTo($tr);
				var $newssrc = $("<td>").html(data[p].newssrc).appendTo($tr);
				var $newstime = $("<td>").html(data[p].newstime).appendTo($tr);
				var $td = $("<td>").appendTo($tr);
				var $modifynews = $("<button>").attr({type:"button",id:"modifynews"}).addClass('btn btn-success btn-sm').html("修改").prependTo($td);
				var $deletenews = $("<button>").attr({type:"button",id:"deletenews"}).addClass('btn btn-danger btn-sm').html("删除").appendTo($td);
				
			}
		},
		error:function() {
			console.log("请求失败");
		},
	});
}