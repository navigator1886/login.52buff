$(function () {

    //1.返回顶部
    $('#top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);

    })


    // 帮助中心
    $('.help-center li').mouseover(function () {
        $(this).children('ul').show();
        $(this).children('.down').addClass('cast_rotate');
        $(this).children('.down').removeClass('end_rotate');
        $(this).parent('ul').siblings('ul').children('li').children('ul').hide();
    })
    $('.help-center li').mouseout(function () {
        $(this).children('ul').hide();
        $(this).children('.down').addClass('end_rotate');
        $(this).children('.down').removeClass('cast_rotate');
        $(this).parent('ul').siblings('ul').children('li').children('ul').hide();

    })

    //头像修改
    $(function(){
        $('.photo').mouseover(function(){
            $(this).children('a').children('.change_photo').show();
        })
        $('.photo').mouseout(function(){
            $(this).children('a').children('.change_photo').hide();
        })
    })

    //在线 离线
    $('.state_bars').click(function () {
        $('.state_online').toggle();
    });
    //切换离线在线状态
    $('.state_online span').click(function (e) {
        e.stopPropagation();
        var status = $(this).find('i').attr('data');
        $('.state_bars').children('span').html($(this).html());
        $(this).parent(".state_online").css('display', 'none');
        var index = emptyLoadding();
        $.post(_url_user_info.online_url, {status: status}, function (data) {
            layer.close(index);
            if (data.code == 0) {
                layer.msg(data.msg);
                return;
            }
            if (data.data == 1) {
                $('.yiwen').html('离线时，您出售中的商品将不再展示，无法被买家购买。')
            } else {
                $('.yiwen').html('离线时，您出售的商品将被系统在一定时间内隐藏，买家将无法查看，选择“在线”后，可恢复显示。')
            }
            $('.yiwen').show();
            $('.wenhao').unbind('mouseout');
            setTimeout(function () {
                $('.yiwen').hide();
                $('.wenhao').bind('mouseout',function () {
                    $('.yiwen').css('display', 'none');
                });
            }, 2000);
        });
    });

    $(document).bind("click", function (e) {
        if ($((e.target || e.srcElement)).closest(".state_bars,.notice_self").length == 0) {
            $('.state_bars').children('.state_online').hide();
        }
    });

//疑问
    $('.wenhao').mouseover(function () {
        $('.yiwen').css('display', 'block')
    })
    $('.wenhao').mouseout(function () {
        $('.yiwen').css('display', 'none')
    })


    //	 menu法二
    $(".title").click(function () {
        var v = $(this).next().is(":hidden");
        if (v) {
            $('.title').next().slideUp();
            $(this).next().slideDown();
            $('.title').children('.icon_right').removeClass("icon_jian");
            $(this).children('.icon_right').addClass("icon_jian");
        } else {
            $(this).next().slideUp();
            $(this).children('.icon_right').removeClass("icon_jian");
        }
    });

    //	游戏区服
    $('.select_title').click(function () {

        var v = $(this).children('.select_content').is(":hidden");

        if (v) {
            $(this).children('.select_content').show();
            $(this).children('.down').addClass('cast_rotate');
            $(this).children('.down').removeClass('end_rotate');
            $(this).siblings().children('.select_content').hide();
        } else {

            $(this).children('.select_content').hide();
            $(this).children('.down').addClass('end_rotate');
            $(this).children('.down').removeClass('cast_rotate');
            $(this).siblings().children('.select_content').hide();
        }
    })


    //点击空白处消失
    $(document).bind("click", function (e) {
        if ($((e.target || e.srcElement)).closest(".select_title,.notice_self").length == 0) {
            $('.select_title').children('.select_content').hide();
            $('.select_title').children('.down').addClass('end_rotate');
            $('.select_title').children('.down').removeClass('cast_rotate');

        }
    });
    //游戏区服 判断高度是否大于200；


    //   每页显示数量
    $('.sort_ul li').click(function () {
        $(this).addClass('sort_color');
        $(this).siblings().removeClass('sort_color');
    });


    //  银行卡下拉框
    $('.select_yhk').click(function () {
        var v = $(this).children('.yhk_list').is(":hidden");
        if (v) {
            $(this).children('.yhk_list').show();
            $(this).children('.down').addClass('cast_rotate');
            $(this).children('.down').removeClass('end_rotate');
        } else {

            $(this).children('.yhk_list').hide();
            $(this).children('.down').addClass('end_rotate');
            $(this).children('.down').removeClass('cast_rotate');
        }

        var _height = $('.yhk_list').height();

        if (_height > 200) {
            $('.yhk_list').addClass('overflow');

        }
    });
    $('.yhk_list li').click(function (e) {
        e.stopPropagation();
        $(this).parents('.select_yhk').children("span").html($(this).html());
        $(this).parent().css('display', 'none');
        $(this).parent().siblings('.down').addClass('end_rotate');
        $(this).parent().siblings('.down').removeClass('cast_rotate');
        $('#yhk_tx').val($(this).attr('data-id'));
        $('#goods_type_id').val($(this).attr('data-id'));
        $('.gold_money').html($(this).attr('data-money'));
    });


    //订单状态

    $('.state_title').click(function () {
        $(this).children('.state_info').toggle();
        $(this).toggleClass('title_color');
        $(this).children('.state_info').toggleClass('info_color');
    })

    $('.state_info li').click(function () {

        $('.state_title').children('span').text($(this).text());
    })

    $(document).bind("click", function (e) {
        if ($((e.target || e.srcElement)).closest(".state_title,.notice_self").length == 0) {
            $('.state_title').children('.state_info').hide();
            $('.state_title').removeClass('title_color');
            $('.state_title').children('.state_info').removeClass('info_color');
        }
    });
    //鼠标放上去显示tips
    $('.layer_tips').mouseover(function () {
        var msg = $(this).attr('data-msg');
        var id = $(this).attr('id');
        var index = layer.tips(msg, '#' + id, {
            tips: 4,
            time: 0
        });
        $(this).attr('data-index', index);
    });
    $('.layer_tips').mouseleave(function () {
        var index = $(this).attr('data-index');
        layer.close(index);
    });


})

