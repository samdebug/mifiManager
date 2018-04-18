<template>
    <div class="login-body" id="login-page">
      <a class="logo" href="javascript:void(0)"></a>
      <!-- <div class="side" style="background-image: url(&quot;//4.url.cn/zc/v3/img/01-3.jpg&quot;); width: 350px;"></div> -->
      <div class="side" style="background-image: url(&quot;/static/images/login/01-4.jpg&quot;); width: 436px;"></div>
      <div class="main-wraper" style="">
       <div class="main" style="">
        <div class="form" autocomplete="off">
         <div>
          <div class="welcome">
           欢迎登录小G
          </div>
          <div class="header">
           年终钜惠，再续狂欢。
          </div>
         </div>
         <form autocomplete="off">
          <div class="input-area input-nickname">
           <div class="input-flags">
            <div class="input-ok" v-show="showTipNicknameTick" style="display: none;"></div>
           </div>
           <label class="input-placeholder" id="nickname-tips" for="nickname" v-show="showTipNickname">账号</label>
           <div class="input-outer">
            <input autocomplete="off" type="text" id="nickname" class="nickname" maxlength="24" tabindex="3" /><span class="help-block" style="display:none;">用户名不能为空</span>
           </div>
           <div class="error-tips-wrap" style="display:none"><div class="error-tips">账号不可以为空</div></div>

           <div class="error-tips-wrap slideup">
            <div class="error-tips" style="display: none;"></div>
           </div>
          </div>
          <div class="input-area input-password">
           <label class="input-placeholder" id="password-tips" for="password" v-show="showTipPassword">密码</label>
           <div class="input-flags">
            <div class="input-ok" v-show="showTipPasswordTick" style="display: none;"></div>
            <!-- <div href="javascript:void(0)" @click="showps" class="eye" title="长按显示密码"></div> -->
           </div>
           <div class="input-outer" id="password-container">
            <div class="password-raw" style="display: none;"></div>
            <input autocomplete="off" type="password" id="password" class="password" maxlength="16" tabindex="4" /><span class="help-block" style="display:none;">密码不能为空</span>
           </div>
           <div class="error-tips-wrap" style="display:none"><div class="error-tips">密码不可以为空</div></div>
           <div class="password-tips-group slideup">
            <div class="password-tips ok">
             不能包括空格
            </div>
            <div class="password-tips">
             长度为8-16个字符
            </div>
            <div class="password-tips">
             必须包含字母、数字、符号中至少2种
            </div>
           </div>
           <div class="error-tips-wrap slideup">
            <div class="error-tips" style="display: none;"></div>
           </div>
          </div>
          <div class="error-tips-wrap slideup">
           <div class="error-tips" style="margin: 0px; display: none;"></div>
          </div>
          <!-- <div class="input-tips-wrap" data-bind="css:{slideup: phoneTips().length &gt; 0}">
           <div class="input-tips" data-bind="">
            可通过该手机号找回密码
           </div>
          </div> -->
          <div>
           <input id="get_acc" @click="login" type="button" class="submit" value="立即登录" tabindex="8" />
           <div class="error-tips-wrap slideup">
            <div class="error-tips" style="display: none;"></div>
           </div>
          </div>
          <div class="agreement">
             <label for="qzone" class="checkboxNew"><img src="/static/images/login/green.png"/>&nbsp;流量资费1元起，更享千元续费大礼包</label>
              </br>
             <label for="agree" class="checkboxNew"><img src="/static/images/login/green.png"/>&nbsp;不限量流量放送</label>&nbsp; 
          </div>
         </form>
        </div>
        <div class="footer bottom" style="">
         Copyright 
         <span>&copy;</span> 2015-2018 Ucpaas All Rights Reserved
        </div>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
          return {
              userName:'',
              password:'',
              showTipNickname:true,
              showTipPassword:true,
              showTipNicknameTick:false,
              showTipPasswordTick:false
          }
        },
        methods:{
          showps(){
             console.log($("#password").attr("type"));
             if ($("#password").attr("type") == "password") {
                $("#password").attr("type","text");
             }else{
                $("#password").attr("type","password");
             }
          },
          login(){
            var that = this;
            if($("#nickname").val() == ""){
                $(".input-nickname").find(".error-tips-wrap").show();
                return false
            }

            if($("#password").val() == ""){
                $(".input-password").find(".error-tips-wrap").show();
                return false
            }
            /*const loading = this.$loading({
              lock: true,
              text: '',
              spinner: 'el-icon-loading',
              background: 'rgba(0, 0, 0, 0.7)'
            });*/
            /*setTimeout(() => {
              loading.close();
            }, 2000);*/

             Utils.ajax({
                url: window.PATH + "/frame/login/loginToken",
                data: {userAccount:$("#nickname").val(),password:$("#password").val(),referType:0},
                success: function(res){
                    if( res && res.state===0){
                       that.yzxcookie.setCookies('ucpAccount',res.data.userMicro.name,1);
                       that.yzxcookie.setCookies('ucpToken',res.data.access_token,1);
                       that.yzxcookie.setCookies('ucpUserId',res.data.userMicro.userId,1);
                       that.yzxcookie.setCookies('ucpType',res.data.userMicro.ucpType,1);
                       that.yzxcookie.setCookies('ucpRoleName',res.data.userMicro.roleName,1);
                       that.yzxcookie.setCookies('ucpReferType',0,1);
                       //loading.close();
                       that.$router.push('/home');
                       //window.location.href="/";
                    }else{
                       layer.msg.error(res.message);
                    }
                }
            })
          }
        },
        mounted: function () {
          var that = this;
          $('#nickname').bind('input propertychange', function() {
            if ($(this).val().length > 0){
              that.showTipNickname = false;
              that.showTipNicknameTick = true;
            }else{
              that.showTipNickname = true;
              that.showTipNicknameTick = false;
            }

            if ($("#nickname").val() == ""){
              $(".input-nickname").find(".error-tips-wrap").show();
            }else{
              $(".input-nickname").find(".error-tips-wrap").hide();
            }
          });  
          
          $('#password').bind('input propertychange', function() {
            if ($(this).val().length > 0){
              that.showTipPassword = false;
              that.showTipPasswordTick = true;
              $(".input-password").find(".error-tips-wrap").hide();
            }else{
              that.showTipPassword = true;
              that.showTipPasswordTick = false;
              $(".input-password").find(".error-tips-wrap").show();
            }
          });  

          $('#nickname').bind('keypress',function(event){  
              if(event.keyCode == "13"){  
                that.login();
              }  
          });
          $('#password').bind('keypress',function(event){  
              if(event.keyCode == "13"){  
                that.login();
              }  
          });
          $(window).resize(function () {
              var screenWidth = $(window).width();
              $(".footer").css("width",(screenWidth-100) + "px");
          });

          var screenWidthInit = $(window).width();
          $(".footer").css("width",(screenWidthInit-100) + "px");
        }
    } 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
