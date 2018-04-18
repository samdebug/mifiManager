
/*$.extend($.validator.defaults, {
    errorElement: "span"
});*/

// 时间, 源码里的date,firefox 不能用!
$.validator.addMethod("date", function (value, element) {
    return this.optional(element) || /\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/g.test(value);
});

//验证小数点后的位数
$.validator.addMethod("decimals", function (value, element, num) {
    var decInx = (value.indexOf(".") + 1) || value.length;
    return this.optional(element) || (value.length - decInx) <= num;
});

//验证version格式:点号分隔的数值
$.validator.addMethod("versionFormat", function (value, element) {
	var str = value.split(".");
	var len = str.length;
	for(var i=0;i<len;i++){
		var val = str[i];
		if(val=="" || isNaN(parseFloat(val)) || !isFinite(val)){
			return false
		}
	}
	return true;
});

// 按需加载特定国际化消息文件
require.ensure([], function (require) {
   require("./messages/" + window.LANGUAGE);
});
// $.getScript("./assets/js/libs/jquery-validation/messages/" + window.LANGUAGE + ".js");