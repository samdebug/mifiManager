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
                    <li class="flag-tabs-btn tab-blue active" id="tab1"> 
                       <a data-toggle="tab" href="javaScript:void(0)" onclick="switchTabAndTools('globalSimTab','globalSimTools')">
                       启动卡列表</a>
                    </li> 
                    <li class="flag-tabs-btn tab-blue" id="tab2"> 
                       <a data-toggle="tab" href="javaScript:void(0)" onclick="switchTabAndTools('globalSCGrpTab','globalSCGrpTools')">
                       启动卡卡组</a> 
                    </li>
                    <li class="flag-tabs-btn tab-blue" id="simTrafficBtn3"> 
                       <a data-toggle="tab" href="javaScript:void(0)" onclick="switchTabAndTools('simTrafficTab','simTrafficTools')">
                       启动卡流量</a>
                    </li>
                    <li class="head-tools-r navbar-right flag-tools"  id="globalSimTools"></li>
                    <li class="head-tools-r navbar-right flag-tools"  style="display:none;" id="globalSCGrpTools"></li>
                    <li class="head-tools-r navbar-right flag-tools"  style="display:none;" id="simTrafficTools"></li>

                   </ul>
                   <!-- tab页面组 -->
                   <div class="tab-content no-padding tabs-flat " style="border-radius:0;">
                    <div id="globalSimTab" class="flag-tabs tab-pane in active"></div>
                    <div id="globalSCGrpTab" class="flag-tabs tab-pane" style="display:none;"></div>
                    <div id="simTrafficTab" class="flag-tabs tab-pane" style="display:none;"></div>
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
              var permi = ["1","1","0","1"]; /*查/增/改/删*/

              /*******************************  启动卡列表 *************************************/
              var gsStatusFormat = function(value){
                  return matchData2FormatSpan("db.tbGlobalSIM.status.dataPlus", value);
              };
              var globalSimItems = {
                  version:"20170124V0",tableKey:"keyGlobalSIMID", i18nPrefix:"db.tbGlobalSIM.",
                  initParams:{tableId:"globalSimTab", toolsId:"globalSimTools", urlPrefix: "/globalSim/", permissions: permi},
                  trs:[
                      
                      {name:"keyGlobalSIMID", advQry:["LIKE"], vali:{required:false},width:180 ,disabled:"E"},
                      {name:"groupName", width:100,hideEdit:"A"},
                      {name:"idxViFiID", advQry:["LIKE"], vali:{required:false}, width: 180,disabled:"E",
                          comType:"ajaxSelect", comDataS2:{url:window.PATH + "/globalSim/vifiS2Data"}},
                      //{name:"imsi", width: 180, show:false},
                      //{name:"imei", width: 180, show:false},
                      {name:"idxGlobalSIMGrpID", width: 100, 
                          comType:"ajaxSelect", comDataS2:{url:window.PATH + "/globalSim/globalSgS2Data"}},
                      {name:"status", width: 60, comType:"select", valFormat:gsStatusFormat, hideEdit:"A",show:false},
                      /*{name:"keyGlobalSIMID", hideEdit:"E", advQry:["LIKE"], width:180 , hideEdit:"A"},*/

                      /*{name:"number", width: 100, show:false, hideEdit:"A"},*/
                      {name:"netData", ratio:1024, width: 100, hideEdit:"A", show:false},
                      /*{name:"balance", ratio:1024, width: 80, show:false, hideEdit:"A"},
                      {name:"lastQryDate", vali:{required:false, date:true}, width: 125, show:false, hideEdit:"A"},
                      {name:"billingDate", comType:"select", vali:{required:false}, width: 100, show:false, hideEdit:"A"},//月结日为int类型*/
                      /*{name:"qryType", vali:{required:false}, width: 100, show:false, hideEdit:"A"},*/
                      /*{name:"lastTopupDate", vali:{required:false, date:true}, width: 125, show:false, hideEdit:"A"},
                      {name:"lastTopupValue", vali:{required:false}, width: 100, show:false, hideEdit:"A"},*/
                      {name:"remarks", vali:{required:false}, width: 200, show:false, hideEdit:"A"},
                      /*{name:"mdfTm", hideEdit:"A", width: 140,sort:true},
                      {name:"mdfBy", hideEdit:"A", width: 140},*/
                      {name:"crtTm", hideEdit:"A", width: 140,sort:true},
                      /*{name:"crtBy", hideEdit:"A", width: 140,show:false,detailShow:false}*/
                  ]};
              InitTableModuleNew(globalSimItems);

              /*******************************  启动卡列表 *************************************/

              /******************************启动卡卡组***************************************/
              var grpPermi = ["0","0","0","0"];
              var simGroupItems = {
                  version:"20170124V0",tableKey: "keyGlobalSIMGrpID", i18nPrefix:"db.tbGlobalSIMGrp.",
                  initParams:{tableId:"globalSCGrpTab", toolsId:"globalSCGrpTools", urlPrefix: "/globalSim/group", permissions: grpPermi},
                  trs:[
                      {name: "keyGlobalSIMGrpID", hideEdit:"A", width:90},//, disabled:"A"
                      {name: "groupName", advQry:["LIKE"], width:80,disabled:"E"},
                      /*{name: "idxSalerID", advQry:["LIKE"], width:100, sort:true, vali:{required:false},
                          comType:"ajaxSelect", comDataS2:{url:window.PATH + "/sysconfig/agentManager/groupS2ispID.ajax"}},*/

                      {name: "idxSalerID", advQry:["LIKE"], width:100},
                      {name: "areaCode", advQry:["LIKE"], width:130,
                          comType:"ajaxSelect", comDataS2:{url:window.PATH + "/globalSim/groupareaS2Data", wifiAreaFM:true,
                          selectE: function(){
                              $("#edit-globalSCGrpTab-ispId").val(null).trigger("change");
                          }}},
                      {name: "ispId", advQry:["LIKE"], width:130,
                          comType:"ajaxSelect", comDataS2:{url:window.PATH + "/globalSim/groupispS2Data",
                          queryParams:function(){ var cn = $("#edit-globalSCGrpTab-areaCode").val(); return {keyAreaId:cn}; }}},
                      {name: "cardType", advQry:["LIKE"], comType:"select", width:80},
                      {name: "cardSize", advQry:["LIKE"], comType:"select", width:100},
                      {name: "dataPrice", ratio:100, width:120},
                      {name: "roamDataPrice", ratio:100, width:120},
                      {name: "monthlyRental", ratio:100, width:80},
                      {name: "number", hideEdit:"A", vali:{required:false}, width:60,show:false,detailShow:false},
                      {name: "remarks", vali:{required:false}, width:128,show:false},
                      {name: "mdfTm", hideEdit:"A", width:125,sort:true},
                      {name: "mdfBy", hideEdit:"A", width:140},
                      {name: "crtTm", hideEdit:"A", width:140,sort:true},
                      {name: "crtBy", hideEdit:"A", width:140}
                  ]};
              CheckAndInitStorage(simGroupItems);
              /*******************************  启动卡卡组   **********************************/

              /*******************************  启动卡流量   **********************************/
              var dataCostFormat = function(value){
                  return "<div style='width:50px;text-align:right;'>" + toDecimals(value/1000,2) + "</div>";
              };
      //  var dataSumFormat = function(value){
      //    //默认G，在标题上显示单位- toDecimals(value/1000/1000,3)__改为KB
      //    return "<span class='label label-info' style='width:50px;text-align:right;'>" + value + "</span>";
      //  };
              var dataSumFormat = function(value){
                  var trafficUnit = "KB";
                  if(value>=1000 && value<1000000){
                      value = toDecimals(value/1000, 2);
                      trafficUnit = "M";
                  }else if(value >= 1000000){
                      value = toDecimals(value/1000000, 2);
                      trafficUnit = "G";
                  }
                  return "<span class='label label-info' style='width:70px;text-align:right;padding-right: 10px;'>" + value
                      +"<span class='label' style='width:17px;text-align:right;'>" + trafficUnit + "</span></span>";
      //     return "<span class='label label-info' style='width:70px;text-align:right;'>" + value +
      //         "</span>"+"<span class='label label-info' style='width:17px;text-align:right;'>" + trafficUnit + "</span>";
              };
              var simTrafficItems = {
                  version:20171012,tableKey: "keyCDID", i18nPrefix:"db.tbGlobalSimCount.",
                  initParams:{tableId:"simTrafficTab", toolsId:"simTrafficTools", urlPrefix: "/globalSim/simCount", permissions: ['0', '1', '1', '1']},
                  trs:[
                      // {name: "keyCDID", disabled:"E", width:270, show:false},
                      {name: "idxSIMId", width:190, advQry: ['LIKE'], comType:"ajaxSelect", comDataS2:{url:window.PATH + "/globalSim/simS2Data"}, sort:true},
                      {name: "idxSCGroupID", width:120, advQry: ['LIKE'], comType:"ajaxSelect", comDataS2:{url:window.PATH + "/globalSim/simCountscgS2Data"}},
                      {name: "idxSalerId", width:100,comType:"ajaxSelect", comDataS2:{url:"supplierS2Data"}},
                      // {name: "idxAreaId", width:180, advQry: ['LIKE'], comType:"ajaxSelect", comDataS2:{url:"areaS2Data.ajax", wifiAreaFM:true}, sort:true, show:false},
                      /*{name: "cntDataDown", width:100},
                      {name: "cntDataUp", width:100},*/
                      {name: "cntDataSum", width:120, valFormat:dataSumFormat},
                      // {name: "dataCost", widthkey: "value", 100, valFormat:"dataCostFormat", show:false},//元, ratio:1000
                      //{name: "timeDuration",width: 270},
                      {name: "crtTm", width:140, advQry: ["DURING"], qryType:"date",sort:true},
                      /*{name: "crtBy", hideEdit:"A", width:140,show:false,},
                      {name: "mdfTm", hideEdit:"A", width:140,sort:true},
                      {name: "mdfBy", hideEdit:"A", width:140,show:false}*/
                  ]};
              //var simBindUrl = "/vsw/globalSIMNew/simCount";
              //InitTableMoudle("simTrafficTab", "simTrafficTools", "/vsw/globalSIMNew/simCount", simTrafficItems, ['0', '1', '1', '1'], "1");
              CheckAndInitStorage(simTrafficItems);

              /*******************************启动卡流量 *************************************/
          })
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    
</style>