body{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}

a{
  text-decoration : none
}


.slideup {
  opacity: 0;
  height: 0!important
}

input::-ms-clear,input::-ms-reveal {
  display: none;
  width: 0;
  height: 0
}

input:focus {
  outline: 0
}


#login-page .logo {
  position: fixed;
  _position: absolute;
  _top: expression(eval(document.documentElement.scrollTop));
  top: 0;
  left: 0;
  background: url(/static/images/default_xiaoG_logo.png) no-repeat;
  background-size: 156px 33px;
  z-index: 2;
  height: 43px;
  line-height: 43px;
  margin: 15px;
  font-size: 36px;
  display: block;
  color: #000;
  width: 209px;
  background-position: center;
}

#login-page .side {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 480px;
  float: left;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: left;
  background-size: cover
}

#login-page .main-wraper {
  margin-left: 480px;
  position: relative;
  height: 100%
}

#login-page .main {
  position: absolute;
  padding-bottom: 10px;
  top: 100px;
  width: 100%
}

#login-page .main>.form {
  position: relative;
  margin: 0 auto;
  width: 421px;
}

#login-page .main>.form .welcome {
  font-size: 35px;
  margin-bottom: 20px
}

#login-page .main>.form .header {
  font-size: 24px;
  margin-bottom: 64px;
  line-height: 1.2;
  color: #333
}

#login-page .main>.form .header a {
  font-size: 24px
}


#login-page .main>.form form .input-area {
  position: relative
}

#login-page .main>.form form .input-area .input-flags {
  position: absolute;
  right: 0;
  height: 46px;
  z-index: 1
}

#login-page .main>.form form .input-area .input-flags .eye {
  background: url(/static/images/login/eye.png) no-repeat;
  width: 44px;
  height: 36px;
  display: block;
  float: right;
  margin: 5px 10px;
}

#login-page .main>.form form .input-area .input-flags .eye.close {
  background: url(/static/images/login/eye-close.png) no-repeat;
}

#login-page .main>.form form .input-area .input-flags .input-ok {
  background: url(/static/images/login/tick.png) no-repeat;
  width: 20px;
  height: 15px;
  display: block;
  float: right;
  margin: 15.5px 10px
}

#login-page .main>.form form .input-area .input-placeholder {
  position: absolute;
  font-size: 20px;
  line-height: 14px;
  padding: 16px 20px;
  background: rgba(255, 255, 255, 0);
  z-index: 10;
  font-weight: lighter;
  color: #aaa
}

