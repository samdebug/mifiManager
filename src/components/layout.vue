<template>
    <div id="layout">
        <div>
            <div class="navbar">
                <div class="navbar-inner loginTitleBackground" >
                    <div class="navbar-container">
                        <div class="navbar-header pull-left">
                            <div class="navbar-account">
                                <ul class="breadcrumb my-breadcrumb" style="padding-left: 240px;">
                                    <li>
                                        <a href="javascript:" style="margin-right: -12px;"><!-- <i id="breadcrumbIcon"></i> --><span id="breadcrumbTitle"></span></a>
                                    </li> 
                                    <li>
                                        <!-- <a href="javascript:" id="dotted"></a> -->
                                        <i class="la la-angle-right"></i>
                                    </li> 
                                    <li>
                                        <a href="javascript:" id="breadcrumbSubTitle"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div id="index-notification" class="navbar-header pull-right" >
                            <div class="navbar-account">
                                <ul class="account-area" style="right:1px;">
                                        <li class="">
                                            <el-badge :value="valueNum" class="item" :max="99">
                                                <a id="index-notification-btn" @click="readAlarm" class="dropdown-toggle m-nav__link-icon m-animate-shake" href="javascript:void(0)" data-toggle="dropdown" title="Notification" style="color: #7a8599 !important;"><i style="font-size: 30px;" class="icon la la-envelope"></i></a>
                                            </el-badge> 
                                            <ul id="index-notification-list" class="pull-right dropdown-menu dropdown-arrow dropdown-notifications"
                                                style="padding-top:0 !important;border:1px solid #e6e9f0 !important;width:300px;color: #8d9199;margin-top: 0px;">
                                                    <div id="index-notification-empty" style="width:100%;height:50px;text-align:center;padding-top:16px; "><span>
                                                        消息</span></div>
                                                <li class="profilebox">
                                                    <a href="javascript:;" @click="readAlarm"><i class="la la-bell"></i>更多</a>
                                                </li>
                                            </ul>
                                        </li>
                                    <li style="margin-right: 30px;">
                                        <a class="dropdown-toggle m-nav__link-icon" id="userProfile" data-toggle="dropdown" aria-expanded="false" style="cursor: pointer;">
                                            <i style="font-size: 30px;" class="icon la la-user"></i>
                                        </a> 
                                        <!--Login Area Dropdown-->
                                        <ul class="pull-right dropdown-menu dropdown-arrow dropdown-login-area" style="border: 1px solid #e6e9f0 !important;margin-top: 0px;" id="userProfileList">
                                            <li class="dropdown-header avatarBox">
                                                <!-- <i class="glyphicon glyphicon-user"></i> -->
                                                <div>
                                                    <img src="/static/images/user.svg">
                                                </div>
                                                <div>
                                                    <span>{{accountName}}</span>
                                                </div>
                                            </li>
                
                                            <li class="roleBox">
                                                <a href="javascript:" style="cursor:default;">
                                                    <span><i class="la la-user" style="font-weight: 600;font-size: 16px"></i>类型:{{type}}</span>
                                                </a>
                                                <a href="javascript:" style="cursor:default;padding-bottom: 15px !important;">
                                                    <span><i class="la la-user" style="font-weight: 600;font-size: 16px"></i>角色:{{roleName}}</span>
                                                </a>
                                            </li>
                                            <li class="profilebox">
                                                <a id="modifyPswBtn" href="javascript:;" @click="changePassword"><i class="la la-key"></i>修改密码</a>
                                            </li>
                                            <li class="profilebox">
                                                <a @click="logOut" href="javascript:;"><i class="la la-power-off"></i>注销</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li style="padding-right: 30px;">
                                        <a class="dropdown-toggle m-nav__link-icon" data-toggle="dropdown" aria-expanded="false" style="cursor: pointer;"><i style="font-size: 30px;" class="icon la la-question-circle"></i>
                                        </a> 
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-container container-fluid">
                <div class="page-container">
                    <div class="page-sidebar" id="sidebar" style="">
                        <div style="text-align:center;padding: 25px 45px;width: 100%;" id="sidebar-collapse">
                            <img id="logoIconBig" src="/static/images/default_xiaoG_logo.png" style="width:150px"/>  
                            <!-- <img id="logoIconBig" src="/static/images/chuzhong/logo.png" style="width:150px"/>   -->
                            <img id="logoIconSmall" src="/static/images/default_S_logo.png" style=""/>   
                        </div>                
                        <ul class="nav sidebar-menu" style="">
                            <li class="menu-l1">
                                <a href="#/home" id="wellcomeTab">
                                    <i class="menu-icon la la-home"></i>
                                    <!-- <i class="menu-icon homeIcon"></i> -->
                                    <span class="text-nowrap menu-text">欢迎</span>
                                </a>
                            </li>
            
                            <li v-for="oneMenu in homeMenu" style="position: relative;" class="menu-l1">
                                <a href="javascript:" class="menu-dropdown">
                                    <i v-bind:class="oneMenu.icon + ' menu-icon'"></i>
                                        <span class="text-nowrap menu-text">{{oneMenu.name}}</span>
                                    <i class="menu-expand"></i>
                                </a>
                                <ul class="submenu" >
                                    <li v-for="children in oneMenu.children">
                                        <a v-bind:href="'#'+ children.url">
                                            <span class="text-nowrap menu-text">{{children.name}}</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                   
                    <div class="page-help">
                        <div class="margin-10" style="padding-top: 5px;">
                            <i class="la la la-home font-150 clickable-bg"></i>
                            帮助
                        </div>
                        <div class="help-contacts">
                            <div>
                                <div>
                                   
                                </div>
                            </div>
                            <div id="help-html">
                                <div style="text-align:center;padding-top:300px;">
                                    <i style="font-size:30px" class="la la-exclamation-triangle"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                    <div class="page-content">
                        <div id="pageDiv" class="page-body ng-cloak">
                          <router-view></router-view>
                        </div>
                    </div>
                </div>
            </div>
        
            <div class="modal fade modal-primary" id="indexModifyPswFormModal" aria-hidden="true">
                <div class="modal-dialog ">
                    <div class="modal-content">
                        <form id="indexModifyPswForm" class="form-horizontal ng-pristine ng-valid">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span></button>
                                <h4 class="modal-title text-primary"><!-- <i class="la la-edit"></i> -->修改密码</h4>
                            </div>
                            <div class="modal-body" style="margin:0 auto;width:620px;padding-right:100px;">
                                <div class="form-group">
                                    <label class="col-sm-3 control-label" >原密码<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span></label>
                                    <div class="col-sm-9">
                                        <input class="form-control input-sm" v-model="passwordForm.old_psw" type="password" name="old_psw" id="old_psw"/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-3 control-label" >修改密码<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span></label>
                                    <div class="col-sm-9">
                                        <input class="form-control input-sm" v-model="passwordForm.new_psw" type="password" name="new_psw" id="new_psw"/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-3 control-label" >确认密码<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span></label>
                                    <div class="col-sm-9">
                                        <input class="form-control input-sm" v-model="passwordForm.cfm_psw" type="password" name="cfm_psw" id="cfm_psw"/>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer " style="background-color:#FFFFFF;">
                              <!-- <a href="javascript:;" class="el-button el-button--primary pass" @click="submitPassword">保存</a> -->
                              <button type="submit" class="el-button el-button--primary">保存</button>
                              <a class="el-button el-button--default" data-dismiss="modal" aria-label="Close">取消</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
            <div class="modal fade modal-primary" id="indexAlarmRcd" aria-hidden="true">
                <div class="modal-dialog ">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title text-primary"><i class="la la-edit"></i>详情</h4>
                        </div>
                        <div class="modal-body" style="margin:0 auto;width:620px;padding-right:100px;"></div>
                        <div class="modal-footer " style="background-color:#FFFFFF;">
                            <button class="btn btn-danger" data-dismiss="modal" aria-label="Close">取消</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="datagrid-resize-proxy"></div>
        </div>
    </div>
