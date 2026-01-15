 /*弹窗图放大*/
$(".content_timglt").hover(function () { $("#drag_img").show(); $(".content_timgr").show() }, function () { $("#drag_img").hide(); $(".content_timgr").hide() })
var isie = false;
if ($.browser.msie) {
	isie = true;
}
$(".content_timglt").mousemove(function (e) {
	var xx = 0, yy = 0;
	if (isie) {
		xx = e.originalEvent.x;
		yy = e.originalEvent.y;
	} else {
		xx = e.originalEvent.layerX
		yy = e.originalEvent.layerY
	}
	if (xx >= 80 && xx <= $(".imgborder").width()-80) {
		$("#drag_img").css({ "margin-left": (xx - 80) });
		$(".content_timgr img").css({ "margin-left": (-(xx - 80) * 0.68) });
	}
	if (yy >= 60 && yy <= $(".imgborder").height()-60) {
		$("#drag_img").css({ "margin-top": (yy - 60) });
		$(".content_timgr img").css({ "margin-top": (-(yy - 60) * 0.68) });
	}
})

$("#owl-demo6").owlCarousel({//产品缩略图
	items : 4,
	lazyLoad : true,
	itemsDesktop : [1199, 4],
	itemsDesktopSmall : [979, 4],
	itemsTablet : [768, 4],
	itemsMobile : [479, 4],
	navigation : true
});

$("#owl-demo6 dd").mouseover(function(){//产品缩略图
	 $("#owl-demo6 dd").removeClass("psel");
	 $(this).addClass("psel");
	 $(".imgborder").attr("src",$(this).find("img").attr("src"));
	 	
	$(".body-wrap").show();
	$("#pro_big").find("img").hide().fadeIn();
	 
});

function onesrc(obj,url)
{
	$(obj).find("img").attr("src",url);
}

var wow = new WOW({
	boxClass: 'wow',
	animateClass: 'animated',
	offset: 0,
	mobile: true,
	live: true
});
wow.init();

//$(".product_title .a").click(function(){
//	var linum = $(this).index();
//	var CaseList = $(".product_two").find(".divhidden");	
//	$(".product_title .a").removeClass('on');
//	$(this).addClass('on');
//	CaseList.eq(linum).show().siblings().hide();
//})
$(".owl-demo7").owlCarousel({//产品推荐
	items : 2,
	lazyLoad : true,
	itemsDesktop : [1199, 2],
	itemsDesktopSmall : [979, 2],
	itemsTablet : [768, 1],
	itemsMobile : [479, 1],
	navigation : true
}); 
 