#login-page .main>.form form .input-area .input-outer {
  background: 0 0;
  margin: 24px 0 0
}

#login-page .main>.form form .input-area .input-outer .qqmail,#login-page .main>.form form .input-area .input-outer input {
  border: 1px #aaa solid;
  border-radius: 4px;
  background: 0 0;
  text-align: left;
  font-size: 20px;
  width: 379px;
  height: 44px;
  line-height: 50px;
  padding: 0 20px;
  -webkit-box-sizing: content-box !important;
  box-sizing: content-box !important;
}

#login-page .main>.form form .input-area .input-outer .password-raw {
  font-size: 20px;
  background: #fff;
  position: absolute;
  margin: 0 20px;
  width: 438px;
  height: 50px;
  line-height: 50px;
  top: 1px;
  left: 1px
}

#login-page .main>.form form .input-area .input-outer input:hover {
  border-color: #777
}

#login-page .main>.form form .input-area .input-outer input:focus {
  border-color: #549df8
}

#login-page .main>.form form .input-area .input-outer input.error {
  color: #ff5b5b;
  border-color: #ff5b5b
}

#login-page .main>.form form .password-tips-group {
  height: 78px;
  line-height: 1;
  overflow: hidden
}

#login-page .main>.form form .error-tips-wrap {
  padding-top: 8px;
  height: 18px;
  overflow: hidden;
  position: relative;
  line-height: 1
}

#login-page .main>.form form .error-tips-wrap .error-tips {
  background: url(/static/images/login/error.png) no-repeat;
  padding: 0 0 0 24px;
  color: #ff5b5b;
  font-size: 14px;
  line-height: 18px;
  height: 18px;
  overflow: hidden;
  position: absolute;
  bottom: 0
}

#login-page .main>.form form .error-tips-wrap .error-tips.slideup {
  top: -26px
}

#login-page .main>.form form .input-tips-wrap {
  position: relative;
  overflow: hidden;
  height: 14px;
  line-height: 1
}

#login-page .main>.form form .input-tips-wrap .input-tips {
  font-size: 14px;
  height: 14px;
  color: #999;
  white-space: nowrap;
  overflow: hidden;
  position: absolute;
  bottom: 0
}

#login-page .main>.form form .input-area.code-area input.code,#login-page .main>.form form .input-area.code-area input.nation,#login-page .main>.form form .input-area.nation-area input.code,#login-page .main>.form form .input-area.nation-area input.nation {
  width: 112px
}

#login-page .main>.form form .input-area.phone-area {
  float: right
}

#login-page .main>.form form .input-area.phone-area .input-outer {
  margin: 0
}

#login-page .main>.form form .input-area.phone-area .input-outer input.phone {
  width: 265px
}

#login-page .main>.form form .submit {
  border: 1px #3083ff solid;
  border-radius: 4px;
  background-color: #3487ff;
  box-shadow: 0 5px 8px 0 rgba(24,95,255,.1);
  color: #fff;
  text-align: center;
  font-weight: lighter;
  background-image: linear-gradient(0deg,#398bff,#3083ff);
  width: 421px;
  height: 50px;
  margin: 15px 0 8px;
  font-size: 20px;
  cursor: pointer;
}

#login-page .main>.form form .submit:focus,#login-page .main>.form form .submit:hover {
  background-color: #3580eb;
  background-image: linear-gradient(0deg,#3580eb,#2c79eb)
}

#login-page .main>.form form .submit.disabled {
  color: #ccc;
  background-color: #f0f0f0;
  background-image: none;
  border-color: transparent;
  box-shadow: none
}

#login-page .main>.form form .agreement {
  margin-top: 16px;
  line-height: 18px;
  font-size: 14px
}

#login-page .main>.form form .agreement #agree,#login-page .main>.form form .agreement #qzone {
  display: none
}

#login-page .main>.form form .agreement .checkboxNew {
  line-height: 30px;
  font-size: 13px;
  color: #aaa
}

#login-page .main>.form form .agreement .checkboxNew img {
  vertical-align: middle
}

#login-page .main>.error {
  text-align: center;
  margin: 0 auto;
  position: relative
}


#login-page .main>.footer {
  font-size: 14px;
  color: #bbb;
  text-align: center;
  margin: 30px 0;
  font-weight: lighter
}

#login-page .main>.footer.bottom {
    position: fixed;
    bottom: 0;
}

@media screen and (max-width: 1100px) {
    #login-page {
        .side{
          display:none;
        }

        .main-wraper{
          margin:0px;
        }
    }
}

@media screen and (min-width: 1100px) {
    #login-page {
        .side{
          display:block;
        }
          
        .main-wraper{
          margin:0px 0px 0px 240px;
        }
    }
}
</style>