</template>

<script>
import '../../static/css/jquery.mCustomScrollbar.css'
import '../../static/css/bootstrap.min.css'
import '../../static/js/select2/select2.css'
import '../../static/css/dropify.css'
import '../../static/css/line-awesome.css'
import '../../static/css/beyond.min.css'

import '../../static/js/bootstrap.min'
import '../../static/js/jquery.slimscroll.min'

export default {
  name: 'layout',
  data() {
    return {
        homeMenu : [],
        dialogFormVisible: false,
        passwordForm: {
          old_psw: '',
          new_psw: '',
          cfm_psw: ''
        },
        formLabelWidth: '100px',
        accountName:"",
        isLogin:false,
        roleName:"",
        type:""
    }
  },
  computed: {
    valueNum () {
      return this.$store.state.valueNum
    }
  },
  methods: {
    readAlarm(){
        var that = this;
        Utils.ajax({
            url: window.PATH+'/home/alarmRead',
            data: {},
            type: "GET",
            success: function(res){
                if( res && res.state===0){
                    that.$store.state.valueNum = 0;
                }else{
                    if (res.message){
                        layer.msg.error(res.message);
                    }
                }
                $(".sidebar-menu").children().each(function(){
                    $(this).removeClass("open");
                    $(this).children(".submenu").hide();
                    $(this).children(".submenu").children().removeClass("active");
                    $(this).find(".menu-icon-arrow").removeClass("la-angle-down");
                    $(this).find(".menu-icon-arrow").addClass("la-angle-right");
                    $(this).find(".menu-icon-arrow").css({'left':'168px'});
                })
                //window.location.href = "#/monitor/monitorLog";
                that.$router.push('/monitor/monitorLog');
            }
        })
    },
    changePassword(){
        var that = this;
        var formId = "indexModifyPswForm",
            modalId = "indexModifyPswFormModal",
            successTip = getJsonData("frame.password.update_success"),
            validates = [{name:"old_psw",vali:{required:true,regexp:/^[0-9a-zA-Z_]{1,}$/,regexpTips:"账号由数字或字母组成",stringLength:[6,18]}},{name:"new_psw",vali:{required:true,regexp:/^[0-9a-zA-Z_]{1,}$/,regexpTips:"账号由数字或字母组成",stringLength:[6,18]}},{name:"cfm_psw",vali:{required:true,identical:"new_psw",regexp:/^[0-9a-zA-Z_]{1,}$/,regexpTips:"账号由数字或字母组成",stringLength:[6,18]}}];
        $("#" + modalId).modal({backdrop: 'static'});
        initFormValidators({
            formId: formId,
            fields: validates,
            submit: function(){
                var paramsDetail = {
                   userId:that.yzxcookie.getCookies('ucpUserId'),
                   oldPwd:that.passwordForm.old_psw,
                   newPwd:that.passwordForm.new_psw,
                   newPwdAgain:that.passwordForm.cfm_psw
                };

                var params = {
                    url: window.PATH + "/frame/user/changePwd",
                    data: paramsDetail,
                    success: function(resp){
                        $("#" + modalId).modal("hide");
                        layer.msg.success(successTip);
                    }
                };
                doTableAjax(params);
            }
        })
    },
    logOut(){//退出登录
        var that = this;
        var userId = that.yzxcookie.getCookies("ucpUserId");
        $(function(){
            Utils.ajax({
                url: window.PATH+'/frame/login/loginOut',
                data: {userId:userId},
                success: function(res){
                    if( res && res.state===0){
                        that.yzxcookie.removeCookies("ucpToken");
                        that.yzxcookie.removeCookies("ucpUserId");
                        that.yzxcookie.removeCookies("ucpType");
                        that.yzxcookie.removeCookies("ucpAccount");
                        that.yzxcookie.removeCookies("ucpRoleName");
                        //$("body:before").css("background","#fff");
                        that.$router.push('/login');
                        //window.location.href="#/login";
                        $
                    }else{
                       layer.msg.error(res.message);
                    }
                }
            })
        })
    },
    syncBreadcrumb() {
       // 获取
       var $active = $(".submenu .active span");
       var nameL1 = $active.closest(".menu-l1").find("> a span").html();
       var nameL2 = $active.html();
       // *** 写入
       var $breaLi1 = $("#breadcrumbTitle");
       var $breaLi2 = $("#breadcrumbSubTitle");
       var title;
       var icon = $active.closest(".menu-l1").find(".menu-icon");
       var iconClass = icon.attr("class");
       if (nameL1){
            $("#breadcrumbIcon").removeAttr("class");
            $("#breadcrumbIcon").attr("class",iconClass);
            $breaLi1.html(nameL1);
            $breaLi2.html(nameL2);
       }else{
            $("#breadcrumbIcon").removeAttr("class");
            $("#breadcrumbIcon").attr("class","la la-home");
            $breaLi1.html("首页");
            $breaLi2.html("欢迎");
       }
    },
    // 侧边栏选择状态
    navbarSelState() {
        var $menus = null,
            HOME_URI = "#/home";
        $menus = $menus || $(".sidebar-menu li");
        $menus.removeClass("active");
        var route = /#.*/.exec(location.href)[0];
        if (route == HOME_URI) {
            $menus.eq(0).addClass("active");
        } else {
            var $thisMenuA = $menus.find("a[href='" + route + "']");
            // 选中的样式.
            $thisMenuA.closest("li").addClass("active").closest(".menu-l1").addClass("open");
        }
    },
    InitiateSideMenu() {
        var that = this;
        
         //Sidebar Toggler
          $(".sidebar-toggler").on('click', function () {
              $("#sidebar").toggleClass("hide");
              $(".sidebar-toggler").toggleClass("active");
              return false;
          });
          //End Sidebar Toggler

          //Sidebar Collapse
          var b = $("#sidebar").hasClass("menu-compact");
          $("#sidebar-collapse").on('click', function () {
              if (!$('#sidebar').is(':visible'))
                  $("#sidebar").toggleClass("hide");
              $("#sidebar").toggleClass("menu-compact");
              $(".sidebar-collapse").toggleClass("active");
              b = $("#sidebar").hasClass("menu-compact");

              if ($(".sidebar-menu").closest("div").hasClass("slimScrollDiv")) {
                  $(".sidebar-menu").slimScroll({ destroy: true });
                  $(".sidebar-menu").attr('style', '');
              }
              if (b) {
                  $(".open > .submenu")
                      .removeClass("open");
              } else {
                  if ($('.page-sidebar').hasClass('sidebar-fixed')) {
                      $('.sidebar-menu').slimscroll({
                          height: 'auto',
                          position: 'right',
                          size: '3px',
                          color: themeprimary
                      });
                  }
              }
          });

          //Sidebar Menu Handle
          $(".sidebar-menu").on('click', function (e) {
              var menuLink = $(e.target).closest("a");
              if (!menuLink || menuLink.length == 0)
                  return;
              if (!menuLink.hasClass("menu-dropdown")) {
                  if (b && menuLink.get(0).parentNode.parentNode == this) {
                      var menuText = menuLink.find(".menu-text").get(0);
                      if (e.target != menuText && !$.contains(menuText, e.target)) {
                          return false;
                      }
                  }
                  return;
              }
              var submenu = menuLink.next().get(0);
              if (!$(submenu).is(":visible")) {
                  var c = $(submenu.parentNode).closest("ul");
                  if (b && c.hasClass("sidebar-menu"))
                      return;
                  c.find("> .open > .submenu")
                      .each(function () {
                          if (this != submenu && !$(this.parentNode).hasClass("active"))
                              $(this).slideUp(200).parent().removeClass("open");
                      });
              }
              if (b && $(submenu.parentNode.parentNode).hasClass("sidebar-menu"))
                  return false;
              $(submenu).slideToggle(200).parent().toggleClass("open");
              return false;
          });
          //End Sidebar Menu Handle
    }
  },
  components: {},
  beforeCreate: function () {
  },
  created: function () {
  },
  beforeMount: function () {
    var userId = this.yzxcookie.getCookies('ucpUserId');
    var that = this;
    if (userId){
        Utils.ajax({
            url: window.PATH + "/frame/auth/menulist",
            data: {userId:userId},
            success: function(res){
                if( res && res.state===0){
                    that.homeMenu = res.data;
                    //that.syncBreadcrumb();
                    //that.navbarSelState();
                    //that.InitiateSideMenu();
                }else{
                   layer.msg.error(res.message);
                }
            }
        })
    } 
  },
  mounted: function () {
    this.yzxcookie.setCookies("language", 'zh_CN');
    var account = this.yzxcookie.getCookies('ucpAccount');
    var ucpType = this.yzxcookie.getCookies('ucpType');
    var roleName = this.yzxcookie.getCookies('ucpRoleName');
    this.accountName = account;
    this.roleName = roleName;
    if (parseInt(ucpType) == 0){
        this.type = "运营商";
    }else if(parseInt(ucpType) == 1){
        this.type = "OEM";
    }else if(parseInt(ucpType) == 2){
        this.type = "总代理";
    }else if(parseInt(ucpType) == 3){
        this.type = "区域代理";
    }else if(parseInt(ucpType) == 4){
        this.type = "普通代理";
    }else{
        this.type = "普通用户";
    }
    var that = this;
    
    this.InitiateSideMenu();
    /*this.syncBreadcrumb();*/

    var screenWidth = $(window).width();
    if (screenWidth < 880){
        $("#sidebar").addClass("menu-compact");
    }else{
        $("#sidebar").removeClass("menu-compact");
    }
    $(window).resize(function () {
        var screenWidth = $(window).width();
        if (screenWidth < 880){
            $("#sidebar").addClass("menu-compact");
        }else{
            $("#sidebar").removeClass("menu-compact");
        }
    });
    var $modal = $("#indexModifyPswForm");
    $modal.find(".btn-close").on("click", function(){
        $("#indexModifyPswForm [name=old_psw]").val("");
        $("#indexModifyPswForm [name=new_psw]").val("");
        $("#indexModifyPswForm [name=cfm_psw]").val("");
        $("#indexModifyPswFormModal").modal("hide");
    });

    $('#indexModifyPswFormModal').on('show.bs.modal', function () {
        $("#old_psw").val("");
        $("#new_psw").val("");
        $("#cfm_psw").val("");
    });

    //渐入渐出
    //$('#loginPage').addClass('animated fadeInDown');
  },
  beforeUpdate: function () {
  },
  updated: function () {
    this.navbarSelState();
    this.syncBreadcrumb();
  },
  activated: function () {
  },
  deactivated: function () {
  },
  destroyed: function () {
  }
}
</script>

<style lang="scss">
</style>
