<template>
  <div id="user">
    <div class="bs-example">
        <div class="row">
            <div class="col-xs-12 col-md-4 col-lg-4">
                <div class="widget no-margin-bottom">
                    <div class="widget-body no-padding">
                        <div id="searchable_wrapper">
                            <div class="tabbable">
                                <!-- <h4>树状菜单</h4> -->
                                <span style="font-size: 18px;">树状菜单</span>
                                <el-tree
                                  ref="tree"
                                  id="treeList"
                                  style="padding-top: 30px !important;height: 778px;"
                                  :data="MenuData"
                                  node-key="authId"
                                  :default-expanded-keys="expandList"
                                  @node-click="handleNodeClick">
                                </el-tree>
                                <!-- default-expand-all -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-md-8 col-lg-8" style="padding: 0px 10px;">
                <div class="widget no-margin-bottom">
                    <div class="widget-body no-padding">
                        <div id="searchable_wrapper">
                            <div class="tabbable">
                                <div>
                                  <span style="font-size: 18px;">菜单详情</span>
                                  <span style="float:right;">
                                    <el-button type="primary" size="mini" icon="el-icon-plus" @click="openAddModal">新增</el-button>
                                    <el-button type="primary" size="mini" icon="el-icon-edit" @click="openEditModal">编辑</el-button>
                                    <el-button type="danger" size="mini" icon="el-icon-delete" @click="deleteItem">删除</el-button>
                                  </span>
                                </div>
                                <ul class="nav nav-tabs">
                                    <!-- tab标签组 -->
                                    <!-- <li class="flag-tabs-btn active" id="cdrBtn1">
                                        <a data-toggle="tab" href="javaScript:void(0)" onclick="switchTabAndTools('authorTab1','authorTool1')">鉴权管理</a>
                                    </li> -->

                                    <li class="head-tools-r navbar-right flag-tools" id="authorTool1" style=""></li>
                                    
                                </ul>
                                <!-- tab页面组 -->
                                <div class="tab-content no-padding tabs-flat" style="border-radius:0;padding-top: 30px !important;">
                                    <table class="table table-bordered table-striped  detailTable">
                                      <tbody>
                                        <tr class="ng-scope" v-for="item in DataList">
                                          <td class="text-right" width="32%">
                                            {{item.itemName}}
                                          </td>
                                          <td class="right-border-none">
                                            <div style="width:80px;overflow: hidden;word-break: keep-all;text-overflow: ellipsis;" v-if="item.itemName == '状态：'">
                                              <span style="width:70px;" class="label label-primary" v-if="item.itemValue === '正常'">{{item.itemValue}}</span>
                                              <span style="width:70px;" class="label label-danger" v-if="item.itemValue === '禁用'">{{item.itemValue}}</span>
                                            </div>

                                            <div style="word-wrap:break-word;word-break: break-all;" class="" v-if="item.itemName != '状态：'">
                                              {{item.itemValue}}
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <el-dialog
      :visible.sync="menuShow"
      :title="actionName"
      width="50%">
          <form id="banner-new-form" class="form-horizontal bv-form" onchange="" novalidate="novalidate">
            <div class="ng-scope">

              <!-- <div class="form-group has-feedback" style="">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">类型<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="">
                    <div class="ng-scope" id="">
                       <el-select v-model="form.type" :disabled="disabledInput" placeholder="请选择类型" style="width:100%" :change="clickSelect(form.type)">
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
              </div> -->


              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">菜单名称<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="">
                    <div class="ng-scope" id="">
                      <input type="text" id="name" v-model="form.name" name="name" placeholder="请输入菜单名称" class="form-control input-sm layer-date">
                      <i class="form-control-feedback" style="display: none;"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group has-feedback" id="parentMenuUrlForm">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">上级菜单<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="">
                    <div class="ng-scope" id="">
                      <el-select filterable v-model="parentAuthId" placeholder="请选择上级菜单" v-if="disabledInput === false" @change="parentSelect($event)" style="display: block;">
                        <el-option-group
                          v-for="group in parentOptions"
                          :key="group.label"
                          :label="group.label">
                          <el-option
                            v-for="item in group.options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-option-group>
                      </el-select>

                      <input type="text" id="parentMenuUrl" v-model="form.parentMenuUrl" name="parentMenuUrl" placeholder="请输入上级菜单" v-if="disabledInput" :disabled="disabledInput" class="form-control input-sm layer-date">
                      <!-- <input type="text" id="parentMenuUrl" v-model="form.parentMenuUrl" name="parentMenuUrl" placeholder="请输入上级菜单" :disabled="disabledInput" class="form-control input-sm layer-date"> -->

                      <!-- <select type="text" name="parentMenuUrl" class="input-sm" style="width:100%;"></select> -->
                      <i class="form-control-feedback" style="display: none;"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">权限分配<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b></b></span>
                  </label>
                  <div class="col-sm-8" style="">
                    <div class="ng-scope" id="">
                      <el-checkbox-group v-model="checkList">
                        <el-checkbox label="16">OEM</el-checkbox>
                        <el-checkbox label="17">总代理</el-checkbox>
                        <el-checkbox label="18">区域代理</el-checkbox>
                        <el-checkbox label="19">普通代理</el-checkbox>
                      </el-checkbox-group>
                      <i class="form-control-feedback" style="display: none;"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group has-feedback" v-if="form.type === 1">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">接口路径<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="">
                    <div class="ng-scope" id="">
                      <input type="text" id="apiUrl" v-model="form.apiUrl" name="apiUrl" placeholder="请输入接口路径" class="form-control input-sm layer-date">
                      <i class="form-control-feedback" style="display: none;"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group has-feedback" v-if="form.type === 0">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">菜单路径<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="">
                    <div class="ng-scope" id="">
                      <input type="text" id="menuUrl" v-model="form.menuUrl" name="menuUrl" placeholder="请输入菜单路径" class="form-control input-sm layer-date">
                      <i class="form-control-feedback" style="display: none;"></i>
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
                       <el-select v-model="form.status" placeholder="请选择状态" style="width:100%" >
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

              <div class="form-group has-feedback" v-if="form.type === 0">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">图标<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="">
                    <div class="ng-scope" id="">
                      <input type="text" id="icon" v-model="form.icon" name="icon" placeholder="请输入图标" disabled class="form-control input-sm layer-date">
                      <i class="form-control-feedback" style="display: none;"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">排序<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="">
                    <div class="ng-scope" id="">
                      <input type="text" id="sort" v-model="form.sort" name="sort" placeholder="请输入排序" class="form-control input-sm layer-date">
                      <i class="form-control-feedback" style="display: none;"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">描述<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b></b></span>
                  </label>
                  <div class="col-sm-8" style="">
                    <div class="ng-scope" id="">
                      <input type="text" id="remark" v-model="form.remark" name="remark" placeholder="请输入描述" class="form-control input-sm layer-date">
                      <i class="form-control-feedback" style="display: none;"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="saveAction">保 存</el-button>
            <el-button @click="menuShow = false">取 消</el-button>
          </span>
    </el-dialog>
  </div>
