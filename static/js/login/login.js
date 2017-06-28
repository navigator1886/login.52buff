$(function () {
    //是否显示验证码
    $.get(api.showCaptcha,{type: 'login'},function (rcvData) {
       if(rcvData.code == 0){
           if(rcvData.data.isExist == 1){
               $('#captcha').attr('src',rcvData.data.cpatchaUrl);
               $('.verify').show();
           }
           else
           {
               $('.verify').hide();
           }
       }
    });
    $.get(api.getSalt,function (rcvData) {
       if(rcvData.code == 0){
           salt = rcvData.data.saltCode;
       }
    });
    var user = localStorage.user;
    if(user != ''){
        $('#mob').val(user);
    }
    //手机号
    $('#mob').focus(function () {
        $('.tishi_mob').show();
        $('.true_mob').hide();
        $('.error_mob').hide();
    });

    $('#mob').blur(function () {
        checkmob();
    });
    //密码
    $('#pass').focus(function () {
        $('.tishi_pass').show();
        $('.true_pass').hide();
        $('.error_pass').hide();
    })
    $('#pass').blur(function () {
        checkpwd();
    });
    //验证码
    $('#code').focus(function () {
        $('.tishi_codes').show();
        $('.true_codes').hide();
    })
    $('#code').blur(function () {
        checkcode();
    });
    $('.img_1 img').click(function () {
        var src = $(this).attr('src').split('&')[0];
        $(this).attr('src', src + '&?t=' + Math.random());
    });

    //点击登录按钮，执行登录操作
    $('.btn').click(function () {
        $('.errMsg').text('');
        login();
    });
    //所有的input元素
    var $inp = $('input');
    $inp.keypress(function (e) {
        var key = e.which;
        if (key == 13) {
            login();
        }
    });
});

function login() {
    if (!(checkmob() && checkpwd())) {
        return false;
    }
    if ($('.wh').css('display') == 'none') {
        remember = 0;
    } else {
        remember = 1;
        localStorage.user = $('#mob').val();
    }
    if(salt == ''){                                 //确认是否有获取到盐值
        $.get(api.getSalt,function (rcvData) {
            if(rcvData.code == 0){
                salt = rcvData.data.saltCode;
            }
        })
    }
    var senDdata = {
        userName: $('#mob').val(),
        password: _52buff.getCode(salt,$('#pass').val()),
        captcha: $('#code').val()
    };

    //发送登录请求
    $.post(api.login, senDdata, function (rcvData) {
        $('.errMsg').text('');
        if(rcvData.code == 0){              //登陆成功
            layer.msg('登陆成功');
            delayJump(rcvData.data.callback,2000);
        }
        else if(rcvData.code == 500){       //异常返回
            $('.errMsg').text(rcvData.message)
        }
        else{                               //登录失败
            $('.errMsg').text(rcvData.message)
            // $('#captcha').attr('src',rcvData.data.captchaUrl)
            $('.verify').show();
        }
    },'json');
}

//验证手机号码
function checkmob() {
    var mobile = $('#mob').val();
    if (checkMobile(mobile)) {
        $('.true_mob').hide();
        $('.tishi_mob').hide();
        $('.error_mob').hide();
        return true;
    } else if (mobile.length <= 0) {
        $('.error_mob').hide();
        $('.true_mob').show();
        $('.tishi_mob').hide();
    } else {
        $('.error_mob').show();
        $('.true_mob').hide();
        $('.tishi_mob').hide();
    }
    return false;
}

function checkpwd() {
    var pass = $('#pass').val();
    if (checkPwd(pass)) {
        $('.true_pass').hide();
        $('.tishi_pass').hide();
        $('.error_pass').hide();
        return true;
    } else if (pass.length <= 0) {
        $('.true_pass').show();
        $('.tishi_pass').hide();
        $('.error_pass').hide();
    } else {
        $('.error_pass').show();
        $('.true_pass').hide();
        $('.tishi_pass').hide();
    }
    return false;
}

function checkcode() {
    var code = $('#code').val();
    if (captcha && code.length <= 0) {
        $('.true_codes').show();
        $('.tishi_codes').hide();
    }
    if(code != ''){
        $.post(api.verifyCaptcha,{captcha: code},function (rcvData) {
            if(rcvData.code == 0){
                console.log(rcvData.message);
            }
            else if(rcvData.code == 1){
                console.log(rcvData.message);
            }
            else{
                console.error(rcvData.message);
            }
        },'json')
    }
}
