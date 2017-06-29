$(function() {
//选择游戏
    jQuery.support.cors = true;
    var gid = $('#gid').val();
    var aid = $('#aid').val();
    var sid = $('#sid').val();
    $(document).ready(function(){
        $.ajax({
            url: api_url + "open/game/getGameList",
            type: 'get',
            dataType: "json",
            success: function (data) {
                var game_str = '';
                for (var i = 0; i < data.length; i++) {
                    game_str += '<li class="li_game" id="' + data[i].gid + '">'  + '<span>' + data[i].game_name + '</span>' + '</li>';
                }
                $('.first').append(game_str);
            }
        });
        if(gid){
            $.ajax({
                url: api_url + "open/game/getAreaList/gid/" + gid,
                type: 'get',
                data: "json",
                success: function (data) {
                    var area_str = '';
                    for (var i = 0; i < data.length; i++) {
                        area_str += '<li class="li_area"  id="' + data[i].aid + '">'  + '<span>' + data[i].area_name + '</span>' + '</li>';
                    }
                    $('.second').append(area_str);
                }
            });
            $.ajax({
                type: 'get',

                url: api_url + "open/game/getGoodsTypeList/gid/" + gid,
                data: "json",
                success: function (data) {
                    var type_str = '';
                    for (var i = 0; i < data.length; i++) {
                        type_str += '<li class="li_type" id="' + data[i].goods_type_id + '">' + '<span>' + data[i].goods_type_name + '</span>' + '</li>';
                    }
                    $('.foured').append(type_str);

                }
            });
        }
        if(aid){
            $.ajax({
                type: 'get',

                url: api_url + "open/game/getServerList/aid/" + aid,
                data: "json",
                success: function (data) {
                    var server_str = '';
                    for (var i = 0; i < data.length; i++) {
                        server_str += '<li class="li_server" id="' + data[i].sid + '">'  + '<span>' + data[i].server_name + '</span>' + '</li>';
                    }
                    $('.tree').append(server_str);

                }
            });
        }
        })





    $('.game-hot').click(function () {
        var v = $('.main_con_1').is(":hidden");
        if (v) {
            $('.main_con_1').show();
            $('.main_con_2').hide();
            $('.main_con_3').hide();
            $('.main_con_4').hide();
            $(this).css('border-bottom', '4px solid #fff');
            $('.area').css('border-bottom', '');
            $('.server').css('border-bottom', '');
            $('.goods').css('border-bottom', '');
            $('.area').css('border-left-color', '#4CB9E7');
            $('.server').css('border-left-color', '#efecec');
            $('.goods').css('border-left-color', '#efecec');
            $('.game-hot').children('.icon_down').addClass('cast_start');
            $('.game-hot').children('.icon_down').removeClass('end_start');
            $('.area').children('.icon_down').addClass('end_start');
            $('.area').children('.icon_down').removeClass('cast_start');
            $('.server').children('.icon_down').addClass('end_start');
            $('.server').children('.icon_down').removeClass('cast_start');
            $('.goods').children('.icon_down').addClass('end_start');
            $('.goods').children('.icon_down').removeClass('cast_start');


        } else {
            $('.main_con_1').hide();
            $(this).css('border-bottom', '');
            $('.area').css('border-left-color', '#efecec');
            $('.server').css('border-left-color', '#efecec');
            $('.goods').css('border-left-color', '#efecec');
            $('.game-hot').children('.icon_down').addClass('end_start');
            $('.game-hot').children('.icon_down').removeClass('cast_start');

        }
    })

    $('.area').click(function () {
        var v = $('.main_con_2').is(":hidden");
        if (v) {
            $('.main_con_1').hide();
            $('.main_con_2').show();
            $('.main_con_3').hide();
            $('.main_con_4').hide();
            $(this).css('border-bottom', '4px solid #fff');
            $('.game-hot').css('border-bottom', '');
            $('.server').css('border-bottom', '');
            $('.goods').css('border-bottom', '');
            $('.area').css('border-left-color', '#4CB9E7');
            $('.server').css('border-left-color', '#4CB9E7');
            $('.goods').css('border-left-color', '#efecec');
            $('.area').children('.icon_down').addClass('cast_start');
            $('.area').children('.icon_down').removeClass('end_start');

            $('.game-hot').children('.icon_down').addClass('end_start');
            $('.game-hot').children('.icon_down').removeClass('cast_start');
            $('.server').children('.icon_down').addClass('end_start');
            $('.server').children('.icon_down').removeClass('cast_start');
            $('.goods').children('.icon_down').addClass('end_start');
            $('.goods').children('.icon_down').removeClass('cast_start');
        } else {
            $('.main_con_2').hide();
            $(this).css('border-bottom', '');
            $('.area').css('border-left-color', '#efecec');
            $('.server').css('border-left-color', '#efecec');
            $('.goods').css('border-left-color', '#efecec');
            $('.area').children('.icon_down').addClass('end_start');
            $('.area').children('.icon_down').removeClass('cast_start');
        }
    })

    $('.server').click(function () {
        var v = $('.main_con_3').is(":hidden");
        if (v) {
            $('.main_con_1').hide();
            $('.main_con_2').hide();
            $('.main_con_3').show();
            $('.main_con_4').hide();
            $(this).css('border-bottom', '4px solid #fff');
            $('.goods').css('border-bottom', '');
            $('.area').css('border-bottom', '');
            $('.game-hot').css('border-bottom', '');
            $('.goods').css('border-left-color', '#4CB9E7');
            $('.server').css('border-left-color', '#4CB9E7');
            $('.area').css('border-left-color', '#efecec');

            $('.server').children('.icon_down').addClass('cast_start');
            $('.server').children('.icon_down').removeClass('end_start');

            $('.game-hot').children('.icon_down').addClass('end_start');
            $('.game-hot').children('.icon_down').removeClass('cast_start');
            $('.area').children('.icon_down').addClass('end_start');
            $('.area').children('.icon_down').removeClass('cast_start');
            $('.goods').children('.icon_down').addClass('end_start');
            $('.goods').children('.icon_down').removeClass('cast_start');

        } else {
            $('.main_con_3').hide();
            $(this).css('border-bottom', '');
            $('.area').css('border-left-color', '#efecec');
            $('.server').css('border-left-color', '#efecec');
            $('.goods').css('border-left-color', '#efecec');
            $('.server').children('.icon_down').addClass('end_start');
            $('.server').children('.icon_down').removeClass('cast_start');
        }
    })

    $('.goods').click(function () {
        var v = $('.main_con_4').is(":hidden");
        if (v) {
            $('.main_con_4').show();
            $('.main_con_1').hide();
            $('.main_con_2').hide();
            $('.main_con_3').hide();

            $(this).css('border-bottom', '4px solid #fff');
            $('.area').css('border-bottom', '');
            $('.server').css('border-bottom', '');
            $('.game-hot').css('border-bottom', '');
            $('.goods').css('border-left-color', '#4CB9E7');
            $('.area').css('border-left-color', '#efecec');
            $('.server').css('border-left-color', '#efecec');

            $('.goods').children('.icon_down').addClass('cast_start');
            $('.goods').children('.icon_down').removeClass('end_start');

            $('.game-hot').children('.icon_down').addClass('end_start');
            $('.game-hot').children('.icon_down').removeClass('cast_start');
            $('.area').children('.icon_down').addClass('end_start');
            $('.area').children('.icon_down').removeClass('cast_start');
            $('.server').children('.icon_down').addClass('end_start');
            $('.server').children('.icon_down').removeClass('cast_start');
        } else {
            $('.main_con_4').hide();
            $(this).css('border-bottom', '');
            $('.area').css('border-left-color', '#efecec');
            $('.server').css('border-left-color', '#efecec');
            $('.goods').css('border-left-color', '#efecec');
            $('.goods').children('.icon_down').addClass('end_start');
            $('.goods').children('.icon_down').removeClass('cast_start');
        }
    })



    $('.first').on('click', '.li_game', function () {

//					样式
        $(this).css('color', '#4CB9E7');
        $(this).siblings().css('color', '#333');
        $(this).parent().css('display', 'none');
        $('.area_name').remove();
        $('.li_server').remove();
        $('.li_type').remove();
        $('.main_con_1').hide();
        $('.main_con_2').show();
        $('.main_con_3').hide();
        $('.main_con_4').hide();
        $('.first').show();
        $('.game_hoter').html($(this).children('span').text());
        $('.game_ears').html('选择大区');
        $('.game_typer').html('选择服务器');
        $('.game_templt').html('选择商品类型');

        $('.game-hot').children('.icon_down').addClass('end_start');
        $('.game-hot').children('.icon_down').removeClass('cast_start');

        $('.area').children('.icon_down').addClass('cast_start');
        $('.area').children('.icon_down').removeClass('end_start');



        $('.game-hot').css('border-bottom', '');
        $('.area').css('border-bottom', '4px solid #fff');
        $('.area').css('border-left-color', '#4CB9E7');
        $('.server').css('border-left-color', '#4CB9E7');
        $('.goods').css('border-left-color', '#ffecec');
        $('.second').children().remove();
        gid = $(this).attr('id');
        $('#gid').val(gid);
        $('#aid').val('');
        $('#sid').val('');
        $('#goods_type_id').val('');
        $.ajax({
            type: 'get',
            url: api_url + "open/game/getAreaList/gid/" + gid,
            data: "json",
            success: function (data) {

                var area_str = '';
                for (var i = 0; i < data.length; i++) {
                    area_str += '<li class="li_area"  id="' + data[i].aid + '">'  + '<span>' + data[i].area_name + '</span>' + '</li>';
                }
                $('.second').append(area_str);

            }
        });
    })


//点击大区显示服务器
    $('.second').on('click', '.li_area', function () {
        $('.main_con_1').hide();
        $('.main_con_2').hide();
        $('.main_con_3').show();
        $('.main_con_4').hide();

        $('.game_ears').html($(this).children('span').text());
        $('.game_typer').html('选择服务器');
        $('.area').css('border-bottom', '');
        $('.server').css('border-bottom', '4px solid #fff');
        $(this).css('color', '#4CB9E7');
        $(this).siblings().css('color', '#333');
        $('.area').children('.icon_down').addClass('end_start');
        $('.area').children('.icon_down').removeClass('cast_start');


        $('.server').children('.icon_down').addClass('cast_start');
        $('.server').children('.icon_down').removeClass('end_start');

        $('.goods').css('border-left-color', '#4CB9E7');
        $('.server').css('border-left-color', '#4CB9E7');
        $('.area').css('border-left-color', '#ffecec');

        $('.tree').children().remove();
        aid = $(this).attr('id');
        $('#aid').val(aid);
        $('#sid').val('');
        $('#goods_type_id').val('');
        $.ajax({
            type: 'get',
            url: api_url + "open/game/getServerList/aid/" + aid,
            data: "json",
            success: function (data) {
                var server_str = '';
                for (var i = 0; i < data.length; i++) {
                    server_str += '<li class="li_server" id="' + data[i].sid + '">'  + '<span>' + data[i].server_name + '</span>' + '</li>';
                }
                $('.tree').append(server_str);

            }
        });


    })

    $('.tree').on('click', '.li_server', function () {

        $('.main_con_1').hide();
        $('.main_con_2').hide();
        $('.main_con_3').hide();
        $('.main_con_4').show();
        $('.game_typer').html($(this).children('span').text());
        $('.server').css('border-bottom', '');
        $('.goods').css('border-bottom', '4px solid #fff');

        $('.goods').css('border-left-color', '#4CB9E7');
        $('.server').css('border-left-color', '#ffecec');
        $('.area').css('border-left-color', '#ffecec');
        sid = $(this).attr('id');
        $('#sid').val(sid);

        $('.server').children('.icon_down').addClass('end_start');
        $('.server').children('.icon_down').removeClass('cast_start');

        $('.goods').children('.icon_down').addClass('cast_start');
        $('.goods').children('.icon_down').removeClass('end_start');

    })


    $('.first').on('click', '.li_game', function () {
        $('.foured').children().remove();
        var gid = $(this).attr('id');
        $('.main_con_4').hide();

        $.ajax({
            type: 'get',
            url: api_url + "open/game/getGoodsTypeList/gid/" + gid,
            data: "json",
            success: function (data) {
                var type_str = '';
                for (var i = 0; i < data.length; i++) {
                    type_str += '<li class="li_type" id="' + data[i].goods_type_id + '">' + '<span>' + data[i].goods_type_name + '</span>' + '</li>';
                }
                $('.foured').append(type_str);

            }
        });


    })

    $('.foured').on('click', '.li_type', function () {
        $('.game_templt').html($(this).children('span').text());
        $('.main_con_1').hide();
        $('.main_con_2').hide();
        $('.main_con_3').hide();
        $('.main_con_4').hide();

        $('.goods').css('border-bottom', '2px solid #ff4747');
        $(this).css('color', '#4CB9E7');
        $(this).siblings().css('color', '#333');
        var goods_type_id = $(this).attr('id');
        $('#goods_type_id').val(goods_type_id);

        $('.goods').children('.icon_down').addClass('end_start');
        $('.goods').children('.icon_down').removeClass('cast_start');
        var gid = $('#gid').val();
        var aid = $('#aid').val();
        var sid = $('#sid').val();
        var goods_type_id = $('#goods_type_id').val();
        if(!goods_type_id){
            goods_type_id = 1;
        }
        if (gid) {
            window.location.href = "/goods/lists?gid=" + gid + "&aid=" + aid + "&sid=" + sid + "&goods_type_id=" + goods_type_id;
        }
    })

    $('.turnoff').click(function () {
        $('.game-hot').css('border-bottom', '2px solid #ff4747');
        $('.area').css('border-bottom', '2px solid #ff4747');
        $('.server').css('border-bottom', '2px solid #ff4747');
        $('.goods').css('border-bottom', '2px solid #ff4747');
    })


    //游戏名称搜索//游戏名称搜索事件
    $('#game_name_keyword').bind('input propertychange', function () {
        var game_name_keyword = $('#game_name_keyword').val();
        $.ajax({
            type: 'get',
            url: api_url + "open/game/getGameList/keyword/" + game_name_keyword,
            data: "json",
            success: function (data) {
                var game_str = '';
                for (var i = 0; i < data.length; i++) {
                    game_str +='<li class="li_game" id="' + data[i].gid + '">'  + '<span>' + data[i].game_name + '</span>' + '</li>';
                }
                $('.li_game').remove();
                $('.first').append(game_str);
            }
        });
        $('.a_game').css('color','');
        $('.a_game').css('border-bottom','');
    });



    //游戏区名称搜索事件
    $('#area_name_keyword').bind('input propertychange', function () {
        var area_name_keyword = $('#area_name_keyword').val();
        $.ajax({
            type: 'get',
            url: api_url + "open/game/getAreaList/gid/" + gid + "/keyword/" + area_name_keyword,
            data: "json",
            success: function (data) {
                var area_str = '';
                for (var i = 0; i < data.length; i++) {
                    area_str += '<li class="li_area"  id="' + data[i].aid + '">'  + '<span>' + data[i].area_name + '</span>' + '</li>';
                }
                $('.li_area').remove();
                $('.second').append(area_str);
            }
        });
    });

    //游戏服务器名称搜索事件
    $('#server_name_keyword').bind('input propertychange', function () {
        var server_name_keyword = $('#server_name_keyword').val();
        $.ajax({
            type: 'get',
            url: api_url + "open/game/getServerList/aid/" + aid + "/keyword/" + server_name_keyword,
            data: "json",
            success: function (data) {
                var server_str = '';
                for (var i = 0; i < data.length; i++) {
                    server_str += '<li class="li_server" id="' + data[i].sid + '">'  + '<span>' + data[i].server_name + '</span>' + '</li>';
                }
                $('.li_server').remove();
                $('.tree').append(server_str);
            }
        });
    });

    //游戏商品搜索事件
    $('#goods_type_keyword').bind('input propertychange', function () {
        var goods_type_keyword = $('#goods_type_keyword').val();
        $('.li_type').remove();
        var gid = $('#my_gid').val();
        $.ajax({
            type: 'get',
            url: api_url + "open/game/getGoodsTypeList/gid/" + gid + "/keyword/" + goods_type_keyword,
            data: "json",
            success: function (data) {
                var type_str = '';
                for (var i = 0; i < data.length; i++) {
                    type_str += '<li class="li_type" id="' + data[i].goods_type_id + '">' + data[i].goods_type_name + '<b></b></li>';
                }
                $('.foured').append(type_str);
            }
        });
    });


    //字母搜索功能

    $('.a_game').click(function(){
        var obj = $(this).html();
        $('.li_game').remove();
        $.ajax({
            type: 'get',
            url: api_url + "open/game/getInitialGame?initial=" + obj,
            data: "json",
            success: function (data) {
                var game_str = '';
                for (var i = 0; i < data.length; i++) {
                    game_str +='<li class="li_game" id="' + data[i].gid + '">'  + '<span>' + data[i].game_name + '</span>' + '</li>';
                }
                $('.first').append(game_str);
            }
        });
        $(this).css('color','#ff4747');
        $(this).css('border-bottom','2px solid #ff4747');
        $(this).siblings().css('color','');
        $(this).siblings().css('border-bottom','');
        $('.hot_game').css('border-bottom','1px solid #ddd');
        $('.hot_game').css('color','#999999');

    })

    $('.hot_game').click(function(){
        $('.li_game').remove();
        $.ajax({
            url: api_url + "open/game/getGameList",
            type: 'get',
            dataType: "json",
            success: function (data) {
                var game_str = '';
                for (var i = 0; i < data.length; i++) {
                    game_str += '<li class="li_game" id="' + data[i].gid + '">'  + '<span>' + data[i].game_name + '</span>' + '</li>';
                }
                $('.first').append(game_str);
            }
        });

        $('.a_game').css('color','');
        $('.a_game').css('border-bottom','');
        $(this).css('border-bottom','#ff4747 2px solid');
        $(this).css('color','#ff4747');

    })


    var _height1 = $('.con_list').height();
    if(_height1 > 300) {
        $('.con_list').addClass('flow_all');
    }


});



