<template>
  <div id="audit">
    <div class="bs-example">
      <div class="row">
        <div class="col-xs-12 col-md-12">
          <div class="widget no-margin-bottom">
            <div class="widget-body no-padding">
              <div id="searchable_wrapper">
                <div class="tabbable">
                  <ul class="nav nav-tabs">
                    <!-- tab标签组 -->
                    <li class="flag-tabs-btn active" id="accessBtn">
                      <a data-toggle="tab" href="javaScript:void(0)" onclick="switchTabAndTools('accessTab','accessTool')">操作记录</a>
                    </li>
                    <!-- <li class="flag-tabs-btn " id="auditBtn1">
                      <a data-toggle="tab" href="javaScript:void(0)" onclick="switchTabAndTools('auditTab1','auditTool1')">数据库审计</a>
                    </li> -->

                    <li class="head-tools-r navbar-right flag-tools"  id="accessTool"></li>
                    <!-- <li class="head-tools-r navbar-right flag-tools" style="display:none;" id="auditTool1"></li> -->

                  </ul>
                  <!-- tab页面组 -->
                  <div class="tab-content no-padding tabs-flat " style="border-radius:0;">
                    <div id="accessTab" class="flag-tabs tab-pane in active"></div>
                    <!-- <div id="auditTab1" class="flag-tabs tab-pane "></div> -->
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
      var that = this;
      $(function(){

        /****** 操作记录 accessRcd begin ********/
        var reqOperationFormat = function(value){
          return  matchData2FormatSpan("db.tbCfrmAccessRcd.reqOperation.dataPlus", value, 50, "info");
        };
        var resourceIdFormat = function(value){
          /*var i18n = "";
          if(value.indexOf("/")!==-1){
            //"/frame/audit"——> "menu.frame_audit"  "/index"——>"menu.index"
            i18n = getJsonData("menu." + value.substring(1,value.length).replace("/","_"));
          }
          return i18n ?　i18n : getJsonData("menu.otherRequest");*/
          return value;
        };

        Utils.ajax({
            url: window.PATH + "/frame/auth/menulist",
            data: {userId:that.yzxcookie.getCookies('userId')},
            async: false,
            success: function(res){
                if( res && res.state===0){
                    var menuGroupComData = ["optgroup"];
                    for (var i=0;i<res.data.length;i++){
                      var topMenu = [];
                      var secondMenu = [];
                      for (var j=0;j<res.data[i].children.length;j++){
                        var item = [res.data[i].children[j].id,res.data[i].children[j].name];
                        secondMenu.push(item);
                      }
                      topMenu = [res.data[i].name,secondMenu];
                      menuGroupComData.push(topMenu);
                    }
                    console.log(menuGroupComData);
                }else{
                   layer.msg.error(res.message);
                }
            }
        })

        var accessItems = {
          version:"20170124V0", tableKey:"keyLogId", i18nPrefix:"db.tbCfrmAccessRcd.",
          initParams:{ tableId:"accessTab", toolsId:"accessTool", urlPrefix: "/frame/audit/access", permissions: ['1', '1', '1', '1'], page:"1"},
          trs:[
            {name:"keyLogId", width:90},
            {name:"idxDateTime", width:140, sort:true},
            {name:"idxUserId", width:60},
            {name:"userName", width:60, advQry:["LIKE"]},
            {name:"reqRemoteIP", advQry:["LIKE"], width:100},
            {name:"reqAreaName", advQry:["LIKE"], width:100},
            {name:"reqOperation", comType:"select", advQry:["LIKE"], valFormat:reqOperationFormat, width:80},
            {name:"resourceName", advQry:["LIKE"], qryType:"select", qryData:menuGroupComData/*,valFormat:resourceIdFormat*/, width:200},
            /*{name:"respCode", width:60, valFormat:function(value){
                if(value !== undefined && value !== ""){
                  return value===200 ? "OK<i class='f-tips'>"+value+"</i>" : "Failed<i class='f-tips'>"+value+"</i>";
                }
              }},
            {name:"result", width:80},*/
            {name:"reqOS", width:80},
            {name:"reqBrowser", width:120}
          ]};
        InitTableModuleNew(accessItems);
      })
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
