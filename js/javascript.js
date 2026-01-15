var ua = navigator.userAgent;
var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
isIphone =!ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
isAndroid = ua.match(/(Android)\s+([\d.]+)/),
isMobile = isIphone || isAndroid || ipad;

//鼠标跟随
if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i))) {
}else{
dotMove();
}
function dotMove(e) {
    var obj = $("#c-followDot");
    var aA = $("a");
    var bW = $("body").width() - 25;
    $(document).mousemove(function(e) {
        var endx = e.clientX;
        var endy = e.clientY;
        if (endx > bW) {
            endx = bW;
        }
        obj.css({ "left": endx + "px", "top": endy + "px" });
    });
    aA.hover(function() {
        obj.addClass("c-active");
    }, function() {
        obj.removeClass("c-active");
    });
}


// 手机弹出导航菜单
$(function(){
	if( $(window).width()<1200 ){
		$(".header .menuBtn").click(function(){
			$(".wrapper").toggleClass("shiftLeft");
			$(".mainFilter").fadeToggle();
		});
		$(".mainFilter").click(function(){
			$(".wrapper").removeClass("shiftLeft");
			$(".mainFilter").fadeToggle();
		});
	}
});


// 导航变化
$(window).scroll(function(){
	var top = 400;
	if( $(window).width()<1200 ){
		top = 200;
	}
	if( $(document).scrollTop() >= top  ){
		$('.header').addClass("dark");
	}else{
		$('.header').removeClass("dark");
	}
});


//导航下拉
$(function(){
	if( $(window).width()>=1200 ){
		$(".header .nav li").hover(
			function(){
				$(this).find(".sub").stop().slideDown(150);
			},function(){
				$(this).find(".sub").stop().slideUp(150);
			}
		);
	}
	if( $(window).width()<1200 ){
		$(".header .nav>ul>li>a").click(function(){
			var li = $(this).parent('li');
			li.find('.sub').parent('li').children('a').attr("href","javascript:void(0);");
			if( li.find(".sub").is(':hidden') ){
				li.find(".sub").stop().slideDown(150);
				li.siblings('li').find('.sub').stop().slideUp(150);
				li.addClass('now').siblings('li').removeClass('now');
			}else{
				li.find(".sub").stop().slideUp(150);
				li.removeClass('now');
			}
		});
	}
});


// 语言选择
$(function(){
	if( $(window).width()>=1200 ){
		$('.header .language').hover(function(){
			$(this).find('.list').stop().slideToggle(150);
		});
	}
	if( $(window).width()<1200 ){
		shoushuo($('.header .language .btn'),$('.header .language .list'));
	}
});


//导航搜索
$(function(){
	var searchBar = $(".header .searchBox .searchBar");
	var searchBtn = $(".header .searchBox .searchBtn");
	var close = $(".header .searchBox .close");
	if( $(window).width()>=1200 ){
		searchBtn.click(function(event){
			event.stopPropagation();
			if( searchBar.is(":hidden") ){
				searchBar.fadeIn(200);
				searchBar.find("input[type='text']").focus();
			}else{
				searchBar.fadeOut(200);
			}
		});
		searchBar.click(function(event){
			event.stopPropagation();
		});
		$('.wrapper').click(function(){
			searchBar.fadeOut(200);
		});
		close.click(function(){
			searchBar.fadeOut(200);
		});
		$(window).scroll(function(){
			if($(window).scrollTop()>100){
				searchBar.fadeOut(200);
			}
		});
	}
	if( $(window).width()<1200 ){
		searchBtn.click(function(){
			if( searchBar.is(":hidden") ){
				searchBar.fadeIn(200);
				searchBar.find("input[type='text']").focus();
				$(".header").addClass('on');
				$(".mainFilter").fadeIn(200);
			}else{
				searchBar.fadeOut(200);
				$(".header").removeClass('on');
			}
		});
		$(".mainFilter").click(function(){
			$(this).fadeOut(200);
			searchBar.fadeOut(200);
			$(".header").removeClass('on');
		});
	}
});

//底部收缩
$(function(){
	if( $(window).width()<1200 ){
		var tit = $('.footer .linkList .list .tit');
		tit.click(function(event){
			event.stopPropagation();
			var a = $(this).siblings('ul').find('li').parents('ul').siblings('.tit');
			a.attr("href","javascript:void(0);");
			var ul = $(this).siblings('ul');
			if( ul.is(':hidden') ){
				ul.slideDown(150);
				$(this).parents('.list').siblings('.list').find('ul').slideUp(150);
			}else{
				ul.slideUp(150);
			}
		});
		$('.wrapper').click(function(){
			$('.footer .linkList .list ul').slideUp(150);
		});
	}
});


//收缩下拉
function shoushuo(tit,ul){
	var memory;
	tit.click(function(event){
		event.stopPropagation();
		memory = $(window).scrollTop();
		if(ul.is(':hidden')){
			ul.slideDown(150);
			tit.addClass('on');
		}else{
			ul.slideUp(150);
			tit.removeClass('on');
		}
	});
	$(window).scroll(function(){
		if( $(window).scrollTop()>memory+200 || $(window).scrollTop()<memory-200 ){
			tit.removeClass('on');
			ul.slideUp(150);
		}
	});
	ul.click(function(event){
		event.stopPropagation();
	});
	$('.wrapper').click(function(){
		ul.slideUp(150);
		tit.removeClass('on');
	});
}
$(function(){
	if( $(window).width()<1200 ){
		shoushuo($('.columnMenu .tit'),$('.columnMenu ul'));
	}
});



