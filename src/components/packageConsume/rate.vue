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
                                    <li class="flag-tabs-btn active" id="dataRateBtn1">
                                        <a data-toggle="tab" href="javaScript:void(0)" onclick="switchTabAndTools('dataRateTab1','dataRateTool1')">用量费率</a>
                                    </li>
                                    <li class="head-tools-r navbar-right flag-tools"  id="dataRateTool1"></li>
                                </ul>
                                <!-- tab页面组 -->
                                <div class="tab-content no-padding tabs-flat " style="border-radius:0;">
                                    <div id="dataRateTab1" class="flag-tabs tab-pane  in active"></div>
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
        created: function () {
          $(function(){
                var bProEdition = true;
                var bAgent = true;
                /****************************** 用量费率  *********************************/

                var dataRateItems = {version:9, tableKey:"keyRateID", i18nPrefix:"db.tbDataRate.",trs:[
                    {name: "keyRateID", disabled:"E", vali:{integer:true,stringLength:11},width:100},
                    {name: "idxUUWiFiAreaId", vali:{stringLength:128, required:false},width:180, sort:true,
                        comType:"ajaxSelect", comDataS2:{url:"areaS2Data.ajax", wifiAreaFM:true}},
        //        {name: "rateMode", vali: {stringLength: 1}, comType: "select", valFormat:rateModeFormat, comData:{selectE: rateModeSelected}},
                    {name: "priceNET", vali: {decimals: 3,between:[0,1000]}, ratio: 1000, advQry: ['LIKE'], width: 120, priceFM:true},//, valFormat: priceNetFormat
        //        {name: "dayDataPrice", vali: {between: [0, 1000000], decimals: 3}, ratio: 1000, width: 120, valFormat: dayPriceFormat},
        //        {name: "dayDataLimit", vali: {between: [0, 1000000], decimals: 3}, ratio: 1000, width: 130, valFormat: dayLimitFormat},
                    {name: "remarks", vali: {stringLength: 128,required:false}, width:120,show:false},
                    {name: "mdfTm", hideEdit: "A", width: 140},
                    {name: "mdfBy", hideEdit: "A", show: false, width: 140},
                    {name: "crtTm", hideEdit: "A", show: false, width: 140},
                    {name: "crtBy", hideEdit: "A", show: false, width: 140}
                ]};
                if( bAgent ){
                    dataRateItems.trs.splice(1,0,
                        {name:"idxAgentID",comType:"ajaxSelect",comDataS2:{url:"agentS2Data.ajax"}});
                }
                InitTableMoudle("dataRateTab1", "dataRateTool1", "/packageConsume/rate/", dataRateItems, ["0","0","0","0"], "1");
          })
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    
</style>
