/**
 * 共用js方法
 */
//刷新图片验证码
function showCaptcha(obj) {
    var src = $(obj).attr('src');
    $(obj).attr('src', src + '?' + Math.random());
}
//检测手机号
function checkMobile(mobile) {
    var pattern = /^1[34578][0-9]{1}[0-9]{8}$|15[0189]{1}[0-9]{8}$|189[0-9]{8}$/;
    if (!pattern.test(mobile)) {
        return false;
    } else {
        return true;
    }
}
//检测身份证号
function checkIdcard(idcard) {
    if (!isIdCardNo(idcard)) {
        return false;
    } else {
        return true;
    }
}
//检测身份证号
function checkEmail(email) {
    var pattern = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if (!pattern.test(email)) {
        return false;
    } else {
        return true;
    }
}
//检测QQ
function checkQq(qq) {
    var pattern = /^[1-9][\d]{4,11}$/;
    if (!pattern.test(qq)) {
        return false;
    } else {
        return true;
    }
}
//检测密码
function checkPwd(pwd) {
    var pattern = /^[0-9a-zA-Z_!\.@#\$%\^&\*\(\)\[\]\\?\\\/\|\-~`\+\=\,\r\n\:\'\"]{6,18}$/;
    if (!pattern.test(pwd)) {
        return false;
    } else {
        return true;
    }
}
//检测银行卡号
function checkBankcard(bankcard) {
    var reg_yhk = /^[0-9]{15,19}$/;
    if (!reg_yhk.test(bankcard)) {
        return false;
    } else {
        return true;
    }

}
//检测真实姓名
function checkRealname(realname) {
    var pattern = /^[\u4e00-\u9fa5]{2,4}$/;
    if (!pattern.test(realname)) {
        return false;
    } else {
        return true;
    }
}
//延时跳转
function delayJump(url, time) {
    if (typeof(time) == 'undefined') {
        time = 1000;
    }
    setTimeout(function () {
        location.href = url;
    }, time);
}

//发送验证码倒计时
function codeTimeDown() {
    var obj = $('.getMobileCode');
    obj.attr("disabled", "disabled");
    /*按钮倒计时*/
    obj.addClass('add');
    var time = 60;
    var set = setInterval(function () {
        obj.val(--time + "s后重新发送");
    }, 1000);
    /*等待时间*/
    setTimeout(function () {
        obj.attr("disabled", false).val("重新获取验证码");
        /*倒计时*/
        clearInterval(set);
        obj.removeClass('add');
    }, 60000);
}
//简单post提交
function post(submitUrl, data, goUrl, msg) {
    var index = emptyLoadding();
    $.post(submitUrl, data, function (data) {
        layer.close(index);
        if (data.code == 0) {
            layer.msg(data.msg);
        } else if (data.code == 1) {
            if (typeof(msg) != 'undefined') {
                layer.msg(msg);
                delayJump(goUrl);
            } else {
                delayJump(goUrl, 0);
            }
        }
    });
}

//post提交后根据返回url跳转
function postGoUrl(submitUrl, data, msg) {
    var index = emptyLoadding();
    $.post(submitUrl, data, function (data) {
        layer.close(index);
        if (data.code == 0) {
            layer.msg(data.msg);
        } else if (data.code == 1) {
            if (typeof(msg) != 'undefined') {
                layer.msg(msg);
                delayJump(data.url);
            } else {
                delayJump(data.url, 0);
            }
        }
    });
}
function postCallback(submitUrl, data, func) {
    $.post(submitUrl, data, function (data) {
        if (data.code == 0) {
            layer.msg(data.msg);
        } else if (data.code == 1) {
            layer.msg(msg);
            func(data);
        }
    });
}

function getMobileCode(sendUrl, data) {
    $.post(sendUrl, data, function (data) {
        if (data.code == 0) {
            showCaptcha($('#captcha'));
            layer.msg(data.msg);
        } else {
            layer.msg('发送成功');
            codeTimeDown();
        }
    });
}

function formatMoney(obj, max) {
    var regStrs = [
        ['^0(\\d+)$', '$1'],           //禁止录入整数部分两位以上，但首位为0
        ['^\\.$', ''],                 //禁止录入任何非数字和点
        ['[^\\d\\.]+$', ''],           //禁止录入任何非数字和点
        ['\\.(\\d?)\\.+', '.$1'],      //禁止录入两个以上的点
        ['^(\\d+\\.\\d{2}).+', '$1'],  //禁止录入小数点后两位以上
    ];
    for (i = 0; i < regStrs.length; i++) {
        var reg = new RegExp(regStrs[i][0]);
        obj.val(obj.val().replace(reg, regStrs[i][1]));
    }
    if (parseFloat(obj.val()) > parseFloat(max)) {
        obj.val(max)
    }
    return obj.val();
}

function GetDateStr(AddDayCount) {
    var dd = new Date();
    dd.setDate(dd.getDate() + AddDayCount);//获取AddDayCount天后的日期
    var y = dd.getFullYear();
    var m = dd.getMonth() + 1;//获取当前月份的日期
    var d = dd.getDate();
    var h = dd.getHours();
    var i = dd.getMinutes();
    return y + "-" + m + "-" + d + ' ' + h + ':' + i;
}

//订单排序
function orderSort(sort, order) {
    $("input[name='sort']").val(sort);
    $("input[name='order']").val(order);
    formFilter();
}

//订单搜索分页
function orderPagesize(pagesize) {
    $("input[name='r']").val(pagesize);
    formFilter();
}

function orderFundType(type) {
    $("input[name='fund_type']").val(type);
    formFilter();
}

function orderFundStatus(status) {
    $("input[name='fund_status']").val(status);
    formFilter();
}

function formFilter() {
    var _data = {};
    $('#orderForm').find("input").each(function () {
        var $self = $(this), _val = $.trim($self.val()), _name = $self.attr("name");
        if (_val) {
            _data[_name] = _val
        }
    });
    var param = $.param(_data), pathname = window.location.pathname;
    if (param) {
        var href = pathname + '?' + param;
        window.location.href = href;
    }
    return false
}

//看不见的遮罩层
function emptyLoadding() {
    var index = layer.open({
        area: ['0px', '0px'],
        title: '',
        type: 1,
        closeBtn: 0,
        shade: [0]
    });
    return index;
}

//得到事件
function getEvent() {
    if (window.event) {
        return window.event;
    }
    func = getEvent.caller;
    while (func != null) {
        var arg0 = func.arguments[0];
        if (arg0) {
            if ((arg0.constructor == Event || arg0.constructor == MouseEvent
                || arg0.constructor == KeyboardEvent)
                || (typeof(arg0) == "object" && arg0.preventDefault
                && arg0.stopPropagation)) {
                return arg0;
            }
        }
        func = func.caller;
    }
    return null;
}
//阻止冒泡
function cancelBubble() {
    var e = getEvent();
    if (window.event) {
        e.cancelBubble = true;//阻止冒泡
    } else if (e.preventDefault) {
        e.stopPropagation();//阻止冒泡
    }
}
function htmlspecialchars_decode(str){
    str = str.replace(/&amp;/g, '&');
    str = str.replace(/&lt;/g, '<');
    str = str.replace(/&gt;/g, '>');
    str = str.replace(/&quot;/g, "''");
    str = str.replace(/&#039;/g, "'");
    return str;
}


