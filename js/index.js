// if(window.innerWidth>1200)
// {
// $(".fuSlide").height($(window).height());
// }
// $(window).resize(function() {
// 	if(window.innerWidth>1200)
// 	{
// 	$(".fuSlide").height($(window).height());
// 	}
// });

var _app = _app || {};
function getUrlParams(url) {
  const reg = /(\w+)=([^&]+)/g;
  const params = {};
  let match;

  while ((match = reg.exec(url)) !== null) {
    params[match[1]] = match[2];
  }

  return params;
}
// rem计算问题延时执行
function remAfter() {
  var paramsObj = getUrlParams(window.location.href)
  var selectIndex = 0
  if(paramsObj.pageType === "brandMarketing"){
    selectIndex = 0
  }else if(paramsObj.pageType === "overseasMarket"){
    selectIndex = 1
  }else if(paramsObj.pageType === "overseasWarehousing"){
    selectIndex = 2
  }else if(paramsObj.pageType === "productDesign"){
    selectIndex = 3
  }
  // 整屏滚动
  var initialSlideIndex = selectIndex;
  var FullPageSwiper = new Swiper('.swiper-fullpage-swiper',{
    initialSlide: initialSlideIndex,
    preventInteractionOnTransition : true,
    touchRatio:0.2,
    slidesPerView : 'auto',
    direction: 'vertical',
    speed: 1000,
    mousewheel: {
      forceToAxis: true,
    },
    on: {
      init: function(){
        fullpageMenu(this.activeIndex)
      },
      slidePrevTransitionStart: function () {
        fullpageMenu(this.activeIndex)
      },
      slideNextTransitionStart: function () {
        fullpageMenu(this.activeIndex)
      },
      slidePrevTransitionEnd: function () {
      },
      slideNextTransitionEnd: function () {
      },
    },
  })
  $('.swiper-fullpage-menu .menu-li').click(function(){
    FullPageSwiper.slideTo($('.swiper-fullpage-menu .menu-li').index($(this)));
  });

  // window.addEventListener('hashchange', function() {
  //   var page = window.location.hash.substring(1);
  //   Swiper.slideTo(page, 1000, false);  
  // });

  window.addEventListener('hashchange', function() {
    var page = parseInt(window.location.hash.substring(1), 10);
    if (!isNaN(page)) {
        swiper.slideTo(page, 1000);  // 使用实例调用 slideTo  第二个参数是动画时长（单位毫秒）
    }
  });

  // 滚动菜单
  function fullpageMenu(index){
        // console.log(index)
    var _len = $('.swiper-fullpage-slide').length;
    if(index >= _len - 2){
      $('.swiper-fullpage-slide').eq(_len-2).addClass('swiper-slide-aninate').siblings().removeClass('swiper-slide-aninate');
      $('.swiper-fullpage-slide .aos-init').removeClass('aos-animate')
      setTimeout(()=>{
        $('.swiper-slide-aninate .aos-init').addClass('aos-animate')
      },500)
    }else{
      $('.swiper-fullpage-slide').eq(index).addClass('swiper-slide-aninate').siblings().removeClass('swiper-slide-aninate');
      $('.swiper-fullpage-slide .aos-init').removeClass('aos-animate')
      setTimeout(()=>{
        $('.swiper-slide-aninate .aos-init').addClass('aos-animate')
      },500)
    }

    // if(index == 1 && !$('.index-about .i-num-list').hasClass('has-show-num')){
    //   $('.index-about .i-num-list').addClass('has-show-num');
    //   $('.index-about .i-num-list .num-box').each(function(){
    //     $(this).numberRock({
    //       lastNumber:$(this).attr('data-num'),
    //       duration:2000,
    //     });
    //   });
    // }
    //
    $('.swiper-fullpage-menu .menu-li').eq(index).addClass('on').siblings().removeClass('on');

    // if(index > 0){
    //   $('body').addClass('header-type-a');
    // }else{
    //   $('body').removeClass('header-type-a');
    // }
  }

  // Indexbanner
  var _swiper1Timer = 6000;
  var _swiper1Speed = 1720;
  var _swiper1Time = (_swiper1Timer - _swiper1Speed) / 1000;
  var indexBannerSwiper = new Swiper('.index-banner .swiper', {
    loop: true,
    speed: _swiper1Speed,
    parallax : true,
    autoplay: {
      delay: _swiper1Timer - _swiper1Speed,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
    on: {
      init: function (swiper) {
        indexBannerSwiperFun(0);
      },
      slidePrevTransitionStart: function () {
      },
      slideNextTransitionStart: function () {
      },
      slidePrevTransitionEnd: function () {
        indexBannerSwiperFun(this.realIndex);
      },
      slideNextTransitionEnd: function () {
        indexBannerSwiperFun(this.realIndex);
      },
      // slideChange: function(){
      //   indexBannerSwiperFun(this.realIndex);
      // },
    },
    pagination: {
      el: '.index-banner .swiper-points-num',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"><span class="cycle-box run" style="--time: ' + _swiper1Time + 's;"><div class="left-c cycle-son"></div><div class="right-c cycle-son"></div></span></span>';
      },
    },
    navigation: {
      nextEl: '.index-banner .next',
      prevEl: '.index-banner .prev',
    },
  });
  function indexBannerSwiperFun(index) {
    $('.index-banner .swiper-points-num .cycle-box').removeClass('run');
    setTimeout(function () {
      $('.index-banner .swiper-points-num .cycle-box').eq(index).addClass('run');
    }, 100);
  }

  // 向下滑动
  // banner高度减去头部高度
  $(document).on('click','.index-banner .swiper-other .text-scroll',function(){
    var _sctop = $('.index-banner').height() - parseInt(getComputedStyle($('body')[0]).getPropertyValue('--small-height'));
    $('html,body').animate({'scrollTop':_sctop},500);
  })

  setTimeout(function(){
    // 动画
    AOS.refresh();
  },100);
}

