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
                                    <li class="flag-tabs-btn active" id="deviceDailyBtn1">
                                        <a data-toggle="tab" href="javaScript:void(0)" onclick="switchTabAndTools('deviceDailyTab1','deviceDailyTool1')">设备流量</a>
                                    </li>

                                    <li class="head-tools-r navbar-right flag-tools" id="deviceDailyTool1" style=""></li>
                                </ul>
                                <!-- tab页面组 -->
                                <div class="tab-content no-padding tabs-flat" style="border-radius:0;">
                                    <div id="deviceDailyTab1" class="flag-tabs tab-pane active"></div>
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
              var bProEdition = true;
              var bAgent = true;
              /***********************************  设备流量  begin ************************************/
              var devTrafficItems = {
                  version: 20170926, tableKey: "keyUUWiFiCDID", i18nPrefix: "db.UUWiFiCountDaily.",/*exports:true,*/
                  initParams:{tableId:"deviceDailyTab1", toolsId:"deviceDailyTool1", urlPrefix: "/deviceFlow/", permissions: ['0', '1', '1', '1']},
                  /*group: ['idxViFiID','idxDevGrpID'],*/
                  trs:[
                      {name: "idxViFiID", advQry:["IN"], width:190},
                      /*{name: "aliasName", width:100,show:false},*/
                      /*{name: "idxDevGrpID", comType:"ajaxSelect", comDataS2:{url:"vifiGrpS2.ajax"}, show:false, width:100},*/
                      
                      {name: "idxAgentID", width:260},
                      {name: "idxAgentName", advQry:["LIKE"], comType:"ajaxSelect", comDataS2:{url:window.PATH + "/sysconfig/agentManager/agentS2Data"}, width:130},


                      {name: "cntDataSum", width:130, ratio:1024, advQry: ["DURING"], sort:true, valFormat: function(value, rowData){ //单位M
                          var colorCls = rowData && rowData.lastUseCode === 0 ? "label-info" : "label-red";
                          return "<span class='label "+ colorCls +"' style='width:80px;text-align:right;'>" +toDecimals(value, 3) + "</span>";
                      }},
      //             {name: "cost", width:100, ratio:1000, valFormat: function(value){
      //               return "<div style='width:80px;text-align:right;'>" + toDecimals(value,2) + "</div>";
      //             }},
                      /*{name:"last10MinUp", width:120, show:false, valFormat: trafficUnitFM},
                      {name:"last10MinDown", width:120, show:false, valFormat: trafficUnitFM},
                      {name:"last30MinUp", width:120, show:false, valFormat: trafficUnitFM},
                      {name:"last30MinDown", width:120, show:false, valFormat: trafficUnitFM},
                      {name:"last60MinUp", width:120, show:false, valFormat: trafficUnitFM},
                      {name:"last60MinDown", width:120, show:false, valFormat: trafficUnitFM},*/
                      {name:"lastUseCode", advQry:["LIKE"], width:100,valFormat: function(value, rowData){
                          return value;
                      }}, 
      //            {name:"idxAreaName", width:100},
                      {name: "lastUseDesc", width: 100, show: false},
                      {name: "deviceDur", width:100, valFormat: function(value){
                          return '<div class="">'+ EouUtils.formatTimeSec2Day(value) +'</div>';
                      }},
                      {name:"cntTimes", width:100},
                      {name: "lastUseAverage", ratio: 1024, width: 100}, //单位M
                      {name: "crtTm", advQry: ["DURING"], qryType:"date", width:300,sort:true}
                  ]};
              if( bAgent ){
                  devTrafficItems.trs.splice(3,0,);
              }
              InitTableModuleNew(devTrafficItems);
          })
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    
</style>
