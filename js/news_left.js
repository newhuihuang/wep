var linum=$(".postions_b").find(".isel").index();
var listcase=$(".postions_b a");
if($(window).width()>640)
{
	$(".postions_b a").hover(function(){
		listcase.removeClass("isel");
		$(this).addClass("isel");
	},function(){
		listcase.removeClass("isel");
		listcase.eq(linum).addClass("isel");
	})
}
else
{
	$(".postions_b a").click(function(){
		if($(this).attr("class")!="isel")
		{
			listcase.removeClass("isel");
			$(this).addClass("isel");
		}
		else
		{
			listcase.removeClass("isel");
			listcase.eq(linum).addClass("isel");
		}
	})
}
	$(".closed2").click(function(){
		$(".about_bgs").fadeOut();
		//$(".about_l").removeClass("lws");
		$(".postions_b").removeClass("lws");
		$("body").removeClass("pos");

	})
	$(".rclass").click(function(){
		$('html,body').animate({'scrollTop':0},600);
		$(".about_bgs").fadeIn();
		$(".about_l").addClass("lws");
		$(".postions_b").addClass("lws");
		$("body").addClass("pos");

	})
	$(".about_bgs").click(function(){
		$(".about_bgs").fadeOut();
		$(".about_l").removeClass("lws");
		$(".postions_b").removeClass("lws");
		$("body").removeClass("pos");
	})
