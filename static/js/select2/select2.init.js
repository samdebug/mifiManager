//import "./select2.css"
//import "./select2.full"
//cookie 中取出,语言字符串

var arr, reg = new RegExp("(^| )language=([^;]*)(;|$)");
var lang = ( arr = document.cookie.match(reg) ) ? arr[2] :  "zh_CN";


   /*! Select2 4.0.3 | https://github.com/select2/select2/blob/master/LICENSE.md */
   (function(){
   	if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)
   		var e=jQuery.fn.select2.amd;
   	return e.define("./i18n/zh_CN",[],function(){
   		return{
   			errorLoading:function(){return"无法载入结果。"},
	    		inputTooLong:function(e){var t=e.input.length-e.maximum,n="请删除"+t+"个字符";return n},
	    		inputTooShort:function(e){var t=e.minimum-e.input.length,n="请再输入至少"+t+"个字符";return n},
	    		loadingMore:function(){return"载入更多结果…"},
	    		maximumSelected:function(e){var t="最多只能选择"+e.maximum+"个项目";return t},
	    		noResults:function(){return"未找到结果"},
	    		searching:function(){return"搜索中…"}
	    	}
   	}),{define:e.define,require:e.require}
   })();

   /*! Select2 4.0.3 | https://github.com/select2/select2/blob/master/LICENSE.md */
   (function(){
      if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)
         var e=jQuery.fn.select2.amd;
      return e.define("./i18n/en",[],function(){
         return{
            errorLoading:function(){return"无法载入结果。"},
            inputTooLong:function(e){var t=e.input.length-e.maximum,n="请删除 "+t+" 个字符";return t!=1&&(n+="s"),n},
            inputTooShort:function(e){var t=e.minimum-e.input.length,n="请再输入至少"+t+"个字符";return n},
            loadingMore:function(){return"载入更多结果…"},
            maximumSelected:function(e){var t="最多只能选择"+e.maximum+" 个项目";return e.maximum!=1&&(t+="s"),t},
            noResults:function(){return"未找到结果"},
            searching:function(){return"搜索中…"}
         }
      }),
      {define:e.define,require:e.require}
   })();

   
   /*(function(){
   	if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)
   		var e=jQuery.fn.select2.amd;
   	return e.define("./i18n/en",[],function(){
   		return{
   			errorLoading:function(){return"The results could not be loaded."},
   			inputTooLong:function(e){var t=e.input.length-e.maximum,n="Please delete "+t+" character";return t!=1&&(n+="s"),n},
   			inputTooShort:function(e){var t=e.minimum-e.input.length,n="Please enter "+t+" or more characters";return n},
   			loadingMore:function(){return"Loading more results…"},
   			maximumSelected:function(e){var t="You can only select "+e.maximum+" item";return e.maximum!=1&&(t+="s"),t},
   			noResults:function(){return"No results found"},
   			searching:function(){return"Searching…"}
   		}
   	}),
   	{define:e.define,require:e.require}
   })();*/

//
// /**
//  * 2017.03.01 gaoyouan
//  * 加载对应的国际化语言文件
//  * 加载全部的国际化文件也可以
//  * 最后，在select2的参数中，需要加上language参数，值为对应的国际化文件的名称
//  * 这里的文件名，改成了和系统的国际化语言标识一样：
//  *  en    es    en_US   jp_JP    ko_KR    zh_CN    zh_TW
//  *  因为select2.full.js中默认的语言是en.js，所以保留这个文件，复制一份，命名为en_US.js
//  */
// $.getScript("./assets/beyond/js/select2/i18n/" + window.LANGUAGE + ".js");
// //$.getScript("./assets/beyond/js/select2/i18n/zh_CN.js");
