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
                                  <li class="flag-tabs-btn active" id="trafficPkgBtn3">
                                      <a data-toggle="tab" href="javaScript:void(0)" onclick="switchTabAndTools('trafficPkgTab3','trafficPkgTool3')">设备套餐</a>
                                  </li>
                                  <li class="head-tools-r navbar-right flag-tools" id="trafficPkgTool3"></li>

                                  <li class="head-tools-r navbar-right flag-tools" >
                                    <div class=" btn f-p-tips danger" @click="clickCreates" style="font-size: 14px;padding: 9px 12px;margin-left:3.56px;float:right" id="agentManagerTab1-tools-agentRecharge"><i style="font-size:17px" class="la la-upload"></i><div class="f-t-tips">批量新增</div></div>
                                  </li>
                                  
                              </ul> 
                              <div class="tab-content no-padding tabs-flat" style="border-radius:0;">
                                  <div id="trafficPkgTab3" class="flag-tabs tab-pane no-padding active" style=""></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
    <div class="modal fade modal-primary" id="mutilCreate" aria-hidden="true">
      <div class="modal-dialog" style="">
        <div class="modal-content">
          <form id="mutilCreate-form" class="form-horizontal bv-form" onchange="" novalidate="novalidate">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title text-primary"><i class="fa fa-edit"></i>批量新增</h4>
            </div>
            <div class="ng-scope" style="padding-top:15px;" id="ng-scope-uploader">

              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">选择套餐<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="padding-left:0;padding-right:0;">
                    <div class="ng-scope" id="">
                      <select id="pkgNameSelect" name="pkgName" style="width: 100%;" tabindex="-1">
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">模板导出<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="padding-left:0;padding-right:0;">
                    <div class="ng-scope" id="">
                      <el-button type="primary" @click="exportModel">下载<i class="el-icon-download el-icon--right"></i></el-button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">上传文件<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="padding-left:0;padding-right:0;">
                    <div class="ng-scope" id="">
                      <el-upload
                        class="upload-demo"
                        drag
                        :action="uploaderURL"
                        ref="upload"
                        :auto-upload="false"
                        accept="xls"
                        :on-exceed="uploadExceed"
                        :http-request="uploadImg"
                        :on-error="uploadError"
                        :on-success="uploadSuccess"
                        :data="upLoadData"
                        :limit="1"
                        :before-upload="beforeUpload"
                        multiple>
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        <div class="el-upload__tip" slot="tip">只能上传xls或xlsx文件，且不超过500kb</div>
                      </el-upload>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer " style="background-color:#FFFFFF;">
              <a href="javaScript:;" class="el-button el-button--primary" style="" @click="submitUpload">保存</a>
              <button class="el-button el-button--default" data-dismiss="modal" aria-label="Close">取消</button>
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
          return {
            uploaderURL:window.PATH + "/packageConsume/userSuite/userSuiteImport",
            upLoadData:{
                idxExtPkgId:$("#pkgNameSelect").val()
            }
          }
        },
        mounted: function () {
          var that = this;
          $(function(){
              var bProEdition = true;
              var bAgent = true;
              var idxExtPkgIdFormat = function(value){
                  return value || '<span style="color:red">-</span>';
              };

              var limitFormat = function(value){
                  if( value===0 ){
                      return "不限";
                  }
                  return value;
              };

              var validDateFormat =function(value, rowData){
                  /*if(rowData.suiteState===2){
                      return "-";
                  }*/
                  return value;
              };

              var statusFormat =function(value, rowData){
                if(value ==1 && (rowData.invalidDate<new Date().format())){
                  value = 3
                }
                return matchData2FormatSpan("db.tbUserSuite.suiteState.dataPlus", value, 60);
              };

              var expireFormat = function(value, rowData){
                  /*if(rowData.suiteState!==2){
                      return "-"
                  }*/
                  return value;
              };

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


                      /*for(var i=0;i<=parseInt(permissionNew);i++){
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
                      })*/

                      /*console.log(7878);*/
                      /*$("#edit-trafficPkgTab3-suiteState option[value='2']").remove();*/

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
                  var type = $form.find(".select2-selection__rendered").attr("title");
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
                  /*if (type == getJsonData("db.tbDataPackageM.pkgType.comData[0][1]"))*/
              }

              /************************************   设备套餐    *******************************/
              //设备订单详情
              var devPkg_expandDetail = function(tableId, number){
                  var tableParams = $("#"+tableId).data("tableParams"), //getLocalStorageModel(tableId, "tableParams"),
                      data = $("#"+tableId).data("queryData"), //getLocalStorageModel(tableId, "queryData"),
                      dataRow = data[number],
                      orderId = dataRow["idxOrderID"];
                  var result={};
                  if (orderId!="" && orderId!=null){

                  }
                  $.ajax({
                      url:window.PATH + "/packageConsume/trafficPkg/devOrderMsg",
                      async: false,
                      dataType: "json",
                      data: {orderId:orderId},
                      type:"get",
                      success: function(res){
                          var outlineInfo = res.data;
                          if( !outlineInfo ){
                              return;
                          }
                          var html = [
                              '<div class="row" style="margin-left:10px;border-left:1px solid #ddd">',
                              '<table class="table table-bordered table-striped  detailTable" style="border-right:1px solid #ddd !important;">',
                              '<tbody>',
                              '<tr class="ng-scope">',
                              '<td class="text-right" width="32%">', getJsonData("db.tbUserSuite.idxOrderID"), '</td>',
                              '<td class="right-border-none">',
                              '<div style="word-wrap:break-word;word-break: break-all;" class="f-p-tips">',outlineInfo.idxOrderID?outlineInfo.idxOrderID:"-",'</div>',
                              '</td></tr>',
                              '<tr class="ng-scope">',
                              '<td class="text-right" width="32%">', getJsonData("db.tbUserTopupRcd.topupType"), '</td>',
                              '<td class="right-border-none">',
                              '<div style="word-wrap:break-word;word-break: break-all;" class="f-p-tips">',outlineInfo.topupType?matchComdata2Alias("db.tbUserTopupRcd.topupType.comData",outlineInfo.topupType):"-",'</div>',
                              '</td></tr>',
                              '<tr class="ng-scope">',
                              '<td class="text-right" width="32%">', getJsonData("db.tbUserTopupRcd.amount"), '</td>',
                              '<td class="right-border-none">',
                              '<div style="word-wrap:break-word;word-break: break-all;" class="f-p-tips">',outlineInfo.amount?(outlineInfo.amount/1000).toFixed(2):"-",'</div>',
                              '</td></tr>',
                              '<tr class="ng-scope">',
                              '<td class="text-right" width="32%">', getJsonData("db.tbUserTopupRcd.status"), '</td>',
                              '<td class="right-border-none">',
                              '<div style="word-wrap:break-word;word-break: break-all;" class="f-p-tips">',typeof (outlineInfo.status)!=="undefined" && outlineInfo.status!=null?matchData2FormatSpan("db.tbUserTopupRcd.status.dataPlus",  outlineInfo.status, 60):"-",'</div>',
                              '</td></tr>',
                              '<tr class="ng-scope">',
                              '<td class="text-right" width="32%">', getJsonData("db.tbUserTopupRcd.goodsID"), '</td>',
                              '<td class="right-border-none">',
                              '<div style="word-wrap:break-word;word-break: break-all;" class="f-p-tips">',outlineInfo.goodsID?outlineInfo.goodsID:"-",'</div>',
                              '</td></tr>',
                              '<tr class="ng-scope">',
                              '<td class="text-right" width="32%">', getJsonData("db.tbUserTopupRcd.pkgType"), '</td>',
                              '<td class="right-border-none">',
                              '<div style="word-wrap:break-word;word-break: break-all;" class="f-p-tips">',outlineInfo.pkgType?matchComdata2Alias("db.tbUserTopupRcd.pkgType.comData",outlineInfo.pkgType):"-",'</div>',
                              '</td></tr>',
                              '<tr class="ng-scope">',
                              '<td class="text-right" width="32%">', getJsonData("db.tbUserTopupRcd.pkgInfo"), '</td>',
                              '<td class="right-border-none">',
                              '<div style="word-wrap:break-word;word-break: break-all;" class="f-p-tips">',outlineInfo.pkgInfo?outlineInfo.pkgInfo:"-",'</div>',
                              '</td></tr>',
                              '</tbody></table>',
                              '</div>'];
                          result.detailHtml = html.join('');
                          result.col = 6;
                      },
                      error: function(data){
                          layer.msg.error("smt is wrong.");
                          return undefined;
                      }
                  });
                  return result;
              };
              var tableItem_devPkg = {
                  version: 2017101252, tableKey:"keyID", i18nPrefix:"db.tbUserSuite.",batchEdit:true,expandDetail: "",
                  initParams:{tableId:"trafficPkgTab3", toolsId:"trafficPkgTool3", urlPrefix: "/packageConsume/userSuite/", permissions: ["0","0","0","0"]},
                  trs:[
                      {name: "keyID", disabled: "E", hideEdit:"N", vali: {stringLength: 11},width:100},
                      // {name: "idxPhoneNumber", hideEdit:"E", vali: {stringLength: 64,required:true},advQry:['LIKE'],width:180},
                      {name: "idxViFiID", disabled:"E",vali: {stringLength: 64},advQry:['LIKE'],width:180, comType:"ajaxSelect",comDataS2:{url:window.PATH + "/device/keyDevIDS2Data"}},
                      
                      {name: "ucpFatherKeyID", hideEdit: "N", disabled:"A",width:140,detailShow:false,show:false},
                      {name:"idxExtPkgId",detailShow:false, disabled:"E",comType:"ajaxSelect",comDataS2:{url:window.PATH + "/packageConsume/trafficPkg/keyDataPack2Data"},width:120,show:false},
                      {name:"pkgName", hideEdit:"A", vali:{required:false,stringLength:128}, valFormat:idxExtPkgIdFormat, width:100},
                      
                      {name:"idxUUWiFiAreaId", hideEdit:"A", comType:"ajaxSelect",comDataS2:{url:window.PATH + "/vsw/simCardNew/wifiAreaS2Data", wifiAreaFM: true, editInit:true},width:150,show:false},

                      {name: "remainValue", hideEdit:"A", vali: {lessThan:2000,decimals:3}, ratio:1048576, width:100, priceFM:true,sort:true},
      //            {name: "suiteType", vali: {stringLength: 1},comType:"select",advQry:['LIKE'],width:140},
                      {name:"idxSimGrpIds", hideEdit:"A", width:120, show:false,detailShow:false},
                      {name:"accountId", hideEdit:"A", width:120},
                      {name:"suiteExpire", hideEdit: "A",vali:{required:false}, width:80, valFormat:expireFormat,show:false,detailShow:false},
                      {name: "effectDate",sort:true, hideEdit:"E", vali:{date:true}, width:140, valFormat:validDateFormat, hideEdit: "A"},
                      {name: "invalidDate",sort:true, hideEdit:"E", vali:{date:true},width:140, valFormat:validDateFormat, hideEdit: "A"},
                      {name: "ucpAccountType", vali: {stringLength: 1}, hideEdit:"A",addDef: "1", advQry: ["LIKE"],width:130,comType: "select",valFormat:function(value){
                          return matchData2FormatSpan("db.tbUserSuite.ucpAccountType.dataPlus", value, 100);
                      }},
                      {name:"suiteState",advQry:['LIKE'],comType:"select", comData:{selectE:function(){expireHandle("trafficPkgTab3-edit-form");}},hideEdit:"N",width:80,valFormat:function(value, rowData){
                            /*if(value===1&& (rowData.invalidDate<new Date().format())){
                                value = 3
                            }*/
                            return matchData2FormatSpan("db.tbUserSuite.suiteState.dataPlus", value, 60)
                        }
                      },
                      {name:"limitValue", batchEdit:true, hideEdit: "N",vali:{required:false, decimals:2, lessThan:1000}, ratio:1048576, width:100, valFormat:limitFormat,show:false},
                      {name:"rateLimit", batchEdit:true, hideEdit: "N",vali:{required:false, integer:true, lessThan:10000000}, width:100, valFormat:limitFormat,show:false},
      //            {name:"pkgValue",vali:{required:false, integer:true, lessThan:10000000}, width:100},
      //            {name:"pkgPrice",vali:{required:false, integer:true, lessThan:10000000}, width:100},
                      
                      {name: "idxOrderID", vali: {stringLength: 128,required:false},width:170,detailShow:false,show:false,hideEdit:"A"},
                      {name: "remarks", vali: {stringLength: 128,required:false},width:170,show:false,batchEdit:true},
                      {name: "mdfTm", hideEdit: "A", width:140,sort:true},
                      {name: "mdfBy", hideEdit: "A", width:140},
                      {name: "crtTm", hideEdit: "A", width:140,sort:true},
                      {name: "crtBy", hideEdit: "A", width:140}
                  ]};
              InitTableModuleNew(tableItem_devPkg);
              //CheckAndInitStorage(tableItem_devPkg);
          })
        },
        methods:{
          DownLoad(){
              window.location.href="/vsw/viFiDeviceNew/modelDown";
          },
          exportModel(){
            exportRowModel("设备套餐导入模板.xls",window.SUBPATH + "/download/MiFi设备套餐导入模板.xls")
            //window.location.href=window.SUBPATH + ":100" +"/download/usersuite/用户套餐导入模板.xls";
          },
          uploadImg(opt){    
            console.log(opt.file.name.split(".")[1]);        
            /*if (opt.file.name.split(".")[1] != "xls" || opt.file.name.split(".")[1] != "xlsx"){
              this.$message.error('格式错误');
              this.$refs.upload.clearFiles();
              return false;
            }*/

            let uploadParam = setSignList({},"");
            console.log(uploadParam);
            let myHeaders ={
              timestamp:uploadParam.timestamp,
              curUserId:uploadParam.userId,
              referType:uploadParam.referType,
              sign:uploadParam.sign
            }
            let form_data = new FormData();
            form_data.append('file', opt.file);
            form_data.append('idxExtPkgId', $("#pkgNameSelect").val());
            var that = this;
            $.ajax({
                url: that.uploaderURL,
                type: "POST",
                beforeSend: function(xhr) {
                    xhr.setRequestHeader("timestamp", myHeaders.timestamp);
                    xhr.setRequestHeader("curUserId", myHeaders.curUserId);
                    xhr.setRequestHeader("referType", myHeaders.referType);
                    xhr.setRequestHeader("sign", myHeaders.sign);
                },
                data: form_data,
                processData: false,  
                contentType: false,  
                success:function(data){
                  if (data && data.errorCode == 0){
                    $("#mutilCreate").modal("hide");
                    return layer.msg.success(data.message);
                  }else{  
                    return layer.msg.error(data.message);
                  }
                },error:function(){
                  return layer.msg.error("上传失败");
                }
            });
          },
          submitUpload() {
            //this.beforeUpload();
            this.$refs.upload.submit();
          },
          beforeUpload(file){
            if ($("#pkgNameSelect").val() == ""){
                this.$message.error('必填字段');
                return false
            }

            const extension = file.name.split('.')[file.name.split('.').length - 1] === 'xls'
            const extension2 = file.name.split('.')[file.name.split('.').length - 1] === 'xlsx'
            //const isLt2M = file.size / 1024 / 1024 < 10
            if (!extension && !extension2) {
              this.$message.error('上传模板只能是xls、xlsx格式');
              return false
            }
            /*if (!isLt2M) {
              console.log('上传模板大小不能超过 10MB!')
            }*/
            console.log(file);
          },
          uploadError(){
            this.$message.error('上传失败');
          },
          uploadSuccess(){
            this.$message.success('上传成功');
            $("#ImportNewModal").hide();
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();
            switchTabAndTools('viFiDeviceNewTab3','viFiDeviceNewTool3');
          },
          uploadExceed(){
            this.$message.error('只能上传一个文件');
          },
          clickCreates(){
            /*Utils.ajax({
                url: window.PATH + "/packageConsume/trafficPkg/keyDataPack2Data.ajax",
                data: {},
                success: function(resp){
                    if( resp && resp.state===0){
                        $("#pkgNameSelect").empty();
                        console.log(resp);
                        for (var i=0;i<resp.data.items.length;i++){
                            $("#pkgNameSelect").append("<option value='" + resp.data.items[i].id + "'>" + resp.data.items[i].text + "</option>");
                        }
                    }
                }
            })*/
            $("#pkgNameSelect").empty();
            this.$refs.upload.clearFiles();
            var item = {editInit:true,url:window.PATH + "/packageConsume/trafficPkg/keyDataPack2Data"};
            var selector = '#mutilCreate-form [name="pkgName"]';
            var placeholder = "请选择套餐";
            select2DataImpl({
                params: item,
                selector: selector,
                placeholder: placeholder,
                tableKeyVal: 3120174000000797,
                multiple: false
            });
            $("#mutilCreate").modal("show");
          }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    
</style>
