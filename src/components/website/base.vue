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
                    <li class="flag-tabs-btn active" id="baseBtn">
                      <a data-toggle="tab" href="javaScript:void(0)" onclick="switchTabAndTools('baseTab','baseTool')">基础配置</a>
                    </li>
                    <li class="head-tools-r navbar-right flag-tools"  id="baseTool"></li>
                    <li class="head-tools-r navbar-right" style="float:left">
                        <div class=" btn success f-p-tips f-p-tips-button" @click="openAddModal" style="font-size: 14px;padding: 4px 12px;margin-left:3.56px;" id=""><i class="la la-plus"></i><div class="f-t-tips">新增</div></div>
                        <div class=" btn primary f-p-tips f-p-tips-button" @click="openEditModal" style="font-size: 14px;padding: 4px 12px;margin-left:3.56px;" id=""><i class="la editIcon"></i><div class="f-t-tips">编辑</div></div>
                    </li>
                  </ul>
                  <!-- tab页面组 -->
                  <div class="tab-content no-padding tabs-flat" style="border-radius:0;">
                    <div id="baseTab" class="flag-tabs tab-pane in active"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <el-dialog
      :visible.sync="bannerSettingShow"
      :title="actionName"
      width="50%">
          <form id="banner-new-form" class="form-horizontal bv-form" onchange="" novalidate="novalidate">
            <!-- <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title text-primary"><i class="fa fa-edit"></i>{{actionName}}</h4>
            </div> -->
            <div class="ng-scope">
              <div class="form-group has-feedback" style="">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">配置内容<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="">
                    <div class="ng-scope" id="">
                       <el-select v-model="contentType" placeholder="请选择配置内容" style="width:100%" :change="clickSelect(contentType)">
                        <el-option
                          v-for="item in typeOptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                          >
                        </el-option>
                      </el-select>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group has-feedback" style="">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">状态<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="">
                    <div class="ng-scope" id="">
                       <el-select v-model="itemStatus" placeholder="请选择状态" style="width:100%" >
                        <el-option
                          v-for="item in statusOptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                          >
                        </el-option>
                      </el-select>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">广告标题<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="">
                    <div class="ng-scope" id="">
                      <input type="text" id="rechargeModalRemark" name="rechargeModalRemark" placeholder="请输入广告标题" class="form-control input-sm layer-date">
                      <i class="form-control-feedback" style="display: none;"></i>
                    </div>
                  </div>
                </div>
              </div> -->

              <!-- <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">选择终端<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="">
                    <div class="ng-scope" id="" style="padding-left:10px;padding-top:10px">
                        <el-radio-group v-model="platformRadio">
                          <el-radio :label="1">web</el-radio>
                          <el-radio :label="2">微信公众号</el-radio>
                        </el-radio-group>
                    </div>
                  </div>
                </div>
              </div> -->
              
              <!-- <div class="form-group has-feedback" v-if="signup">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">协议内容<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="">
                    <div class="ng-scope" id="">
                      <el-input
                        type="textarea"
                        :autosize="{ minRows: 2, maxRows: 4}"
                        placeholder="请输入内容"
                        v-model="signupAgreement">
                      </el-input>
                    </div>
                  </div>
                </div>
              </div> -->

              <div class="form-group has-feedback" v-if="contact">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">公司名称<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="">
                    <div class="ng-scope" id="">
                      <input type="text" id="companyName" v-model="companyName" name="companyName" placeholder="请输入公司名称" class="form-control input-sm layer-date">
                      <i class="form-control-feedback" style="display: none;"></i>
                    </div>
                  </div>
                </div>
              </div>

              
              <div class="form-group has-feedback" v-if="contact">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">联系电话<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"></span>
                  </label>
                  <div class="col-sm-8" style="">
                    <div class="ng-scope" id="">
                      <el-input
                        name="contactPhone"
                        id="contactPhone"
                        type="text"
                        :autosize="{ minRows: 2, maxRows: 4}"
                        placeholder="请输入内容"
                        v-model="contactPhone">
                      </el-input>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group has-feedback" v-if="contact">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">邮箱<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"></span>
                  </label>
                  <div class="col-sm-8" style="">
                    <div class="ng-scope" id="">
                      <el-input
                        name="contactEmail"
                        id="contactEmail"
                        type="text"
                        :autosize="{ minRows: 2, maxRows: 4}"
                        placeholder="请输入内容"
                        v-model="contactEmail">
                      </el-input>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group has-feedback" v-if="contact">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">地址<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"></span>
                  </label>
                  <div class="col-sm-8" style="">
                    <div class="ng-scope" id="">
                      <el-input
                        type="textarea"
                        id="contactAddress"
                        name="contactAddress"
                        :autosize="{ minRows: 2, maxRows: 4}"
                        placeholder="请输入内容"
                        v-model="contactAddress">
                      </el-input>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group has-feedback" v-if="contact">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">ICP备案号<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"></span>
                  </label>
                  <div class="col-sm-8" style="">
                    <div class="ng-scope" id="">
                      <el-input
                        name="icpNo"
                        id="icpNo"
                        type="text"
                        :autosize="{ minRows: 2, maxRows: 4}"
                        placeholder="请输入ICP备案号"
                        v-model="icpNo">
                      </el-input>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group has-feedback" v-if="contact">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">公司Logo<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="">
                    <div class="ng-scope" id="">
                      <el-upload
                        class="upload-demo"
                        :action="actionUrl"
                        ref="upload1"
                        :auto-upload="true"
                        :on-exceed="uploadExceed"
                        :on-error="uploadError"
                        :on-success="uploadSuccess"
                        :on-preview="handlePictureCardPreview"
                        :data="pcImgData"
                        :http-request="uploadImg"
                        :file-list="fileListPc"
                        :limit="1"
                        :before-upload="beforeUpload"
                        list-type="picture-card">
                        <i class="el-icon-plus"></i>
                        <!-- <el-button size="small" type="primary">点击上传</el-button> -->
                        <div slot="tip" class="el-upload__tip"><i class="el-icon-warning" style="padding-right:10px;color:#FA5555"></i>只能上传jpg/png文件，且不超过512kb</div>
                        <div slot="tip" class="el-upload__tip"><i class="el-icon-warning" style="padding-right:10px;color:#FA5555"></i>只能上传一张图片</div>
                        <div slot="tip" class="el-upload__tip"><i class="el-icon-warning" style="padding-right:10px;color:#FA5555"></i>建议尺寸210px X 50px</div>
                      </el-upload>
                       <el-dialog :visible.sync="dialogVisible" size="tiny">
                        <img width="100%" :src="dialogImageUrl" alt="">
                      </el-dialog>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group has-feedback" v-if="contact">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">公众号二维码<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="">
                    <div class="ng-scope" id="">
                      <el-upload
                        :action="actionUrl"
                        ref="upload2"
                        :auto-upload="true"
                        accept="xls"
                        :on-exceed="uploadExceed"
                        :on-error="uploadError"
                        :on-success="uploadSuccess"
                        :on-preview="handlePictureCardPreview"
                        :http-request="uploadImg"
                        :data="wechatImgData"
                        :file-list="fileListWechat"
                        :limit="1"
                        :before-upload="beforeUpload"
                        list-type="picture-card">
                        <i class="el-icon-plus"></i>
                        <!-- <el-button size="small" type="primary">点击上传</el-button> -->
                        <div slot="tip" class="el-upload__tip"><i class="el-icon-warning" style="padding-right:10px;color:#FA5555"></i>只能上传jpg/png文件，且不超过512kb</div>
                        <div slot="tip" class="el-upload__tip"><i class="el-icon-warning" style="padding-right:10px;color:#FA5555"></i>只能上传一张图片</div>
                        <div slot="tip" class="el-upload__tip"><i class="el-icon-warning" style="padding-right:10px;color:#FA5555"></i>建议尺寸177px X 177px</div>
                      </el-upload>
                    </div>
                  </div>
                </div>
              </div>


              <div class="form-group has-feedback" v-if="about">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">正文标题<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="">
                    <div class="ng-scope" id="">
                      <el-input
                        id="aboutTitle1"
                        name="aboutTitle1"
                        type="textarea"
                        :autosize="{ minRows: 2, maxRows: 4}"
                        placeholder="请输入内容"
                        v-model="aboutTitle1">
                      </el-input>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group has-feedback" v-if="about">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">二级标题<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="">
                    <div class="ng-scope" id="">
                      <el-input
                        name="aboutTitle2"
                        id="aboutTitle2"
                        type="textarea"
                        :autosize="{ minRows: 2, maxRows: 4}"
                        placeholder="请输入内容"
                        v-model="aboutTitle2">
                      </el-input>
                    </div>
                  </div>
                </div>
              </div>


              <div class="form-group has-feedback" v-if="about">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">段落一<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="">
                    <div class="ng-scope" id="">
                      <el-input
                        id="aboutText1"
                        name="aboutText1"
                        type="textarea"
                        :autosize="{ minRows: 2, maxRows: 4}"
                        placeholder="请输入内容"
                        v-model="aboutText1">
                      </el-input>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group has-feedback" v-if="about">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">段落二<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="">
                    <div class="ng-scope" id="">
                      <el-input
                        id="aboutText2"
                        name="aboutText2"
                        type="textarea"
                        :autosize="{ minRows: 2, maxRows: 4}"
                        placeholder="请输入内容"
                        v-model="aboutText2">
                      </el-input>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group has-feedback" v-if="about">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">段落图片<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="">
                    <div class="ng-scope" id="">
                      <el-upload
                        class="upload-demo"
                        :action="actionUrl"
                        ref="upload3"
                        :auto-upload="true"
                        :on-exceed="uploadExceed"
                        :on-error="uploadError"
                        :on-success="uploadSuccess"
                        :on-preview="handlePictureCardPreview"
                        :data="aboutImgData"
                        :http-request="uploadImg"
                        :file-list="fileListAbout"
                        :limit="1"
                        :before-upload="beforeUpload"
                        list-type="picture-card">
                        <i class="el-icon-plus"></i>
                        <!--   -->
                        <div slot="tip" class="el-upload__tip"><i class="el-icon-warning" style="padding-right:10px;color:#FA5555"></i>只能上传jpg/png文件，且不超过512kb</div>
                        <div slot="tip" class="el-upload__tip"><i class="el-icon-warning" style="padding-right:10px;color:#FA5555"></i>只能上传一张图片</div>
                        <div slot="tip" class="el-upload__tip"><i class="el-icon-warning" style="padding-right:10px;color:#FA5555"></i>建议尺寸670px X 508px</div>
                      </el-upload>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">备注<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"></span>
                  </label>
                  <div class="col-sm-8" style="">
                    <div class="ng-scope" id="">
                      <input type="text" id="rechargeModalRemark" v-model="remark" name="rechargeModalRemark" placeholder="请输入备注" class="form-control input-sm layer-date">
                      <i class="form-control-feedback" style="display: none;"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           <!--  <div class="modal-footer " style="background-color:#FFFFFF;">
              <a class="el-button el-button--primary pass" @click="saveAction">保存</a>
              <a class="el-button el-button--default" data-dismiss="modal" aria-label="Close">取消</a>
            </div> -->
          </form>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="saveAction">保 存</el-button>
            <el-button @click="bannerSettingShow = false">取 消</el-button>
          </span>
    </el-dialog>

  </div>
