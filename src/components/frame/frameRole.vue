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
                                  <li class="flag-tabs-btn active" id="frmuserBtn">
                                      <a data-toggle="tab" href="javaScript:void(0)" onclick="switchTabAndTools('frmroleTab','frmroleTool')">角色权限</a>
                                  </li>

                                  <!--自定义编辑权限-->
                                  <li class="head-tools-r navbar-right flag-tools" id="frmroleTool"></li>
                                  <li class="head-tools-r" style="float:right">
                                  	<div class="viewcfg-dropdown">
	                                  <a class="btn blue f-p-tips-button dropdown-toggle" @click="openAddModal" style="font-size: 14px;padding: 4px 12px;margin-left:3.56px;" href="javascript:;"><i class="la la-plus"></i><div class="f-t-tips">新增</div>
	                                  </a>	
	                                </div>
	                                <div class="viewcfg-dropdown">
	                                  <a class="btn purple f-p-tips-button dropdown-toggle" @click="openEditModal" style="font-size: 14px;padding: 4px 12px;margin-left:3.56px;" href="javascript:;"><i class="la editIcon"></i><div class="f-t-tips">编辑</div>
	                                  </a>
	                                </div>
                                  </li>
                              </ul>
                              <div class="tab-content no-padding tabs-flat " style="border-radius:0;">
                                  <div id="frmroleTab" class="flag-tabs tab-pane in active" style="border-radius:0;"></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  	</div>


  	<!--自定义弹出框-->
  	<!-- <div class="modal fade bs-example-modal-lg in modal-primary" id="editModal" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<form class="form-horizontal">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title">
							<i class="fa"></i>
							{{actionName}}
						</h4>
					</div>
					<div class="modal-body" style="overflow: auto;">
						<div class="form-group">
							<label class="col-sm-2 control-label" >角色：</label>
							<div class="col-sm-9">
								<input class="form-control input-sm" disabled name="name" v-model="keyRoleId" />
							</div>
						</div>
						<div class="form-group">
							<label class="col-sm-2 control-label" >状态：</label>
							<div class="col-sm-9">
								<select id="homePage">
									<option value="0">正常</option>
									<option value="1">禁用</option>
								</select>
							</div>
						</div>
						<div class="form-group">
							<label class="col-sm-2 control-label" >权限：</label>
							<div class="col-sm-9">
								<table class="table table-bordered table-condensed" style="width: 100%;white-space: nowrap;">
									<tbody>
										<tr class="menu-tr" v-for="resource in resources" v-if="resource.parent">
											<td>
												<label style="margin-bottom: 0;" v-if="resource.parent">
													<input type="checkbox" v-model="resource.isAllCheck" @click="parentGroupAllCheck(resource)" >
													<span class="text">{{resource.topMenuRs}}</span>
												</label>
											</td>
											<td>
												<div class="hover-child-show" v-for="rsChild in resources" v-if="!rsChild.parent && rsChild.topMenu==resource.topMenu">
													<label style="margin-bottom: 0;" >
														<input type="checkbox" v-model="auths[rsChild.name]['all']" @click="authGroupAllCheck($event,rsChild.name,'all')" />
														<span class="text" style="width:120px;display: inline-block;">{{rsChild.nameRs}}</span>
													</label>
													
													<span class="hover-child">
														<label style="margin-bottom:0;" v-for="at in authTypesOpera">
															<input type="checkbox" v-model="auths[rsChild.name][at]" @click="authGroupAllCheck($event,rsChild.name,at)" />
															<span class="text" style="font-size:12px;">[{{at}}] &nbsp;&nbsp;</span>
														</label>
													</span>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button class="btn btn-danger" data-dismiss="modal" aria-label="Close">取消</button>
						<button type="submit" class="btn btn-primary">保存</button>
					</div>
				</form>
			</div>
		</div>
	</div> -->

	<div class="modal fade bs-example-modal-lg in modal-primary" id="editModal" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<form class="form-horizontal">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title">
							<i class="fa"></i>
							{{actionName}}
						</h4>
					</div>
					<div class="modal-body" style="overflow: auto;">
						<div class="form-group">
							<label class="col-sm-2 control-label" >角色：</label>
							<div class="col-sm-9">
								<input class="form-control input-sm laydate-input layer-date" placeholder="请输入角色" :disabled="actionName=='编辑'" name="name" v-model="roleName" />
							</div>
						</div>
						<div class="form-group">
							<label class="col-sm-2 control-label" >描述：</label>
							<div class="col-sm-9">
								<input class="form-control input-sm laydate-input layer-date" placeholder="请输入描述" name="name" v-model="remark" />
							</div>
						</div>

						<div class="form-group" v-if="actionName=='编辑'">
							<label class="col-sm-2 control-label" >状态：</label>
							<div class="col-sm-9">
								<el-select v-model="roleValue" placeholder="请选择">
							    <el-option
							      v-for="item in options"
							      :key="item.value"
							      :label="item.label"
							      :value="item.value">
							    </el-option>
							  </el-select>

								<!-- <select id="status" style="width: 100px;border-radius: 3px;">
									<option value="0">正常</option>
									<option value="1">禁用</option>
								</select> -->
							</div>
						</div>
						<div class="form-group">
							<label class="col-sm-2 control-label" >权限：</label>
							<div class="col-sm-9">
								<table class="table table-bordered-role table-condensed" style="width: 100%;">
									<tbody>
										<tr class="menu-tr" v-for="resource in menu">
											<td>
												<label style="margin-bottom: 0;width: 150px;" v-if="resource.levels==1">
													<input type="checkbox" v-model="resource.checked" @click="parentGroupAllCheck(resource,resource.checked)" >
													<span class="text">{{resource.name}}</span>
												</label>
											</td>
											<td>
												<div class="hover-child-show" v-for="rsChild in resource.secondZTreeNode" style="">
													<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
														<label style="" >
															<input type="checkbox" v-model="rsChild.checked" @click="authGroupAllCheck(resource,rsChild,rsChild.checked)" />
															<span class="text" style="display: inline-block;">{{rsChild.name}}</span>
														</label>
													</div>
													
													<div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
														<span class="hover-child">
															<label style="margin-bottom:0;" v-for="at in rsChild.thirdZTreeNode">
																<input type="checkbox" v-model="at.checked" @click="authCheck(resource,rsChild,at,at.checked)" />
																<span class="text" style="font-size:12px;">[{{at.name}}] &nbsp;&nbsp;</span>
															</label>
														</span>
													</div>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<div class="modal-footer " style="background-color:#FFFFFF;">
		              <a class="el-button el-button--primary pass" @click="saveAuths">保存</a>
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
          return {
          	/*menu:[{"id":9,"pId":0,"name":"供应商管理","opened":true,"checked":null,"levels":1,"secondZTreeNode":[{"id":12,"pId":9,"name":"流量供应商","opened":false,"checked":null,"levels":2,"secondZTreeNode":[],"thirdZTreeNode":[]},{"id":13,"pId":9,"name":"结算账单","opened":false,"checked":null,"levels":2,"secondZTreeNode":[],"thirdZTreeNode":[]},{"id":14,"pId":9,"name":"设备供应商","opened":false,"checked":null,"levels":2,"secondZTreeNode":[],"thirdZTreeNode":[]}],"thirdZTreeNode":[]},{"id":10,"pId":0,"name":"代理商管理","opened":true,"checked":null,"levels":1,"secondZTreeNode":[{"id":16,"pId":10,"name":"代理商信息","opened":false,"checked":null,"levels":2,"secondZTreeNode":[],"thirdZTreeNode":[]},{"id":17,"pId":10,"name":"预付金记录","opened":false,"checked":null,"levels":2,"secondZTreeNode":[],"thirdZTreeNode":[]},{"id":18,"pId":10,"name":"代理商返佣","opened":false,"checked":null,"levels":2,"secondZTreeNode":[],"thirdZTreeNode":[]},{"id":19,"pId":10,"name":"代理商分佣","opened":false,"checked":null,"levels":2,"secondZTreeNode":[],"thirdZTreeNode":[]},{"id":20,"pId":10,"name":"流量对账","opened":false,"checked":null,"levels":2,"secondZTreeNode":[],"thirdZTreeNode":[]}],"thirdZTreeNode":[]},{"id":11,"pId":0,"name":"设备管理","opened":true,"checked":null,"levels":1,"secondZTreeNode":[{"id":21,"pId":11,"name":"MiFi设备","opened":false,"checked":null,"levels":2,"secondZTreeNode":[],"thirdZTreeNode":[]},{"id":22,"pId":11,"name":"启动卡","opened":false,"checked":null,"levels":2,"secondZTreeNode":[],"thirdZTreeNode":[]}],"thirdZTreeNode":[]},{"id":15,"pId":0,"name":"首页","opened":true,"checked":null,"levels":1,"secondZTreeNode":[],"thirdZTreeNode":[]},{"id":23,"pId":0,"name":"套餐管理","opened":true,"checked":null,"levels":1,"secondZTreeNode":[{"id":24,"pId":23,"name":"流量套餐","opened":false,"checked":null,"levels":2,"secondZTreeNode":[],"thirdZTreeNode":[]},{"id":25,"pId":23,"name":"设备套餐","opened":false,"checked":null,"levels":2,"secondZTreeNode":[],"thirdZTreeNode":[]}],"thirdZTreeNode":[]},{"id":26,"pId":0,"name":"订单管理","opened":true,"checked":null,"levels":1,"secondZTreeNode":[{"id":27,"pId":26,"name":"订单列表","opened":false,"checked":null,"levels":2,"secondZTreeNode":[],"thirdZTreeNode":[]}],"thirdZTreeNode":[]},{"id":28,"pId":0,"name":"数据统计","opened":true,"checked":null,"levels":1,"secondZTreeNode":[{"id":29,"pId":28,"name":"设备流量","opened":false,"checked":null,"levels":2,"secondZTreeNode":[],"thirdZTreeNode":[]},{"id":30,"pId":28,"name":"设备流量","opened":false,"checked":null,"levels":2,"secondZTreeNode":[],"thirdZTreeNode":[]}],"thirdZTreeNode":[]},{"id":31,"pId":0,"name":"系统设置","opened":true,"checked":null,"levels":1,"secondZTreeNode":[{"id":32,"pId":31,"name":"系统用户","opened":false,"checked":null,"levels":2,"secondZTreeNode":[],"thirdZTreeNode":[]},{"id":33,"pId":31,"name":"系统菜单","opened":false,"checked":null,"levels":2,"secondZTreeNode":[],"thirdZTreeNode":[]},{"id":34,"pId":31,"name":"角色权限","opened":false,"checked":null,"levels":2,"secondZTreeNode":[],"thirdZTreeNode":[]},{"id":35,"pId":31,"name":"操作日志","opened":false,"checked":null,"levels":2,"secondZTreeNode":[],"thirdZTreeNode":[]}],"thirdZTreeNode":[]},{"id":36,"pId":0,"name":"监控预警","opened":true,"checked":null,"levels":1,"secondZTreeNode":[{"id":37,"pId":36,"name":"监控设置","opened":false,"checked":null,"levels":2,"secondZTreeNode":[],"thirdZTreeNode":[]},{"id":38,"pId":36,"name":"监控日志","opened":false,"checked":null,"levels":2,"secondZTreeNode":[],"thirdZTreeNode":[]}],"thirdZTreeNode":[]}],*/
          	menu:[],
          	remark:"",
          	actionName:"编辑",
          	resources:[{isAllCheck:false,parent:true,topMenu:"frame",topMenuRs:"基本设置"},{createdBy:"_EUROOT",createdTime:"2015-11-18 18:29:50",isAllCheck:false,keyResourceId:"/frame/user",menu:"01-01",modifiedBy:"_EUROOT",modifiedTime:"2015-11-18 18:29:50",name:"frame_user",nameRs:"系统用户",parent:false,remarks:"1|1|1",topMenu:"frame",topMenuRs:"基本设置"}],
          	roleName:"",
          	authTypesOpera : ["详情", "新增", "编辑", "删除"],
          	auths:{count_deviceDaily:{详情: true, 新增: true, 编辑: true, 删除: true, all: true},count_simCardDaily:{详情: true, 新增: true, 编辑: true, 删除: true, all: true},count_userDaily:{详情: true, 新增: true, 编辑: true, 删除: true, all: true},frame_audit:{详情: true, 新增: false, 编辑: false, 删除: false, half: true},frame_blackList:{详情: true, 新增: false, 编辑: false, 删除: false, half: true},frame_resource:{详情: true, 新增: false, 编辑: false, 删除: false, half: true},frame_role:{详情: true, 新增: true, 编辑: true, 删除: true, all: true},frame_user:{详情: true, 新增: true, 编辑: true, 删除: true, all: true},order_orderManager:{详情: true, 新增: true, 编辑: true, 删除: true, all: true},packageConsume_rate:{详情: true, 新增: true, 编辑: true, 删除: true, all: true},packageConsume_trafficPkg:{详情: true, 新增: true, 编辑: true, 删除: true, all: true},profitCheck_ucpAgentAccountCheck:{详情: true, 新增: true, 编辑: true, 删除: true, all: true}},
          	options: [{
	          value: 0,
	          label: '禁用'
	        }, {
	          value: 1,
	          label: '正常'
	        }],
	        roleValue:1
	       }
        },
        methods: {
		    saveAuths(){
		    	var that = this;
		    	var loadInx = layer.load(2);
		    	var saveAuthsData = [];
		    	for (var k=0;k<this.menu.length;k++){
		    		if (this.menu[k].checked){
			        	saveAuthsData.push(	this.menu[k].id);
			        }
			    	for (var i=0;i<this.menu[k].secondZTreeNode.length;i++){
			        	if (this.menu[k].secondZTreeNode[i].checked){
			        		saveAuthsData.push(this.menu[k].secondZTreeNode[i].id);
			        	}

			        	for (var t=0; t<this.menu[k].secondZTreeNode[i].thirdZTreeNode.length;t++) {
				        	if (this.menu[k].secondZTreeNode[i].thirdZTreeNode[t].checked){
					        	saveAuthsData.push(this.menu[k].secondZTreeNode[i].thirdZTreeNode[t].id);
					        }
			        	}
			        };
			    }

			    var tableDates = getSelectedRowData("frmroleTab");
			    var finalItem = {};
			    saveAuthsData = saveAuthsData.join(",");
			    var reg =/\s/;
			    if (reg.test(that.roleName)){
			        layer.msg.error("名称包含空格，请重新输入");
			        return false;
			    }

			    if (this.remark.length > 15){
			    	layer.msg.error("描述长度应小于15个字符");
			    	return false;
			    }


			    if (this.actionName == "编辑"){
			    	finalItem = {
			    		actionName:"edit",
				    	status:this.roleValue,
				    	roleId:tableDates.roleId,
				    	remark:that.remark,
				    	strAuthIdList:saveAuthsData,
				    	accountSystem:tableDates.accountSystem
			    	}
			    }else{
			    	finalItem = {
			    		actionName:"new",
				    	status:this.roleValue,
				    	roleName:that.roleName,
				    	remark:that.remark,
				    	strAuthIdList:saveAuthsData,
				    	accountSystem:2
			    	}
			    }
			    /*var strItem = {actionName:actionName,roleName:that.roleName,status:status,remark:that.remark,authIdList:jsonString,accountSystem:accountSystem};
			    var jsonString = JSON.stringify(strItem);*/
			    
			    Utils.ajax({
                    url: window.PATH + "/frame/role/save",
                    data: finalItem,
                    success: function(resp){
                        if( resp && resp.state===0){
                        	$("#editModal").modal("hide");
                            switchTabAndTools('frmroleTab','frmroleTool');
                        }else{
                            layer.msg.error(res.data.message);
                        }
                    }
                })
                layer.close(loadInx);

			    /*that.yzxhttpPost(window.PATH +'/system/system/frame/role/save.ajax',{
	            	actionName:that.actionName,
	            	roleName:that.roleName,
	            	remark:that.remark,
	            	authIdList:saveAuthsData
	            }).then(function (res) {
	              if (res.status == 200){
	                  if(res.data.errorCode == 0){
	                    switchTabAndTools('frmroleTab','frmroleTool')
	                  }else{
	                    that.$message.error(res.data.message);
	                  }
	              }else{
	                that.$message.error('error request');
	              }
	            });*/
		    },
		    //一级点击
		    parentGroupAllCheck(rsParent,checked) {
		        for (var i=0;i<rsParent.secondZTreeNode.length;i++){
		        	if (rsParent.secondZTreeNode.length){
		        		rsParent.secondZTreeNode[i].checked = !checked;
		        	}
		        	if (rsParent.secondZTreeNode[i].thirdZTreeNode.length){
		        		for (var j=0;j<rsParent.secondZTreeNode[i].thirdZTreeNode.length;j++){
			        		rsParent.secondZTreeNode[i].thirdZTreeNode[j].checked = !checked;
			        	}
		        	}
		        };
		    },
		    //二级点击
        	authGroupAllCheck(parentNode,rsChild,checked) {
        		for (var i=0;i<rsChild.thirdZTreeNode.length;i++){
			    	if (rsChild.thirdZTreeNode.length){
			    		rsChild.thirdZTreeNode[i].checked = !checked;
			    	}
			    };
		        /*if (!checked){
		        	var parentAllCheck = 0;
		        	for (var i=0;i<parentNode.secondZTreeNode.length;i++){
		        		if (!parentNode.secondZTreeNode[i].checked){
				        	parentAllCheck++;
				        }
			        };
			        if(parentAllCheck == 1){
			        	parentNode.checked = true;
			        }else{
			        	parentNode.checked = false;
			        }
		        }else{
		        	parentNode.checked = false;
		        }*/
		        if (!checked){
		        	parentNode.checked = true;
		        }else{
		        	var parentAllCheck = 0;
		        	for (var i=0;i<parentNode.secondZTreeNode.length;i++){
		        		if (!parentNode.secondZTreeNode[i].checked){
				        	parentAllCheck++;
				        }
			        };
			        if(parentAllCheck == parentNode.secondZTreeNode.length - 1){
			        	parentNode.checked = false;
			        }
		        }
		    },
		    //三级点击
		    authCheck(parentTopNode,parentNode,rsChild,checked){
		    	/*if (!checked){
		        	var parentAllCheck = 0;
		        	var groupAllCheck = 0;
		        	var singleCheck = 0;
		        	for (var i=0;i<parentNode.thirdZTreeNode.length;i++){
				        if (!parentNode.thirdZTreeNode[i].checked){
				       	    groupAllCheck++;
				        };
			        };

			        for (var j=0;j<parentTopNode.secondZTreeNode.length;j++){
				        if (!parentTopNode.secondZTreeNode[j].checked){
				        	for (var k=0;k<parentTopNode.secondZTreeNode[j].thirdZTreeNode.length;k++){
						        if (!parentTopNode.secondZTreeNode[j].thirdZTreeNode[k].checked){
						        	singleCheck++;
						        }
					        };
				        	parentAllCheck++;
				        };
			        };

			        if(parentAllCheck == 1 && singleCheck== 1){
			        	parentTopNode.checked = true;
			        }else{
			        	parentTopNode.checked = false;
			        }


			        if(groupAllCheck == 1){
			        	parentNode.checked = true;
			        }else{
			        	parentNode.checked = false;
			        }
		        }else{
		        	rsChild.checked = false;
		        	parentNode.checked = false;
		        	parentTopNode.checked = false;
		        }*/
		        if (!checked){
			        parentTopNode.checked = !checked;
		        	parentNode.checked = !checked;
		        }else{
		        	var groupAllCheck = 0;
		        	for (var i=0;i<parentNode.thirdZTreeNode.length;i++){
				        if (!parentNode.thirdZTreeNode[i].checked){
				       	    groupAllCheck++;
				        };
			        };
			        if(groupAllCheck == parentNode.thirdZTreeNode.length - 1){
			        	parentTopNode.checked = false;
		        		parentNode.checked = false;
			        }
		        }
		    },
		    getAgentSelectedRows() {
                var checkedRows = $("#frmroleTab-body").find("input[name*=frmroleTab-rowItems]:checked");
                if (checkedRows && checkedRows.length === 1) {
                    var number = checkedRows[0].value.split("-|-");
                    return number[0]
                }else{
                	layer.msg.error("请选择一项");
                	return false
                }
            },
		    openAddModal(){
		    	var that = this;
		    	that.actionName = "新增";
		    	that.roleName = "";
		    	that.remark = "";
		    	that.roleValue = 0
		    	var tableDates = getSelectedRowData("frmroleTab");
		    	//var roleId = that.yzxcookie.getCookies("roleId");
		    	Utils.ajax({
                    url: window.PATH + "/frame/auth/menuTreeListByRoleId",
                    data: {roleId:""},
                    success: function(resp){
                        if( resp && resp.state===0){
                            that.menu = resp.data;
                        }else{
                            layer.msg.error(resp.message);
                        }
                    }
                })

		    	for (var k=0;k<that.menu.length;k++){
		    		that.menu[k].checked = false;
			    	for (var i=0;i<that.menu[k].secondZTreeNode.length;i++){
			        	if (that.menu[k].secondZTreeNode.length){
			        		that.menu[k].secondZTreeNode[i].checked = false;
			        	}
			        	if (that.menu[k].secondZTreeNode[i].thirdZTreeNode.length){
			        		for (var j=0;j<that.menu[k].secondZTreeNode[i].thirdZTreeNode.length;j++){
				        		that.menu[k].secondZTreeNode[i].thirdZTreeNode[j].checked = false;
				        	}
			        	}
			        };
			    }
		    	$("#editModal").modal("show");
		    },
		    openEditModal(){
		    	this.actionName = "编辑";
		    	var actionName = "edit";
		    	var that = this;
		    	var checkedRows = $("#frmroleTab-body").find("input[name*=frmroleTab-rowItems]:checked");
	            if ( !checkedRows.length) {
	                layer.msg.error("请选择");
	                return false;
	            }
	            if ( checkedRows.length > 1) {
	                layer.msg.error("只能选择一项");
	                return false;
	            }
	            //var roleId = that.yzxcookie.getCookies("roleId");
	            var tableDates = getSelectedRowData("frmroleTab");
	            that.roleName = tableDates.roleName;
	            that.remark = tableDates.remark;
	            that.roleValue = tableDates.status;
	            //console.log(tableDates);
	            Utils.ajax({
                    url: window.PATH + "/frame/auth/menuTreeListByRoleId",
                    data: {roleId:tableDates.roleId},
                    success: function(resp){
                        if( resp && resp.state===0){
                            that.menu = resp.data;
                        }else{
                            layer.msg.error(resp.message);
                        }
                    }
                })

		    	/*that.yzxhttpPost(window.PATH +'/system/system/frame/auth/menuTreeListByRoleId.ajax',{
	            	roleId:tableDates.roleId
	            }).then(function (res) {
	              if (res.status == 200){
	                  if(res.data.errorCode == 0){
	                    console.log(res);
	                	that.menu = res.data.data;
	                  }else{
	                    that.$message.error(res.data.message);
	                  }
	              }else{
	                that.$message.error('error request');
	              }
	            });*/
	            $("#editModal").modal("show");
		    }
        },
        mounted: function () {
        	var that = this;
			//resetToolsBtnStatus("frmroleTab");
        	$(function(){
              /***************************** 系统用户  *********************************/
              var lockedFormat = function(value){
                  return matchData2FormatSpan("db.tbUcpRole.status.dataPlus", value);
              };


              var roleItems = {version:15, tableKey:"roleId", i18nPrefix:"db.tbUcpRole.",
                  customComps:{
                      custom:[/*{
                          name:"modifyPsw",
                          location:2,
                          color:"danger",
                          icon:"la-asterisk",
                          click:modifyPassword
                      }*/]
                  },
                  initParams:{tableId:"frmroleTab", toolsId:"frmroleTool", urlPrefix: "/frame/role/", permissions: ['1','1','1','0'], page:"1"},
                  trs:[
                      {name: "roleId", hideEdit: "A", vali: {stringLength: 64}, width:100},
                      /*{name: "accountSystem", comType:"select",disabled:"A", vali: {stringLength: 64}, width:100,show:false},*/
                      {name: "roleName",advQry:["LIKE"], hideEdit: "A", vali: {stringLength: 64}, width:100},
                      {name: "status",advQry:["DURING"], vali: {integer:true, stringLength: 4}, hideEdit:"N",
                          comType:"select", valFormat:lockedFormat, width:60},
                      {name: "remark", hideEdit: "A", vali: {stringLength: 64}, width:100},
                      {name: "crtBy", hideEdit: "A", vali: {stringLength: 64}, width:100},
                      {name: "crtTm", hideEdit: "A", vali: {stringLength: 64}, width:140,sort:true},
                      {name: "mdfBy", hideEdit: "A", vali: {stringLength: 64}, width:100},
                      {name: "mdfTm", hideEdit: "A", vali: {stringLength: 64}, width:140,sort:true}
                  ]};
              InitTableModuleNew(roleItems);
          })
        },
        created: function () {
        	var that = this;
        	
        	/*$.ajax({
                url:window.PATH + '/system/system/frame/auth/menuTreeListByRoleId.ajax',
                dataType: "json",
                data:{},
                type:"POST",
                success:function(data){
                	if (data.errorCode == "0"){
                		console.log(data);
                		that.menu = data.data;
                	}else{
                		layer.msg.error("error");
                	}
                },
                error:function(data){
                    layer.msg.error("error");
                }

            })*/
			/*this.yzxhttpPost('http://172.16.1.15:85'+'api/system/frame/auth/menuTreeListByRoleId.ajax',{
			}).then(function (res) {
			  if(res.errorCode==0){
			    console.log(res.data);
			  }else{
			    console.log(res);
			  }
			});*/
		}/*,
        components: {},
		beforeCreate: function () {},
		created: function () {},
		beforeMount: function () {
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
		}*/
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    
</style>
