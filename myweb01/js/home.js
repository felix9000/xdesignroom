//头部导航收缩
$(document).ready(function(){
	$('.header_arow').click(function(){
		if($(this).children('img').hasClass('down_arow')){
			$('.header_arow').children('img').removeClass('down_arow').addClass('up_arow');
			$('.top_menu').css({'height':'90px'});
		}else{
			$('.header_arow').children('img').removeClass('up_arow').addClass('down_arow');
			$('.top_menu').css({'height':'0px'});
		}
	});	
});
//头部导航实时侦听浏览器宽度
$(window).resize(function() { 
  var wd = $(document.body).width();
  if(wd >480){
		$('.header_arow').children('img').removeClass('up_arow').addClass('down_arow');
		$('.top_menu').css({'height':'0px'});
	}
//  alert($(window).width()); //浏览器时下窗口可视区域宽度 
//  alert($(window).height()); //浏览器时下窗口可视区域高度 
//  alert($(document).height()); //浏览器时下窗口文档的高度 
//  alert($(document.body).height());//浏览器时下窗口文档body的高度 
//  alert($(document.body).outerHeight(true));//浏览器时下窗口文档body的总高度 包括border padding margin 
//  
//  alert($(document).width());//浏览器时下窗口文档对于象宽度 
//  alert($(document.body).width());//浏览器时下窗口文档body的高度 
//  alert($(document.body).outerWidth(true));//浏览器时下窗口文档body的总宽度 包括border padding margin 
});

//首页点logo背景变亮
$(document).ready(function(){
	$('.logo').mouseover(function(){
		$('.wap').addClass('opactiy_ease');
		});
	$('.logo').mouseout(function(){
		$('.wap').removeClass('opactiy_ease');
		});
});