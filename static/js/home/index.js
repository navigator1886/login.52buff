$(function(){
	//top广告

    $(".top_close").click(function(){
		$(".wrap_banner").animate({height:"0px"},1000);
	    $(this).hide(500);
	});

    // 帮助中心
    $('.help-center li').mouseover(function(){
        $(this).children('ul').show();
        $(this).children('.down').addClass('cast_rotate');
        $(this).children('.down').removeClass('end_rotate');
        $(this).parent('ul').siblings('ul').children('li').children('ul').hide();
    })
    $('.help-center li').mouseout(function(){
        $(this).children('ul').hide();
        $(this).children('.down').addClass('end_rotate');
        $(this).children('.down').removeClass('cast_rotate');
        $(this).parent('ul').siblings('ul').children('li').children('ul').hide();

    })
    // 轮播图
    var length,
        currentIndex = 0,
        interval,
        hasStarted,
        t = 3000;
    length = $('.slider-panel').length;
    $('.slider-panel:not(:first)').hide();
    $('.slider-item:first').addClass("slider-item-selected");
    $(".slider-item").hover(function (e) {
        stop();
        var preIndex = $('.slider-item').filter('.slider-item-selected').index();
        currentIndex = $(this).index();
        play(preIndex, currentIndex);
    }, function () {
        start();
    })

    // 向前翻页
    function pre() {
        var preIndex = currentIndex;
        currentIndex = (--currentIndex + lengtEEh) % length;
        play(preIndex, currentIndex)
    }
    // 向后翻页
    function next() {
        var preIndex = currentIndex;
        currentIndex = ++currentIndex % length;
        play(preIndex, currentIndex);
    }
    function play(preIndex, currentIndex) {
        $('.slider-panel').eq(preIndex).fadeOut(500).parent().children().eq(currentIndex).fadeIn(1000);
        $('.slider-item').removeClass('slider-item-selected');
        $('.slider-item').eq(currentIndex).addClass('slider-item-selected');
    }
    function start() {
        if (!hasStarted) {
            hasStarted = true;
            interval = setInterval(next, t);
        }
    }
    function stop() {
        clearInterval(interval);
        hasStarted = false
    }
    start()
    
    // 右侧下拉菜单
    $('.select_game').click(function(){
        $('.select_game ul').toggle();
       
    })

    $('.select_game ul li').click(function(){
        	$(".select_game span").html($(this).text());     	
        	$('.selected_game').val($(this).attr('value'));
        	alert($('.selected_game').val());
        	$('.select_game ul').show();
    })
     
    $('.select_op').click(function(){
        $(this).children("ul").toggle();
    })

    $('.select_op ul li').click(function(){
        	$(this).parent("ul").siblings("span").html($(this).text());
        	$(this).parent("ul").show();
    })
    
    //购买方式
    $('.how_buy').click(function(){
		$(this).addClass('buy_color');
		$(this).siblings().removeClass('buy_color');
        $(this).siblings('.active-buy-buy').css('border-right','0');
			
	});
    $('.active-buy-sell').click(function(){
        $('.qiehuan_02').show();
        $('.qiehuan_01').css('display','none');
    })
    $('.active-buy-buy').click(function(){
        $('.qiehuan_01').show();
        $('.qiehuan_02').css('display','none');
    })
   
    // 右下角tab切换
    $("#fadetab").tabso({
        cntSelect: "#fadecon",
        tabEvent: "click",
        tabStyle: "fade"
    });

	//返回顶部
	$('#top').click(function(){	
        $('body,html').animate({ scrollTop: 0 }, 500);
   
	})

    //关闭按钮
    $('.turnoff').click(function () {
        $('.main_con').hide();
        $('.game-hot').css('border-bottom','2px solid #ff4747');
        $('.area').css('border-left-color', '#efecec');
        $('.server').css('border-left-color', '#efecec');
        $('.goods').css('border-left-color', '#efecec');

    })
});