//产品详情页-tab切换
function tabSwitch(tab,tabBox,xzq,ck){
	var li = tab.find(xzq);
	var on = li.index( tab.find(".on") );
	tabBox.children("div").eq(on).show().siblings().hide();
	if( ck==0 ){
		li.mouseenter(function(){
			$(this).addClass("on").siblings().removeClass("on");
			var index = li.index(this);
			tabBox.children("div").eq(index).show().siblings().hide();
		});
	}else{
		li.click(function(){
			$(this).addClass("on").siblings().removeClass("on");
			var index = li.index(this);
			tabBox.children("div").eq(index).show().siblings().hide();
		});
	}
}
$(function(){
	tabSwitch( $(".productdetail .tab"),$(".productdetail .tabBox"),"li",1 );
});


//返回顶部
jQuery(document).ready(function() {
	$('.aside-top').on('click', function(e) {$("body,html").animate({scrollTop: '0px'}, 500);});
});

var new_scroll_position = 0;
	var last_scroll_position;
	window.addEventListener('scroll', function(e) {
		last_scroll_position = window.pageYOffset;//window.scrollY/window.pageYOffset
		if (new_scroll_position < last_scroll_position && last_scroll_position > 50) {
			// $(".riifo-header").removeClass("scroll-top").addClass("scroll-down");
			// $(".riifo-product-detail-nav").removeClass("top100");
			$(".aside-top").show();
		} else if (new_scroll_position > last_scroll_position) {
			// $(".riifo-header").removeClass("scroll-down").addClass("scroll-top");
			// $(".riifo-product-detail-nav").addClass("top100");
			$(".aside-top").show();
		}
		var scrollTop = $(this).scrollTop();
		if(scrollTop <= 0){
			// $(".riifo-header").removeClass("scroll-top").removeClass("scroll-down");
			// $(".riifo-product-detail-nav").removeClass("top100");
			$(".aside-top").hide();
		}
		new_scroll_position = last_scroll_position;
	})
//返回顶部

//高度相等
$(function(){
	if( $(window).width()>=1200 ){
		listHeight($(".contactPage .col .tit"),2);
		setTimeout('listHeight($(".contactPage .col .tit"),2)',300);
		listHeight($(".contactPage .col .txt"),2);
		setTimeout('listHeight($(".contactPage .col .txt"),2)',300);
	}
});
function listHeight(list,row){
	if(row==0){
		row = list.length;
	}
	for( var i = 0; i<list.length; i++ ){
		list.eq(i).css("min-height","auto");
	}
	for( var i = 0; i<list.length; i++ ){
		var maxHeight = 0;
		if( i % row == 0 ){
			for( var k=0; k<row; k++ ){
				if( maxHeight < list.eq(i+k).height() ){
					maxHeight = list.eq(i+k).height();
				}
			}
			for( var k=0; k<row; k++ ){
				list.eq(i+k).css("height",maxHeight);
			}
		}
	}
}

// 加载
$(window).load( function(){
	$(".loadingTop").hide();
	$(".wrapper").css({"opacity":"1","filter":"alpha(opacity=100)"});
});



//JS操作cookies方法!setCookie("name","hayden");alert(getCookie("name"));
//写cookies
function setCookie(name,value)
{
var Days = 30;
var exp = new Date();
exp.setTime(exp.getTime() + Days*24*60*60*1000);
document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
//读取cookies
function getCookie(name)
{
var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
if(arr=document.cookie.match(reg)) return unescape(arr[2]);
else return null;
}
//删除cookies
function delCookie(name)
{
var exp = new Date();
exp.setTime(exp.getTime() - 1);
var cval=getCookie(name);
if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}


//获取地址参数
var $_GET = (function(){
	var url = window.document.location.href.toString();//当前完整url
	var u = url.split("#");//以#为分隔符把url转换成字符串数组
	if(typeof(u[1]) == "string"){
		u = u[1].split("&");//同上
		var get = {};
		for(var i in u){
			var j = u[i].split("=");//同上
			get[j[0]] = j[1];
		}
		return get;
	} else {
		return {};
	}
})();
var $_POST = (function(){
	var url = window.document.location.href.toString();//当前完整url
	var u = url.split("?");//以？为分隔符把url转换成字符串数组
	if(typeof(u[1]) == "string"){
		u = u[1].split("&");//同上
		var get = {};
		for(var i in u){
			var j = u[i].split("=");//同上
			get[j[0]] = j[1];
		}
		return get;
	} else {
		return {};
	}
})();

//禁止鼠标右键
// var _hmt = _hmt || [];
// (function() {
//   var hm = document.createElement("script");
//   hm.src = "https://hm.baidu.com/hm.js?1abef4a2a8d9ae86cd356ef4a9c9d448";
//   var s = document.getElementsByTagName("script")[0];
//   s.parentNode.insertBefore(hm, s);
// })();
//
// var omitformtags=["input", "textarea", "select"];
// omitformtags=omitformtags.join("|");
// oncontextmenu="return true;" //禁止鼠标右键
// ondragstart="return false;" //禁止鼠标拖动
// onselectstart="return false;"//文字禁止鼠标选中
// onselect="document.selection.empty();"//禁止复制文本
//
// var a={
//     stop:function(){
//         return false;
//     }
// };
// document.oncontextmenu=a.stop;
//
// function disableselect(e){
// if (omitformtags.indexOf(e.target.tagName.toLowerCase())==-1)
// return false
// }
//
// function reEnable(){
// return true
// }
//
// if (typeof document.onselectstart!="undefined")
// document.onselectstart=new Function ("return false")
// else{
// document.οnmοusedοwn=disableselect
// document.οnmοuseup=reEnable
// }
