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
                    <li class="flag-tabs-btn active" id="AccountCheckBtn1">
                      <a data-toggle="tab" href="javaScript:void(0)" onclick="switchTabAndTools('AccountCheckTab1','AccountCheckTool1')">流量对账</a>
                    </li>

                    <li class="flag-tabs-btn" id="AccountCheckBtn2">
                      <a data-toggle="tab" href="javaScript:void(0)" onclick="switchTabAndTools('AccountCheckTab2','AccountCheckTool2')">流量对账详情</a>
                    </li>

                    <li class="head-tools-r navbar-right flag-tools" id="AccountCheckTool1"></li>
                    <li class="head-tools-r navbar-right flag-tools" style="display:none" id="AccountCheckTool2"></li>
                  </ul>
                  <!-- tab页面组 -->
                  <div class="tab-content no-padding tabs-flat" style="border-radius:0;">
                    <div id="AccountCheckTab1" class="flag-tabs tab-pane in active"></div>
                    <div id="AccountCheckTab2" class="flag-tabs tab-pane"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade modal-primary" id="orderConfirmModal" aria-hidden="true">
      <div class="modal-dialog" style="">
        <div class="modal-content">
          <form id="orderConfirmModal-new-form" class="form-horizontal bv-form" onchange="" novalidate="novalidate">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title text-primary"><i class="fa fa-edit"></i>对账确认</h4>
            </div>
            <div class="ng-scope" style="padding-top:15px;">
              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">对账状态<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="padding-left:0;padding-right:0;">
                    <div class="ng-scope" id="">
                      <select id="orderConfirmModalStatus" name="orderConfirmModalStatus" style="width: 100%;" tabindex="-1">
                        <option value="0">正常</option>
                        <option value="1">异常</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">备注<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"></span>
                  </label>
                  <div class="col-sm-8" style="padding-left:0;padding-right:0;">
                    <div class="ng-scope" id="">
                      <input type="text" id="orderConfirmModalRemark" name="orderConfirmModalRemark" placeholder="" class="form-control input-sm layer-date">
                      <i class="form-control-feedback" style="display: none;"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer " style="background-color:#FFFFFF;">
              <a href="javaScript:;" class="el-button el-button--primary pass" style="">提交</a>
              <button class="el-button el-button--default" data-dismiss="modal" aria-label="Close">取消</button>
              <!-- <a class="btn btn-success pass" style="" >提交</a>
              <button class="btn btn-danger" data-dismiss="modal" aria-label="Close">取消</button> -->
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
        mounted: function () {
          $(function(){
              var baseUrls1 = "/profitCheck/ucpAgentAccountCheck/";

              function getNowFormatDate() {
                  var date = new Date();
                  var seperator1 = "-";
                  var seperator2 = ":";
                  var month = date.getMonth() + 1;
                  var strDate = date.getDate();
                  if (month >= 1 && month <= 9) {
                      month = "0" + month;
                  }
                  if (strDate >= 0 && strDate <= 9) {
                      strDate = "0" + strDate;
                  }
                  var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                          + " " + date.getHours() + seperator2 + date.getMinutes()
                          + seperator2 + date.getSeconds();
                  return currentdate;
              }

              function getLastDay(year, month){    
                  var dt = new Date(year, month - 1, '01');    
                  dt.setDate(1);    
                  dt.setMonth(dt.getMonth() + 1);    
                  var cdt = new Date(dt.getTime()-1000*60*60*24).getDate();
                  return year + '-' + month + '-'+ cdt + ' 23:59:59';
                  //alert(cdt.getFullYear()+"年"+(Number(cdt.getMonth())+1)+"月月末日期:"+cdt.getDate()+"日");     
              }   

              function detailSkipClick(){
                  $("#AccountCheckBtn2").find("a").click();
                  $(".active_tr").find(".f-p-tips").each(function(){
                      if ($(this).attr("name") == "month"){
                          var monthDay = $(this).text().split("-");
                          if (monthDay.length >= 2){
                              var startTime = monthDay[0] + '-' + monthDay[1] + '-01 00:00:00';
                              var endTime = getLastDay(monthDay[0],monthDay[1]);
                          }else{
                              var startTime = $(this).text();
                              var endTime = getNowFormatDate();
                              alert("月份格式错误");
                          }
                          /*console.log($("#AccountCheckTab2:hidden")[0].children());
                          if ( !$("#AccountCheckTab2-searchArea").is(":visible")){
                              $("#AccountCheckTab2-searchArea").show();
                          }*/
                          $("input[name='cx_GTE-|-crtTm']").val(startTime);
                          $("input[name='cx_LTE-|-crtTm']").val(endTime);
                          /*$("#AccountCheckTab2").find(".adv-value").each(function(){
                              console.log($(this));
                              $(this).find("input").each(function(){
                                  if ($(this).attr("name") == "cx_GTE-|-crtTm"){
                                      $(this).val(startTime);
                                  };
                                  if ($(this).attr("name") == "cx_LTE-|-crtTm"){
                                      $(this).val(endTime);
                                  };
                              });
                          });*/
                      }

                      if ($(this).attr("name") == "name"){
                          var agentName = $(this).text();
                          $("input[name='cx_LIKE-|-name']").val(agentName);
                      }
                  })
                  queryTableDataModel('AccountCheckTab2',1);
                  //$("#AccountCheckBtn2").find("a").click();
              }

              function getSelectedRows() {
                  var checkedRows = $("#AccountCheckTab1-body").find("input[name*=AccountCheckTab1-rowItems]:checked");
                  if (checkedRows && checkedRows.length === 1) {
                      var number = checkedRows[0].value.split("-|-");
                      return number[0];
                  }
              }

              function orderConfirmClick(){
                  var $modal = $("#orderConfirmModal");
                  $modal.modal("show");
              }

              $("#orderConfirmModal").find(".modal-footer>a").click(function(e){
                  if( $(e.target).hasClass("pass")){
                      orderConfirm();
                  }
              });

              function orderConfirm(){
                  var accountCheckId = getSelectedRows();
                  var isExcepted = $("#orderConfirmModalStatus").val();
                  var remark = $("#orderConfirmModalRemark").val();
                  Utils.ajax({
                      url: window.PATH + baseUrls1 +"agentAccountCheck",
                      data: {accountCheckId: accountCheckId, isExcepted :isExcepted ,remark:remark},
                      success: function(resp){
                          if( resp && resp.state===0){
                              layer.msg.success(getJsonData("agentLevel.success"));
                              $("#orderConfirmModal").modal("hide");
                              //refresh
                              switchTabAndTools('AccountCheckTab1','AccountCheckTool1');
                          }else{
                              layer.msg.error(getJsonData("agentLevel.failed")+(resp.message||""));
                          }
                      } 
                  })
              }

              /******************************************流量对账************************************************************/
              var basepermi1 = ["0","1","1","1"];
              var baseOptions1 = {version:201710121, tableKey:"accountCheckId", i18nPrefix:"db.tbAccountCheck.", batchEdit:true,
                  initParams:{tableId:"AccountCheckTab1", toolsId:"AccountCheckTool1", urlPrefix: baseUrls1, permissions: basepermi1, page:"1"},
                  customComps:{
                          custom:[{
                              name:"detailSkip",
                              location:1,
                              color:"success",
                              icon:"la-eye",
                              click:function(){
                                  detailSkipClick();
                              }
                          },{
                              name:"orderConfirm",
                              location:2,
                              color:"success",
                              icon:"la-check",
                              click:function(){
                                  orderConfirmClick();
                              }
                          }]
                      },
                  trs:[
                      {name: "accountCheckId", hideEdit:"A",disabled: "A", vali: {integer:true,lessThan: 1000000},width:110,show:false},
                      {name: "month",advQry:["DURING"], vali: {date:true, stringLength: 20}, width:100, sort:true},
                      /*{name: "idxAgentName", vali: {stringLength: 20}, advQry:['LIKE'], width:100},*/
                      {name: "name", vali: {stringLength: 20}, advQry:['LIKE'], width:100},
                      {name: "status", hideEdit:"N",batchEdit:true, vali: {stringLength: 1},
                          comType:"select", width:70, valFormat:function(value){
                          return matchData2FormatSpan("db.tbAccountCheck.status.comData", value, 50);
                      }},
                      {name: "usedFlow", type:"F",vali: {stringLength: 20}, width:100, sort:true,ratio:1048576, valFormat:function(value){
                          return parseInt(value).toFixed(3);
                      }},
                      {name: "idxAgentId", vali: {stringLength: 20}, width:100,show:false,hideEdit:"A",disabled:"A"},
                      {name: "usedAmount", vali: {stringLength: 20},  width:100,ratio:100, sort:true},
                      {name: "rechargeAmount", vali: {stringLength: 20}, width:100,ratio:100, sort:true},
                      
                      //{name: "status", vali: {stringLength: 20}, advQry:['LIKE'], width:100, sort:true},
                      {name: "confirmTime", width:100, show:false, disabled:"A",hideEdit:"A",sort:true},
                      {name: "confirmUser", width:100, show:false, disabled:"A",hideEdit:"A"},
                      {name: "remark", vali: {stringLength: 20}, width:100, show:false}
                  ]}
              InitTableModuleNew(baseOptions1);

              /******************************************流量对账详情************************************************************/
              var basepermi2 = ["0","1","1","1"]
              var baseOptions2 = {
                  initParams:{tableId:"AccountCheckTab2", toolsId:"AccountCheckTool2", urlPrefix: "/profitCheck/ucpAgentAccountCheck/monthCheckDetail", permissions: basepermi2, page:"1"},
                  version:"20170124V0",tableKey:"keyUUWiFiCDID", i18nPrefix:"db.tbAccountCheckDetail.", trs:[
                      {name: "keyUUWiFiCDID",detailShow:false,hideEdit:"A", disabled:"A", vali:{stringLength: 32}, width:350,show:false},
                      {name: "idxViFiID", vali: {stringLength: 20}, advQry:['LIKE'], width:200},
                      /*{name: "idxDevGrpID", vali: {stringLength: 20}, advQry:['LIKE'], width:100, show: false},*/
                      /*{name: "idxAgentName", vali: {stringLength: 20}, advQry:['LIKE'], width:100},*/
                      {name: "name", vali: {stringLength: 20}, advQry:['LIKE'], width:100},
                      {name: "agentId", vali: {stringLength: 20}, width:300},
                      
                      /*{name: "idxAgentID", show:false,vali: {stringLength: 20}, width:100,hideEdit:"A",disabled:"A"},*/
                      /*{name: "numTotalMTGoip",hideEdit:"A",width:100, show: false},
                      {name: "numTotalMOGoipCb", batchEdit:true,hideEdit:"N", vali: {stringLength: 1}, show: false},
                      {name: "numFailedMTGoip", hideEdit:"A", width:180, show: false},
                      {name: "numFailedMOGoip",width:140,vali:{date:true, required:false}, show: false},
                      //{name: "orderTime", vali: {stringLength: 128,required:false}, show: false},
                      {name: "numFailedMOGoipCb", vali: {stringLength: 128,required:false}, show: false},
                      {name: "numShortMTGoip", vali: {stringLength: 128,required:false}, show: false},
                      {name: "numShortMOGoip", vali: {stringLength: 128,required:false}, show: false},
                      {name: "numShortMOGoipCb", vali: {stringLength: 128,required:false}, show: false},
                      {name: "durMTGoip", vali: {stringLength: 128,required:false}, show: false},
                      {name: "durMOGoip", vali: {stringLength: 128,required:false}, show: false},
                      {name: "durMOGoipCb", vali: {stringLength: 128,required:false}, show: false},
                      {name: "numSMSRecv", vali: {stringLength: 128,required:false}, show: false},
                      {name: "numSMSSend", vali: {stringLength: 128,required:false}, show: false},*/
                      {name: "cntDataDown", vali: {stringLength: 128,required:false}, sort:true},
                      {name: "cntDataUp", vali: {stringLength: 128,required:false}, sort:true},
                      {name: "dataTraffic", vali: {stringLength: 20,decimals:2 }, width:100,ratio:1048576, sort:true},
                     /* {name: "cntTimes", vali: {stringLength: 128,required:false}},*/
/*
                      {name: "cntDataSum",vali: {stringLength: 128},ratio:1024,
                          width:70, valFormat:function(value){
                          return matchData2FormatSpan("db.tbProfitOut.profitType.comData", value.toFixed(2), 70,"info");
                      }},*/
                      {name: "lastUseAverage",vali: {stringLength: 128},ratio:1024,show:false,
                          width:70,detailShow:false},
                      /*{name: "last10MinUp", vali: {stringLength: 128,required:false}, show: false},
                      {name: "last10MinDown", vali: {stringLength: 128,required:false}, show: false},
                      {name: "last30MinUp", vali: {stringLength: 128,required:false}, show: false},
                      {name: "last30MinDown", vali: {stringLength: 128,required:false}, show: false},
                      {name: "last60MinUp", vali: {stringLength: 128,required:false}, show: false},
                      {name: "last60MinDown", vali: {stringLength: 128,required:false}, show: false},*/
                      {name: "amount", vali: {stringLength: 128,required:false},ratio:100, show: false, sort:true},
                      {name: "lastUseCode",detailShow:false, vali: {stringLength: 128,required:false}, show: false},
                      {name: "lastUseDesc",detailShow:false, vali: {stringLength: 128,required:false}, show: false},
                      {name: "deviceDur",detailShow:false, vali: {stringLength: 128,required:false}, show: false},
                      {name: "idxAreaName",detailShow:false, vali: {stringLength: 128,required:false}, show: false},
                      {name: "mdfTm",detailShow:false, vali: {stringLength: 128,required:false},sort:true, show: false},
                      {name: "mdfBy",detailShow:false, vali: {stringLength: 128,required:false}, show: false},
                      {name: "crtTm",width:140,advQry:["DURING"],vali:{date:true, required:false},sort:true},
                      {name: "crtBy",detailShow:false, vali: {stringLength: 128,required:false}, show: false}
                  ]};
              CheckAndInitStorage(baseOptions2);

              /*var baseOptions2 = {
                  version:"20170124V0",tableKey:"profitDetailId", i18nPrefix:"db.tbProfitInDetail.", order:'[["keyID",2]]', trs:[
                      {name: "profitDetailId",hideEdit:"A", disabled:"A",advQry:["LIKE"], vali:{stringLength: 32}, width:170,show:false},
                      {name: "orderId", vali: {stringLength: 20}, advQry:['LIKE'], width:100, sort:true},
                      {name:"orderType",hideEdit:"A",width:100},
                      {name: "orderAmount", batchEdit:true,hideEdit:"N", vali: {stringLength: 1},advQry:['LIKE']},
                      {name: "goodsName", hideEdit:"A", width:180, advQry:['LIKE']},
                      {name: "orderTime", vali: {stringLength: 128,required:false}, show: false},
                      {name: "amount", vali: {stringLength: 128,required:false}, show: false},
                      {name: "createTime", vali: {stringLength: 128,required:false}, show: false},
                      {name: "createUser", vali: {stringLength: 128,required:false}, show: false}
                  ]};
              var basepermi2 = ["1","1","1","1"];
              var baseUrls2 = "/profitCheck/ucpAgentProfitIn/profitInDetail";
              InitTableMoudle("profitInTab2", "profitInTool2", baseUrls2, baseOptions2, basepermi2, "1");*/

              //$("#AccountCheckBtn1").find("a").click();
              $("#AccountCheckBtn1").find("a").click(function(){
                 $("input[name='cx_GTE-|-crtTm']").val("");
                 $("input[name='cx_LTE-|-crtTm']").val("");
              })
          })
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    
</style>
