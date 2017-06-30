$(function() {
//搜索框代码
    jQuery.support.cors = true;     //是否跨域

    var gid = $('#gid').val(),      //游戏id
        nid = $('#nid').val(),      //网络id
        bid = $('#bid').val(),      //大区id
        aid = $('#aid').val(),      //服务器id
        gameList = {},
        areaList = [];
    $(document).ready(function(){                  //获取游戏列表
        $.get(api.getGameList,function (rcvData) {
            if(rcvData.code == 0){
                gameList = rcvData.data;
                var htmlNode = '';
                for(key in gameList){
                    htmlNode += '<li class="li_game" id="' + key + '"><span>' + gameList.key +'</span></li>';
                }
                $('.first').append(htmlNode);
            }
        },'json')
    });

    //弹出游戏选择列表
    $('.gameList').click(function () {
        var v = $('.main_con_1').is(":hidden");
        if (v) {
            $('.main_con_1').show();
            $('.main_con_2').hide();
            $('.main_con_3').hide();
            $('.main_con_4').hide();
            $(this).css('border-bottom', '4px solid #fff');
            $('.netList').css('border-bottom', '');
            $('.bigAreaList').css('border-bottom', '');
            $('.areaList').css('border-bottom', '');
            $('.netList').css('border-left-color', '#4CB9E7');
            $('.bigAreaList').css('border-left-color', '#efecec');
            $('.areaList').css('border-left-color', '#efecec');
            $('.gameList').children('.icon_down').addClass('cast_start');
            $('.gameList').children('.icon_down').removeClass('end_start');
            $('.netList').children('.icon_down').addClass('end_start');
            $('.netList').children('.icon_down').removeClass('cast_start');
            $('.bigAreaList').children('.icon_down').addClass('end_start');
            $('.bigAreaList').children('.icon_down').removeClass('cast_start');
            $('.areaList').children('.icon_down').addClass('end_start');
            $('.areaList').children('.icon_down').removeClass('cast_start');
        } else {
            $('.main_con_1').hide();
            $(this).css('border-bottom', '');
            $('.netList').css('border-left-color', '#efecec');
            $('.bigAreaList').css('border-left-color', '#efecec');
            $('.areaList').css('border-left-color', '#efecec');
            $('.gameList').children('.icon_down').addClass('end_start');
            $('.gameList').children('.icon_down').removeClass('cast_start');
        }
    })

    //弹出网络选择列表
    $('.netList').click(function () {
        var v = $('.main_con_2').is(":hidden");
        if (v) {
            $('.main_con_1').hide();
            $('.main_con_2').show();
            $('.main_con_3').hide();
            $('.main_con_4').hide();
            $(this).css('border-bottom', '4px solid #fff');
            $('.gameList').css('border-bottom', '');
            $('.bigAreaList').css('border-bottom', '');
            $('.areaList').css('border-bottom', '');
            $('.netList').css('border-left-color', '#4CB9E7');
            $('.bigAreaList').css('border-left-color', '#4CB9E7');
            $('.areaList').css('border-left-color', '#efecec');
            $('.netList').children('.icon_down').addClass('cast_start');
            $('.netList').children('.icon_down').removeClass('end_start');

            $('.gameList').children('.icon_down').addClass('end_start');
            $('.gameList').children('.icon_down').removeClass('cast_start');
            $('.bigAreaList').children('.icon_down').addClass('end_start');
            $('.bigAreaList').children('.icon_down').removeClass('cast_start');
            $('.areaList').children('.icon_down').addClass('end_start');
            $('.areaList').children('.icon_down').removeClass('cast_start');
        } else {
            $('.main_con_2').hide();
            $(this).css('border-bottom', '');
            $('.netList').css('border-left-color', '#efecec');
            $('.bigAreaList').css('border-left-color', '#efecec');
            $('.areaList').css('border-left-color', '#efecec');
            $('.netList').children('.icon_down').addClass('end_start');
            $('.netList').children('.icon_down').removeClass('cast_start');
        }
    })

    //弹出大区选择列表
    $('.bigAreaList').click(function () {
        var v = $('.main_con_3').is(":hidden");
        if (v) {
            $('.main_con_1').hide();
            $('.main_con_2').hide();
            $('.main_con_3').show();
            $('.main_con_4').hide();
            $(this).css('border-bottom', '4px solid #fff');
            $('.areaList').css('border-bottom', '');
            $('.netList').css('border-bottom', '');
            $('.gameList').css('border-bottom', '');
            $('.areaList').css('border-left-color', '#4CB9E7');
            $('.bigAreaList').css('border-left-color', '#4CB9E7');
            $('.netList').css('border-left-color', '#efecec');

            $('.bigAreaList').children('.icon_down').addClass('cast_start');
            $('.bigAreaList').children('.icon_down').removeClass('end_start');

            $('.gameList').children('.icon_down').addClass('end_start');
            $('.gameList').children('.icon_down').removeClass('cast_start');
            $('.netList').children('.icon_down').addClass('end_start');
            $('.netList').children('.icon_down').removeClass('cast_start');
            $('.areaList').children('.icon_down').addClass('end_start');
            $('.areaList').children('.icon_down').removeClass('cast_start');

        } else {
            $('.main_con_3').hide();
            $(this).css('border-bottom', '');
            $('.netList').css('border-left-color', '#efecec');
            $('.bigAreaList').css('border-left-color', '#efecec');
            $('.areaList').css('border-left-color', '#efecec');
            $('.bigAreaList').children('.icon_down').addClass('end_start');
            $('.bigAreaList').children('.icon_down').removeClass('cast_start');
        }
    })

    //弹出服务器选择列表
    $('.areaList').click(function () {
        var v = $('.main_con_4').is(":hidden");
        if (v) {
            $('.main_con_4').show();
            $('.main_con_1').hide();
            $('.main_con_2').hide();
            $('.main_con_3').hide();

            $(this).css('border-bottom', '4px solid #fff');
            $('.netList').css('border-bottom', '');
            $('.bigAreaList').css('border-bottom', '');
            $('.gameList').css('border-bottom', '');
            $('.areaList').css('border-left-color', '#4CB9E7');
            $('.netList').css('border-left-color', '#efecec');
            $('.bigAreaList').css('border-left-color', '#efecec');

            $('.areaList').children('.icon_down').addClass('cast_start');
            $('.areaList').children('.icon_down').removeClass('end_start');

            $('.gameList').children('.icon_down').addClass('end_start');
            $('.gameList').children('.icon_down').removeClass('cast_start');
            $('.netList').children('.icon_down').addClass('end_start');
            $('.netList').children('.icon_down').removeClass('cast_start');
            $('.bigAreaList').children('.icon_down').addClass('end_start');
            $('.bigAreaList').children('.icon_down').removeClass('cast_start');
        } else {
            $('.main_con_4').hide();
            $(this).css('border-bottom', '');
            $('.netList').css('border-left-color', '#efecec');
            $('.bigAreaList').css('border-left-color', '#efecec');
            $('.areaList').css('border-left-color', '#efecec');
            $('.areaList').children('.icon_down').addClass('end_start');
            $('.areaList').children('.icon_down').removeClass('cast_start');
        }
    })

    //选择游戏，获取游戏id
    $('.first').on('click', '.li_game', function () {
        gid = $(this).attr('id');                   //获取所选择的游戏id

        //样式
        $(this).css('color', '#4CB9E7');
        $(this).siblings().css('color', '#333');
        $(this).parent().css('display', 'none');
        if(gid != $('#gid').val()){                 //如果选择的游戏和之前选择的不相同
            $('#gid').val(gid);                     //清空之前的选项
            $('#nid').val('');
            $('#bid').val('');
            $('#aid').val('');

            $('.sel_game').html($(this).children('span').text());
            $('.sel_net').html('选择网络');
            $('.sel_bigArea').html('选择大区');
            $('.sel_area').html('服务器');

            $('.second').children().remove();                   //清空网络,大区，服务器列表
            $('.third').children().remove();
            $('.fourth').children().remove();
        }

        $('.main_con_1').hide();                    //自动跳到选择网络
        $('.main_con_2').show();
        $('.main_con_3').hide();
        $('.main_con_4').hide();
        $('.first').show();

        $('.gameList').children('.icon_down').addClass('end_start');
        $('.gameList').children('.icon_down').removeClass('cast_start');

        $('.netList').children('.icon_down').addClass('cast_start');
        $('.netList').children('.icon_down').removeClass('end_start');


        $('.gameList').css('border-bottom', '');
        $('.netList').css('border-bottom', '4px solid #fff');
        $('.netList').css('border-left-color', '#4CB9E7');
        $('.bigAreaList').css('border-left-color', '#4CB9E7');
        $('.areaList').css('border-left-color', '#ffecec');

        $.get(api.getNetList,{gameId: gid},function (rcvData) {     //加载对应的网络列表
            if(rcvData.code == 0){
                var netList = rcvData.data;
                var htmlNode = '';
                for(key in netList){
                    htmlNode += '<li class="li_net" id="' + key +'"><span>' + netList.key + '</span></li>';
                }
                $('.second').append(htmlNode);
            }
        },'json')
    })

    //选择网络，获取网络id
    $('.second').on('click', '.li_net', function () {
        nid = $(this).attr('id');
        if(nid != $('#nid').val()){
            $('#nid').val(nid);
            $('#bid').val('');
            $('#aid').val('');

            $('.sel_net').html($(this).children('span').text());
            $('.sel_bigarea').html('选择大区');
            $('.sel_area').html('服务器');

            $('.third').children().remove();                //清空大区列表和服务器列表
            $('.fourth').children().remove();

        }
        $('.main_con_1').hide();
        $('.main_con_2').hide();
        $('.main_con_3').show();
        $('.main_con_4').hide();


        $('.netList').css('border-bottom', '');
        $('.bigAreaList').css('border-bottom', '4px solid #fff');
        $(this).css('color', '#4CB9E7');
        $(this).siblings().css('color', '#333');
        $('.netList').children('.icon_down').addClass('end_start');
        $('.netList').children('.icon_down').removeClass('cast_start');

        $('.bigAreaList').children('.icon_down').addClass('cast_start');
        $('.bigAreaList').children('.icon_down').removeClass('end_start');

        $('.areaList').css('border-left-color', '#4CB9E7');
        $('.bigAreaList').css('border-left-color', '#4CB9E7');
        $('.netList').css('border-left-color', '#ffecec');

        $.get(api.getAreaList,{netId: nid},function (rcvData) {     //加载对应的大区和服务器列表
            if(rcvData.code == 0){
                areaList = rcvData.data;
                var htmlNode = '';
                for( index in areaList){
                    for(key in areaList[index]["bigArea"]){
                        htmlNode += '<li class="li_bigArea" id="' + key +'"><span>'
                            + areaList[index]["bigArea"][key] + '</span></li>';
                    }
                }
                $('.third').append(htmlNode);
            }
        },'json')
    })

    //选择大区，获取大区id
    $('.third').on('click', '.li_bigArea', function () {
        bid = $(this).attr('id');
        if(bid != $('#bid').val()){
            $('#bid').val(bid);

            $('.sel_bigArea').html($(this).children('span').text());
            $('.sel_area').html('服务器');

            $('.fourth').children().remove();

            if($.isEmptyObject(areaList)){
                $.get(api.getAreaList,{netId: nid},function (rcvData) {
                    if(rcvData.code == 0){
                        areaList = rcvData.data;
                    }
                },'json')
            }
            var htmlNode = '';
            for(var index in areaList){
                    if(areaList[index]["bigArea"][bid]){
                        for(var key in areaList[index]["area"]){
                            htmlNode += '<li class="li_area" id="' + key +'"><span>'
                                + areaList[index]["area"][key] + '</span></li>';
                        }
                    }
                }
            $('.fourth').append(htmlNode);
        }

        $('.main_con_1').hide();
        $('.main_con_2').hide();
        $('.main_con_3').hide();
        $('.main_con_4').show();

        $('.bigAreaList').css('border-bottom', '');
        $('.areaList').css('border-bottom', '4px solid #fff');

        $('.netList').css('border-left-color', '#ffecec');
        $('.bigAreaList').css('border-left-color', '#ffecec');
        $('.areaList').css('border-left-color', '#4CB9E7');

        $('.bigAreaList').children('.icon_down').addClass('end_start');
        $('.bigAreaList').children('.icon_down').removeClass('cast_start');

        $('.areaList').children('.icon_down').addClass('cast_start');
        $('.areaList').children('.icon_down').removeClass('end_start');

    });

    //选择服务器，获取服务器id
    $('.fourth').on('click', '.li_area', function () {
        aid = $(this).attr('id');
        if(aid != $('#aid').val()){
            $('#aid').val(aid);
            $('.game_templt').html($(this).children('span').text());

        }

        $('.main_con_1').hide();
        $('.main_con_2').hide();
        $('.main_con_3').hide();
        $('.main_con_4').hide();

        $('.areaList').css('border-bottom', '2px solid #ff4747');
        $(this).css('color', '#4CB9E7');
        $(this).siblings().css('color', '#333');

        $('.areaList').children('.icon_down').addClass('end_start');
        $('.areaList').children('.icon_down').removeClass('cast_start');

        //获取在售商品，页面跳转

    });

    //下拉框关闭按钮
    $('.turnoff').click(function () {
        $('.gameList').css('border-bottom', '2px solid #58B7FF');
        $('.netList').css('border-bottom', '2px solid #58B7FF');
        $('.bigAreaList').css('border-bottom', '2px solid #58B7FF');
        $('.areaList').css('border-bottom', '2px solid #58B7FF');
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

