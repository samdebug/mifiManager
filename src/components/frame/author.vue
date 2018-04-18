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
                                        <a data-toggle="tab" href="javaScript:void(0)" onclick="switchTabAndTools('authorTab1','authorTool1')">鉴权管理</a>
                                    </li>

                                    <li class="head-tools-r navbar-right flag-tools" id="authorTool1" style=""></li>
                                     <!--  <div class=" btn success f-p-tips" @click="exportModel" style="font-size: 14px;padding: 4px 12px;margin-left:3.56px;" id="agentManagerTab1-tools-add"><i class="la la-download"></i><div class="f-t-tips">导出</div></div> -->
                                    
                                </ul>
                                <!-- tab页面组 -->
                                <div class="tab-content no-padding tabs-flat" style="border-radius:0;">
                                    <div id="authorTab1" class="flag-tabs tab-pane active"></div>
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
              var permi = ["0","0","0","0"];

              /***************************** 鉴权管理 begin  *******************************/
              var dataTrafficFormat = function(value){
                  return "<span class='label label-info' style='width:80px;text-align:left;'>" + toDecimals(value,2) + "</span>"; //单位M
              };
              var costCashFormat = function(value){
                  return "<div style='width:80px;text-align:left;'>" + toDecimals(value,2) + "</div>";
              };
              var authorItems = {version:"20170124V0",tableKey:"agentAppId", i18nPrefix:"db.tbUcpAgentApp.",
                  initParams:{tableId:"authorTab1", toolsId:"authorTool1", urlPrefix: "/agentapp/ucpagentapp/", permissions: permi},
                  trs:[
                      {name:"agentAppId",hideEdit:"A"},
                       {name:"idxAgentId",hideEdit:"A", comType:"ajaxSelect", comDataS2:{url:window.PATH + "/sysconfig/agentManager/agentS2Data"},width:180,show:false},
                      {name:"appName",advQry:['LIKE'],vali:{stringLength:[1,128]}},
                      {name:"appAgentId",width:200,vali:{stringLength:[1,32]}},
                      {name:"appKey",width:200,vali:{stringLength:[1,64]}},
                      
                      /*{name:"referType",comType:"select",hideEdit:"A",show:false, width:100, valFormat:function(value){
                          return matchData2FormatSpan("db.tbUcpAgentApp.referType.comData", value, 80);
                      }},*/
                      {name:"status",advQry:['LIKE'],comType:"select",addDef: "1", width:100, valFormat:function(value){
                          return matchData2FormatSpan("db.tbUcpAgentApp.status.comData", value, 80);
                      }},
                      {name:"remark",vali:{required:false,stringLength:[1,200]}},
                      {name:"mdfTm",sort:true,hideEdit:"A",width:180},
                      {name:"mdfBy",hideEdit:"A"},
                      {name:"crtTm",sort:true,hideEdit:"A",width:180},
                      {name:"crtBy",hideEdit:"A"}
                  ]};           
              InitTableModuleNew(authorItems);
          })
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    
</style>
