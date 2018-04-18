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
                    <li class="flag-tabs-btn active" id="bannerBtn">
                      <a data-toggle="tab" href="javaScript:void(0)" onclick="switchTabAndTools('bannerTab','bannerTool')">轮播管理</a>
                    </li>
                    <li class="head-tools-r navbar-right flag-tools" id="bannerTool"></li>
                    <li class="head-tools-r navbar-right navbar-right" id="bannerToolNew">
                        <div class=" btn success f-p-tips f-p-tips-button" @click="openAddModal" style="font-size: 14px;padding: 4px 12px;margin-left:3.56px;" id=""><i class="la la-plus"></i><div class="f-t-tips">新增</div></div>
                        <div class=" btn primary f-p-tips f-p-tips-button" @click="openEditModal" style="font-size: 14px;padding: 4px 12px;margin-left:3.56px;" id=""><i class="la editIcon"></i><div class="f-t-tips">编辑</div></div>
                    </li>
                  </ul>
                  <!-- tab页面组 -->
                  <div class="tab-content no-padding tabs-flat" style="border-radius:0;">
                    <div id="bannerTab" class="flag-tabs tab-pane in active"></div>
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
      <form id="agentRecharge-new-form" class="form-horizontal bv-form" onchange="" novalidate="novalidate">
            <div class="ng-scope" style="">
              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">所属系统<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="">
                    <div class="ng-scope" id="">
                       <el-select v-model="ruleForm.sourceSystem" placeholder="请选择平台" style="width:100%">
                        <el-option
                          v-for="item in sourceSystemOptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </div>
                  </div>
                </div>
              </div>


              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">状态<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="">
                    <div class="ng-scope" id="">
                      <el-select v-model="ruleForm.status" placeholder="请选择状态" style="width:100%">
                        <el-option
                          v-for="item in statusOptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </div>
                  </div>
                </div>
              </div>


              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">广告标题<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="">
                    <div class="ng-scope" id="">
                      <input type="text" id="rechargeModalRemark" v-model="ruleForm.title" name="rechargeModalRemark" placeholder="请输入广告标题" class="form-control input-sm layer-date">
                      <i class="form-control-feedback" style="display: none;"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">选择终端<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="">
                    <div class="ng-scope" id="" style="padding-left:10px;padding-top:10px">
                        <el-radio-group v-model="ruleForm.platform">
                          <el-radio label="官网"></el-radio>
                          <el-radio label="公众号"></el-radio>
                        </el-radio-group>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">模块<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="">
                    <div class="ng-scope" id="">
                       <el-select v-model="ruleForm.module" placeholder="请选择模块" style="width:100%">
                        <el-option
                          v-for="item in moduleOptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">排序权重<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="">
                    <div class="ng-scope" id="">
                      <input type="text" id="rechargeModalRemark" v-model="ruleForm.sort" name="rechargeModalRemark" placeholder="请输入排序权重" class="form-control input-sm layer-date">
                      <i class="form-control-feedback" style="display: none;"></i>
                    </div>
                  </div>
                </div>
              </div>


              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">图片<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="">
                    <div class="ng-scope" id="">
                      <el-upload
                        :action="actionUrl"
                        :auto-upload="true"
                        :on-exceed="uploadExceed"
                        :on-error="uploadError"
                        :on-success="uploadSuccess"
                        :on-preview="handlePictureCardPreview"
                        :file-list="fileList2"
                        :limit="1"
                        ref="upload"
                        :data="uploadFrom"
                        :http-request="uploadImg"
                        :before-upload="beforeUpload"
                        list-type="picture-card">
                        <i class="el-icon-plus"></i>
                       <!--  <el-button size="small" @click="submitUpload" type="primary">点击上传</el-button> -->
                        <div slot="tip" class="el-upload__tip"><i class="el-icon-warning" style="padding-right:10px;color:#FA5555"></i>只能上传jpg/png文件，且不超过512kb</div>
                        <div slot="tip" class="el-upload__tip"><i class="el-icon-warning" style="padding-right:10px;color:#FA5555"></i>只能上传一张图片</div>
                        <div slot="tip" class="el-upload__tip"><i class="el-icon-warning" style="padding-right:10px;color:#FA5555"></i>建议尺寸1280px X 512px</div>
                      </el-upload>
                      <el-dialog :visible.sync="dialogVisible" size="tiny">
                        <img width="100%" :src="dialogImageUrl" alt="">
                      </el-dialog>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">跳转类型<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"></span>
                  </label>
                  <div class="col-sm-8" style="">
                    <div class="ng-scope" id="">
                      <el-select v-model="ruleForm.forwardType" placeholder="请选择跳转类型" :change="clickSelect(ruleForm.forwardType)" style="width:100%">
                        <el-option
                          v-for="item in forwardTypeOptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group has-feedback" v-if="showForwardModuel">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">跳转模块<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"></span>
                  </label>
                  <div class="col-sm-8" style="">
                    <div class="ng-scope" id="">
                      <el-select v-model="ruleForm.forwardModule" placeholder="请选择跳转模块" style="width:100%">
                        <el-option
                          v-for="item in forwardModuleOptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </div>
                  </div>
                </div>
              </div>


              <div class="form-group has-feedback" v-if="showForwardUrl">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">跳转链接<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"></span>
                  </label>
                  <div class="col-sm-8" style="">
                    <div class="ng-scope" id="">
                      <input type="text" id="rechargeModalRemark" v-model="ruleForm.forwardUrl" name="rechargeModalRemark" placeholder="请输入跳转链接" class="form-control input-sm layer-date">
                      <i class="form-control-feedback" style="display: none;"></i>
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
                      <input type="text" id="rechargeModalRemark" v-model="ruleForm.remark" name="rechargeModalRemark" placeholder="请输入备注" class="form-control input-sm layer-date">
                      <i class="form-control-feedback" style="display: none;"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
            actionName:"",
            dialogImageUrl: '',
            dialogVisible: false,
            bannerSettingShow:false,
            showForwardUrl:false,
            showForwardModuel:true,
            ruleForm: {
              sourceSystem: "小Gmifi代理商运营系统",
              sort:"",
              remark:"",
              forwardUrl:"",
              title:"",
              platform:"官网",
              module:"home",
              forwardType:3,
              status:1,
              forwardModule:"HOME"
            },
            myHeaders:{
            },
            uploadFrom:{
            },
            /*sourceSystemOptions: [{
              value: 'flowcloud',
              label: '流量云平台'
            }, {
              value: 'mifi-aos',
              label: '小Gmifi代理商运营系统'
            }, {
              value: 'mifi-weixin',
              label: '微信'
            }, {
              value: 'mifi-pc',
              label: '官网'
            }],*/
   
            statusOptions: [{
              value: 0,
              label: '草稿'
            },{
              value: 1,
              label: '发布'
            }],
            forwardTypeOptions: [{
              value: 3,
              label: '模块'
            },{
              value: 4,
              label: 'H5'
            }],
            forwardModuleOptions: [{
              value: 'HOME',
              label: '首页'
            },{
              value: 'SHOP',
              label: '流量商城'
            },{
              value: 'ABOUT',
              label: '关于我们'
            },{
              value: 'USER',
              label: '个人中心'
            }],
            sourceSystemOptions: [{
              value: 'mifi-aos',
              label: '小Gmifi代理商运营系统'
            }],
            moduleOptions:[{
              value: 'home',
              label: '首页'
            }],

            imgUrl:"",

            /*platformOptions: [{
              value: '平台',
              label: '平台'
            }, {
              value: 'IOS',
              label: 'IOS'
            }, {
              value: 'android',
              label: 'android'
            }, {
              value: 'pc',
              label: 'pc'
            }]*/
            /*fileList2: [{name: '播放顺序1', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: '播放顺序2', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: '播放顺序3', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: '播放顺序4', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],*/
            fileList2: [],
            //actionUrl:window.PATH + "/adv/save.ajax"
            actionUrl:window.PATH + "/resource/file//uploadAdvPic"
          }
        },
        methods:{
          DownLoad(){
              window.location.href="/vsw/viFiDeviceNew/modelDown";
          },
          clickSelect(id){
            if (id == 4){
              this.showForwardUrl = true;
              this.showForwardModuel = false;
            }else{
              this.showForwardUrl = false;
              this.showForwardModuel = true;
            }
          },
          uploadImg(opt){
            
            if (opt.file.type.split("/")[0] != "image"){
              this.$message.error('只能上传图片格式文件');
              this.$refs.upload.clearFiles();
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


                    that.imgUrl = data.data.absolutePath;
                    return layer.msg.success("上传成功");
                  }else{
                    return layer.msg.error(data.message);
                  }
                },error:function(){
                  return layer.msg.error("上传失败");
                }
            });
          /*  Vue.http.post(this.actionUrl, form_data)
              .then(res => {
                opt.onSuccess()
              })
              .catch(err => {
                opt.onError()
            });*/
          },
          submitUpload() {
            //this.beforeUpload();
            $(function(){
              var uploadParam = setSignList({},"");
              that.myHeaders ={
                timestamp:uploadParam.timestamp,
                curUserId:uploadParam.userId,
                referType:uploadParam.referType,
                sign:uploadParam.sign
              }
            })
            this.$refs.upload.submit();
          },
          beforeUpload(file){
            //console.log(123);
          },
          uploadError(){
            this.$message.error('上传失败');
          },
          handleProgress(event, file, fileList){
            /*console.log(event);
            console.log(file);
            console.log(fileList);*/
          },
          uploadSuccess(response, file, fileList){
            if (response){
              if (response.errorCode == 0){
                this.$message.success(response.message);
                //$("#bannerSetting").hide();
                /*$('body').removeClass('modal-open');*/
                //$('.modal-backdrop').remove();
                //switchTabAndTools('bannerTab','bannerTool');
                //this.bannerSettingShow = false;
              }else{
                this.$message.error(response.message);
              }
            }
            //console.log(file);
            //console.log(fileList);
          },
          uploadExceed(){
            this.$message.error('只能上传一个文件');
          },
          handleRemove(file, fileList) {
            //console.log(file, fileList);
          },
          handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
            $(".el-dialog__wrapper").css("z-index","2100"); 
          },
          openAddModal(){
            this.actionName="新增";
            this.ruleForm = {
              sourceSystem: "mifi-aos",
              sort:"",
              remark:"",
              forwardUrl:"",
              title:"",
              status:1,
              platform:"官网",
              module:"home",
              forwardType:3,
              forwardModule:"HOME"
            };
            this.imgUrl = "";
            this.fileList2 = [];
            //$("#bannerSetting").modal("show");
            this.bannerSettingShow = true;
          },
          openEditModal(){
            var checkedRows = $("#bannerTab-body").find("input[name*=bannerTab-rowItems]:checked");
            if ( !checkedRows.length) {
                layer.msg.error("请选择");
                return false;
            }
            if ( checkedRows.length > 1) {
                layer.msg.error("只能选择一项");
                return false;
            }

            var tableDates = getSelectedRowData("bannerTab");
            this.actionName="编辑";

            if(tableDates.platform == "pc"){
              this.ruleForm.platform = "官网";
            }else{
              this.ruleForm.platform = "公众号";
            }

            this.ruleForm.sourceSystem= tableDates.sourceSystem;
            this.ruleForm.sort = tableDates.sort;
            this.ruleForm.remark = tableDates.remark;
            this.ruleForm.forwardUrl = tableDates.forwardUrl;
            this.ruleForm.title = tableDates.title;
            this.ruleForm.module = tableDates.module;
            this.ruleForm.status = tableDates.status;

            this.ruleForm.forwardType = tableDates.forwardType;
            this.ruleForm.forwardModule = tableDates.forwardModule;

            this.fileList2 = [{name: '', url: "http://" + tableDates.img,type:"image"}]
            this.imgUrl = tableDates.img;
            //$("#bannerSetting").modal("show");
            this.bannerSettingShow = true;
          },
          saveAction(file){
            if (this.ruleForm.sourceSystem == "" || this.ruleForm.sort == "" || this.ruleForm.title == ""|| this.ruleForm.platform == ""|| this.ruleForm.module == ""){
                this.$message.error('必填字段');
                return false;
            }

            if (this.imgUrl == ""){
              layer.msg.error("请上传一张图片");
              return false
            }; 

            function IsURL(str_url){
               var strRegex = /^(?=^.{3,255}$)(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+(:\d+)*(\/\w+\.\w+)*([\?&]\w+=\w*)*$/;
                var re=new RegExp(strRegex);
                if (re.test(str_url)){
                return (true); 
                }else{ 
                return (false); 
                }
            }
            /*console.log(IsURL(this.forwardUrl));
            if (this.forwardUrl != "" && !IsURL(this.forwardUrl)){
              layer.msg.error("网址不合法");
              return false;
            }; */


            var tableDates = getSelectedRowData("bannerTab");
            if (this.actionName == "编辑"){
              this.ruleForm.actionName = "edit";
              this.ruleForm.id = tableDates.id;
            }else{
              this.ruleForm.actionName = "new";
            }

            if(this.ruleForm.platform == "官网"){
              this.ruleForm.platform = "pc";
            }else{
              this.ruleForm.platform = "weixin";
            }

            this.ruleForm.img = this.imgUrl;

            var that = this;
            Utils.ajax({
                url: window.PATH + "/adv/save",
                data: this.ruleForm,
                success: function(resp){
                    if( resp && resp.state===0){
                        layer.msg.success(resp.message);
                        that.bannerSettingShow = false;
                        switchTabAndTools('bannerTab','bannerTool');
                    }else{
                        layer.msg.error(resp.message);
                        that.platform = "官网";
                    }
                }
            })
          }
        },
        mounted: function () {

          $(function(){
                  var Permi = ['1','1','1','0'];//不可新增和删除//view.permissions;//Permi[1] = '1';//不可新增
                  /****************************** 用户列表 - 不可新增 *********************************/
                  var bannerItems = {version:201710121, tableKey:"id", i18nPrefix:"db.tbWebsiteBanner.", batchEdit:true,
                      //实名认证
                      initParams:{tableId:"bannerTab", toolsId:"bannerTool", urlPrefix: "/adv/", permissions: Permi, page:"1"},
                      trs:[
                          {name: "id", vali:{date:true}, hideEdit: "A", sort:true,width:125},
                          {name: "sourceSystem", vali: {stringLength: 128},show:false,comType: "select"},
                          {name: "title", vali: {stringLength: 128}, advQry:['LIKE']},
                          {name: "platform", vali: {stringLength: 128},comType: "select", advQry:['LIKE']},
                          {name: "module", vali: {stringLength: 128},comType: "select"},
                          {name: "forwardModule", vali: {stringLength: 128,required:false},show:false,hideEdit:"A"},
                          {name: "sort", vali: {stringLength: 128}},
                          {name: "img", vali: {stringLength: 128,required:false},show:false},
                          {name: "forwardUrl", vali: {stringLength: 128,required:false},show:false},
                          
                          {name: "status", vali: {stringLength: 128,required:false},valFormat:function(value){
                              return matchData2FormatSpan("db.tbWebsiteBanner.status.dataPlus", value, 50);
                          },hideEdit:"N",comType: "select"},
                          {name: "browseCount", vali: {stringLength: 128,required:false},show:false,hideEdit:"A"},
                          {name: "clickCount", vali: {stringLength: 128,required:false},show:false,hideEdit:"A"},
                          
                          {name: "remark", vali: {stringLength: 128,required:false},show:false},
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
