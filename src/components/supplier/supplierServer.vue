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
                    <li class="flag-tabs-btn active" id="supplierBtn1">
                      <a data-toggle="tab" href="javaScript:void(0)" onclick="switchTabAndTools('supplierTab3','supplierTool3')">扣费记录</a>
                    </li>
                    <li class="flag-tabs-btn" id="supplierBtn2">
                      <a data-toggle="tab" href="javaScript:void(0)" onclick="switchTabAndTools('supplierTab4','supplierTool4')">扣费提醒</a>
                    </li>

                    <li class="head-tools-r navbar-right flag-tools"  id="supplierTool3"></li>
                    <li class="head-tools-r navbar-right flag-tools"  id="supplierTool4"></li>
                  </ul>
                  <!-- tab页面组 -->
                  <div class="tab-content no-padding tabs-flat" style="border-radius:0;">
                    <div id="supplierTab3" class="flag-tabs tab-pane in active"></div>
                    <div id="supplierTab4" class="flag-tabs tab-pane in"></div>
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
            var Permi = ['1','1','1','1'];//不可新增和删除//view.permissions;//Permi[1] = '1';//不可新增

            /****************************** 流量供应商列表 - 不可新增 *********************************/
            var supplierItems1 = {version:201710121, tableKey:"serverId", i18nPrefix:"db.tbUcpAgentServerRecord.", batchEdit:true,
                //实名认证
                customComps:{
                    custom:[]
                },
                initParams:{tableId:"supplierTab3", toolsId:"supplierTool3", urlPrefix: "/supplier/serverRecords/", permissions: Permi, page:"1"},
                trs:[
                    {name: "serverId", hideEdit:"E", vali:{stringLength: 32}},
                    {name: "agentId", hideEdit:"E", vali:{stringLength: 32},width:200,show:false},
                    {name: "generalAgentId", hideEdit:"E", advQry:['LIKE'], vali:{stringLength: 32},width:200,comType: "ajaxSelect", comDataS2:{url:window.PATH + "/sysconfig/agentManager/agentS2Data"},show:false},
                    {name: "beforeBalance", hideEdit:"E", vali:{stringLength: 32},ratio:100,show:false},
                    {name: "amount", hideEdit:"E", vali:{stringLength: 32},ratio:100,sort:true},
                    {name: "price", hideEdit:"E", vali:{stringLength: 32},ratio:100,show:false},
                    {name: "serverTpye",comType:"select", advQry:['LIKE'],hideEdit:"E", vali:{stringLength: 32},valFormat:function(value){
                        return matchData2FormatSpan("db.tbUcpAgentServerRecord.serverTpye.dataPlus", value, 80);
                    }},
                    {name: "sendFlag",show:false, hideEdit:"E", vali:{stringLength: 32},valFormat:function(value){
                        return matchData2FormatSpan("db.tbUcpAgentServerRecord.sendFlag.dataPlus", value, 50);
                    }},
                    {name: "remark",show:false, hideEdit:"E", vali:{stringLength: 32},show:false},
                    {name: "effectTime", hideEdit:"E", vali:{stringLength: 32},width:180,sort:true},
                    {name: "crtTm", hideEdit:"E", vali:{stringLength: 32},width:180, qryType:"date",sort:true, advQry:['DURING']},
                    {name: "crtBy",show:false, hideEdit:"E", vali:{stringLength: 32}}
                ]};
            InitTableModuleNew(supplierItems1);



            /********************************************扣费提醒*************************************/
            var supplierItems2 = {version:201710121, tableKey:"noticeId", i18nPrefix:"db.tbUcpAgentServerRecord.", batchEdit:true,
                //实名认证
                customComps:{
                    custom:[]
                },
                initParams:{tableId:"supplierTab4", toolsId:"supplierTool4", urlPrefix: "/supplier/alarmRecords/", permissions: Permi, page:"1"},
                trs:[
                    {name: "noticeId", hideEdit:"E", vali:{stringLength: 32}},
                    /*{name: "agentId", hideEdit:"E", vali:{stringLength: 32},width:200},*/
                    {name: "agentName", hideEdit:"E", vali:{stringLength: 32},width:200,comType: "ajaxSelect", comDataS2:{url:window.PATH + "/sysconfig/agentManager/agentS2Data"}, advQry:['LIKE']},
                    /*{name: "generalAgentId", hideEdit:"E", advQry:['LIKE'], vali:{stringLength: 32},width:200,comType: "ajaxSelect", comDataS2:{url:window.PATH + "/sysconfig/agentManager/agentS2Data"}},*/
                    {name: "balance", hideEdit:"E", vali:{stringLength: 32},ratio:100},
                    {name: "amount", hideEdit:"E", vali:{stringLength: 32},ratio:100,sort:true},
                    {name: "price", hideEdit:"E", vali:{stringLength: 32},ratio:100,show:false},
                    {name: "serverTpye",show:false,comType:"select",hideEdit:"E", vali:{stringLength: 32},valFormat:function(value){
                        return matchData2FormatSpan("db.tbUcpAgentServerRecord.serverTpye.dataPlus", value, 80);
                    }},
                    {name: "sendFlag",show:false, hideEdit:"E", vali:{stringLength: 32},valFormat:function(value){
                        return matchData2FormatSpan("db.tbUcpAgentServerRecord.sendFlag.dataPlus", value, 50);
                    }},
                    {name: "remark",show:false, hideEdit:"E", vali:{stringLength: 32},show:false},
                    {name: "effectTime", hideEdit:"E", vali:{stringLength: 32},width:180,sort:true},
                    {name: "deductTime", hideEdit:"E", vali:{stringLength: 32},width:180,sort:true},
                    /*{name: "crtTm", hideEdit:"E", vali:{stringLength: 32},width:180, qryType:"date",sort:true, advQry:['DURING']},*/
                    {name: "crtBy",show:false, hideEdit:"E", vali:{stringLength: 32}}
                ]};
            CheckAndInitStorage(supplierItems2);
          })
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    
</style>
