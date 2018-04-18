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
                    <li class="flag-tabs-btn active" id="monitorLogBtn1">
                      <a data-toggle="tab" href="javaScript:void(0)" onclick="switchTabAndTools('monitorLogTab1','monitorLogTool1')">监控日志</a>
                    </li>
                    <li class="head-tools-r navbar-right flag-tools"  id="monitorLogTool1"></li>
                  </ul>
                  <!-- tab页面组 -->
                  <div class="tab-content no-padding tabs-flat " style="border-radius:0;">
                    <div id="monitorLogTab1" class="flag-tabs tab-pane  in active"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        mounted: function () {
            $(function(){
                  var Permi = ['0','1','1','1'];//不可新增和删除//view.permissions;//Permi[1] = '1';//不可新增

                  /****************************** 监控日志列表 - 不可新增 *********************************/
                  var LogItems = {version:201710121, tableKey:"logNo", i18nPrefix:"db.tbMonitorLog.", batchEdit:true,
                      initParams:{tableId:"monitorLogTab1", toolsId:"monitorLogTool1", urlPrefix: "/monitor/msgLog", permissions: Permi, page:"1"},
                      trs:[
                          {name: "logNo", hideEdit:"A", vali:{stringLength: 32}, width:170},
                          {name: "agentId", hideEdit:"A", vali:{stringLength: 32}, width:170, show: false},
                          {name: "receive", advQry:['LIKE'], hideEdit:"A", vali:{stringLength: 32}, width:170},
                          {name: "monitoritemid", hideEdit:"A", vali:{stringLength: 32}, width:170, show: false},
                          {name: "monitoritemname", hideEdit:"A", vali:{stringLength: 32}, width:170, show: false},
                          {name: "monitorruleid", hideEdit:"A", vali:{stringLength: 32}, width:170, show: false},
                          {name: "monitorruledesc", hideEdit:"A", vali:{stringLength: 32}, width:170, show: false},
                          {name: "monitormsgtypename", hideEdit:"A", vali:{stringLength: 32}, width:170},
                          {name: "resendTm", hideEdit:"A", vali:{stringLength: 32}, width:170,valFormat:function(value){
                              if (value == null){
                                return ""
                              }else{
                                return value;
                              }
                          }},
                          {name: "resend", hideEdit:"A", vali:{stringLength: 32}, width:170,show:false},
                          {name: "msgcontent", hideEdit:"A", vali:{stringLength: 32}, width:170, show: false},
                          {name: "status",advQry: ["LIKE"],valFormat:function(value){
                              return matchData2FormatSpan("db.tbMonitorLog.status.dataPlus", value, 50);
                          }, comType: "select",hideEdit:"A", vali:{stringLength: 32}, width:170},
                          {name: "remark", vali: {stringLength: 128,required:false}, show: false},
                          /*{name: "mdftm", hideEdit: "A", width:140, show: false,sort:true},*/
                          {name: "mdfby", hideEdit: "A", width:140, show: false},
                          {name:"crttm",width:140,advQry:["DURING"],vali:{date:true, required:false},sort:true},
                          {name: "crtby", hideEdit: "A", width:140, show: false}

                          /*{name: "idxPhoneNumber", vali: {stringLength: 20}, advQry:['LIKE'], width:100, sort:true},
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
                      ]};
                  InitTableModuleNew(LogItems);
            })
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    
</style>
