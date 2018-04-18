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
                    <li class="flag-tabs-btn active" id="profitOutBtn1">
                      <a data-toggle="tab" href="javaScript:void(0)" onclick="switchTabAndTools('profitOutTab1','profitOutTool1')">分佣对账</a>
                    </li>

                    <li class="flag-tabs-btn" id="profitOutBtn2">
                      <a data-toggle="tab" href="javaScript:void(0)" onclick="switchTabAndTools('profitOutTab2','profitOutTool2')">分佣对账详情</a>
                    </li>

                    <li class="head-tools-r navbar-right flag-tools"  id="profitOutTool1"></li>
                    <li class="head-tools-r navbar-right flag-tools" style="display:none" id="profitOutTool2"></li>
                  </ul>
                  <!-- tab页面组 -->
                  <div class="tab-content no-padding tabs-flat" style="border-radius:0;">
                    <div id="profitOutTab1" class="flag-tabs tab-pane in active"></div>
                    <div id="profitOutTab2" class="flag-tabs tab-pane"></div>
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
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">确认状态<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
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
              var baseUrls1 = "/profitCheck/ucpAgentProfitOut/";

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
                  $("#profitOutBtn2").find("a").click();
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
                          $("input[name='cx_GTE-|-orderTime']").val(startTime);
                          $("input[name='cx_LTE-|-orderTime']").val(endTime);
                          /*$("#profitOutTab2").find(".adv-value").each(function(){
                              $(this).find("input").each(function(){
                                  if ($(this).attr("name") == "cx_GTE-|-orderTime"){
                                      $(this).val(startTime);
                                  };
                                  if ($(this).attr("name") == "cx_LTE-|-orderTime"){
                                      $(this).val(endTime);
                                  };
                              });
                          });*/
                      }
                  })
                  queryTableDataModel('profitOutTab2',1);
                  //console.log($("#profitOutTab2-searchArea"))
                  //queryTableDataModel('profitOutTab2',1);
                  //$("#profitOutBtn2").find("a").click();
                  //$("#profitOutTab2-searchBtnId").click();
              }

              function getSelectedRows() {
                  var checkedRows = $("#profitOutTab1-body").find("input[name*=profitOutTab1-rowItems]:checked");
                  if (checkedRows && checkedRows.length === 1) {
                      var number = checkedRows[0].value.split("-|-");
                      return number[0];
                  }
              }

              function orderConfirmClick(){
                  var tableDates = getSelectedRowData("profitOutTab1");
                  if (parseInt(tableDates.status)){
                      layer.msg.error("已确认，不可重复确认");
                      return false;
                  }
                  var $modal = $("#orderConfirmModal");
                  $modal.modal("show");
              }

              $("#orderConfirmModal").find(".modal-footer>a").click(function(e){
                  if( $(e.target).hasClass("pass")){
                      orderConfirm();
                  }
              });

              function orderConfirm(){
                  var profitId = getSelectedRows();
                  var isExcepted = $("#orderConfirmModalStatus").val();
                  var remark = $("#orderConfirmModalRemark").val();
                  Utils.ajax({
                      url: window.PATH + baseUrls1 +"checkProfitOut",
                      data: {profitId: profitId, isExcepted :isExcepted ,remark:remark},
                      success: function(resp){
                          if( resp && resp.state===0){
                              layer.msg.success(getJsonData("agentLevel.success"));
                              $("#orderConfirmModal").modal("hide");
                              //refresh
                              switchTabAndTools('profitOutTab1','profitOutTool1');
                          }else{
                              layer.msg.error(getJsonData("agentLevel.failed")+(resp.message||""));
                          }
                      }
                  })
              }
              

              /*****************************************分佣列表************************************************************/
              var baseOptions1 = {
                  version:"20170124V0",tableKey:"profitId", i18nPrefix:"db.tbProfitOut.", 
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
                      {name: "profitId",hideEdit:"A", vali:{stringLength: 32}, width:170},
                      {name: "month",width:80,advQry:["DURING"],qryType:"month",vali:{date:true, required:false},sort:true},
                      //{name: "month", vali: {stringLength: 20}, advQry:['LIKE'], width:100, sort:true},
                      {name: "profitType", hideEdit:"A",batchEdit:true, show:false,vali: {stringLength: 1},
                          comType:"select", width:70, valFormat:function(value){
                          return matchData2FormatSpan("db.tbProfitOut.profitType.comData", value, 50);
                      }},
                      /*{name:"agentId",hideEdit:"A",width:100,advQry:['LIKE']},*/
                       {name:"name",hideEdit:"A",width:100,advQry:['LIKE']},
                      {name: "status", hideEdit:"N",batchEdit:true, vali: {stringLength: 1},advQry:['LIKE'],
                          comType:"select", width:70, valFormat:function(value){
                          return matchData2FormatSpan("db.tbProfitOut.status.comData", value, 50);
                      }},
                      //{name: "status", batchEdit:true,hideEdit:"N", vali: {stringLength: 1},advQry:['LIKE']},
                      {name: "amount", hideEdit:"A", width:100,ratio:100, sort:true},
                      {name: "confirmTime", disabled:"A",hideEdit:"A", width:100,sort:true},
                      {name: "confirmUser", disabled:"A",hideEdit:"A", width:100},
                      {name: "remark", vali: {stringLength: 128,required:false}}
                  ]};
              var basepermi1 = ["0","1","1","1"];
              var baseUrls1 = "/profitCheck/ucpAgentProfitOut/";
              InitTableMoudle("profitOutTab1", "profitOutTool1", baseUrls1, baseOptions1, basepermi1, "0");


              /*****************************************分佣列表详情************************************************************/
              /*var baseOptions2 = {
                  version:"20170124V0",tableKey:"profitDetailId", i18nPrefix:"db.tbProfitOutDetail.", order:'[["keyID",2]]', trs:[
                      {name: "profitDetailId",hideEdit:"A", disabled:"A",vali:{stringLength: 32}, width:170,show:false},
                      {name: "orderId", vali: {stringLength: 20}, advQry:['LIKE'], width:100, sort:true},
                      //{name:"orderType",hideEdit:"A",width:100},
                      {name: "goodsName", hideEdit:"A", width:150,advQry:['LIKE']},
                      {name: "orderAmount", batchEdit:true,hideEdit:"N", vali: {stringLength: 1},ratio:100},
                      {name: "orderType", hideEdit:"A",batchEdit:true, vali: {stringLength: 1},
                          comType:"select", width:100, valFormat:function(value){
                          return matchData2FormatSpan("db.tbProfitOutDetail.orderType.comData", value, 80);
                      }},
                      {name: "orderTime",width:140,advQry:["DURING"],vali:{date:true, required:false},sort:true},
                      //{name: "orderTime", vali: {stringLength: 128,required:false}, show: false},
                      {name: "amount", vali: {stringLength: 128,required:false},ratio:100},
                      {name: "createTime", vali: {stringLength: 128,required:false}, show: false},
                      {name: "createUser", vali: {stringLength: 128,required:false}, show: false}
                  ]};
              var basepermi2 = ["0","1","1","1"];
              var baseUrls2 = "/profitCheck/ucpAgentProfitOut/profitOutDetail";
              InitTableMoudle("profitOutTab2", "profitOutTool2", baseUrls2, baseOptions2, basepermi2, "1");*/

              var basepermi2 = ["0","1","1","1"]
              var baseOptions2 = {
                  initParams:{tableId:"profitOutTab2", toolsId:"profitOutTool2", urlPrefix: "/profitCheck/ucpAgentProfitOut/profitOutDetail", permissions: basepermi2, page:"1"},
                  version:"20170124V0",tableKey:"profitDetailId", i18nPrefix:"db.tbProfitOutDetail.", trs:[
                      {name: "profitDetailId",hideEdit:"A", disabled:"A",vali:{stringLength: 32}, width:170,show:false},
                      {name: "orderId", vali: {stringLength: 20}, advQry:['LIKE'], width:200, sort:true},
                      //{name:"orderType",hideEdit:"A",width:100},
                      {name: "goodsName", hideEdit:"A", width:150,advQry:['LIKE']},
                      {name: "orderAmount", batchEdit:true,hideEdit:"N", vali: {stringLength: 1},ratio:100, sort:true},
                      {name: "orderType", hideEdit:"A",batchEdit:true, vali: {stringLength: 1},
                          comType:"select", width:100, valFormat:function(value){
                          return matchData2FormatSpan("db.tbProfitOutDetail.orderType.comData", value, 80);
                      },show:false},
                      {name: "orderTime",width:140,advQry:["DURING"],vali:{date:true, required:false},sort:true},
                      //{name: "orderTime", vali: {stringLength: 128,required:false}, show: false},
                      {name: "amount", vali: {stringLength: 128,required:false},ratio:100, sort:true},
                      {name: "createTime", vali: {stringLength: 128,required:false}, show: false,sort:true},
                      {name: "createUser", vali: {stringLength: 128,required:false}, show: false}
                  ]};
              CheckAndInitStorage(baseOptions2);

              $("#profitOutBtn1").find("a").click(function(){
                 $("input[name='cx_GTE-|-orderTime']").val("");
                 $("input[name='cx_LTE-|-orderTime']").val("");
              })

          })
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    
</style>
