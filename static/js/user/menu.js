//左侧菜单
var menu_user_center = /\/Index\/Index/i;
function Upper(url) {
    if (url == '/') {
        return url;
    }
    var Arr = url.split(".");
    var ArrUpper = Arr[0].split("/");
    var ArrStr = new Array();
    for (var i = 1; i < 3; i++) {
        ArrStr[i] = ArrUpper[i];
    }
    return ArrStr.join("/") + '.' + Arr[1];
}
var url = window.location.pathname;
url = Upper(url);
if (menu_user_center.test(url) || url=='/') {
    $('#user_menus ul ul').eq(0).removeClass('hidden').siblings('p').children('.icon_right').addClass('icon_jian');
    $('#user_menus ul ul').eq(1).removeClass('hidden').siblings('p').children('.icon_right').addClass('icon_jian');
} else {
    var $curr = $('#user_menus').find("a[href^='" + url + "']");
    if (url == $curr.attr('href')) {
        $curr.addClass('menu_color').parents().removeClass('hidden').siblings('p').children('.icon_right').addClass('icon_jian');
    }
}
