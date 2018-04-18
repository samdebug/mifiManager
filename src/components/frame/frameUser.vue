<template>
  <div id="user">
    <div class="bs-example">
      <div class="row">
          <div class="col-xs-12 col-md-12">
              <div class="widget no-margin-bottom">
                  <div class="widget-body no-padding">
                      <div id="searchable_wrapper">
                          <div class="tabbable">
                              <ul class="nav nav-tabs">
                                  <li class="flag-tabs-btn active" id="frmuserBtn">
                                      <a data-toggle="tab" href="javaScript:void(0)" onclick="switchTabAndTools('frmuserTab','frmuserTool')">用户列表</a>
                                  </li>
                                  <li class="head-tools-r navbar-right flag-tools"  id="frmuserTool"></li>
                              </ul>
                              <div class="tab-content no-padding tabs-flat " style="border-radius:0;">
                                  <div id="frmuserTab" class="flag-tabs tab-pane in active" style="border-radius:0;"></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div class="modal fade modal-primary" id="modifyPassword" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <form class="form-horizontal" id="modifyPasswordForm">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
                    <h4 class="modal-title text-success"><i class="fa fa-bar-chart-o"></i>修改密码</h4>
                </div>
                <div class="modal-body">
                    <!-- <div class="form-group">
                        <div data-input="">
                            <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">
                                旧密码:<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;">
                          <b>*</b></span></label>
                            <div class="col-sm-8" style="padding-left:0;padding-right:0;"><div>
                                <input type="password" id="oldPassword" value="" placeholder="" class="form-control input-sm layer-date" data-bv-field="idxCallPrefix" />
                            </div></div></div></div> -->
                    <div class="form-group">
                        <div data-input="">
                            <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">
                                密码:<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;">
                          <b>*</b></span></label>
                            <div class="col-sm-8" style="padding-left:0;padding-right:0;"><div>
                                <input type="password" id="modifyPsw" name="modifyPsw" value="" placeholder="" class="form-control input-sm layer-date"/>
                            </div></div></div></div>
                    <div class="form-group ng-scope">
                        <div data-input="">
                            <label class="control-label ng-binding col-sm-3" style="padding-left:0px;padding-right:0px">
                                确认密码:<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;">
                          <b class="ng-scope">*</b></span></label>
                            <div class="col-sm-8" style="padding-left:0;padding-right:0;"><div>
                                <input type="password" id="modifyPswCon" name="modifyPswCon" value="" placeholder="" class="form-control input-sm layer-date"/>
                            </div></div></div></div>
                </div>
                <div class="modal-footer " style="background-color:#FFFFFF;">
                  <!-- <a class="el-button el-button--primary pass">保存</a> -->
                  <button type="submit" class="el-button el-button--primary">保存</button>
                  <a class="el-button el-button--default" data-dismiss="modal" aria-label="Close">取消</a>
                </div>
            </form>
        </div>
    </div>
</div>
</div>
</template>

<script>
      export default {
        data() {
          return {}
        },
        methods: {
          modifyPassword(){
            var that = this;
            var formId = "modifyPasswordForm",
                modalId = "modifyPassword",
                rowData = getSelectedRowData("frmuserTab"),
                successTip = getJsonData("frame.password.update_success"),
                validates = [{name:"modifyPsw",vali:{required:true,regexp:/^[0-9a-zA-Z_]{1,}$/,regexpTips:"账号由数字或字母组成",stringLength:[6,18]}},{name:"modifyPswCon",vali:{required:true,identical:"modifyPsw",regexp:/^[0-9a-zA-Z_]{1,}$/,regexpTips:"账号由数字或字母组成",stringLength:[6,18]}}];
            $("#" + modalId).modal({backdrop: 'static'});
            initFormValidators({
                formId: formId,
                fields: validates,
                submit: function(){
                    var paramsDetail = {
                        userId:rowData.userId,
                        newPwd:$("#modifyPsw").val(),
                        newPwdAgain:$("#modifyPswCon").val()                  
                    }

                    var params = {
                        url: window.PATH + "/frame/user/changePwd",
                        data: paramsDetail,
                        success: function(resp){
                            $("#" + modalId).modal("hide");
                            layer.msg.success(successTip);
                            switchTabAndTools('frmuserTab','frmuserTool');
                        }
                    };
                    doTableAjax(params);
                }
            })
          }
        },
        mounted: function () {
              var that = this;
              /****************************** 系统用户  *********************************/
              var lockedFormat = function(value){
                  return matchData2FormatSpan("db.tbCfrmUser.status.dataPlus", value);
              };

              var userItems = {version:15, tableKey:"userId", i18nPrefix:"db.tbCfrmUser.",
                  customComps:{
                      custom:[{
                          name:"modifyPsw",
                          location:2,
                          color:"danger",
                          icon:"la-asterisk",
                          click:that.modifyPassword
                      }]
                  },
                  initParams:{tableId:"frmuserTab", toolsId:"frmuserTool", urlPrefix: "/frame/user/", permissions: ['0','0','0','0'], page:"1"},
                  trs:[
                      {name: "userId", hideEdit: "A", vali: {stringLength: 64}, width:100},
                      {name: "userName", width:110,  advQry: ["LIKE"]},
                      {name: "userAccount", width:110,disabled:"E",vali:{noneSpace:true,stringLength: [0,50],zh:false,regexp:/^[0-9a-zA-Z_]{1,}$/,regexpTips:"账号由数字或字母组成"}},
                      {name: "roleName", width:110,hideEdit:"A",comType:"ajaxSelect", comDataS2:{url:window.PATH + "/frame/role/role2Data"}},
                      {name: "roleId",show:false, detailShow:false,vali: {stringLength: 96},comType:"ajaxSelect", comDataS2:{url:window.PATH + "/frame/role/role2Data"}, width:60},
                      {name: "password", hideEdit: "E", detailShow:false,vali: {stringLength: 64}, width:100,show:false},
                      {name: "status", vali: {integer:true, stringLength: 4}, hideEdit:"N",comType:"select", valFormat:lockedFormat, width:60},//状态
                      {name: "phone", vali:{stringLength: 32,required:false,phone:true}, width:100},
                      {name: "loginNum", vali: {integer:true, stringLength: 11}, width:80, hideEdit: "A"},
                      {name: "loginIp", vali: {stringLength: 45}, hideEdit: "A", width:110},
                      {name: "loginAddress", hideEdit:"A", width:110},
                      {name: "loginTime", vali:{date:true}, hideEdit: "A", width:140},
                      {name: "mail", vali:{stringLength: 128,required:false,emailAddress:true},  width:140, show:false},   
                      {name: "crtBy", width:140, hideEdit: "A", vali: {stringLength: 45}},
                      {name: "crtTm", width:140, type: "D", hideEdit: "A", sort:true},
                      {name: "mdfBy", width:140, hideEdit: "A", vali: {stringLength: 45}},
                      {name: "mdfTm", width:140, type: "D", hideEdit: "A",sort:true}
                  ]};
              InitTableModuleNew(userItems);
              $("#frmuserTab-tools-add").click(function(){
                  $("#edit-frmuserTab-password").attr("type","password");
              })
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    
</style>