</template>

<script>  
      export default {
        data() {
          return {
            parentOptions: [{
              label: '根目录',
              options: [{
                value: '',
                label: '/'
              }]
            },{
              label: '一级菜单',
              options: []
            },{
              label: '二级菜单',
              options: []
            }],
            parentAuthId:"",
            actionName:"新增",
            menuShow:false,
            typeOptions: [{
              value: 0,
              label: '菜单'
            }, {
              value: 1,
              label: '接口'
            }],
            statusOptions: [{
              value: 0,
              label: '禁用'
            }, { 
              value: 1,
              label: '正常'
            }],
            disabledInput:false,
            checkList: [],
            form: {
              parentMenuUrl:"",
              icon:"",
              sort:"",
              status:"",
              menuUrl:"",
              apiUrl:"",
              type:0,
              remark:"",
              crtBy:"",
              crtTm:"",
              levels:"",
              mdfBy:"",
              mdfTm:"",
              name: ''
            },
            initData:{},
            currentItem:"",
            DataList:[],
            expandList:[],
            MenuData: [{}],
            /*MenuData: [{
              id: 1,
              label: '一级 2',
              children: [{
                id: 3,
                label: '二级 2-1',
                children: [{
                  id: 4,
                  label: '三级 3-1-1'
                }, {
                  id: 5,
                  label: '三级 3-1-2',
                  disabled: true
                }]
              }, {
                id: 2,
                label: '二级 2-2',
                disabled: true,
                children: [{
                  id: 6,
                  label: '三级 3-2-1'
                }, {
                  id: 7,
                  label: '三级 3-2-2',
                  disabled: true
                }]
              }]
            }],*/
            defaultProps: {
              children: 'children',
              label: 'label'
            }
          }
        },
        methods:{
          append(data) {
            const newChild = { id: id++, label: 'testtest', children: [] };
            if (!data.children) {
              this.$set(data, 'children', []);
            }
            data.children.push(newChild);
          },
          parentSelect(event) {
            console.log(event);
            var that = this;
            var options = that.parentOptions;
            for(var i=0;i<options.length;i++){
              if (options[i].options){
                for (var j=0;j<options[i].options.length;j++){
                  if (options[i].options[j].value == event){
                    if (options[i].label == "根目录"){
                      that.form.type = 0;
                    }else if (options[i].label == "一级菜单"){
                      that.form.type = 0;
                    }else{
                      that.form.type = 1;
                    }
                    break
                  }
                }
              }
            }
          },
          remove(node, data) {
            const parent = node.parent;
            const children = parent.data.children || parent.data;
            const index = children.findIndex(d => d.id === data.id);
            children.splice(index, 1);
          },
          clickSelect(){
          },
          saveAction(){
            var that = this;
            var assignTarget = that.checkList.join(",");
            var itemData = {
              sort:that.form.sort,
              status:that.form.status,
              /*type:that.form.type,*/
              remark:that.form.remark,
              name: that.form.name,
              assignTarget:assignTarget
            }

            if (that.actionName == "新增"){
              var actionName = "new";
              itemData.parentAuthId = that.parentAuthId;
              itemData.parentMenuUrl = that.form.parentMenuUrl;
            }else{
              console.log(that.form,222222222);
              var actionName = "edit";
              itemData.authId = that.form.authId;
            }

            if (that.form.type == 0){
              itemData.menuUrl = that.form.menuUrl;
              itemData.icon = that.form.icon;
            }else{
              itemData.apiUrl = that.form.apiUrl;
            }

            itemData.actionName = actionName;


            /*if ( (itemData.icon && itemData.icon == "") || itemData.sort == "" || itemData.status == "" || itemData.menuUrl == "" || itemData.apiUrl == "" || itemData.name == "" ){
              layer.msg.error("必填字段");
              return false;
            }*/

            if ( (itemData.icon && itemData.icon == "") || (itemData.sort && itemData.sort == "") || (itemData.status && itemData.status == "") || (itemData.menuUrl && itemData.menuUrl == "") || (itemData.apiUrl && itemData.apiUrl == "") || (itemData.name && itemData.name == "") ){
              layer.msg.error("必填字段");
              return false;
            }

            Utils.ajax({
                url: window.PATH + "/frame/auth/save",
                data: itemData,
                success: function(resp){
                    if( resp && resp.state===0){
                        layer.msg.success(resp.message);
                        that.menuShow = false;
                        that.initTreeData();
                    }else{
                        layer.msg.error(resp.message);
                    }
                }
            })
          },
          openEditModal() {
            var that = this;
            console.log(this.$refs.tree.getCheckedNodes(),6666666666);
            console.log(this.$refs.tree.getCheckedKeys());
            this.actionName = "编辑";
            this.menuShow = true;
            that.form = that.initData;
            if (that.form.assignTarget){
              that.checkList = that.form.assignTarget.split(",");
            }

            that.parentAuthId = that.form.parentAuthId;
            that.disabledInput = true;
          },
          openAddModal() {
            var that = this;
            this.actionName = "新增";
            console.log(this.$refs.tree.getCheckedNodes());
            console.log(this.$refs.tree.getCheckedKeys());
            that.form = {
              parentMenuUrl:"",
              icon:"la la-cog",
              sort:"",
              status:"",
              menuUrl:"",
              apiUrl:"",
              type:0,
              remark:"",
              crtBy:"",
              crtTm:"",
              mdfBy:"",
              mdfTm:"",
              name: ''
            }
            that.checkList = [];
            that.disabledInput = false;
            that.menuShow = true;

            var menuGroupComData =
                ["optgroup",
                    ["主页", [["/index", "主页"], ["/home", "欢迎"], ["/login", "登录"], ["/logout", "注销"]]],
                    ["基本设置", [["/frame/resource", "菜单页面"], ["/frame/user", "系统用户"], ["/frame/role", "角色权限"], ["/frame/blackList", "IP黑名单"], ["/frame/password", "修改密码"],
                        ["/frame/audit", "操作审计"]]],
                    ["系统管理", [["/sysconfig/configure", "系统配置"], ["/sysconfig/wifiArea", "地区管理"], ["/sysconfig/sMSTemplate", "短信模板"], ["/sysconfig/vns", "设备注册"],
                        ["/sysconfig/version", "版本管理"], ["/sysconfig/sysSupplier", "供应商管理"], ["/sysconfig/agentManager", "代理商管理"], ["/sysconfig/consumerPkg", "消费套餐"]]],
                    ["用户管理", [["/user/user", "注册用户"], ["/user/userTopupRcd", "充值记录"], ["/user/voicePkg", "语音套餐"], ["/user/dataPkg", "流量套餐"],
                        ["/user/smsNew", "消息管理"], ["/user/feedback", "用户反馈"]]],
                    ["数据业务", [["/vsw/vswExchangeSer", "卡交换服务"], ["/vsw/simPDevNew", "SimPool卡池"], ["/vsw/simCardNew", "流量卡管理"], ["/vsw/viFiDeviceNew", "UUWiFi设备"],
                        ["/vsw/globalSIMNew", "启动卡管理"], ["/vsw/data-rate", "流量费率"], ["/vsw/cdrNew", "流量账单"]]],
                    ["语音业务", [["/vpx/vpx", "软交换服务"], ["/vpx/trunk", "落地线路"], ["/vpx/outboundRoute", "呼叫路由"], ["/vpx/account", "注册的账号"], ["/vpx/online-user", "app在线分布图"],
                        ["/vpx/goIPDevNew", "GoIP设备"], ["/vpx/rateNewVer", "通话费率"], ["/vpx/LaiXunAuth", "Sealion授权"]]],
                    ["套餐管理", [["/packageConsume/dailyRental", "流量日租"], ["/packageConsume/trafficPkg", "流量套餐"], ["/packageConsume/consume", "流量资费"]]],
                    ["统计报表", [["/count/countDaily", "每日统计"], ["/count/countMonthly", "月度统计"], ["/count/countAccessIP", "访问IP统计"]]],
                    ["系统日志", [["/syslog/fs/webmin", "管理系统日志"], ["/syslog/fs/ws", "服务接口日志"], ["/syslog/fs/as", "计费系统日志"], ["/syslog/fs/api", "卡调度接口日志"],
                        ["/syslog/fs/vns", "卡调度系统日志"], ["/syslog/fs/vsw", "卡交换系统日志"], ["/syslog/fs/vpx", "软交换呼叫日志"], ["/syslog/fs/msg", "消息系统日志"]]],

                    ["分润对账管理", [["/user/user", "返佣对账"], ["/user/user", "流量对账"], ["/user/user", "分佣对账"]]]
                ];

           /* select2BaseImpl({
                params: {data:menuGroupComData, selectE: function(){}},
                placeholder: "请选择上级菜单",
                selector: "#parentMenuUrlForm [name=parentMenuUrl]"
            });*/


            //沿用select2下拉框
            /*var item = {editInit:true,url:window.PATH + "/sysconfig/agentManager/agentS2Data"};
            var selector = '#distribute-form [name="deviceDistributeModalAgent"]';
            var placeholder = "请选择代理商";
            select2DataImpl({
                params: item,
                selector: selector,
                placeholder: placeholder,
                tableKeyVal: 3120174000000797,
                multiple: false
            });
            $modal.modal("show");*/
          },
          deleteItem() {
            var that = this;
            console.log(this.$refs.tree.getCheckedKeys());
            console.log(this.$refs.tree.getCheckedKeys());
            console.log(that.form.authId);
            layer.confirm(getJsonData("frame.from.tips.confirmDel"),{title:""}, function () {
               Utils.ajax({
                  url: window.PATH + "/frame/auth/ucpNormalAuthdelete",
                  data: {authId:that.form.authId},
                  success: function(resp){
                      if( resp && resp.state===0){
                          layer.msg.success(resp.message);
                          that.initTreeData();
                      }else{
                          layer.msg.error(resp.message);
                      }
                  }
              })
            });
            /*this.$confirm(that.currentItem +' 删除后无法恢复, 是否继续?', '删除', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              Utils.ajax({
                  url: window.PATH + "/frame/auth/ucpAuthdelete",
                  data: that.form.authId,
                  success: function(resp){
                      if( resp && resp.state===0){
                          layer.msg.success(resp.message);
                      }else{
                          layer.msg.error(resp.message);
                      }
                  }
              })
            }).catch(() => {     
            });*/
          },
          renderContent(h, { node, data, store }) {
            return ('<span style="flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;"><span><span>{node.label}</span></span><span><el-button style="font-size: 12px;" type="text" on-click={ () => this.append(data) }>Append</el-button><el-button style="font-size: 12px;" type="text" on-click={ () => this.remove(node, data) }>Delete</el-button></span></span>');
          },
          handleNodeClick(data) {
            var that = this;
            that.DataList = [];
            for (var key in data){
              var obj = {};
              if (key == "name"){
                obj.itemName = "菜单名称：";
                that.currentName = data[key];
              }else if(key == "parentMenuUrl"){
                obj.itemName = "上级菜单："
              }else if(key == "icon"){
                obj.itemName = "图标："
              }else if(key == "sort"){
                obj.itemName = "排序："
              }else if(key == "status"){
                obj.itemName = "状态："
              }else if(key == "menuUrl"){
                obj.itemName = "菜单路径："
              }else if(key == "apiUrl"){
                obj.itemName = "接口路径："
              }else if(key == "type"){
                obj.itemName = "类型："
              }else if(key == "remark"){
                obj.itemName = "描述："
              }else if(key == "crtBy"){
                obj.itemName = "创建人："
              }else if(key == "crtTm"){
                obj.itemName = "创建时间："
              }else if(key == "mdfBy"){
                obj.itemName = "修改人："
              }else if(key == "mdfTm"){
                obj.itemName = "修改时间："
              }else{
                continue
              }

              if(key == "status"){
                if (data[key] == "0"){
                  obj.itemValue = "禁用";
                }else{
                  obj.itemValue = "正常";
                }
              }else if (key == "type"){
                if (data[key] == "0"){
                  obj.itemValue = "菜单";
                }else{
                  obj.itemValue = "接口";
                }
              }else{
                obj.itemValue = data[key];
              }

              that.DataList.push(obj);
            }
            that.form = data;
            that.initData = data;
            //this.form = data;
          },
          onSubmit() {
            console.log('submit!');
          },
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
          },
          initTreeData(){
            var that = this;
            that.expandList = [];
            that.MenuData = [];
            that.parentOptions = [{
              label: '根目录',
              options: [{
                value: '',
                label: '/'
              }]
            },{
              label: '一级菜单',
              options: []
            },{
              label: '二级菜单',
              options: []
            }];
            that.parentAuthId = "";
            $(function(){
                Utils.ajax({
                    url: window.PATH + "/frame/auth/ucpAuthMenuList",
                    data: {},
                    success: function(resp){
                        if( resp && resp.state===0){
                            console.log(resp,2333);
                            if (resp.data.length){
                              for (var i=0;i<resp.data.length;i++){
                                //初始化菜单展开,默认全部一级展开
                                that.expandList.push(resp.data[i].authId);
                                
                                //初始化详情，默认显示第一个
                                if (i == 0){
                                  that.handleNodeClick(resp.data[i]);
                                  that.currentItem = resp.data[i].name;
                                  that.form = resp.data[i];
                                  that.initData = resp.data[i];
                                }
                                
                                that.parentOptions[1].options.push({label:resp.data[i].name,value:resp.data[i].authId});
                                resp.data[i].label = resp.data[i].name;
                                if (resp.data[i].children){
                                  for (var j=0;j<resp.data[i].children.length;j++){
                                    resp.data[i].children[j].label = resp.data[i].children[j].name;
                                    that.parentOptions[2].options.push({label:resp.data[i].children[j].name,value:resp.data[i].children[j].authId});
                                    if (resp.data[i].children[j].children){
                                      for (var k=0;k<resp.data[i].children[j].children.length;k++){
                                        resp.data[i].children[j].children[k].label = resp.data[i].children[j].children[k].name;
                                        //that.parentOptions[3].options.push({label:resp.data[i].children[j].children[k].name,value:resp.data[i].children[j].children[k].authId});
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            that.MenuData = resp.data;
                            $('#treeList').slimScroll({
                                height: '788',
                                width:"auto"
                            })
                        }else{
                            layer.msg.error("error");
                        }
                    }
                })
            })
          }
        },
        mounted: function () {
          this.initTreeData();
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    
</style>
