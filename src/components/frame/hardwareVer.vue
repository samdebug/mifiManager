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
                    <li class="flag-tabs-btn active" id="auditBtn1">
                      <a data-toggle="tab" href="javaScript:void(0)" onclick="switchTabAndTools('versionTab1','versionTool1')">版本升级</a>
                    </li>

                    <li class="head-tools-r navbar-right flag-tools" id="versionTool1">
                      <div class="btn f-p-tips f-p-tips-button primary" style="font-size: 14px;padding: 4px 12px;margin-left:3.56px;" @click="ImportNewOpen"><i class="la la-upload"></i><div class="f-t-tips">批量新增</div></div>
                    </li>

                  </ul>
                  <!-- tab页面组 -->
                  <div class="tab-content no-padding tabs-flat " style="border-radius:0;">
                    <div id="versionTab1" class="flag-tabs tab-pane in active"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade modal-primary" id="ImportNewModal" aria-hidden="true">
      <div class="modal-dialog" style="">
        <div class="modal-content">
          <form id="ImportNewModal-form" class="form-horizontal bv-form" onchange="" novalidate="novalidate">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title text-primary"><i class="fa fa-edit"></i>批量新增</h4>
            </div>
            <div class="ng-scope" style="padding-top:15px;" id="ng-scope-uploader">
              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">升级版本号<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="padding-left:0;padding-right:0;">
                    <div class="ng-scope" id="">
                      <select id="ImportNewModalVersion" name="ImportNewModalVersion" style="width: 100%;" tabindex="-1"></select>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">状态<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="padding-left:0;padding-right:0;">
                    <div class="ng-scope" id="">
                      <select id="ImportNewModalStatus" name="ImportNewModalStatus" style="width: 100%;" tabindex="-1">
                        <option value="1" selected = "selected">有效</option>
                        <option value="0">无效</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">升级描述<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"></span>
                  </label>
                  <div class="col-sm-8" style="padding-left:0;padding-right:0;">
                    <div class="ng-scope" id="">
                      <input type="text" id="ImportNewModalDescription" name="ImportNewModalDescription" placeholder="请输入升级描述" class="form-control input-sm layer-date">
                      <i class="form-control-feedback" style="display: none;"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">模板<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"></span>
                  </label>
                  <div class="col-sm-8" style="padding-left:0;padding-right:0;">
                    <div class="ng-scope" id="">
                      <a href="javascript:;" class="btn btn-primary" @click="downloadModel">下载<i class="el-icon-download el-icon--right"></i></a>
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
                        :file-list="fileList"
                        :on-exceed="uploadExceed"
                        :on-error="uploadError"
                        :on-success="uploadSuccess"
                        :http-request="uploadSubmit"
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
        uploaderURL:window.PATH + "/mifi/verUpRecord/import",
        fileList:[]
      }
    },
    methods: {
      downloadModel(){
        $(function(){
          exportRowModel("mifi_import",window.SUBPATH + "/download/Mifi设备版本升级导入模板.xls");
        })
      },
      beforeUpload(file){
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
        switchTabAndTools('versionTab1','versionTool1');
      },
      uploadExceed(){
        this.$message.error('只能上传一个文件');
      },
      submitUpload() {
        if (!$("#ImportNewModalVersion").val()){
            this.$message.error('请选择版本号');
            return false
        }
        
        if (!this.$refs.upload.uploadFiles.length){
            this.$message.error('请选择文件');
            return false
        }

        this.$refs.upload.submit();
      },
      ImportNewOpen(){
        var url = window.PATH + "/mifi/verUpRecord/keyDevIDS2Data",
            selector = '#ImportNewModal-form [name="ImportNewModalVersion"]',
            item = {editInit:true,url:url},
            $modal = $("#ImportNewModal"),
            placeholder = "请选择版本号";
        select2DataImpl({
            params: item,
            selector: selector,
            placeholder: placeholder,
            tableKeyVal: 3120174000000797,
            multiple: false
        });
        this.$refs.upload.clearFiles();
        $("#ImportNewModalVersion").empty();
        $("#ImportNewModalStatus").val("1");
        $("#ImportNewModalDescription").val("");
        
        $modal.modal("show");
      },
      uploadSubmit(opt){
        var targetVersionNo = $("#ImportNewModalVersion").val(),
            remarks = $("#ImportNewModalDescription").val(),
            recordStatus = $("#ImportNewModalStatus").val();

        const extension = opt.file.name.split('.')[(opt.file.name.split('.').length) - 1] === 'xls';
        const extension2 = opt.file.name.split('.')[(opt.file.name.split('.').length) - 1] === 'xlsx';
      
        //const isLt2M = file.size / 1024 / 1024 < 10
        if (!extension && !extension2) {
          this.$message.error('上传模板只能是xls、xlsx格式');
          return false
        }

        let uploadParam = setSignList({},"");
        let myHeaders ={
          timestamp:uploadParam.timestamp,
          curUserId:uploadParam.userId,
          referType:uploadParam.referType,
          sign:uploadParam.sign
        }
        let form_data = new FormData();

        form_data.append('file', opt.file);
        form_data.append('versionId', targetVersionNo);
        form_data.append('remarks', remarks);
        form_data.append('recordStatus', recordStatus);
  
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
                $("#ImportNewModal").modal("hide");
                that.$refs.upload.clearFiles();
                switchTabAndTools('versionTab1','versionTool1');
                return layer.msg.success("上传成功");
              }else{
                return layer.msg.error(data.message);
              }
            },error:function(){
              return layer.msg.error("上传失败");
            }
        });
      }
    },
    mounted: function () {
       $(function(){
        /****** 操作记录 accessRcd begin ********/
        var recordStatusFormat = function(value){
          return  matchData2FormatSpan("db.tbHardwareVerRcd.recordStatus.dataPlus", value, 50, "info");
        };

        var executStateFormat = function(value){
          return  matchData2FormatSpan("db.tbHardwareVerRcd.executState.dataPlus", value, 50, "info");
        };

        var versionItems2 = {
          version:"20170124V0", tableKey:"keyId", i18nPrefix:"db.tbHardwareVerRcd.",batchEdit:true,
          initParams:{ tableId:"versionTab1", toolsId:"versionTool1", urlPrefix: "/mifi/verUpRecord/", permissions: ['0', '0', '0', '1'], page:"1"},
          trs:[
            {name:"keyId",show:false,hideEdit:"A"},
            {name: "idxViFiId",vali: {stringLength: 64},width:130,comType: "ajaxSelect", comDataS2:{url:window.PATH + "/device/keyDevIDS2Data"},advQry:['LIKE']},

            {name: "versionId",detailShow:false,vali: {stringLength: 64},width:130,comType: "ajaxSelect", comDataS2:{url:window.PATH + "/mifi/verUpRecord/keyDevIDS2Data"},advQry:['LIKE'],batchEdit:true,show:false},

            {name: "targetVersionNo",hideEdit:"A"},
            {name:"recordStatus", comType:"select", valFormat:recordStatusFormat,batchEdit:true},
            {name:"executState", comType:"select",advQry: ["LIKE"],hideEdit:"A"},
            {name:"remarks", width:60,batchEdit:true,vali:{required:false}},
            {name: "mdfTm", hideEdit: "A", qryType:"date",sort:true,hideEdit:"A",show:false},
            {name:"mdfBy",hideEdit:"A"},
            {name:"crtTm",show:false,sort:true,hideEdit:"A"},
            {name:"crtBy",show:false,hideEdit:"A"}
          ]};
        InitTableModuleNew(versionItems2);
      })
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