//点击空白处消失
$(document).bind("click", function (e) {
    if ($((e.target || e.srcElement)).closest(".select_yhk,.notice_self").length == 0) {
        $('.select_yhk').children('.yhk_list').hide();
        $('.select_yhk').children('.down').addClass('end_rotate');
        $('.select_yhk').children('.down').removeClass('cast_rotate');
    }
});


//提示语
$(function () {
    window.onload = function () {
        var mydate = new Date();
        var h = mydate.getHours();
        var m = mydate.getMinutes();


        var nowTime = h + '' + Appendzero(m);
        if (nowTime >= 300 && nowTime < 600) {
            var arr = ["寂静的深夜，除了自己的心跳，还有我在陪你。", "夜都睡了， 你还不睡吗？"];
            var index = Math.floor((Math.random() * arr.length));
            $('.content_info span').append(arr[index]);

        } else if (nowTime >= 600 && nowTime < 900) {
            var arr = ["清风送来新的一天，早晨好！", "一日之计在于晨，早安！", "每个醒后的早晨都是一件礼物，早上好。"];
            var index = Math.floor((Math.random() * arr.length));
            $('.content_info span').append(arr[index]);

        } else if (nowTime >= 900 && nowTime < 1100) {
            var arr = ["上午好，生活是一面镜子，你笑它也笑。", "一天之计在于晨，为了梦想努力吧！", "记得每天要喝八杯水哦！", "静谧的一刻，从阳光射进窗台开始，早上好。"];
            var index = Math.floor((Math.random() * arr.length));
            $('.content_info span').append(arr[index]);

        } else if (nowTime >= 1100 && nowTime < 1300) {
            var arr = ["开饭咯！补充好体力才能持续战斗哦~", "中午好，吃饭的时候最好不要盯着电脑哦。", "一份可口的午餐，可以补充作战的体力哦。"];
            var index = Math.floor((Math.random() * arr.length));
            $('.content_info span').append(arr[index]);

        } else if (nowTime >= 1300 && nowTime < 1400) {
            var arr = ["午后的小憩，换来百倍的抖擞。", "饭后百步走，活到99，走走吧！"];
            var index = Math.floor((Math.random() * arr.length));
            $('.content_info span').append(arr[index]);

        } else if (nowTime >= 1400 && nowTime < 1500) {
            var arr = ["下午好，累了就发发呆吧。", "玩游戏坐久了，起来活动一下吧！"];
            var index = Math.floor((Math.random() * arr.length));
            $('.content_info span').append(arr[index]);

        } else if (nowTime >= 1500 && nowTime < 1800) {
            var arr = ["午后一杯红茶，偷得片刻惬意。", "喝喝茶，提提神。", "抬眼硬拗三分困，不及午后一盏茶。"];
            var index = Math.floor((Math.random() * arr.length));
            $('.content_info span').append(arr[index]);

        } else if (nowTime >= 1800 && nowTime < 2000) {
            var arr = ["晚饭有着落了吗？赶紧约起！", "晚上好，要对自己的胃好一些哦。", "万家灯火中，总有一盏为你点亮。", "夜幕降落，霓红灯亮起，城市迎来另一种喧闹。"];
            var index = Math.floor((Math.random() * arr.length));
            $('.content_info span').append(arr[index]);

        } else if (nowTime >= 2000 && nowTime < 2300) {
            var arr = ["还在玩游戏吗，别忘了给自己一个微笑。", "今天运动了没，玩游戏不算哦: )"];
            var index = Math.floor((Math.random() * arr.length));
            $('.content_info span').append(arr[index]);

        } else if (nowTime >= 2300 || nowTime < 300) {
            var arr = ["深夜了，不知道有多少人和你一样还没有睡呢？", "今夜微风轻送，伴你入美梦夜深了，常常熬夜可不好哦。","欢乐的时间过得特别快，晚安。"];
            var index = Math.floor((Math.random() * arr.length));
            $('.content_info span').append(arr[index]);

        }

        function Appendzero(obj) {
            if (obj < 10) {
                return "0" + obj;
            }
            else {
                return obj;
            }

        }

    }
})