function changeLanguage() {
    var htmlTag = document.querySelector('html');

    if (htmlTag.getAttribute('lang') === 'en') {
        htmlTag.setAttribute('lang', 'zh-CN');
    } else {
        htmlTag.setAttribute('lang', 'en');
    }
}

divLoadFun.addFun("loadFun", function () {
  remAfter();
});


/*返回顶部*/
function goTop(){
	$('html,body').animate({'scrollTop':0},600);
}

/*首页产品理念*/
var caseSwiper = new Swiper('.index-productConcept .swiper-container', {
  speed:600,
  grabCursor : true,
  watchOverflow: true,
  resistanceRatio : 0,
  // slidesPerView : "auto",
  slidesPerView : 4,
  spaceBetween : 35,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.index-productConcept .swiper-button-next',
    prevEl: '.index-productConcept .swiper-button-prev',
  },
  breakpoints: {
    1200: {
      // slidesPerView : 4,
      spaceBetween : 35,
    },
    1024: {
      slidesPerView : 3,
      spaceBetween : 35,
    },
    960: {
      slidesPerView : 3,
      spaceBetween : 35,
    },
    820: {
        slidesPerView : 2,
        spaceBetween : 10,
    },
    600: {
        slidesPerView : 2,
        spaceBetween : 10,
    },
    540: {
        slidesPerView : 1,
        spaceBetween : 10,
    },
    480: {
        slidesPerView : 1,
        spaceBetween : 10,
    },
    414: {
        slidesPerView : 1,
        spaceBetween : 10,
    },
    375: {
        slidesPerView : 1,
        spaceBetween : 10,
    },
    360: {
        slidesPerView : 1,
        spaceBetween : 10,
    },
    320: {
        slidesPerView : 1,
        spaceBetween : 10,
    },
  }
})
/*首页产品理念*/

//首页导航
$(".menubtn").click(function(e){
  if($(".menubtn").hasClass("active")){
    $(".mobile-menu").css("display","none")
    $(".mobile-bg").css("display","none")
    $(".menubtn").removeClass("active")
  }else{
    $(".mobile-menu").css("display","block")
      $(".mobile-bg").css("display","block")
    $(".menubtn").addClass("active")
  }
})
$(".el-collapse-item").click(function(e){
  if($(this).hasClass("is-active")){
    $(".el-collapse-item__wrap").css("display","none")
    $(".el-collapse-item").find(".iconfont").css("transform","rotate(0deg)")
    $(this).removeClass("is-active")
  }else{
    $(".el-collapse-item__wrap").css("display","none")
    $(".el-collapse-item").removeClass("is-active")
    $(".el-collapse-item").find(".iconfont").css("transform","rotate(0deg)")
    $(this).children(".el-collapse-item__wrap").css("display","block")
    $(this).find(".iconfont").css("transform","rotate(90deg)")
    $(this).addClass("is-active")
  }
})
$(".mobile-bg").click(function(e) {
  $(".mobile-menu").css("display","none")
  $(".mobile-bg").css("display","none")
  $(".menubtn").removeClass("active")
})
$(".navs").mouseenter(function(e){
  $(".header-bgs").css("height","296px")
  $(".navs-menu-down").css({opacity:1,visibility:'visible'})
})
$(".navs").mouseleave(function(e){
  $(".header-bgs").css("height","100%")
  $(".navs-menu-down").css({opacity:0,visibility:'hidden'})
})
//首页导航

