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
                                  <li class="flag-tabs-btn active" id="trafficPkgBtn4">
                                      <a data-toggle="tab" href="javaScript:void(0)" onclick="switchTabAndTools('trafficPkgTab4','trafficPkgTool4')">流量包</a>
                                  </li>
                                  <li class="head-tools-r navbar-right flag-tools" id="trafficPkgTool4"></li>
                              </ul>
                              <div class="tab-content no-padding tabs-flat " style="border-radius:0;">
                                  <div id="trafficPkgTab4" class="flag-tabs tab-pane no-padding in active"></div>
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
        },
        components: {},
        beforeCreate: function () {},
        created: function () {
        },
        beforeMount: function () {
        },
        mounted: function () {
            $(function(){
              var bProEdition = true;
              var bAgent = true;

              var expireHandle =function(id){
                  var $form = $("#"+id);
                  if( $form.is(":visible")){
                      var value  = $form.find("[name=suiteState]").val(),
                          $expireP ,$effectP ,$invalidP;
                      $form.find(".form-group").each(function(index,item){
                          var $container = $(this);
                          if($container.find("[name=suiteExpire]").length===1){
                              $expireP = $container;
                          }else if($container.find("[name=effectDate]").length===1){
                              $effectP = $container;
                          }else if($container.find("[name=invalidDate]").length===1){
                              $invalidP = $container;
                          }
                      });
                      if(value==="2"){
                          $expireP && $expireP.show();
                          $effectP && $effectP.hide();
                          $invalidP && $invalidP.hide();
                      }else{
                          $expireP && $expireP.hide();
                          $effectP && $effectP.show();
                          $invalidP && $invalidP.show();
                      }
                  }
              };

              var pkgTypeHandle = function(id){
                  var $form = $("#"+id);
                  var type = $form.find("#select2-edit-trafficPkgTab4-pkgType-container").attr("title");
                  $("#edit-trafficPkgTab4-pkgType option").each(function (){
                      if (type == $(this).text()){
                          if ($(this).val() == 1){
                              var typeTitle = getJsonData("db.tbDataPackageM.expiryDayFormat");
                              var typeTitleHelp = getJsonData("db.tbDataPackageM.expiryDayFormat.help");
                          }else if($(this).val() == 2){
                              var typeTitle = getJsonData("db.tbDataPackageM.expiryMonth");
                              var typeTitleHelp = getJsonData("db.tbDataPackageM.expiryMonth.help");
                          }else{
                              var typeTitle = getJsonData("db.tbDataPackageM.expiryYear");
                              var typeTitleHelp = getJsonData("db.tbDataPackageM.expiryYear.help");
                          }
                          $("#trafficPkgTab4-comContent-expiryDay").parent().siblings("label")[0].outerHTML = '<label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">'+ typeTitle +':<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span></label>';
                          $("#edit-trafficPkgTab4-expiryDay").attr("placeholder",typeTitleHelp);
                      }   
                  })
              }

              var pkgUsedTypeHandle = function(id){
                  var $newForm = $("#"+id + '-new-form');
                  var $editForm = $("#"+id + '-edit-form');
                  var newValue  = $newForm.find("[name=ucpUsedType]").val(),
                      $ucpCostPrice ,$price ,$expiryDay,$pkgType,$effectDate,$invalidDate;

                  var editValue  = $editForm.find("[name=ucpUsedType]").val();

                  if( $newForm.length > 0){
                      $newForm.find(".form-group").each(function(index,item){
                          var $container = $(this);
                          if($container.find("[name=ucpCostPrice]").length===1){
                              $ucpCostPrice = $container;
                          }else if($container.find("[name=price]").length===1){
                              $price = $container;
                          }else if($container.find("[name=expiryDay]").length===1){
                              $expiryDay = $container;
                          }else if($container.find("[name=pkgType]").length===1){
                              $pkgType = $container;
                          }else if($container.find("[name=effectDate]").length===1){
                              $effectDate = $container;
                          }else if($container.find("[name=invalidDate]").length===1){
                              $invalidDate = $container;
                          }
                      });

                      if(newValue==="0"){
                          $effectDate && $effectDate.hide();
                          $invalidDate && $invalidDate.hide();
                          $ucpCostPrice && $ucpCostPrice.show();
                          $price && $price.show();
                          $expiryDay && $expiryDay.show();
                          $pkgType && $pkgType.show();
                      }else{
                          $effectDate && $effectDate.show();
                          $invalidDate && $invalidDate.show();
                          $ucpCostPrice && $ucpCostPrice.hide();
                          $price && $price.hide();
                          $expiryDay && $expiryDay.hide();
                          $pkgType && $pkgType.hide();
                      }
                  }

                  if( $editForm.length > 0){
                      $editForm.find(".form-group").each(function(index,item){
                          var $container = $(this);
                          if($container.find("[name=ucpCostPrice]").length===1){
                              $ucpCostPrice = $container;
                          }else if($container.find("[name=price]").length===1){
                              $price = $container;
                          }else if($container.find("[name=expiryDay]").length===1){
                              $expiryDay = $container;
                          }else if($container.find("[name=pkgType]").length===1){
                              $pkgType = $container;
                          }else if($container.find("[name=effectDate]").length===1){
                              $effectDate = $container;
                          }else if($container.find("[name=invalidDate]").length===1){
                              $invalidDate = $container;
                          }
                      });

                      if(editValue==="0"){
                          $effectDate && $effectDate.hide();
                          $invalidDate && $invalidDate.hide();
                          $ucpCostPrice && $ucpCostPrice.show();
                          $price && $price.show();
                          $expiryDay && $expiryDay.show();
                          $pkgType && $pkgType.show();
                      }else{
                          $effectDate && $effectDate.show();
                          $invalidDate && $invalidDate.show();
                          $ucpCostPrice && $ucpCostPrice.hide();
                          $price && $price.hide();
                          $expiryDay && $expiryDay.hide();
                          $pkgType && $pkgType.hide();
                      }
                  }
              }

              var formatZeroToInfinite = function(value){
                  if(value.toString()==="0"){
                      return getJsonData("label.common.unlimited")
                  }
                  return value;
              };

              var dataPkgOptions = {
                  version: 20171025,
                  tableKey:"keyDataPkgID",
                  i18nPrefix:"db.tbDataPackageM.",
                  trs:[
                      {name:"pkgName", vali:{stringLength:[0,200]}, width:140, advQry:['LIKE']},
                      {name:"pkgDesc",vali:{stringLength:512,required:false},width:200},
                      {name:"ucpUsedType",vali:{stringLength:512},addDef: "0",disabled:"E",width:120,comType:"select",comData:{selectE:function(){pkgUsedTypeHandle("trafficPkgTab4")}}, advQry:['LIKE']},

                      {name:"effectDate",vali: {date: true},show:false},
                      {name:"invalidDate",vali: {date: true},show:false},

                      {name:"ucpCostPrice", vali:{decimals:3},ratio:100},
                      {name:"price", vali:{decimals:3},ratio:100},
                      /*{name:"profit",hideEdit:"A",disabled:"A", vali:{number:true,lessThan:100000,decimals:3,digits:true},ratio:100},*/
                      {name:"pkgType",vali:{stringLength:1},comType:"select",comData:{selectE:function(){pkgTypeHandle("trafficPkgTab4-new-form")}}, advQry:['LIKE']},
                      {name:"idxUUWiFiAreaId", vali:{stringLength:64},comType:"ajaxSelect",width:140,
                          comDataS2:{url:window.PATH + "/vsw/simCardNew/wifiAreaS2Data", wifiAreaFM:true}},
                      {name:"pkgValue",vali:{digits:true},valFormat:formatZeroToInfinite},
                        
                      {name:"unlimitedFlow",comType:"checkbox",vali:{required:false},detailShow:false,checkboxText:"(勾选之后用户购买套餐时套餐用量将显示为不限流量)"},

                      {name:"status", advQry:['LIKE'],comType:"select",width:70,valFormat:function(value){
                          return matchData2FormatSpan("db.tbDataPackageM.status.dataPlus", value, 50);
                      }},
                      {name:"expiryDay",vali:{digits:true},valFormat:function(value,data){
                              if (parseInt(data.ucpUsedType) == 1){
                                return value + getJsonData("day");
                              }
                              switch(parseInt(data.pkgType)){
                                  case 1 : return value + getJsonData("day");
                                  case 2 : return value + getJsonData("month");
                                  case 3 : return value + getJsonData("year");
                                  default: return value;
                              }
                          }
                      },
                      {name:"keyDataPkgID", hideEdit:"A",vali:{integer:true,lessThan:10000000}, width:100, show:false},
                      {name:"pkgLimit",vali:{required:false,decimals:3},valFormat:formatZeroToInfinite, width:100,ratio:1048576},
                      {name:"pkgRateLimit",vali:{required:false,digits:true},valFormat:formatZeroToInfinite,width:140},
                      {name:"remarks",vali:{stringLength:128,required:false},width:150, show:false},
                      {name:"img",uploadKey:{uploadUrl:"/resource/file/uploadDataPackagePic",uploadType:"img",maxFileSize:"512K",allowedFileExtensions:"png jpg jpeg gif"},comType:"upload",vali:{required:false},width:150, show:false},
                      {name:"mdfTm",hideEdit:"A",width:140,sort:true},
                      {name:"mdfBy",hideEdit:"A",width:140},
                      {name:"crtTm",hideEdit:"A",width:140,sort:true},
                      {name:"crtBy",hideEdit:"A",width:140},]
              };


               /*if (parseInt(g_var.view.userProfile.type) == 0 || parseInt(g_var.view.userProfile.type) == 1) {
                    var pkg_permissions = ["0","0","0","1"];
                    dataPkgOptions.trs.splice(2,0,{name:"ucpCostPrice", vali:{number:true,lessThan:100000,decimals:3},ratio:100,show:false});
                }else{
                    var pkg_permissions = ["0","1","1","1"];
                }*/
              InitTableMoudle("trafficPkgTab4", "trafficPkgTool4", "/packageConsume/trafficPkg/", dataPkgOptions, ["0","0","0","0"],  "1");

              //有效期处理
              $("#trafficPkgTab4-tools-edit").click(function(){
                  var selectDom = $('#select2-edit-trafficPkgTab4-pkgType-container').attr("title");
                  if (selectDom == getJsonData("db.tbDataPackageM.pkgType.comData")[0][1]){
                      var typeTitle1 = getJsonData("db.tbDataPackageM.expiryDayFormat");
                      var typeTitleHelp1 = getJsonData("db.tbDataPackageM.expiryDayFormat.help");
                  }else if(selectDom == getJsonData("db.tbDataPackageM.pkgType.comData")[1][1]){
                      var typeTitle1 = getJsonData("db.tbDataPackageM.expiryMonth");
                      var typeTitleHelp1 = getJsonData("db.tbDataPackageM.expiryMonth.help");
                  }else{
                      var typeTitle1 = getJsonData("db.tbDataPackageM.expiryYear");
                      var typeTitleHelp1 = getJsonData("db.tbDataPackageM.expiryYear.help");
                  };
                  $("#trafficPkgTab4-comContent-expiryDay").parent().siblings("label")[0].outerHTML = '<label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">'+ typeTitle1 +':<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span></label>';
                  $("#edit-trafficPkgTab4-expiryDay").attr("placeholder",typeTitleHelp1);

                  $('#select2-edit-trafficPkgTab4-pkgType-container').bind('DOMNodeInserted', function() {  
                      if ($(this).attr("title") == getJsonData("db.tbDataPackageM.pkgType.comData")[0][1]){
                          var typeTitle = getJsonData("db.tbDataPackageM.expiryDayFormat");
                          var typeTitleHelp = getJsonData("db.tbDataPackageM.expiryDayFormat.help");
                      }else if($(this).attr("title") == getJsonData("db.tbDataPackageM.pkgType.comData")[1][1]){
                          var typeTitle = getJsonData("db.tbDataPackageM.expiryMonth");
                          var typeTitleHelp = getJsonData("db.tbDataPackageM.expiryMonth.help");
                      }else{
                          var typeTitle = getJsonData("db.tbDataPackageM.expiryYear");
                          var typeTitleHelp = getJsonData("db.tbDataPackageM.expiryYear.help");
                      };
                      $("#trafficPkgTab4-comContent-expiryDay").parent().siblings("label")[0].outerHTML = '<label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">'+ typeTitle +':<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span></label>';
                      $("#edit-trafficPkgTab4-expiryDay").attr("placeholder",typeTitleHelp);
                  });     
                  pkgUsedTypeHandle("trafficPkgTab4");
              })

              $("#trafficPkgTab4-tools-add").click(function(){
                  pkgUsedTypeHandle("trafficPkgTab4");
                  /*$(".ng-scope").append('<div class="form-group has-feedback"><div data-input=""><label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">图片<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span></label><div class="col-sm-8" style=""><div class="ng-scope" id=""><el-upload :action="actionUrl" :auto-upload="true" :on-exceed="uploadExceed" :on-error="uploadError" :on-success="uploadSuccess" :on-preview="handlePictureCardPreview" :file-list="fileList2" :limit="1" ref="upload" :data="uploadFrom" :http-request="uploadImg" :before-upload="beforeUpload" list-type="picture-card"><i class="el-icon-plus"></i><div slot="tip" class="el-upload__tip"><i class="el-icon-warning" style="padding-right:10px;color:#FA5555"></i>只能上传jpg/png文件，且不超过512kb</div><div slot="tip" class="el-upload__tip"><i class="el-icon-warning" style="padding-right:10px;color:#FA5555"></i>只能上传一张图片</div><div slot="tip" class="el-upload__tip"><i class="el-icon-warning" style="padding-right:10px;color:#FA5555"></i>建议尺寸1280px X 512px</div></el-upload><el-dialog :visible.sync="dialogVisible" size="tiny"><img width="100%" :src="dialogImageUrl" alt=""></el-dialog></div></div></div></div>');*/
              })

          })
        },
        beforeUpdate: function () {
        },
        updated: function () {
        },
        activated: function () {
        },
        deactivated: function () {
        },
        destroyed: function () {
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    
</style>
