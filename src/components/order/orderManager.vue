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
                    <li class="flag-tabs-btn active" id="orderManagerBtn1">
                      <a data-toggle="tab" href="javaScript:void(0)" onclick="switchTabAndTools('orderManagerTab1','orderManagerTool1')">订单列表</a>
                    </li>

                    <li class="head-tools-r navbar-right flag-tools"  id="orderManagerTool1"></li>
                  </ul>
                  <!-- tab页面组 -->
                  <div class="tab-content no-padding tabs-flat " style="border-radius:0;">
                    <div id="orderManagerTab1" class="flag-tabs tab-pane in active"></div>
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
              var permi_agentChargeRcd = ["0","1","1","1"];
              var orderManagerUrls = "/order/orderManager/";

              /*var orderManagerOptions = {
                  version:"20170124V0",tableKey:"orderId", i18nPrefix:"db.tbOrderManager.", order:'[["keyID",2]]', trs:[
                      {name: "orderId", disabled: "A",advQry:["LIKE"], vali: {integer:true,lessThan: 1000000},width:110},
                      {name: "sourceSystem", vali: {stringLength: 20}, width:100, sort:true, show:false},
                      {name: "orderNo", vali: {stringLength: 20}, width:100, sort:true, show:false},
                      {name: "costPrice", vali: {stringLength: 20}, width:100, sort:true, show:false},
                      {name: "price", vali: {stringLength: 20}, advQry:['LIKE'],  width:100, sort:true},
                      {name: "currency", vali: {stringLength: 20}, width:100, sort:true, show:false},
                      
                      {name: "status", hideEdit:"N",batchEdit:true, vali: {stringLength: 1},advQry:['LIKE'],
                          comType:"select", width:70, valFor  mat:function(value){
                          return matchData2FormatSpan("db.tbOrderManager.status.dataPlusDiy", value, 50);
                      }},
                      //{name: "status", vali: {stringLength: 20}, advQry:['LIKE'], width:100, sort:true},
                      {name: "idxAgentId", vali: {stringLength: 20}, width:100, sort:true, show:false},
                      {name: "agentLevelId", vali: {stringLength: 20}, width:100, sort:true, show:false},
                      {name: "name", vali: {stringLength: 20}, width:100, sort:true, show:false},
                      {name: "phoneNo", vali: {stringLength: 20}, width:100, sort:true, show:false},
                      {name: "createUser", vali: {stringLength: 20}, width:100, sort:true, show:false},
                      {name: "createTime",hideEdit:"A",width:140,advQry:["DURING"],vali:{date:true, required:false},sort:true}
                  ]};
              */
              //InitTableMoudle("orderManagerTab1", "orderManagerTool1", orderManagerUrls, orderManagerOptions, permi_agentChargeRcd, "1");

              var orderManagerOptions = {version:201710121, tableKey:"orderId", i18nPrefix:"db.tbOrderManager.", batchEdit:true,
                  initParams:{tableId:"orderManagerTab1", toolsId:"orderManagerTool1", urlPrefix: orderManagerUrls, permissions: permi_agentChargeRcd, page:"1",customParam:[{queryType:"1"}]},
                  trs:[
                      {name: "orderId", disabled: "A", vali: {integer:true,lessThan: 1000000},width:110},
                      {name: "orderNo", vali: {stringLength: 20}, width:200,advQry:["LIKE"]},
                     /* {name: "sourceSystem", vali: {stringLength: 20}, width:100, show:false},*/
                      
                      {name: "pkgName", width:100,advQry:["LIKE"]},
                      {name: "price", vali: {stringLength: 20},  width:100, ratio:100},
                      
                      {name: "idxAgentId", width:100,advQry:["LIKE"],comType: "ajaxSelect", comDataS2:{url:window.PATH + "/sysconfig/agentManager/agentS2Data"},show:false},
                      {name: "status", hideEdit:"N",batchEdit:true, vali: {stringLength: 1},advQry:['LIKE'],
                          comType:"select", width:100, valFormat:function(value){
                          return matchData2FormatSpan("db.tbOrderManager.status.comData", value, 80);
                      }},

                      /*{name: "platform", hideEdit:"N",batchEdit:true, vali: {stringLength: 1},
                          comType:"select", width:70, valFormat:function(value){
                          return matchData2FormatSpan("db.tbOrderManager.platform.comData", value, 80);
                      }},*/

                      /*{name: "costPrice", vali: {stringLength: 20}, width:100,ratio:100},*/
                      {name: "agentName", vali: {stringLength: 20}, width:200},
                      
                      
                      /*{name: "currency", vali: {stringLength: 20}, width:100, show:false},*/
                      
                      //{name: "status", vali: {stringLength: 20}, advQry:['LIKE'], width:100, sort:true},
                      
                      /*{name: "agentLevelId", vali: {stringLength: 20}, width:100, show:false},*/
                      {name: "name", vali: {stringLength: 20}, width:100,  show:false},                      
                      {name: "createUser", vali: {stringLength: 20}, width:100,show:false,detailShow:false},
                      /*{name: "phoneNo", vali: {stringLength: 20}, width:100},*/
                      {name: "createTime",hideEdit:"  A",width:140,advQry:["DURING"],vali:{date:true, required:false},sort:true},
                      /*{name: "mdfBy", vali: {stringLength: 20}, width:100, show:false},*/
                      {name: "mdfTm", vali: {stringLength: 20}, width:100, show:false,sort:true,detailShow:false}
                  ]}
              InitTableModuleNew(orderManagerOptions);
              //$("select[name='cx_GTE-|-status]'").append("<option value='Value'>Text</option>")
          })
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    
</style>
