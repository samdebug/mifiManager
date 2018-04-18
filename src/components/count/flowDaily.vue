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
                                    <li class="flag-tabs-btn active" id="cdrBtn1">
                                        <a data-toggle="tab" href="javaScript:void(0)" onclick="switchTabAndTools('cdrTab1','cdrTool1')">流量详情</a>
                                    </li>

                                    <li class="head-tools-r navbar-right flag-tools" id="cdrTool1" style=""></li>
                                     <!--  <div class=" btn success f-p-tips" @click="exportModel" style="font-size: 14px;padding: 4px 12px;margin-left:3.56px;" id="agentManagerTab1-tools-add"><i class="la la-download"></i><div class="f-t-tips">导出</div></div> -->
                                    
                                </ul>
                                <!-- tab页面组 -->
                                <div class="tab-content no-padding tabs-flat" style="border-radius:0;">
                                    <div id="cdrTab1" class="flag-tabs tab-pane active"></div>
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
        methods:{
          exportModel(){
            Utils.ajax({
                url: window.PATH +"/agent/count/exportAccountOutRcd",
                data: {},
                success: function(resp){
                    console.log(resp);
                    if( resp && resp.state===0){
                        exportRowModel("导出",resp.data.data);
                        //window.location.href= window.PATH + resp.data.data;
                        //refresh
                    }else{
                        layer.msg.error(resp.message);
                    }
                }
            })           
          }
        },
        mounted: function () {
          $(function(){
              var bProEdition = true;
              var permi = ["1","1","1","1"];

              /*****************************  tab viFiDevice  流量账单 begin  *******************************/
              var dataTrafficFormat = function(value){
                  return "<span class='label label-info' style='width:80px;text-align:left;'>" + toDecimals(value,2) + "</span>"; //单位M
              };
              var costCashFormat = function(value){
                  return "<div style='width:80px;text-align:left;'>" + toDecimals(value,2) + "</div>";
              };
              var trafficCountItems = {version:"20170124V0",tableKey:"keyCDRID", i18nPrefix:"db.tbCDR.", exports: true,exportUrl:"/agent/count/exportAccountOutRcd",
                  initParams:{tableId:"cdrTab1", toolsId:"cdrTool1", urlPrefix: "/agent/count/", permissions: permi},
                  trs:[
                      /*{name:"keyCDRID",width:60},*/
                      {name:"chargeId",width:60,show:false},
                      /*{name:"idxPhoneNumber",width:120,show:false},*/
                      {name:"idxViFiID",width:180, advQry:["LIKE"]},
                      {name:"pkgName",width:120},
                      {name:"dataTraffic",width:90, ratio:1024, valFormat: dataTrafficFormat,sort:true},//, advQry:["LIKE"]
                      {name:"amount",width:90, advQry:["DURING"], ratio:100, valFormat: costCashFormat,sort:true}, 
                      /*{name:"supplierName",width:120, advQry:["LIKE"]},*/

                      /*{name:"idxUserId",width:110,show:false},*/
                      
                      /*{name:"idxSimCardID",width:150,show:false},*/
                     /* {name:"idxRateId",width:90, show:false},*/
                      /*{name:"suiteRateIds",width:150, show:false},*/
                     /* {name:"dailyRentalID",width:90, show:false},*/
                      
                      /*{name:"uuwifiSessId",width:160, show:false},*/
                      
                      /*{name:"costReward",width:90, show:false},*/
                      // /****** {{UUWiFi MANAGEMENT PRO >> AGENT or ? >> begin}} *****/
                      // {name:"idxSupplierId",width:125, show:false},
                      // {name:"supplierDiscount",width:70, show:false},
                      // /****** {{UUWiFi MANAGEMENT PRO >> AGENT or ? >> end}} *****/
                      /*{name:"idxVSWID",width:115, comType:"ajaxSelect", comDataS2:{url:"vswS2.ajax"},show:false},
                      {name:"idxSimPID",width:80, show:false},
                      {name:"idxVAPPID",width:125, show:false},
                      {name:"countryCode",width:80, show:false},*/
                      {name:"area",width:180, comType:"ajaxSelect", comDataS2:{url:window.PATH + "/globalSim/groupareaS2Data", wifiAreaFM:true}},
                      {name:"crtTm",width:125,sort:true},
                      /*{name:"crtBy",width:90},*/
                  ]};
              /*if( bProEdition ){
                  trafficCountItems.trs.splice(11,0, {name:"idxSupplierId",width:125, show:false}, {name:"supplierDiscount",width:70, show:false});
              }*/
              InitTableModuleNew(trafficCountItems);
          })
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    
</style>
