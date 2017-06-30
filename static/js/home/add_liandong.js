//右侧快速购买框代码
$(function () {
    $('.game_name_1').click(function () {
        $.get(api.getGameList,function (rcvData) {
            if(rcvData.code == 0){
                var gameList = rcvData.data;
                var gameNode = '';
                for(key in gameList){
                    gameNode += '<li class="list_game_1" id="'+ key +'">' + '<span>' + gameList.key +'</span>' + '</li>';
                }
                $('.list_1').append(gameNode);

                var _height1 = $('.list_1').height();
                if (_height1 > 200) {
                    $('.list_1').addClass('overflow');
                }
            }
        },'json');

        var _height = $('.yhk_list').height();
        if (_height > 200) {
            $('.yhk_list').addClass('overflow');
        }

        $('.list_2').siblings('span').html('请选择大区');
        $('.list_3').siblings('span').html('请选择服务器');
        $('.list_2').hide();
        $('.list_3').hide();


    })

    //	选择游戏点击事件获取大区
    $('.list_1').on('click', '.li_game_1', function (e) {
        //	样式
        e.stopPropagation();
        $(this).css('color', '#ff4747');
        $(this).siblings().css('color', '');
        $(this).parent('ul').siblings('span').html($(this).children('span').text());
        $(this).parent().css('display', 'none');

        $('.list_1').siblings('.down').addClass('end_rotate');
        $('.list_1').siblings('.down').removeClass('cast_rotate');

        $('.list_2').children().remove();
        var gid = $(this).attr('id');
        //隐藏域赋值
        $('#add_gid').val($(this).attr('id'));
        $('#select_area').html('请选择大区');
        $('#select_server').html('请选择服务器');
        $('#shop_id').val('');
        $.ajax({
            type: 'get',
            url: api_url + "open/game/getAreaList?gid=" + gid,
            data: "json",
            success: function (data) {
                var area_str_1 = '';
                for (var i = 0; i < data.length; i++) {
                    area_str_1 += '<li class="li_area_1"  id="' + data[i].aid + '">' + '<span>' + data[i].area_name + '</span>' + '</li>';
                }
                $('.list_2').append(area_str_1);

                var _height2 = $('.list_2').height();
                if (_height2 > 200) {
                    $('.list_2').addClass('overflow');
                }
            }
        });

    })

    //点击大区显示服务器
    $('.list_2').on('click', '.li_area_1', function (e) {
        e.stopPropagation();
        $(this).css('color', '#ff4747');
        $(this).siblings().css('color', '');
        $(this).parent('ul').siblings('span').html($(this).children('span').text());
        $(this).parent().css('display', 'none');

        $('.list_2').siblings('.down').addClass('end_rotate');
        $('.list_2').siblings('.down').removeClass('cast_rotate');

        $('.list_3').children().remove();
        var aid = $(this).attr('id');

        $('#add_aid').val($(this).attr('id'));
        $('#select_server').html('请选择服务器');
        $('#shop_id').val('');
        $.ajax({
            type: 'get',
            url: api_url + "open/game/getServerList?aid=" + aid,
            data: "json",
            success: function (data) {
                var server_str_1 = '';
                for (var i = 0; i < data.length; i++) {
                    server_str_1 += '<li class="li_server_1" id="' + data[i].sid + '">' + '<span>' + data[i].server_name + '</span>' + '</li>';
                }
                $('.list_3').append(server_str_1);

                var _height3 = $('.list_3').height();

                if (_height3 > 200) {
                    $('.list_3').addClass('overflow');
                }
            }
        });
    })


    $('.list_3').on('click', '.li_server_1', function (e) {
        e.stopPropagation();
        $(this).css('color', '#ff4747');
        $(this).siblings().css('color', '');
        $(this).parent('ul').siblings('span').html($(this).children('span').text());
        $(this).parent().css('display', 'none');
        $('.list_3').siblings('.down').addClass('end_rotate');
        $('.list_3').siblings('.down').removeClass('cast_rotate');
        $('#add_sid').val($(this).attr('id'));
        var sid = $(this).attr('id');
        $.ajax({
            url: '/Goods/goodsShop?sid=' + sid,
            type: 'get',
            success: function (data) {
                console.log(data);
                if(data.code == 0){
                    $('.error_des').html(data.msg);
                    $('#shop_id').val('');
                    $('#goods_price').val('');
                    $('.jinbi').css('visibility','hidden');
                    $('#buy_num').val('');
                    $('#buy_money').val('');
                    $('#stock_num').val('');
                    $('#max_num').val('');
                    $('#money_for_num').html('');
                    $('#order_amount').html('0.00');
                    $('.error_s').css('visibility','inherit');
                    $('#show_price').html('请选择区服')
                    $('#show_stock').html('请选择区服')
                }else{
                    $('.error_s').css('visibility','hidden');
                    $('.unit_name').html(data.unit_name);
                    $('#goods_price').val(data.price);
                    $('#show_price').html(data.price);
                    $('#show_stock').html(data.price+data.unit_name);
                    $('.jinbi').css('visibility','inherit');
                    $('#min_num').val(data.min_num);
                    $('#stock_num').val(data.stock_num);
                    $('#max_num').val(data.max_num);
                    $('#shop_id').val(data.id);
                    $('#buy_num').val(data.default_num);
                    $('#the_buy_num').val(data.default_num);
                    $('#order_amount').html(toDecimal2(data.default_money));
                    $('#buy_money').val(toDecimal2(data.default_money));
                    $('#the_buy_money').val(toDecimal2(data.default_money));
                    $('#money_for_num').html(data.default_num);
                    $('#show_price').html('<b style="color:#ff8a05;font-size: 14px;" id="show_price">'+data.price+'元/'+data.unit_name+'</b>')
                    $('#show_stock').html('<b style="color:#ff8a05;font-size: 14px;" id="show_stock">'+data.stock_num+'</b>')
                }
            }
        });

    })

    function toDecimal2(x) {
        var f = parseFloat(x);
        if (isNaN(f)) {
            return false;
        }
        var f = Math.round(x * 100) / 100;
        var s = f.toString();
        var rs = s.indexOf('.');
        if (rs < 0) {
            rs = s.length;
            s += '.';
        }
        while (s.length <= rs + 2) {
            s += '0';
        }
        return s;
    }

})