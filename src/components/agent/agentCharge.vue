<template>
  <div id="agentManager">
    <div class="bs-example">
      <div class="row">
        <div class="col-xs-12 col-md-12">
          <div class="widget no-margin-bottom">
            <div class="widget-body no-padding">
              <div id="searchable_wrapper">
                <div class="tabbable">
                  <ul class="nav nav-tabs">
                    <!-- tab标签组 -->
                    <li class="flag-tabs-btn tab-blue active" id="agentManagerBtn5">
                      <a data-toggle="tab" href="javaScript:void(0)" onclick="switchTabAndTools('agentManagerTab5','agentManagerTool5')">
                        <span class="tab-title">预付金列表</span></a>
                    </li>
                    <!-- tab2-工具按钮组 -->
                    <li class="head-tools-r navbar-right flag-tools" style="" id="agentManagerTool5"></li>
                  </ul>
                  <!-- tab页面组 -->
                  <div class="tab-content no-padding tabs-flat " style="border-radius:0;">
                    <div id="agentManagerTab5" class="flag-tabs tab-pane active" style="border-radius:0;"></div>
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
             //格式化金额
            var amountFormat = function(value){
                return  "<span class='label label-primary' style='width: 80px;text-align: right;padding-right:10px;'>"+ toDecimals(value,2) +"</span>";
            };
            var beforeValueFormat = function(value){
                return  "<div style='width: 80px;text-align: right;padding-right:10px;'>"+ toDecimals(value,2) +"</div>";
            };
            var afterValueFormat = function(value){
                return  "<div style='width: 80px;text-align: right;padding-right:10px;'>"+ toDecimals(value,2) +"</div>";
            };

            /******************************* 预付金记录***************************************/
            var tableItem_agentRechargeRcd = {
                version:"20170124V0",tableKey:"rechargeId", i18nPrefix:"db.tbAgentCharge.", order:'[["keyID",2]]', trs:[
                    {name: "rechargeId", disabled: "A", vali: {integer:true,lessThan: 1000000},width:110, show:false},
                    {name: "customerName", vali: {stringLength: 128},width:210},
                    /*{name: "agentId", vali: {stringLength: 128},width:210,show:false},*/
                    {name: "agentName", vali: {stringLength: 128},width:210, advQry:["LIKE"]},
                    {name: "beforeBalance", vali: {stringLength: 128},width:100,ratio:100},
                    {name: "amount", vali: {stringLength: 128},width:100,ratio:100},
                    /*
                    {name: "idxAgentID", vali: {stringLength: 128}, advQry:['LIKE'],width:200, sort:true,
                        comType:"ajaxSelect", comDataS2:{url:"agentS2Data.ajax"}},
                    {name: "discount", vali: {integer:true,between:[0,100]}, advQry:['LIKE'],width:100},
                    {name: "amount", vali: {between: [0, 10000000], decimals: 3},ratio:1024, advQry:['LIKE'],width:100, valFormat:amountFormat},
                    {name: "beforeValue", vali: {between: [-10000000, 10000000], decimals: 3},ratio:1024, advQry:['LIKE'],width:100, valFormat:beforeValueFormat},
                    {name: "afterValue", vali: {between: [-10000000, 10000000], decimals: 3},ratio:1024, advQry:['LIKE'],width:100, valFormat:afterValueFormat},*/
                    {name: "remark", vali: {stringLength: 256}, show: false},
                    /*{name: "mdfTm", vali:{date:true}, show: false, hideEdit: "A", width:140,sort:true},
                    {name: "mdfBy", hideEdit: "A", vali: {stringLength: 45}, show: false, width:140},*/
                    {name: "crtTm", advQry: ["DURING"], qryType:"date", width:150, sort:true},
                    {name: "crtByName", hideEdit: "A", vali: {stringLength: 45}, show: false, width:200}
                ]};
            var permi_agentChargeRcd = ["0","1","1","1"];
            var agentAdditionRcdUrls = "/sysconfig/agentManager/charge";
            InitTableMoudle("agentManagerTab5", "agentManagerTool5", agentAdditionRcdUrls, tableItem_agentRechargeRcd, permi_agentChargeRcd, "1");
            
            //预付金列表时间降序排列
            /*$("#agentManagerBtn5").click(function(){
                console.log($("#th-agentManagerTab5-crtTm").attr("class"));
                if ($("#th-agentManagerTab5-crtTm").attr("class") == 'sorting'){
                    $("#th-agentManagerTab5-crtTm").find(".table-data").click();
                    //$("#th-agentManagerTab5-crtTm").find(".table-data").click();
                }else if ($("#th-agentManagerTab5-crtTm").attr("class") == 'sorting_asc'){
                    $("#th-agentManagerTab5-crtTm").find(".table-data").click();
                }else{
                    return
                }
            })*/
        })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    
</style>