// $(".brandServices .li").click(function(event){
// event.preventDefault();
// $('html,body').animate({scrollTop:$(this.hash).offset().top}, 100);
// });

// 获取窗口高度宽度
function setWind(){
  _win_h = $(window).height();
  _win_w = $(window).width()+_scroll_width;
}

// js加载模块
var _lwdiv_num = document.getElementsByTagName('lwdiv').length;

// DOM 加载完毕
document.onready = function () {
  _lwdiv_num = document.getElementsByTagName('lwdiv').length;
  start_load_document();
}


// 执行模块加载
function start_load_document() {
  if (_lwdiv_num != 0) {
    $('lwdiv').each(function () {
      var _this = $(this),
        _arr = _this[0].attributes, //获取属性
        file_dir = '', //文件路径
        _attrObj = {}, //转化后的属性
        regEx,
        _html = '';
      for (var i = 0; i < _arr.length; i++) {
        _attrObj[_arr[i].name.replace('lw-', '')] = _arr[i].value;
      }
      file_dir = _attrObj.file;
      if (!file_dir) {
        console.error('请填写文件路径哇！--------提示')
        return false;
      }
      // 地址加时间戳防止缓存
      file_dir = file_dir + '?vTime=' + new Date().getTime();
      $.ajax({
        url: file_dir,
        type: 'GET',
        success: function (e) {
          var _html = '',
            _obj;
          for (var k in _attrObj) {
            regEx = new RegExp('{\\s*' + k + '\\s*}', 'g');
            e = e.replace(regEx, _attrObj[k]);
            // 去掉js代码
            e = e.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"");
            e = e.replace(/<!-- Code injected by live-server -->/gi,"");
          }
          _this.before(e);
          _obj = _this.prev();
          for (var k in _attrObj) {
            _obj.find('*[lw-' + k + ']').attr(k, _attrObj[k]).removeAttr('lw-' + k);
          }
          _html = _obj.html();
          _html = _html.replace('lw-', '');
          _html = _obj.html(_html);
          _this.remove();
          _lwdiv_num--;
          if (_lwdiv_num == 0) {
            fun_load();
          }
        }
      })
    });
  } else {
    fun_load();
  }
}
if(window.innerWidth>1200)
{
  $(".fuSlide").height($(window).height());
}
$(window).resize(function() {
	if(window.innerWidth>1200)
	{
	$(".fuSlide").height($(window).height());
	}
});
/*分类滚动3*/
// $('.wrappers').navbarscroll({
// 	defaultSelect:0,
// 	scrollerWidth:6,
// 	fingerClick:1,
// 	endClickScroll:function(obj){
// 			console.log(obj.text())
// 		}
// 	}
// );

/*首页滚屏*/
$(function() {
  //if($(window).width()> 1100){
    $('#dowebok').fullpage({
      navigation: true
    });
  //}
  $(".service-wrap2").show();
  $(".service-wrap3").show();
  $(".service-wrap4").show();
  $(".service-wrap5").show();
  $(".service-wrap6").show();

  $(window).resize(function() {
    autoScrolling();
  });

  function autoScrolling() {
    var $ww = $(window).width();
    if ($ww <= 1200) {
        $.fn.fullpage.setAutoScrolling(false);
    } else {
        $.fn.fullpage.setAutoScrolling(true);
    }
  }
  autoScrolling();
});

/*首页滚屏*/

// var swiper1 = new Swiper('.business-block-imglist .swiper-container',{
// loop: true,
// slidesPerView: 'auto',
// spaceBetween: 15,
// navigation: {
//   nextEl: '.business-block-imglist .next',
//   prevEl: '.business-block-imglist .prev',
// },
// breakpoints: {
//   1200: {
//   spaceBetween: 20
//   }
// }
// })