</template>

<script>  
      export default {
        data() {
          return {
            actionName:"新增",
            aboutusItem:{
            },
            contactItem:{
            },
            id:"",
            companyName:"",
            contactAddress:"",
            contactPhone:"",
            contactEmail:"",
            icpNo:"",

            aboutText1:"",
            aboutText2:"",
            aboutTitle1:"",
            aboutTitle2:"",
            
            contentType:0,
            remark:"",
            dialogImageUrl: '',
            dialogVisible: false,
            contact:true,
            about:false,
            bannerSettingShow:false,
            platformRadio: 1,
            typeOptions: [{
              value: 0,
              label: '联系我们'
            }, {
              value: 1,
              label: '关于我们'
            }],
            statusOptions: [{
              value: 0,
              label: '草稿'
            }, {
              value: 1,
              label: '发布'
            }],
            itemStatus:0,
            value: '',
            fileListPc: [],
            fileListAbout: [],
            fileListWechat: [],

            aboutImgData:{
              type:"about"
            },

            pcImgData:{
              type:"pc"
            },

            wechatImgData:{
              type:"wechat"
            },

            aboutImgUrl:"", 
            pcImgUrl:"", 
            wechatImgUrl:"",
            actionUrl:window.PATH + "/resource/file//uploadAdvPic" 
          }
        },
        methods:{
          uploadImg(opt,ele){
            if (opt.file.type.split("/")[0] != "image"){
              this.$message.error('只能上传图片格式文件');
              if(opt.data.type == "pc"){
                  this.$refs.upload1.clearFiles();
              }else if(opt.data.type == "about"){
                  this.$refs.upload3.clearFiles();
              }else{
                  this.$refs.upload2.clearFiles();
              }
              return false;
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
            var that = this;
            $.ajax({
                url: that.actionUrl,
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
                    if (data.errorCode == -10){
                        layer.msg.error(data.message);
                        layer.close(loadInx);
                        window.location.href = "#/login";
                        that.yzxcookie.removeCookies('account');
                        that.yzxcookie.removeCookies('token');
                        that.yzxcookie.removeCookies('userId');
                        that.yzxcookie.removeCookies('ucpType');
                        that.yzxcookie.removeCookies('roleName');
                    }

                    if (data.errorCode == -14){
                        layer.msg.error("用户登录已过期，请重新登录");
                        layer.close(loadInx);
                        window.location.href = "#/login";
                        that.yzxcookie.removeCookies('account');
                        that.yzxcookie.removeCookies('token');
                        that.yzxcookie.removeCookies('userId');
                        that.yzxcookie.removeCookies('ucpType');
                        that.yzxcookie.removeCookies('roleName');
                    }
                    
                    if(opt.data.type == "pc"){
                        that.pcImgUrl = data.data.absolutePath;
                    }else if(opt.data.type == "about"){
                        that.aboutImgUrl = data.data.absolutePath;
                    }else{
                        that.wechatImgUrl = data.data.absolutePath;
                    }
                    return layer.msg.success("上传成功");
                  }else{
                    return layer.msg.error(data.message);
                  }
                },error:function(){
                  return layer.msg.error("上传失败");
                }
            });
          },
          handlePictureCardPreview(file){
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
            $(".el-dialog__wrapper").css("z-index","2100"); 
          },
          DownLoad(){
              window.location.href="/vsw/viFiDeviceNew/modelDown";
          },
          submitUpload() {
            //this.beforeUpload();
            this.$refs.upload.submit();
          },
          beforeUpload(file){
            /*const isJPG = file.type.split("/")[0] === 'image';

            console.log(isJPG);
            if (!isJPG) {
              this.$message.error('格式错误');
            }
            console.log(file);*/
          },
          uploadError(){
            this.$message.error('上传失败');
          },
          uploadSuccess(){
            this.$message.success('上传成功');
            $("#ImportNewModal").hide();
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();
            switchTabAndTools('baseTab','baseTool');
          },
          uploadExceed(){
            this.$message.error('只能上传一个文件');
          },
          handleRemove(file, fileList) {
            //console.log(file, fileList);
          },
          handlePreview(file) {
            //console.log(file);
          },
          openAddModal(){
            this.actionName="新增";

            this.id = "";
            this.companyName ="";
            this.contactAddress="";
            this.contactPhone="";
            this.contactEmail="";
            this.icpNo = ""
            this.itemStatus = 1;

            this.aboutText1="";
            this.aboutText2="";
            this.aboutTitle1="";
            this.aboutTitle2="";

            this.remark = "";

            this.wechatImgUrl = [];
            this.pcImgUrl = [];
            this.aboutImgUrl = [];

            this.fileListPc = [];
            this.fileListAbout = [];
            this.fileListWechat =[];

            //$("#bannerSetting").modal("show");
            this.bannerSettingShow = true;
          },
          openEditModal(){
            var checkedRows = $("#baseTab-body").find("input[name*=baseTab-rowItems]:checked");
            if ( !checkedRows.length) {
                layer.msg.error("请选择");
                return false;
            }
            if ( checkedRows.length > 1) {
                layer.msg.error("只能选择一项");
                return false;
            }

            this.actionName="编辑";
            
            var tableDates = getSelectedRowData("baseTab");

            this.id = tableDates.id;
            this.contentType = tableDates.contentType;
            this.companyName=tableDates.companyName;
            this.contactAddress=tableDates.address;
            this.contactPhone=tableDates.contactPhone;
            this.contactEmail=tableDates.email;
            this.icpNo=tableDates.icpNo;
            this.itemStatus = tableDates.status;
            
            this.aboutText1=tableDates.content1;
            this.aboutText2=tableDates.content2;
            this.aboutTitle1=tableDates.title;
            this.aboutTitle2=tableDates.contentTitle;

            this.remark = tableDates.remark;

            this.pcImgUrl = tableDates.logo;
            this.wechatImgUrl = tableDates.weixinImg;
            this.aboutImgUrl = tableDates.contentImg;

            this.fileListPc = [{name:'', url: "http://" + tableDates.logo}];
            this.fileListAbout = [{name: '', url: "http://" + tableDates.contentImg}];
            this.fileListWechat = [{name: '', url: "http://" + tableDates.weixinImg}];
            //$("#bannerSetting").modal("show");
            this.bannerSettingShow = true;
          },
          clickSelect(value){
            if(value == 0){
              this.about = false;
              this.contact = true;
            }else if(value == 1){
              this.about = true;
              this.contact = false;
            }
          },
          saveAction(){
            if (this.actionName == "新增"){
              var actionName = "new"
            }else{
              var actionName = "edit"
            }

            if (this.contentType == 0){
              if (this.companyName == ""){
                this.$message.error('必填字段');
                return false;
              }

              if (this.contactPhone !=""){
                if (!(/(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}/).test(this.contactPhone.replace(/\D/g, ''))){
                  this.$message.error('无效电话号码');
                  return false;
                }
              }
              
              if (this.contactEmail != ""){
                var emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!(emailRegExp.test(this.contactEmail))){
                  this.$message.error('无效电子邮箱');
                  return false;
                }
              }
              


              if (this.pcImgUrl == "" && !this.fileListPc.length){
                this.$message.error('请上传图片');
                return false;
              }
              if (this.wechatImgUrl == "" && !this.fileListWechat.length){
                this.$message.error('请上传图片');
                return false;
              }
              var data = {
                actionName:actionName,
                contentType:this.contentType,
                companyName:this.companyName,
                contactPhone:this.contactPhone,
                email:this.contactEmail,
                address:this.contactAddress,
                icpNo:this.icpNo,
                logo:this.pcImgUrl,
                weixinImg:this.wechatImgUrl,
                status:this.itemStatus,
                state:1,
                remark:this.remark,
                platform:"pc"
              }
            }else{
              if (this.aboutImgUrl == "" && !this.fileListAbout.length){
                this.$message.error('请上传图片');
                return false;
              }
              if (this.aboutTitle1 == "" || this.aboutTitle2 == ""|| this.aboutText1 == "" ||this.aboutText2 == "" ){
                this.$message.error('必填字段');
                return false;
              }
              var data = {
                actionName:actionName,
                contentType:this.contentType,
                title:this.aboutTitle1,
                contentTitle:this.aboutTitle2,
                content1:this.aboutText1,
                content2:this.aboutText2,
                contentImg:this.aboutImgUrl,
                status:this.itemStatus,
                state:1,
                remark:this.remark,
                platform:"pc"
              }
            }

            if (this.id){
              data["id"] = this.id;
            }
            /*if (this.ruleForm.sourceSystem == "" || this.ruleForm.sort == "" || this.ruleForm.title == ""|| this.ruleForm.platform == ""|| this.ruleForm.module == ""){
                this.$message.error('必填字段');
                return false;
            }
            if (!this.$refs.upload.uploadFiles.length){
              this.$message.error("必须上传一张图片");
              return false;
            }
            if (this.$refs.upload.uploadFiles[0].raw.type.split("/")[0] != "image"){
              this.$message.error('格式错误');
              return false;
            }*/
            //var newParam = this.setSignList(this.ruleForm);
          
            /*this.ruleForm.actionName = actionName;
            this.ruleForm.sign = newParam.sign;
            this.ruleForm.referType = newParam.referType;
            this.ruleForm.userId = newParam.userId;
            this.ruleForm.timestamp = newParam.timestamp;*/

            //this.$refs.upload.submit();
            //console.log(data);
            var that = this;
            Utils.ajax({
                url: window.PATH + "/webconfig/aboutus/save",
                data: data,
                success: function(resp){
                    if( resp && resp.state===0){
                        layer.msg.success(resp.message);
                        that.bannerSettingShow = false;
                        //$("#bannerSetting").modal("hide");
                        switchTabAndTools('baseTab','baseTool');
                    }else{
                        layer.msg.error(resp.message);
                    }
                }
            })


            /*this.yzxhttpPost(this.http+'logout',{
              token:token,
              account:account
            }).then(function (res) {
              if(res.data.code==200){
                //去除cookie
                that.yzxcookie.removeCookies('token');
                 that.yzxcookie.removeCookies('account');
                 that.$router.push('/login');
                this.hideClientInfoValue = true;
              }
            });*/
          }
        },
        mounted: function () {
          $(function(){
                  var showHandle = function(id){
                      var $form = $("#"+id);
                      if( $form.is(":visible")){
                          var value  = $form.find("[name=contentType]").val(),
                              $title ,$contentTitle ,$content1,$content2,$companyName,$contactPhone,$email,$address,$contentImg
                          $form.find(".form-group").each(function(index,item){
                              var $container = $(this);
                              if($container.find("[name=title]").length===1){
                                  $title = $container;
                              }else if($container.find("[name=contentTitle]").length===1){
                                  $contentTitle = $container;
                              }else if($container.find("[name=content1]").length===1){
                                  $content1 = $container;
                              }else if($container.find("[name=content2]").length===1){
                                  $content2 = $container;
                              }else if($container.find("[name=companyName]").length===1){
                                  $companyName = $container;
                              }else if($container.find("[name=contactPhone]").length===1){
                                  $contactPhone = $container;
                              }else if($container.find("[name=email]").length===1){
                                  $email = $container;
                              }else if($container.find("[name=address]").length===1){
                                  $address = $container;
                              }else if($container.find("[name=contentImg]").length===1){
                                  $contentImg = $container;
                              }
                          });
                          //console.log(value)
                          if(value==="0"){
                              $companyName && $companyName.show();
                              $contactPhone && $contactPhone.show();
                              $email && $email.show();
                              $address && $address.show();
                              $contentImg && $contentImg.show();

                              $title && $title.hide();
                              $contentTitle && $contentTitle.hide();
                              $content1 && $content1.hide();
                              $content2 && $content2.hide();
                          }else{
                              $companyName && $companyName.hide();
                              $contactPhone && $contactPhone.hide();
                              $email && $email.hide();
                              $address && $address.hide();
                              $contentImg && $contentImg.hide();


                              $title && $title.show();
                              $contentTitle && $contentTitle.show();
                              $content1 && $content1.show();
                              $content2 && $content2.show();
                          }
                      }
                  };
                  var Permi = ['1','1','1','0'];//不可新增和删除//view.permissions;//Permi[1] = '1';//不可新增
                  /****************************** 用户列表 - 不可新增 *********************************/
                  var bannerItems = {version:201710121, tableKey:"id", i18nPrefix:"db.tbWebsiteBase.", batchEdit:true,
                      //实名认证
                      initParams:{tableId:"baseTab", toolsId:"baseTool", urlPrefix: "/webconfig/aboutus/", permissions: Permi, page:"1"},
                      trs:[
                          {name: "id",hideEdit:"A", width:30,vali: {stringLength: 128,required:false}},
                          {name:"contentType",comData:{selectE:function(){showHandle("baseTab-new-form");}}, width:100, comType:"select", disabled:"E",valFormat:function(value){
                              return matchData2FormatSpan("db.tbWebsiteBase.contentType.dataPlus", value,100);
                          }},
                          {name: "idxAgentId",hideEdit:"A", vali: {stringLength: 128,required:false},show:false},
                          {name: "platform",hideEdit:"A", vali: {stringLength: 128,required:false},show:false},
                          {name: "title", vali: {stringLength: 128,required:false},show:false},
                          
                          {name: "contentTitle", vali: {stringLength: 128,required:false},show:false},
                          {name: "content1", vali: {stringLength: 128,required:false},show:false},
                          {name: "content2", vali: {stringLength: 128,required:false},show:false},
                          
                          {name:"status", width:70,hideEdit:"A", advQry:["LIKE"], comType:"select",valFormat:function(value){
                              return matchData2FormatSpan("db.tbWebsiteBase.status.dataPlus", value,70);
                          }},
                          {name: "companyName", vali: {stringLength: 128},show:false},
                          {name: "contactPhone", vali: {stringLength: 128,required:false},show:false},
                          {name: "email", vali: {stringLength: 128,required:false},show:false},
                          {name: "address", vali: {stringLength: 128,required:false},show:false},
                          {name: "icpNo", vali: {stringLength: 128,required:false},show:false},
                          {name: "contentImg", vali: {stringLength: 128,required:false},show:false},
                          {name: "logo", vali: {stringLength: 128,required:false},show:false},
                          {name: "weixinImg", vali: {stringLength: 128,required:false},show:false},
                          {name: "remark", vali: {stringLength: 128,required:false}, show: false},
                          {name: "mdfTm", hideEdit: "A", width:140,sort:true},
                          {name: "mdfBy", hideEdit: "A", width:140},
                          {name: "crtTm", hideEdit: "A", width:140,sort:true},
                          {name: "crtBy", hideEdit: "A", width:140}
                      ]};
                  InitTableModuleNew(bannerItems);
          })
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    
</style>
