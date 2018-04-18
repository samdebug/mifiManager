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
                    <li class="flag-tabs-btn active" id="agentManagerBtn1">
                      <a data-toggle="tab" href="javaScript:void(0)" onclick="switchTabAndTools('agentManagerTab1','agentManagerTool1')"><span class="tab-title">代理商列表</span></a>
                    </li>
                    <!-- tab2-工具按钮组 -->
                    <li class="head-tools-r navbar-right flag-tools" style="" id="agentManagerTool1"></li>
                  </ul>
                  <!-- tab页面组 -->
                  <div class="tab-content no-padding tabs-flat" style="border-radius:0;">
                    <div id="agentManagerTab1" class="flag-tabs tab-pane active" style="border-radius:0;"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade modal-primary" id="agentRecharge" aria-hidden="true">
      <div class="modal-dialog" style="">
        <div class="modal-content">
          <form id="agentRecharge-new-form" class="form-horizontal bv-form" onchange="" novalidate="novalidate">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title text-primary"><i class="fa fa-edit"></i>代理商充值</h4>
            </div>
            <div class="ng-scope" style="padding-top:15px;">
              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">客户名称<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="padding-left:0;padding-right:0;">
                    <div class="ng-scope" id="">
                      <input type="text" id="rechargeModalName" name="rechargeModalName" placeholder="请输入客户名称" class="form-control input-sm layer-date" data-bv-field="name" disabled>
                      <i class="form-control-feedback" data-bv-field="name" style="display: none;"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">余额(元)<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="padding-left:0;padding-right:0;">
                    <div class="ng-scope" id="">
                      <input type="text" id="rechargeModalBalance" name="rechargeModalBalance" placeholder="请输入余额(元)" class="form-control input-sm layer-date" data-bv-field="name" disabled>
                      <i class="form-control-feedback" data-bv-field="name" style="display: none;"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">充值金额(元)<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="padding-left:0;padding-right:0;">
                    <div class="ng-scope" id="">
                      <input type="text" id="rechargeModalAmount" name="rechargeModalAmount" placeholder="请输入充值金额(元)" class="form-control input-sm layer-date">
                      <i class="form-control-feedback" style="display: none;"></i>
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
                      <input type="text" id="rechargeModalRemark" name="rechargeModalRemark" placeholder="请输入备注" class="form-control input-sm layer-date">
                      <i class="form-control-feedback" style="display: none;"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer " style="background-color:#FFFFFF;">
              <!-- <a class="el-button el-button--primary pass">保存</a> -->
              <button type="submit" class="el-button el-button--primary">保存</button>
              <a class="el-button el-button--default" data-dismiss="modal" aria-label="Close">取消</a>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="modal fade modal-primary" id="agentLevel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <form id="agentLevel-new-form" class="form-horizontal bv-form" onchange="" novalidate="novalidate">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title text-primary"><i class="fa fa-edit"></i>级别设置</h4>
            </div>
            <div class="ng-scope" style="padding-top:15px;">
              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">客户名称<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="padding-left:0;padding-right:0;">
                    <div class="ng-scope" id="">
                      <input type="text" id="levelModalName" name="modalName" placeholder="请输入客户名称" class="form-control input-sm layer-date" data-bv-field="name" disabled>
                      <i class="form-control-feedback" data-bv-field="name" style="display: none;"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">级别<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="padding-left:0;padding-right:0;">
                    <div class="ng-scope" id="agentManagerTab1-comContent-levelModalLevel">
                      <select id="levelModalLevel" name="levelModalLevel" style="width: 100%;" tabindex="-1">
                        <option value="0">银牌</option>
                        <option value="1">金牌</option>
                        <option value="2">钻石</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group has-feedback" style="" id="form-Price">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">当前流量价格(元/G)<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="padding-left:0;padding-right:0;">
                    <div class="ng-scope" id="">
                      <input type="text" id="levelModalPrice" name="levelModalPrice" placeholder="请输入当前流量价格(元/G)" class="form-control input-sm layer-date">
                      <i class="form-control-feedback" style="display: none;"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group has-feedback" id="form-effectivePrice">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">生效流量价格(元/G)<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="padding-left:0;padding-right:0;">
                    <div class="ng-scope" id="">
                      <input type="text" id="levelModalEffectivePrice" name="levelModalEffectivePrice" placeholder="请输入生效流量价格(元/G)" class="form-control input-sm layer-date">
                      <i class="form-control-feedback" style="display: none;"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group has-feedback" id="form-effectiveTime" style="display: none">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">流量生效日期<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="padding-left:0;padding-right:0;">
                    <div class="ng-scope" id="">
                      <input type="text" style="padding-left:30px;" id="levelModalEffectiveTime" name="levelModalEffectiveTime" placeholder="请选择流量生效日期" class="form-control input-sm layer-date laydate-input" onclick="laydate.render({type:'datetime',elem:this,istime: true, min:min,format: 'yyyy-MM-dd HH:mm:ss'})">
                      <i class="form-control-feedback" style="display: none;"></i>
                      <i class="el-input__icon el-icon-date dateSelectIcon"></i>
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
                      <input type="text" id="levelModalRemark" name="levelModalRemark" placeholder="请输入备注" class="form-control input-sm layer-date">
                      <i class="form-control-feedback" style="display: none;"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer " style="background-color:#FFFFFF;">
              <!-- <a class="el-button el-button--primary pass">保存</a> -->
              <button type="submit" class="el-button el-button--primary">保存</button>
              <a class="el-button el-button--default" data-dismiss="modal" aria-label="Close">取消</a>
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
            var amountFormat = function(value){
                return  "<span class='label label-primary' style='width: 80px;text-align: right;padding-right:10px;'>"+ toDecimals(value,2) +"</span>";
            };
            var beforeValueFormat = function(value){
                return  "<div style='width: 80px;text-align: right;padding-right:10px;'>"+ toDecimals(value,2) +"</div>";
            };
            var afterValueFormat = function(value){
                return  "<div style='width: 80px;text-align: right;padding-right:10px;'>"+ toDecimals(value,2) +"</div>";
            };

            /******************************* @autor gya   agent 代理商列表   ******************************/
            var balanceFormat = function(value){
                return "<div style='width: 90px;text-align: right;padding-right:10px;'>"+ toDecimals(value,2) +"</div>";
            };
            var creditFormat = function(value){
                if(value>=100){
                    return "<div style='width: 90px;text-align: right;padding-right:10px;'>"+ toDecimals(value,2) +"</div>";
                }else{
                    return "<div style='width: 90px;text-align: right;padding-right:10px;'>"+ toDecimals(value,2) +"</div>";
                }
            };
            var agentStatusFormat = function(value){
                return matchData2FormatSpan("db.tbAgent.status.dataPlus", value,"70");
            };

            function getAgentSelectedRows() {
                var checkedRows = $("#agentManagerTab1-body").find("input[name*=agentManagerTab1-rowItems]:checked");
                if (checkedRows && checkedRows.length === 1) {
                    var number = checkedRows[0].value.split("-|-");
                    return number[0];
                }
            }

            var agentUrl = "/sysconfig/agentManager/";
            function agentRechargeClick(){
                var idxAgentId = getAgentSelectedRows();

                var tableId = "agentManagerTab1";
                var tableDates = getSelectedRowData(tableId);
                var tableName = tableDates.name;
                var $modal = $("#agentRecharge");
                $("#rechargeModalName").val(tableName);
                $("#rechargeModalBalance").val(tableDates.balance/100);
                $("#rechargeModalAmount").val("");
                $("#rechargeModalRemark").val("");

                var formId = "agentRecharge-new-form",
                    modalId = "agentRecharge",
                    successTip = "充值成功",
                    validates = [{name:"rechargeModalAmount",vali:{required:true,between:[0,99999999]}}];
                
                $("#" + modalId).modal({backdrop: 'static'});
                //$("#" + formId).data('bootstrapValidator').resetForm();

                initFormValidators({
                    formId: formId,
                    fields: validates,
                    submit: function(){
                        var amount = $("#rechargeModalAmount").val();
                        var remark = $("#rechargeModalRemark").val();

                        var paramsDetail = {
                           idxAgentId:idxAgentId,
                           amount:parseInt(mul(amount,100)),
                           remark:remark
                        };

                        var params = {
                            url: window.PATH + agentUrl + "reCharge",
                            data: paramsDetail,
                            success: function(resp){
                                $("#" + modalId).modal("hide");
                                layer.msg.success(successTip);
                                switchTabAndTools('agentManagerTab1','agentManagerTool1');
                            }
                        };
                        doTableAjax(params);
                    }
                })
            }

             function agentLevelClick(){
                var idxAgentId = getAgentSelectedRows();
                /*if(!idxAgentId){
                    layer.msg.error("no selected rows!");
                    return;
                }*/
                var tableId = "agentManagerTab1";
                var tableDates = getSelectedRowData(tableId);
                var tableName = tableDates.name;

                $("#levelModalPrice").val("");
                $("#levelModalEffectiveTime").val("");
                $("#levelModalEffectivePrice").val("");
                $("#levelModalRemark").val("");

                if (tableDates.price){
                    $("#levelModalPrice").val(tableDates.price/100);
                    $("#levelModalPrice").attr("disabled","disabled");
                    $("#form-effectivePrice").show();
                    $("#form-Price").show();
                    $("#form-effectiveTime").show();
                }else{
                    $("#levelModalPrice").removeAttr("disabled");
                    $("#form-effectivePrice").hide();
                    $("#form-effectiveTime").hide();
                }

                if (tableDates.effectiveTime){
                    $("#levelModalEffectiveTime").val(tableDates.effectiveTime);
                }

                if (tableDates.effectivePrice){
                    $("#levelModalEffectivePrice").val(tableDates.effectivePrice/100);
                }

                $("#levelModalLevel").val(tableDates.agentLevel);
                $("#levelModalRemark").val(tableDates.remark);

                $(".select2-selection__rendered").click(function(){
                    $(".select2-selection").attr("aria-expanded","true");
                    $(".select2-selection").attr("aria-owns","select2-edit-agentManagerTab1-levelModalLevel-results");
                    $(".select2-container").addClass("select2-container--below");
                    $(".select2-container").addClass("select2-container--focus");
                    $(".select2-container").toggleClass("select2-container--open");
                })
                var $modal = $("#agentLevel");
                $("#levelModalName").val(tableName);

                var formId = "agentLevel-new-form",
                    modalId = "agentLevel",
                    successTip = "设置成功",
                    validates = [{name:"levelModalEffectivePrice",vali:{required:true,between:[0,99999999]}},{name:"levelModalEffectiveTime",vali:{required:true,date:true}}];
                
                $("#" + modalId).modal({backdrop: 'static'});

                initFormValidators({
                    formId: formId,
                    fields: validates,
                    submit: function(){
                        var ucpLevel = $("#levelModalLevel").val();
                        var remark = $("#levelModalRemark").val();
                        var price = $("#levelModalPrice").val();
                        var effectivePrice = $("#levelModalEffectivePrice").val();
                        var effectiveTime = $("#levelModalEffectiveTime").val();

                        var paramsDetail = {
                           idxAgentId: idxAgentId,
                           ucpLevel :ucpLevel ,
                           price:parseInt(mul(price,100)),
                           effectivePrice:parseInt(mul(effectivePrice,100)),
                           effectiveTime:effectiveTime,
                           remark:remark
                        };

                        var params = {
                            url: window.PATH + agentUrl +"levelSet",
                            data: paramsDetail,
                            success: function(resp){
                                $("#" + modalId).modal("hide");
                                layer.msg.success(successTip);
                                switchTabAndTools('agentManagerTab1','agentManagerTool1');
                            }
                        };
                        doTableAjax(params);
                    }
                })
            }

            function ucpTypeHandle (id){
                var $form = $("#"+id);
                var type = $form.find(".select2-selection__rendered").attr("title");
                //var permissionNew = g_var.view.userProfile.type;
                var permissionNew = 0;
                for(var i=0;i<=parseInt(permissionNew);i++){
                    $("#edit-agentManagerTab1-ucpType option[value='" + i + "']").remove();
                }
                $("#edit-agentManagerTab1-ucpType option").each(function (){
                    if (type == $(this).text()){
                        if ($(this).val() == 1){
                            $(this).parents(".form-group").next().hide();
                        }else{
                            $(this).parents(".form-group").next().show();
                        }
                    }
                })
            }

            var tableItem_agent = {
                version:2017102311, tableKey : "idxAgentId", i18nPrefix:"db.tbAgent.",
                    initParams:{tableId:"agentManagerTab1", toolsId:"agentManagerTool1",urlPrefix: agentUrl, permissions: ["0","0","0","0"], page:"1"},
                    trs:[
                        {name:"idxAgentId", hideEdit:"A",vali:{stringLength:128},width:150,show:false},
                        //{name: "idxParentsId", hideEdit:"A", vali: {stringLength: 128}, advQry:['LIKE'],width:220, sort:true,
                        //  comType: "select", comData: view.parentsSelData, show:false},
                        //ID与用户名对应，不允许中文输入(否则会报错，原因不明)

                        //new table
                        //{name: "name", comType:"radio",width:180},

                        {name: "name", vali: {stringLength: [0,200]}, advQry:['LIKE'],width:180},
                        {name: "idxParentsId", hideEdit:"A",disabled:"A", vali: {stringLength: 128},width:170,hideEdit:"N"},
                        
                        /*{name: "agentLevel", hideEdit:"A", vali: {integer:true,lessThan:10000000}, comType:"select", width:100, show:false},*/
                        /*{name: "balance",hideEdit:"A",  vali: {between: [-10000000, 10000000], decimals: 3},width:90, ratio: 100, show:false},
                        {name: "credit",hideEdit:"A",  vali: {integer:true,lessThan:10000000, decimals: 3},width:90, ratio: 100, show:false},*/
                        {name: "idxAgentName", disabled:"E", vali: {noneSpace:true,stringLength: [0,50], zh:false,regexp:/^[0-9a-zA-Z_]{1,}$/,regexpTips:"账号由数字或字母组成"},width:100},
                        /*{name: "ucpType",comType:"select", width:80,comData:{selectE:function(){ucpTypeHandle("agentManagerTab1-new-form");}}, valFormat:agentStatusFormat},*/
                        /*{name: "upperAgent", disabled:"E", vali: {stringLength: 32, zh:false}, advQry:['LIKE'],width:100},*/

                        {name: "status", advQry:["LIKE"],hideEdit:"N",comType:"select", width:80, valFormat:agentStatusFormat},
                        {name: "balance", vali: {between: [-10000000, 10000000], decimals: 3},disabled:"A",hideEdit:"A",width:90, ratio: 100, valFormat:balanceFormat},
                        {name: "ucpPassword",detailShow:false,hideEdit:"E",vali: {stringLength: 32, zh:false},width:100,show:false},
                        {name: "ucpConPassword",detailShow:false, hideEdit:"E", vali: {identical:"ucpPassword",stringLength: 32, zh:false}, width:100,show:false},
                        {name: "ucpAddress", vali: {stringLength: 32,required:true},width:110, show:false},
                        {name: "ucpContact", vali: {stringLength: 32,required:true},width:110, show:false},
                        {name: "phoneNumber", vali: {stringLength: 32,required:true,phone:true},width:110, show:false},
                        {name: "ucpEmail", vali: {email:true,stringLength: 32,required:false,emailAddress:true}, width:110, show:false},
                        {name: "ucpPostCode", vali: {digits:true,stringLength: 32,required:false},width:110, show:false},
                        {name: "ucpFax", vali: {digits:true,stringLength: 32,required:false},width:110, show:false},
                        {name: "remark", vali: {stringLength: 255,required:false},show: false},

                        //old table
                        /*{name: "idxAgentName", disabled:"E", vali: {stringLength: 32, zh:false}, advQry:['LIKE'],width:100, sort:true},
                        {name: "agentLevel", hideEdit:"A", vali: {integer:true,lessThan:10000000}, comType:"select", advQry:['LIKE'], width:100, show:false},
                        {name: "name", vali: {stringLength: 128}, advQry:['LIKE'],width:100, show:false},
                        {name: "phoneNumber", vali: {stringLength: 32},  advQry:['LIKE'],width:110, show:false},
                        {name: "status", advQry:["LIKE"],comType:"select", width:80, valFormat:agentStatusFormat},
                        {name: "credit", vali: {integer:true,lessThan:10000000, decimals: 3},width:90, ratio: 1000, valFormat:creditFormat},
                        {name: "discount", show: false,vali: {between:[0,100]}, show:false,
                            comType:"ajaxSelect", comDataS2:{ url:"discountS2Data.ajax"}},*/
                        {name: "mdfTm", hideEdit: "A", width:140, vali:{date:true},sort:true},
                        {name: "mdfBy", hideEdit: "A", vali: {stringLength: 45}, width:140},
                        {name: "crtTm", hideEdit: "A", width:140, vali:{date:true},sort:true},
                        {name: "crtBy", hideEdit: "A", vali: {stringLength: 45}, width:140}
                ]};

            //运营商和OEM才有权限
            var ucpType = getCookie("ucpType");

            if (parseInt(ucpType) == 0 || parseInt(ucpType) == 1) {
                  tableItem_agent.customComps = {
                      custom:[{
                          name:"agentRecharge",
                          location:1,
                          color:"danger",
                          /*icon:"la-money",*/
                          icon:"rechargeIcon",
                          click:function(){
                              agentRechargeClick();
                          }
                      },{
                          name:"agentLevel",
                          location:2,
                          color:"danger",
                          icon:"la-level-up",
                          click:function(){
                              agentLevelClick();
                          }
                      }]
                  }

                  tableItem_agent.trs.splice(4,0,{name: "price",vali: {stringLength: 32,greaterThan:1},disabled:"E",width:120, ratio: 100},
                        {name: "effectivePrice", disabled:"A",hideEdit:"A", width:120, ratio: 100,vali:{greaterThan:1}},
                        {name: "effectiveTime", disabled:"A",hideEdit:"A", width:120,show:false});
              }else{
                tableItem_agent.trs.splice(4,0,{name: "ucpReturnScale", disabled:"E",type:"I",vali:{number:true,between:[0,100]}, width:120},
                        {name: "ucpEffectiveScale", hideEdit:"N", type:"I",vali:{digits:true,between:[0,100],required:false}, width:120},
                        {name: "ucpEffectiveTime",hideEdit:"N",type:"D",width: 140,vali: {date: true,required:false,minDate:true},valFormat: function (value) {
                                if (value && value.indexOf("2037-12-31") !== -1) {
                                    return getJsonData("label.common.infinite");
                                }
                                return value;
                            }
                        });
              }
            InitTableModuleNew(tableItem_agent);

            //处理按钮,下级不可设置上级级别
            $("#agentManagerTab1-tools-add").click(function(){
                $("#edit-agentManagerTab1-ucpPassword").attr("type","password");
                $("#edit-agentManagerTab1-ucpConPassword").attr("type","password");

                // $.validator.addMethod("valueNotEquals", function(value, element, arg){
                //     return arg !== value ;
                // }, "Value must not equal arg.");

                /*$("#agentManagerTab1-new-form").validate({
                    rules:{
                        ucpPassword:{
                            required:true
                        },
                        ucpConPassword:{
                            required:true,
                            equalTo: "#edit-agentManagerTab1-ucpPassword"
                        },
                        s_county:{
                          valueNotEquals:"市、县级市"
                        }
                    },
                    messages:{
                        ucpPassword:{
                            required:getJsonData("bootstrapValidator.required")
                        },
                        ucpConPassword:{
                            required:getJsonData("bootstrapValidator.required"),
                            equalTo: getJsonData("bootstrapValidator.equalToPassword")
                        },
                        s_county:{
                          valueNotEquals:getJsonData("bootstrapValidator.required")
                        }
                    }                      
                });*/
                // $("#agentManagerTab1-new-form").find(".modal-footer").find("button").click(function(){
                //     if (!$("#agentManagerTab1-new-form").valid()){
                //         return false
                //     }
                // })

                $("#agentManagerTab1-comContent-ucpReturnScale").append('<span style="color:#e46f61;font-size: 12px;">说明：返利比例以套餐售价为基数计算</span>');

                //三级联动
                /*$("#agentManagerTab1-comContent-ucpAddress").prepend('<select class="select" id="s_county" name="s_county" style="border-radius: 2px;min-width: 100px;color: #858585;"></select>');
                $("#agentManagerTab1-comContent-ucpAddress").prepend('<select class="select" id="s_city" name="s_city" style="border-radius: 2px;margin-right: 5px;min-width: 100px;color: #858585;"></select>');

                $("#agentManagerTab1-comContent-ucpAddress").prepend('<select class="select" id="s_province" name="s_province" style="border-radius: 2px;margin-right: 5px;min-width: 100px;color: #858585;"></select>');
                $("#edit-agentManagerTab1-ucpAddress").css({'margin-top':'15px'});
                _init_area();*/
                //$('#s_county').attr('onchange','showArea()');

            })

            $("#agentManagerTab1-RowPopId").children().each(function(){
                if ($.trim($(this).text()) == getJsonData("db.tbAgent.ucpPassword") || $.trim($(this).text()) == getJsonData("db.tbAgent.ucpConPassword")){
                    $(this).remove();
                }
            })

            $("#agentManagerTab1-tools-edit").click(function(){
                $("#edit-agentManagerTab1-ucpPassword").attr("type","password");
                $("#agentManagerTab1-comContent-ucpReturnScale").append('<span style="color:#e46f61;font-size: 12px;">说明：返利比例以套餐售价为基数计算</span>');
            })

            $("#agentManagerTab1-tools-detail").click(function(){
                $(".detailTable").find(".text-right").each(function(){
                    if ($.trim($(this).text()) == getJsonData("db.tbAgent.ucpPassword") + ":" || $.trim($(this).text()) == getJsonData("db.tbAgent.ucpConPassword") + ":"){
                        $(this).parent().remove();
                    }
                });
            })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    
</style>