//首页业务板块
var certifySwiper = new Swiper('.service-wrap9 .swiper-container', {
    watchSlidesProgress: true,
    slidesPerView: 'auto',
    // spaceBetween: 580,
    centeredSlides: true,
    loop: true,
    loopedSlides: 6,
    autoplay: true,
    breakpoints: {
      1920: {
        spaceBetween: 680,
  	  },
  	  1680: {
        spaceBetween: 580,
  	  },
      1440: {
        spaceBetween: 500,
  	  },
      1400: {
        spaceBetween: 490,
  	  },
      1366: {
        spaceBetween: 480,
  	  },
      1280: {
        spaceBetween: 440,
  	  },
      1200: {
        spaceBetween: 420,
  	  },
			820: {
        spaceBetween: 300,
  	  },
  	},
    navigation: {
      nextEl: '.service-wrap9 .next',
      prevEl: '.service-wrap9 .prev',
    },
    on: {
        progress: function(progress) {
            var _t_w = $(this.slides[this.realIndex]).width()/2;
            var _m_n = 0.01;
            if($(window).width() < 500){
                _m_n = 0.6;
            }
            for (i = 0; i < this.slides.length; i++) {
                var slide = this.slides.eq(i);
                var slideProgress = this.slides[i].progress;
                var modify = 1;
                if (Math.abs(slideProgress) > 1) {
                    modify = (Math.abs(slideProgress) - 1) * _m_n + 1;
                }
                translate = slideProgress * modify * _t_w + 'px';
                scale = 1 - Math.abs(slideProgress) / 6.5 ;
                zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                slide.css('zIndex', zIndex);
                slide.css('opacity', 1);
                if (Math.abs(slideProgress) > 2) {
                    slide.css('opacity', 0);
                }
            }
        },
        setTransition: function(transition) {
            for (var i = 0; i < this.slides.length; i++) {
                var slide = this.slides.eq(i)
                slide.transition(transition);
            }
        }
    }
})

//首页公司简介数字滚动


//员工风采展示
var swiper1 = new Swiper('.join_three_con .join_1 .swiper-container',{
	loop: true,
	slidesPerView: 4,
	slidesPerGroup:3,
	spaceBetween:15,
	navigation: {
	  nextEl: '.join_three_con .join_1 .next',
	  prevEl: '.join_three_con .join_1 .prev',
	},
	breakpoints: {
	  1200: {
    slidesPerView: 4,
		spaceBetween: 30,
	  },
    1024: {
    slidesPerView: 2,
		spaceBetween: 30,
	  },
    820: {
    slidesPerView: 2,
		spaceBetween: 30,
	  },
	  786: {
    slidesPerView: 2,
		spaceBetween: 15,
	  },
    768: {
    slidesPerView: 2,
		spaceBetween: 15,
	  },
    640: {
    slidesPerView: 2,
		spaceBetween: 15,
	  },
    600: {
    slidesPerView: 2,
		spaceBetween: 15,
	  },
    540: {
    slidesPerView: 2,
		spaceBetween: 15,
	  },
    480: {
    slidesPerView: 1,
		spaceBetween: 15,
	  },
    414: {
    slidesPerView: 1,
		spaceBetween: 15,
	  },
    375: {
    slidesPerView: 1,
		spaceBetween: 15,
	  },
    320: {
    slidesPerView: 1,
		spaceBetween: 15,
	  }
	}
})

var swiper2 = new Swiper('.join_three_con .join_2 .swiper-container',{
	loop: true,
	slidesPerView: 4,
	slidesPerGroup:3,
	spaceBetween:15,
	navigation: {
	  nextEl: '.join_three_con .join_2 .next',
	  prevEl: '.join_three_con .join_2 .prev',
	},
	breakpoints: {
	  1200: {
    slidesPerView: 4,
		spaceBetween: 30,
	  },
    1024: {
    slidesPerView: 2,
		spaceBetween: 30,
	  },
    820: {
    slidesPerView: 2,
		spaceBetween: 30,
	  },
	  786: {
    slidesPerView: 2,
		spaceBetween: 15,
	  },
    768: {
    slidesPerView: 2,
		spaceBetween: 15,
	  },
    640: {
    slidesPerView: 2,
		spaceBetween: 15,
	  },
    600: {
    slidesPerView: 2,
		spaceBetween: 15,
	  },
    540: {
    slidesPerView: 2,
		spaceBetween: 15,
	  },
    480: {
    slidesPerView: 1,
		spaceBetween: 15,
	  },
    414: {
    slidesPerView: 1,
		spaceBetween: 15,
	  },
    375: {
    slidesPerView: 1,
		spaceBetween: 15,
	  },
    320: {
    slidesPerView: 1,
		spaceBetween: 15,
	  }
	}
})

