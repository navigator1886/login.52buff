
$(function(){
    $('.guangdong').mouseover(function(){
        $('.ul_left').css('display','block');
    })
    $('.gdq').mouseover(function(){
        $('.ul_right').css('display','block');
    })
    $('.guangdong').mouseout(function(){
        $('.ul_left').css('display','none');
    })
    $('.gdq').mouseout(function(){
        $('.ul_right').css('display','none');
    })
    $('.kuai').click(function(){
//		$('.kuai').css('background','#fff');
        $(this).addClass('intro');
        $(this).siblings().removeClass('intro');
        $('.collest').css('display','block');
        $('.collested').css('display','none');
    })
    $('.suliang').click(function(){
        $('.collest').css('display','none');
        $('.collested').css('display','block');
    })
    $('.peifu').click(function(){
        $(this).addClass('lipei');
        $(this).siblings().removeClass('lipei');

    })

	/*buy_order页面*/
    $('.labered').click(function(){
        $('.validd').toggle();
    })
    $('.valid_li').click(function(){
        $('.labered span').html($(this).text());
        $('.validd').show();

    })

	/*buy_order_ed页面*/
    $('.qulity').click(function(){
        $(this).addClass('money');
        $(this).siblings().removeClass('money');
        $('.doubled').show();
        $('.double').hide();
    })
    $('.jinger').click(function(){
        $('.doubled').hide();
        $('.double').show();
    })
	/*fb_spinpor*/
    $('.labered').click(function(){
        $('.valid_l').toggle();
    })
    $('.valid_l li').click(function(){
        $('.labered span').html($(this).text());
        $('.valid_l').hide();

    })
    $('.data').mouseover(function(){
        $('.valid').css('display','block');
    })
    $('.data').mouseout(function(){
        $('.valid').css('display','none');
    })
    $('.em_red').click(function(){
        $('.show_red').css('display','block');
        $('.show_redd').css('display','none');

    })
    $('.em_redd').click(function(){
        $('.show_red').css('display','none');
        $('.show_redd').css('display','block');

    })
    $('.lt_input').click(function(){
        $('.input_ul').toggle();
    })
    $('.input_ul li').click(function(){
        $('.lt_input span').html($(this).text());
        $('.input_ul').hide();

    })
    $('.lt_inputt').click(function(){
        $('.input_ull').toggle();
    })
    $('.input_ull li').click(function(){
        $('.lt_inputt span').html($(this).text());
        $('.input_ull').hide();
    })
    $('.la').click(function(){
        $('.safer').toggle();
    })
    $('.safer li').click(function(){
        $('.la span').html($(this).text());
        $('.safer').show();
    })

	/*my_buy_detail页面*/
    $('.cs').click(function(){
        $('.cs').css('border','1px solid #ddd');
        $('.line').css('display','block');
        $('.pc').css('border','none');
        $('.pc').css('border-bottom','none');
        $('.lined').css('display','none');

    })
    $('.pc').click(function(){
        $('.pc').css('border','1px solid #ddd');
        $('.lined').css('display','block');
        $('.cs').css('border','0');
        $('.cs').css('border-bottom','none');
        $('.line').css('display','none');

    })
	/*首页导航帮助中心*/
    $('.help-center').mouseover(function(){
        $('.help').css('display','block');
    })
    $('.help').mouseout(function(){
        $('.help').css('display','none');
    })
    $('.help-center').mouseover(function(){
        $('.helper_sos').css('display','block');
    })
    $('.help-center').mouseout(function(){
        $('.helper_sos').css('display','none');
    })
	/*下拉菜单*/
    $('.dnf').click(function(){
        $('.dnf_ul').toggle();
    })
    $('.dnf_li').click(function(){
        $('.dnf span').html($(this).text());
        $('.dnf_ul').show();

    })
	/*$('.dnf').mouseout(function(){
	 $('.dnf_ul').css("display","none");
	 })*/
    //银行卡点击显示
    $('.img_border').click(function(){
        $(this).children('.true').show();
        $(this).parents('li').siblings().children().children('.true').hide();
        $('.img_border').css('border-color','#ddd');
        $(this).css('border-color','#ff4747');

    })

	/*table切换*/
    $('.check_topp li').click(function(){
        $(this).addClass('chuxu');
        $(this).siblings().removeClass('chuxu');
    })
	/*复选框*/
    $('.font-img').click(function(){
        $(this).hide();
        $(this).siblings('.wh').show();
    })
    $('.wh').click(function(){
        $(this).hide();
        $(this).siblings('.font-img').show();
    })
})
