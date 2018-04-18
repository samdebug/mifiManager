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
                    <!-- tab标签组 -->
                    <li class="flag-tabs-btn active" id="billBtn1">
                      <a data-toggle="tab" href="javaScript:void(0)" onclick="switchTabAndTools('billTab1','billTool1')">日账单</a>
                    </li>
                    <li class="flag-tabs-btn tab-blue" id="billBtn2"> 
                      <a data-toggle="tab" href="javaScript:void(0)" onclick="switchTabAndTools('billTab2','billTool2')">
                       月账单</a> 
                    </li>

                    <li class="head-tools-r navbar-right flag-tools"  id="billTool1">
                    </li>
                    <li class="head-tools-r navbar-right flag-tools"  style="display:none;" id="billTool2">
                      <div class="btn darkorange f-p-tips" style="font-size: 14px;padding: 4px 12px;margin-left:3.56px;" @click="confirmShow"><i class="la la-check"></i><div class="f-t-tips">确认</div></div>
                    </li>
                  </ul>
                  <!-- tab页面组 -->
                  <div class="tab-content no-padding tabs-flat" style="border-radius:0;">
                    <div id="billTab1" class="flag-tabs tab-pane in active"></div>
                    <div id="billTab2" class="flag-tabs tab-pane in" style="display:none;"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      title="确认"
      :visible.sync="centerDialogVisible"
      width="30%"
      center>
      <span>是否确认{{date}}账单金额?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmCheck">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>  
      export default {
        data() {
          return {
            date:"",
            centerDialogVisible:false
          }
        },
        methods:{
          confirmShow(){
            var checkedRows = $("#billTab2-body").find("input[name*=billTab2-rowItems]:checked");
            if ( !checkedRows.length) {
                layer.msg.error("请选择");
                return false;
            }
            if ( checkedRows.length > 1) {
                layer.msg.error("只能选择一项");
                return false;
            }
            var tableDates = getSelectedRowData("billTab2");
            var checked = parseInt(tableDates.status);
            if (checked){
              layer.msg.error("已确认,不可重复确认");
              return false;
            }
            
            this.date = tableDates.month;
            this.centerDialogVisible = true;
          },
          confirmCheck(){
            var that = this;
            var tableDates = getSelectedRowData("billTab2");
            Utils.ajax({
                url: window.PATH +"/supplier/confirmCheck",
                data: {accountCheckId:tableDates.accountCheckId},
                success: function(resp){
                    console.log(resp);
                    if( resp && resp.state===0){
                        layer.msg.success(getJsonData("agentLevel.success"));
                        that.centerDialogVisible = false;
                        //refresh
                        switchTabAndTools('billTab2','billTool2');
                    }else{
                        layer.msg.error(resp.message);
                    }
                }
            })
          }
        },
        mounted: function () {
          $(function(){
                  /****************************** 日账单*********************************/
                  var billPermi1 = ['1','1','1','1'];//不可新增和删除//view.permissions;//Permi[1] = '1';//不可新增
                  var billItems1 = {version:201710121, tableKey:"accountCheckId", i18nPrefix:"db.tbAccountBill.", batchEdit:true,
                      //实名认证
                      customComps:{
                          custom:[/*{
                              name:"realNameCertification",
                              location:1,
                              color:"danger",
                              icon:"fa-user",
                              click:function(){
                                  userCertification();
                              }
                          }*/]
                      },
                      initParams:{tableId:"billTab1", customParams:true,customType:1,toolsId:"billTool1", urlPrefix: "/supplier/account/", permissions: billPermi1, page:"1"},
                      trs:[
                          /*{name: "keyUserID", hideEdit:"E", vali:{stringLength: 32}, width:170, show:false},
                          {name: "idxPhoneNumber", vali: {stringLength: 20}, advQry:['LIKE'], width:100, sort:true},
                          {name:"realauthState",hideEdit:"A",width:100,valFormat:function(value){
                              return '<div style="width:100px;height:23px;padding:1px auto;text-align:center;"><img src="'+window.PATH+'/assets/images/state/realauthState_'+value+'.png"/></div>';
                          }},
                          {name: "accountState", batchEdit:true,hideEdit:"N", vali: {stringLength: 1},advQry:['LIKE'],
                              comType:"select", width:70, valFormat:function(value){
                              return matchData2FormatSpan("db.tbUser.accountState.dataPlusDiy", value, 50);
                          }},
                          {name: "idxViFiID", hideEdit:"A", width:180, advQry:['LIKE'],valFormat:function(value){
                              if(value==="0"){
                                  return "-";
                              }
                              return value;
                          }},
                          {name: "lastAPPOnlineDate", vali:{date:true}, hideEdit: "A", sort:true,width:125},
                          {name: "userType", batchEdit:true, vali: {required :false}, show: false, comType:"select",advQry:['LIKE']},*/

                          {name: "accountCheckId", hideEdit: "A", width:140,show:false},
                          {name: "month", hideEdit: "A", qryType:"date", width:140, sort:true,advQry:['DURING']},
                          
                          {name: "supplierName", hideEdit: "A", width:140},
                          {name: "usedAmount", hideEdit: "A", width:140,ratio:100, sort:true},
                          {name: "usedFlow", hideEdit: "A", width:140,ratio:1048576, sort:true},
                          /*{name: "status", hideEdit:"N", vali: {stringLength: 1},
                              comType:"select", width:70, valFormat:function(value){
                              return matchData2FormatSpan("db.tbAccountCheck.status.comData", value, 50);
                          }},
                          {name: "confirmUser", hideEdit: "A", width:140},*/
                          /*{name: "remark", vali: {stringLength: 128,required:false},show:false},*/
                          /*{name: "createTime",advQry:["DURING"], vali: {date:true, stringLength: 20}, width:150,show:false},*/
                          /*{name: "mdfTm", hideEdit: "A", width:140,show:false,sort:true},*/
                          /*{name: "mdfBy", hideEdit: "A", width:140,show:false},
                          
                          {name: "crtBy", hideEdit: "A", width:140,show:false}*/
                      ]};
                  InitTableModuleNew(billItems1);


                  /****************************** 月账单*********************************/
                  var billPermi2 = ['1','1','1','1'];
                  var billItems2 = {version:201710121, tableKey:"accountCheckId", i18nPrefix:"db.tbAccountBill.", batchEdit:true,
                      //实名认证
                      customComps:{
                          custom:[/*{
                              name:"realNameCertification",
                              location:1,
                              color:"danger",
                              icon:"fa-user",
                              click:function(){
                                  userCertification();
                              }
                          }*/]
                      },
                      initParams:{tableId:"billTab2", customParams:true, customType:2,toolsId:"billTool2", urlPrefix: "/supplier/account/", permissions: billPermi2, page:"1"},
                      trs:[
                          /*{name: "keyUserID", hideEdit:"E", vali:{stringLength: 32}, width:170, show:false},
                          {name: "idxPhoneNumber", vali: {stringLength: 20}, advQry:['LIKE'], width:100, sort:true},
                          {name:"realauthState",hideEdit:"A",width:100,valFormat:function(value){
                              return '<div style="width:100px;height:23px;padding:1px auto;text-align:center;"><img src="'+window.PATH+'/assets/images/state/realauthState_'+value+'.png"/></div>';
                          }},
                          {name: "accountState", batchEdit:true,hideEdit:"N", vali: {stringLength: 1},advQry:['LIKE'],
                              comType:"select", width:70, valFormat:function(value){
                              return matchData2FormatSpan("db.tbUser.accountState.dataPlusDiy", value, 50);
                          }},
                          {name: "idxViFiID", hideEdit:"A", width:180, advQry:['LIKE'],valFormat:function(value){
                              if(value==="0"){
                                  return "-";
                              }
                              return value;
                          }},
                          {name: "lastAPPOnlineDate", vali:{date:true}, hideEdit: "A", sort:true,width:125},
                          {name: "userType", batchEdit:true, vali: {required :false}, show: false, comType:"select",advQry:['LIKE']},
                          {name: "remarks", vali: {stringLength: 128,required:false}, show: false},
                          {name: "mdfTm", hideEdit: "A", width:140, show: false},
                          {name: "mdfBy", hideEdit: "A", width:140, show: false},
                          {name: "crtTm", hideEdit: "A", width:140, show: false},
                          {name: "crtBy", hideEdit: "A", width:140, show: false}*/
                          {name: "accountCheckId", hideEdit: "A", width:140,show:false},
                          {name: "month", qryType:"month", hideEdit: "A", width:140, sort:true,advQry:['DURING']},

                          {name: "supplierName", hideEdit: "A", width:140},
                          {name: "usedAmount", hideEdit: "A", width:140,ratio:100, sort:true},
                          {name: "usedFlow", hideEdit: "A", width:140,ratio:1048576, sort:true},
                          {name: "status", hideEdit:"N", vali: {stringLength: 1},
                              comType:"select", width:70, valFormat:function(value){
                              return matchData2FormatSpan("db.tbAccountCheck.status.comData", value, 50);
                          }},
                          {name: "confirmUser", hideEdit: "A", width:140,show:false},
                          {name: "confirmTime", hideEdit: "A", width:140},
                          /*{name: "remark", vali: {stringLength: 128,required:false},show:false},*/
                          /*{name: "mdfTm", hideEdit: "A", width:140,show:false,sort:true},
                          {name: "mdfBy", hideEdit: "A", width:140,show:false},*/
                          /*{name: "createTime",advQry:["DURING"], vali: {date:true, stringLength: 20}, width:150,show:false},*/
                          /*{name: "crtBy", hideEdit: "A", width:140,show:false}*/
                      ]}; 
                  CheckAndInitStorage(billItems2);
          })
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    
</style>