$(".join_a a").click(function(){
  	var linum = $(this).index();
  	var CaseList = $(this).parents(".join_three_t").next().find(".divhidden");
  	$(this).parents(".join_a").find("a").removeClass('on');
  	$(this).addClass('on');
  	//CaseList.eq(linum).fadeIn().siblings().hide();
  	CaseList.eq(linum).addClass("on").siblings().removeClass("on");
	if(linum==0)
	{
		swiper1.slideTo(linum, 500, false)
  }
	if(linum==1)
	{
		swiper2.slideTo(linum, 500, false)
   }
})
//员工风采展示

//发展历程
//时间线
var swiperHistory1 = new Swiper(".swiper-thumb", {
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    1440: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 5,
    },
    960: {
      slidesPerView: 5,
    },
    820: {
      slidesPerView: 5,
    },
    800: {
      slidesPerView: 5,
    },
    768: {
      slidesPerView: 5,
    },
    640: {
      slidesPerView: 5,
    },
    600: {
      slidesPerView: 5,
    },
    540: {
      slidesPerView: 5,
    },
    480: {
      slidesPerView: 3,
    },
    414: {
      slidesPerView: 2,
    },
    375: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 2,
    }
  },
});
//发展历程内容
var swiperHistory2 = new Swiper(".swiper-history", {
  initialSlide:  $('.about-block-history .history-top .swiper-button .swiper-slide').length,
  loop: true,
  spaceBetween: "2%",
  slidesPerView: 1,
  centeredSlides: true,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".about-block-history .swiper-button .next",
    prevEl: ".about-block-history .swiper-button .prev",
  },
  breakpoints: {
    1600: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 18,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 18,
    },
    1024: {
      slidesPerView : 3,
      spaceBetween : 18,
    },
    960: {
      slidesPerView : 3,
      spaceBetween : 18,
    },
    820: {
        slidesPerView : 2,
        spaceBetween : 10,
    },
    800: {
        slidesPerView : 2,
        spaceBetween : 10,
    },
    768: {
        slidesPerView : 2,
        spaceBetween : 10,
    },
    640: {
        slidesPerView : 1,
        spaceBetween : 10,
    },
    600: {
        slidesPerView : 1,
        spaceBetween : 10,
    },
    540: {
        slidesPerView : 1,
        spaceBetween : 10,
    },
    480: {
        slidesPerView : 1,
        spaceBetween : 10,
    },
    414: {
        slidesPerView : 1,
        spaceBetween : 10,
    },
    375: {
        slidesPerView : 1,
        spaceBetween : 10,
    },
    360: {
        slidesPerView : 1,
        spaceBetween : 10,
    },
    320: {
        slidesPerView : 1,
        spaceBetween : 10,
    }
  },
  thumbs: {
    swiper: swiperHistory1,
  },
});
//发展历程

//联系我们-廉洁举报
$('.js-service').on('click', function() {
    $('.layer-bg, .layer-service').fadeIn();
});
//表单提交
$(document).on('click', '.layer-close, .layer-bg', function() {
     $('.layer-box, .layer-bg').fadeOut();
});
function submitliuyan(){
    // if($('#name').val()==''){
    //     layer.alert('请输入您的姓名',{
    //         icon: 0,
    //         title:'提示',
    //         btn:['提交']
    //     }); return false;
    // }
    if($('#email').val()==''){
        layer.alert('请输入您的邮箱',{
            icon: 0,
            title:'提示',
            btn:['提交']
        }); return false;
    }
    if (!$('#email').val().match(/^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/)) {
        layer.alert('请输入正确邮箱地址',{
            icon: 0,
            title:'提示',
            btn:['提交']
        }); return false;
    }
    if($('#introduce').val()==''){
        layer.alert('请输入您的举报内容',{
            icon: 0,
            title:'提示',
            btn:['提交']
        }); return false;
    }

    // var obj = document.getElementsByName("checkbox");
    // var flags = false;
    // for(var i=0; i<obj.length; i ++){
    //       if(obj[i].checked==true){
    //           flags = true;
    //       }
    // }
    // if (flags == false)
    // {
    //     layer.alert('请勾选同意',{
    //       icon: 0,
    //       title:'提示',
    //       btn:['返回']
    //     }); return false;
    // }

    $.ajax({
        type: "POST",
        url: $('#myform').attr('action'),  //提交链接
        data: $('#myform').serialize(),
        dataType: "json",
        success: function(data){
            //alert(data); return false;
            if(data.status==1){
                layer.alert(data.info,{
                    icon: 1,
                    title:'提示',
                    btn:['提交']
                });
                setTimeout(function(){location.reload()},2000);
            }
            else{
                layer.alert(data.info,{
                    icon: 5,
                    title:'提示',
                    btn:['提交']
                });
            }
        }
    });
}
//联系我们-廉洁举报

