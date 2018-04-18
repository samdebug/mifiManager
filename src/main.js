// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './vuex/store'


Vue.use(ElementUI);
Vue.use(Vuex);
  
window.LANGUAGE = "zh_CN";
//window.SUBPATH = '172.16.4.167';
//window.SUBPATH = '172.16.0.108';
//window.SUBPATH = 'mfll.edawtech.com';//易道
//window.SUBPATH = 'mifi.szchuzhong.com'; //出众
//window.SUBPATH = 'mifi2.ucpaas.com';//云之讯
window.SUBPATH = 'mifi-test2.100hospital.club';
//window.SUBPATH = 'mifi.06nmy.com';//腾虹

window.PATH = "http://" + window.SUBPATH + ":93/api"; 

/*cookie*/
Vue.prototype.yzxcookie = {
  setCookies:function (name,value,day) {
    var Days = day || 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
  },
  getCookies: function (name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
      return unescape(arr[2]);
    else
      return null;
  },
  removeCookies: function (name) {
    this.setCookies(name, '', -1);
  }
};

//通用方法
Vue.prototype.getJsonData=function (parameter) {
    let data = JSON.parse(localStorage.getItem("JsonData"));
    return data.parameter;
}

//判断是否登录
var that = this;
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)){ 
    var arr,reg=new RegExp("(^| )"+"ucpToken"+"=([^;]*)(;|$)");
    if(document.cookie.match(reg)){
      if (to.fullPath == "/"){
        next({
          path: '/home',
          query: {redirect: to.fullPath}
        })
      }else{
        next();
      }
    }else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  }else {
    next();
  }
});

//取消json异步机制,使json加载前就写入localstroage
$.ajaxSettings.async = false;
$.getJSON("../static/language/zh_CN.json", function (data){
  let dataJson = JSON.stringify(data);
  localStorage.setItem("JsonData",dataJson) //存储名字为name值为caibin的变量
})
$.ajaxSettings.async = true;

//通用加密
Vue.prototype.setSignList = function(param,url){
    var token = getCookie("ucpToken");
    var referType = getCookie("ucpReferType");
    var userId = getCookie("ucpUserId");
    var timestamp = new Date().getTime();
    //必填参数
    var sortList = ["referType","timestamp","curUserId"];
    //排序 token放最后,必填
    sortList.sort();
    sortList.push("token"); 
    //深拷贝，不影响原有的参数
    var paramCopy = $.extend(true,param);
    paramCopy.token = token;
    paramCopy.referType = referType;
    paramCopy.curUserId = userId;
    paramCopy.timestamp = timestamp;

    var urlStr = "";
    for (var i=0;i<sortList.length;i++){
        if (i > 0){
            urlStr = urlStr + '&' + sortList[i] + '=' + paramCopy[sortList[i]];
        }else{
            urlStr = urlStr + sortList[i] + '=' + paramCopy[sortList[i]];
        }
    }
    return {sign:CryptoJS.MD5(urlStr).toString(),userId:userId,timestamp:timestamp,referType:referType};
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
