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
                    <li class="flag-tabs-btn active" id="userBtn1">
                      <a data-toggle="tab" href="javaScript:void(0)" onclick="switchTabAndTools('supplierTab1','supplierTool1')">流量供应商</a>
                    </li>
                    <li class="head-tools-r navbar-right flag-tools"  id="supplierTool1"></li>
                  </ul>
                  <!-- tab页面组 -->
                  <div class="tab-content no-padding tabs-flat" style="border-radius:0;">
                    <div id="supplierTab1" class="flag-tabs tab-pane in active"></div>
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
            var userItems = {version:201710121, tableKey:"idxSupplierId", i18nPrefix:"db.tbFlowSupplier.", batchEdit:true,
                //实名认证
                customComps:{
                    custom:[]
                },
                initParams:{tableId:"supplierTab1", toolsId:"supplierTool1", urlPrefix: "/supplier/", permissions: Permi, page:"1"},
                trs:[
                    /*{name: "idxSupplierId", hideEdit:"E", vali:{stringLength: 32}, show:false},*/
                    {name: "name", hideEdit:"E", vali:{stringLength: 32}},
                    {name: "ucpContact", hideEdit:"E", vali:{stringLength: 32}, show:false},
                    {name: "phoneNumber", hideEdit:"E", vali:{stringLength: 32}, show:false},
                    /*{name: "supplierLevel", hideEdit:"E", vali:{stringLength: 32}, show:false},*/
                    {name: "expectedConsumptionDays", hideEdit:"E", vali:{stringLength: 32}},
                    {name: "price", hideEdit:"E", vali:{stringLength: 32},ratio:100},
                    {name: "balance", hideEdit:"E", vali:{stringLength: 32},ratio:100},
                    {name: "status", vali: {stringLength: 128,required:false},comType:"select",valFormat:function(value){
                        return matchData2FormatSpan("db.tbFlowSupplier.status.dataPlus", value, 50);
                    }, advQry:['LIKE']},
                    /*{name: "queryDate", hideEdit: "A", width:140,show:false,detailShow:false},*/
                    {name: "resultDate", hideEdit: "A", width:140},
                    /*{name: "credit", hideEdit:"E", vali:{stringLength: 32}, show:false},*/
                    /*{name: "updateTime", hideEdit:"E", vali:{stringLength: 32}, show:false},*/
                    /*{name: "ucpServerUrl", hideEdit:"E", vali:{stringLength: 32}, show:false},*/
                    /*{name: "token", hideEdit:"E", vali:{stringLength: 32}, show:false},*/
                    /*{name: "privateKey", hideEdit:"E", vali:{stringLength: 32}, show:false},*/
                    {name: "remark", vali: {stringLength: 128,required:false}, show: false},
                    /*{name: "mdfTm", hideEdit: "A", width:140,sort:true},
                    {name: "mdfBy", hideEdit: "A", width:140, show: false},*/
                    {name: "crtTm", hideEdit: "A", width:140,sort:true},
                    {name: "crtBy", hideEdit: "A", width:140, show: false}
                ]};
            InitTableModuleNew(userItems);
          })
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    
</style>
