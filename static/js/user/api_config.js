//api远程域名
var _api_url_domain = 'http://www.52buff.com';
//所有远程url地址
var _api_url = {
    //获取游戏列表
    'get_game_list': _api_url_domain + 'Open/Game/getGameList',
    //根据游戏id获取区服列表 url/gid/xx
    'get_area_list': _api_url_domain + 'Open/Game/getAreaList',
    //根据游戏id获取服务器列表列表 url/aid/xx
    'get_server_list': _api_url_domain + 'Open/Game/getServerList',
    //获取商品类型列表
    'get_game_type_list': _api_url_domain + 'Open/Game/getGoodsTypeList',
};