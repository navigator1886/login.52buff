/*注册页*/
$(function () {
    //手机号
    $('#mob').focus(function () {
        $('.tishi_mob').show();
        $('.true_mob').hide();
        $('.error_mob').hide();
    })

    $('#mob').blur(function () {
        if(!checkmob()){
            return
        }
        var mob = $('#mob').val();
        var isExist = 0;
        $.post(api.verifyUser,{userName: mob},function (rcvData) {    //验证用户是否存在
            $('.errMsg').text('');
            if(rcvData.code == 0){
                    if(rcvData.data.isExist == 1){
                        $('.errMsg').text('用户已存在');
                        isExist = 1;
                    }
                }
            },'json')
    });
    //密码
    $('#pass').focus(function () {
        $('.password .tishi_pass').show();
        $('.password .true_pass').hide();
        $('.password .error_pass').hide();
    })
    $('#pass').blur(function () {
        checkpwd();
    });
    //确认密码
    $('#confirm').focus(function () {
        $('.checkPassword .tishi_pass').show();
        $('.checkPassword .true_pass').hide();
        $('.checkPassword .error_pass').hide();
    })
    $('#confirm').blur(function () {
        confirmPwd();
    });
    //验证码
    $('#code').focus(function () {
        $('.tishi_codes').show();
        $('.true_codes').hide();
    })
    $('#code').blur(function () {
        checkcode();
    });
    //手机验证码
    $('#mobileCode').focus(function () {
        $('.tishi_mobileCode').show();
        $('.true_mobileCode').hide();
    })
    $('#mobileCode').blur(function () {
        checkmobcode();
    });
    $('.img_1 img').click(function () {
        var src = $(this).attr('src');
        $(this).attr('src', src + '?' + Math.random());
    });
    //注册
    $('.regBtn').click(function () {
        if (!(checkmob() && checkpwd() && confirmPwd() && checkmobcode())) {
            return false;
        }
        if ($('.wh').css('display') == 'none') {
            layer.msg('请先同意52buff服务协议');
            return false;
        }
        var sendData = {
            phone: $('#mob').val(),
            password: $.md5($('#pass').val()),
            phoneCode: $('#mobileCode').val()
        };
        $.post(api.register,sendData,function (rcvData) {
            $('.errMsg').text('');
            if(rcvData.code == 0){
                layer.msg(rcvData.message);
                delayJump(rcvData.data.callback,2000)
             }
            else if(rcvData.code == 500){
                $('.errMsg').text(rcvData.message)
            }
            else{
                $('.errMsg').text(rcvData.message)
            }
        },'json')
    });
});
//验证手机号码
function checkmob() {
    var mobile = $('#mob').val();
    if (mobile && checkMobile(mobile)) {
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
        $('.password .true_pass').hide();
        $('.password .tishi_pass').hide();
        $('.password .error_pass').hide();
        return true;
    } else if (pass.length <= 0) {
        $('.password .true_pass').show();
        $('.password .tishi_pass').hide();
        $('.password .error_pass').hide();
    } else {
        $('.password .error_pass').show();
        $('.password .true_pass').hide();
        $('.password .tishi_pass').hide();
    }
    return false;
}
function confirmPwd() {
    var pwd = $('#pass').val();
    var confirm = $('#confirm').val();
    if(confirm.length <= 0){
        $('.checkPassword .true_pass').show();
        $('.checkPassword .tishi_pass').hide();
        $('.checkPassword .error_pass').hide();
        return false;
    }
    else if(confirm != pwd){
        $('.checkPassword .true_pass').hide();
        $('.checkPassword .tishi_pass').hide();
        $('.checkPassword .error_pass').show();
        return false;
    }
    return true;
}

function checkcode() {
    var code = $('#code').val();
    if (captcha && code.length <= 0) {
        $('.true_codes').show();
        $('.tishi_codes').hide();
        return false;
    } else {
        $('.true_codes').hide();
        $('.tishi_codes').hide();
        return true;
    }
}

function checkmobcode() {
    var mobileCode = $('#mobileCode').val();
    if (mobileCode.length <= 0) {
        $('.true_mobileCode').show();
        $('.tishi_mobileCode').hide();
        return false;
    } else {
        $('.true_mobileCode').hide();
        $('.tishi_mobileCode').hide();
    }
    return true;
}

function clickButton() {                    //获取手机验证码
    if (!(checkmob())) {
        return false;
    }
    var mobile = $('#mob').val();
    var code = $('#code').val();
    var sendData = {
        phone: mobile,
        codeType: 'register'
    };
    $.post(api.getPhoneCode, sendData, function (rcvData) {
        $('.errMsg').text('');
        if(rcvData.code == 0){
            codeTimeDown();
        }
        else if(rcvData.code == 500){
            $('.errMsg').text(rcvData.message);
        }
        else{
            $('.errMsg').text(rcvData.message);
        }
    });
}

