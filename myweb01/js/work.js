$(document).ready(function(){
	  $('.zhuoyujia').mouseover(function() 
	{ 
		$('.zhuoyujia').css("background", "url(../img/work/zyj1.jpg) center top #1C1C1C fixed"),
		$('.zhuoyujia').css("background-size", "cover");
		// $('body').css("background-attachment", "fixed");
	}).mouseleave(function(){
		jQuery('.zhuoyujia').css("background", "#1C1C1C"); 
	});
$('.xingwu').mouseover(function() 
	{ 
		$('.xingwu').css("background", "url(../img/work/wx1.jpg) center top #1C1C1C fixed"),
		$('.xingwu').css("background-size", "cover");
	}).mouseleave(function(){
		jQuery('.xingwu').css("background", "#1C1C1C"); 
	});
 });

// $(window).resize(function() { 
//   var wd = $(document.body).width();

//   if(wd <480){
// 	$('.zhuoyujia').mouseover(function() 
// 	{ 
// 		jQuery('body').css("background", "#1C1C1C"); 
// 	});
// $('.xingwu').mouseover(function() 
// 	{ 
// 		jQuery('body').css("background", "#1C1C1C"); 
// 	});

// }
// else{
// 	$('.zhuoyujia').mouseover(function() 
// 	{ 
// 		$('body').css("background", "url(../img/work/zyj1.jpg) center top #1C1C1C fixed"),
// 		$('body').css("background-size", "cover");
// 		// $('body').css("background-attachment", "fixed");
// 	}).mouseleave(function(){
// 		jQuery('body').css("background", "#1C1C1C"); 
// 	});
// $('.xingwu').mouseover(function() 
// 	{ 
// 		$('body').css("background", "url(../img/work/wx1.jpg) center top #1C1C1C fixed"),
// 		$('body').css("background-size", "cover");
// 	}).mouseleave(function(){
// 		jQuery('body').css("background", "#1C1C1C"); 
// 	});
// }
//});