//手机端video默认全屏的兼容写法
$(".btn").click(function() {

	$(".videobox").show();
	var videotimer = setInterval(function() {
		if($("#video").get(0).currentTime > 0) {
			$("#video").show();
			clearInterval(videotimer);
		}
	}, 100);

	if(window.orientation == 0 || window.orientation == 180) { //竖屏的时候
		$("#video").width($(window).height());
		$("#video").height($(window).width());
		var _w = $("#video").width();
		var _h = $("#video").height();
		var _l = -(_w - _h) / 2;
		$("#video").css({
			"marginLeft": _l,
			"marginTop": -_l,
		})
	} else {
		$("#video").attr("style", "none")
	}
})
$(window).resize(function() {
	if(window.orientation == 0 || window.orientation == 180) { //竖屏的时候
		$("#video").width($(window).height());
		$("#video").height($(window).width());
		var _w = $("#video").width();
		var _h = $("#video").height();
		var _l = -(_w - _h) / 2;
		$("#video").css({
			"marginLeft": _l,
			"marginTop": -_l,
		})
	} else {
		$("#video").attr("style", "none")
	}
})
//手机端video默认全屏的兼容写法

// 获取浏览器滚动条宽度
function getScrollbarWidth() {
  var odiv = document.createElement('div'),//创建一个div
      styles = {
          opacity: 0,
          position: 'fixed',
          left: 0,
          top: 0,
          pointerEvents: 'none',
          width: '100px',
          height: '100px',
          overflowY: 'scroll'//让他有滚动条
      }, i, scrollbarWidth;
  for (i in styles) odiv.style[i] = styles[i];
  document.body.appendChild(odiv);//把div添加到body中
  scrollbarWidth = odiv.offsetWidth - odiv.clientWidth;//相减
  odiv.remove();//移除创建的div
  return scrollbarWidth;//返回滚动条宽度
}

// 声明全局对象，后期可添加
function AllAreaFun() {
  var _this = this;
  this.funArray = [];
  // 添加方法
  this.addFun = function (fName, fn) {
    _this.funArray.push(fName);
    _this[fName] = fn;
  };
  // 删除方法
  this.removeFun = function (fName) {
    _this[fName] = null;
    delete _this[fName];
    for (var i = 0, _len = _this.funArray.length; i < _len; i++) {
      if (_this.funArray[i] == fName) {
        _this.funArray.splice(i, 1);
      }
    }
  };
  this.runFun = function () {
    var _funArray = _this.funArray;
    for (var i = 0, _len = _funArray.length; i < _len; i++) {
      _this[_funArray[i]]();
    }
  };
}

//生成从minNum到maxNum的随机数
function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
      break;
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      break;
    default:
      return Math.random();
      break;
  }
}


//首页新闻切换
$(".i_a a").hover(function(){								 
	var linum = $(this).index();
	var CaseList = $(".i_news").find(".divhidden");	
	$(this).parents(".i_a").find("a").removeClass('on');
	$(this).addClass('on');
	//CaseList.eq(linum).fadeIn().siblings().hide();
	CaseList.eq(linum).addClass("on").siblings().removeClass("on");
	
})

//禁止鼠标右键复制
// var omitformtags=["input", "textarea", "select"];
// omitformtags=omitformtags.join("|");
// oncontextmenu="return false;" //禁止鼠标右键
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
//     if (omitformtags.indexOf(e.target.tagName.toLowerCase())==-1)
//         return false
// }
//
// function reEnable(){
//     return true
// }
//
// if (typeof document.onselectstart!="undefined")
//     document.onselectstart=new Function ("return false");
// else{
//     document.οnmοusedοwn=disableselect;
//     document.οnmοuseup=reEnable
// }
