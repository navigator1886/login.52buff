if (typeof _52buff == "undefined") {
    _52buff = { }
};
String.prototype.insert = function(text,at) {
    if(at == null || at > this.length)
        at = this.length;
    else if(at < 0)
        at = 0;

    return this.substring(0,at)+text+this.substring(at);
}
_52buff.ext = $.extend;
_52buff.ext(_52buff, {
    getCode:function(_key,pwd){
        pwd = $.md5(pwd);
        if(_key && _key.indexOf("_")>0){
            var keyStr = _key.split("_");
            var mixLength = keyStr.length-1;
            var sale = keyStr[0];
            var pieceOfSale = parseInt(sale.length)% parseInt(mixLength);
            if(pieceOfSale!=0){
                pieceOfSale = (sale.length-pieceOfSale)/parseInt(mixLength);
            }
            for(var s=1;s<=mixLength;s++){
                var _mix = keyStr[s];
                var _sale = sale.substring((s-1)*pieceOfSale,(s-1)*pieceOfSale+pieceOfSale);
                if(s==mixLength)
                    _sale+=  sale.substring((s)*pieceOfSale,sale.length);
                pwd = pwd.insert(_sale,parseInt(_mix));
            }
        }
        return pwd;
    }
});
