$(document).ready(function(){

	var skTextNub=0
	var htmlTextNub=0
	var cssTextNub=0
	var jsTextNub=0
	var psTextNub=0
	var aiTextNub=0
	var aeTextNub=0
	var dataNub ={
		numberZero:function(){
			skTextNub=0
			htmlTextNub=0
			cssTextNub=0
			jsTextNub=0
			psTextNub=0
			aiTextNub=0
			aeTextNub=0
		},
		numberText:function(){
			var skText=$(".data_nub p").eq(0).text(skTextNub+"%").innerHTML=skTextNub;
			var htmlText=$(".data_nub p").eq(1).text(htmlTextNub+"%").innerHTML=htmlTextNub;
			var cssText=$(".data_nub p").eq(2).text(cssTextNub+"%").innerHTML=cssTextNub;
			var jsText=$(".data_nub p").eq(3).text(jsTextNub+"%").innerHTML=jsTextNub;
			var psText=$(".data_nub p").eq(4).text(psTextNub+"%").innerHTML=psTextNub;
			var aiText=$(".data_nub p").eq(5).text(aiTextNub+"%").innerHTML=aiTextNub;
			var aeText=$(".data_nub p").eq(6).text(aeTextNub+"%").innerHTML=aeTextNub;
			$(".bar_sketch").css({"width":skText+"%"});
			$(".bar_html").css({"width":htmlText+"%"});
			$(".bar_css").css({"width":cssText+"%"});
			$(".bar_js").css({"width":jsText+"%"});
			$(".bar_ps").css({"width":psText+"%"});
			$(".bar_ai").css({"width":aiText+"%"});
			$(".bar_ae").css({"width":aeText+"%"});

		}

	};
//-------------分割线-------------------------------
// $(".work_pro .work_object").each(function (i){
// 		console.log(i-1);

	$(".work_pro .work_object").eq(0).hover(function() { 

		skTextNub=10;
		htmlTextNub=15;
		cssTextNub=40;
		jsTextNub=15;
		psTextNub=20;
		aiTextNub=0;
		aeTextNub=0;
		 dataNub.numberText();
		$(".data").eq(0).css({"opacity":"1"});
		$(".data").eq(1).css({"opacity":"1"});
		$(".data").eq(2).css({"opacity":"1"});
		$(".data").eq(3).css({"opacity":"1"});
		$(".data").eq(4).css({"opacity":"1"});

	},
	function() { 
		dataNub.numberZero();
		dataNub.numberText();
		$(".data").css({"opacity":"0.3"});

	});
//-------------分割线-------------------------------


	$(".work_pro .work_object").eq(1).hover(function() { 

		skTextNub=10;
		htmlTextNub=0;
		cssTextNub=0;
		jsTextNub=0;
		psTextNub=30;
		aiTextNub=60;
		aeTextNub=0;
		 dataNub.numberText();
		$(".data").eq(0).css({"opacity":"1"});
		$(".data").eq(4).css({"opacity":"1"});
		$(".data").eq(5).css({"opacity":"1"});

	},
	function() { 
		dataNub.numberZero();
		dataNub.numberText();
		$(".data").css({"opacity":"0.3"});

	});


//-------------分割线-------------------------------

	$(".work_pro .work_object").eq(2).hover(function() { 
	skTextNub=0
	htmlTextNub=0
	cssTextNub=0
	jsTextNub=0
	psTextNub=35
	aiTextNub=65
	aeTextNub=0

	dataNub.numberText();
	$(".data").eq(4).css({"opacity":"1"});
	$(".data").eq(5).css({"opacity":"1"});

	// $(".data").each(function (i){
	// 			var allText=parseInt($(".data_nub p").text());
	// 			//console.log(allText);
	// 			if(allText>0){
	// 				//console.log(allText);
	// 				$(this).css({"opacity":"1"});
	// 			}
	// 		});
	},
	function() { 
		dataNub.numberZero();
		dataNub.numberText();
		$(".data").css({"opacity":"0.3"});

	});





//-------------分割线-------------------------------
	$(".work_pro .work_object").eq(3).hover(function() { 
	skTextNub=30
	htmlTextNub=0
	cssTextNub=0
	jsTextNub=0
	psTextNub=30
	aiTextNub=40
	aeTextNub=0
	
	dataNub.numberText();
	$(".data").eq(0).css({"opacity":"1"});
	$(".data").eq(4).css({"opacity":"1"});
	$(".data").eq(5).css({"opacity":"1"});
	


	},
	function() { 
		dataNub.numberZero();
		dataNub.numberText();
		$(".data").css({"opacity":"0.3"});
	});

//-------------分割线-------------------------------

	$(".work_pro .work_object").eq(4).hover(function() { 
	// console.log("ixxxx");
	 skTextNub=20
	 htmlTextNub=25
	 cssTextNub=30
	 jsTextNub=15
	 psTextNub=10
	 aiTextNub=0
	 aeTextNub=0
	
	dataNub.numberText();
	$(".data").eq(0).css({"opacity":"1"});
	$(".data").eq(1).css({"opacity":"1"});
	$(".data").eq(2).css({"opacity":"1"});
	$(".data").eq(3).css({"opacity":"1"});
	$(".data").eq(4).css({"opacity":"1"});


	},
	function() { 
		dataNub.numberZero();
		dataNub.numberText();
		$(".data").css({"opacity":"0.3"});
	});




// });



//-------------分割线-------------------------------

	$(window).scroll(function() {
		var headerH = $('.work_pro').offset().top;
		var f1 = $(document).scrollTop();
		if (f1 > headerH){
			// console.log( headerH);
			// console.log( f1);
			$(".work_list").css({"position":"fixed"});
			$(".work_list").css({"top":"10px"});
		}else{
			$(".work_list").css({"position":"relative"});
		}
	});
});





// 鼠标悬浮全屏背景显示图片效果
// $(document).ready(function(){
// 	  $('.zhuoyujia').mouseover(function() 
// 	{ 
// 		$('.zhuoyujia').css("background", "url(../img/work/zyj1.jpg) center top #1C1C1C fixed"),
// 		$('.zhuoyujia').css("background-size", "cover");
// 		// $('body').css("background-attachment", "fixed");
// 	}).mouseleave(function(){
// 		jQuery('.zhuoyujia').css("background", "#1C1C1C"); 
// 	});
// $('.xingwu').mouseover(function() 
// 	{ 
// 		$('.xingwu').css("background", "url(../img/work/wx1.jpg) center top #1C1C1C fixed"),
// 		$('.xingwu').css("background-size", "cover");
// 	}).mouseleave(function(){
// 		jQuery('.xingwu').css("background", "#1C1C1C"); 
// 	});
//  });

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



