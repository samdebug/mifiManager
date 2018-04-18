<template>
  <div id="vifiDeviceNew">
    <div class="bs-example">
      <div class="row">
        <div class="col-xs-12 col-md-12">
          <div class="widget no-margin-bottom">
            <div class="widget-body no-padding">
              <div class="row" style="padding-top: 25px;">
                                      <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                          <a class="dashboard-stat dashboard-stat-v2 blue" href="#" style="height: 100px;">
                                              <div class="visual">
                                                  <!-- <i class="la la-user"></i> -->
                                              </div>
                                              <div class="details">
                                                  <div class="number">
                                                      <span data-counter="counterup" data-value="1349">MiFi设备</span>
                                                  </div>
                                                  <div class="desc" id="deviceTotal">0</div>
                                              </div>
                                          </a>
                                      </div>
                                      <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                          <a class="dashboard-stat dashboard-stat-v2 red" href="#" style="height: 100px;">
                                              <div class="visual">
                                                  <!-- <i class="la la-device"></i> -->
                                              </div>
                                              <div class="details">
                                                  <div class="number">
                                                      <span data-counter="counterup" data-value="1349">在线设备</span>
                                                  </div>
                                                  <div class="desc alarm-target" id="deviceOnline">0</div>
                                              </div>
                                          </a>
                                      </div>
                                      <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                          <a class="dashboard-stat dashboard-stat-v2 green" href="#" style="height: 100px;">
                                              <div class="visual">
                                                  <!-- <i class="la la-user"></i> -->
                                              </div>
                                              <div class="details">
                                                  <div class="number">
                                                      <span  data-counter="counterup" data-value="1349">今日活跃</span>
                                                  </div>
                                                  <div class="desc feedback-target" id="deviceActive">0</div>
                                              </div>
                                          </a>
                                      </div>
                                      <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                          <a class="dashboard-stat dashboard-stat-v2 purple" href="#" style="height: 100px;">
                                              <div class="visual">
                                                  <!-- <i class="la la-money"></i> -->
                                              </div>
                                              <div class="details">
                                                  <div class="number">
                                                      <span data-counter="counterup" data-value="1349">本月新增</span>
                                                  </div>
                                                  <div class="desc" id="deviceNew">0</div>
                                              </div>
                                          </a>
                                      </div>
                                  </div>
              <div id="searchable_wrapper">
                <div class="tabbable">
                  <ul class="nav nav-tabs">
                    <!-- tab标签组 -->
                    <li class="flag-tabs-btn tab-blue active" id="viFiDeviceNewBtn3">
                      <a data-toggle="tab" href="javaScript:void(0)" onclick="switchTabAndTools('viFiDeviceNewTab3','viFiDeviceNewTool3')">
                        <span class="tab-title">MiFi设备</span></a>
                    </li>

                    <li class="flag-tabs-btn tab-blue" id="vifiActionBtn4">
                      <a data-toggle="tab" href="javaScript:void(0)" onclick="switchTabAndTools('viFiDeviceNewTab4','viFiDeviceNewTool4')">MiFi新增日志</a>
                    </li>

                    <li class="flag-tabs-btn tab-blue" id="vifiActionBtn2">
                      <a data-toggle="tab" href="javaScript:void(0)" onclick="switchTabAndTools('vifiActionTab2','vifiActionTool2')">MiFi设备活动</a>
                    </li>
                    <!-- tab2-工具按钮组 -->
                    <li class="head-tools-r navbar-right flag-tools" style=""  id="viFiDeviceNewTool3">
                      <div class="btn primary f-p-tips" style="font-size: 14px;padding: 4px 12px;margin-left:3.56px;" id="operation"><i style="font-size: 18px;" class="la la-wrench"></i><div class="f-t-tips">操作</div></div>
                    </li>
                    <li class="head-tools-r navbar-right flag-tools" style=""  id="viFiDeviceNewTool4"></li>
                    <li class="head-tools-r navbar-right flag-tools" style=""  id="vifiActionTool2"></li>
                  </ul>
                  <!-- tab页面组 -->
                  <div class="tab-content no-padding tabs-flat" style="border-radius:0;">
                    <div id="viFiDeviceNewTab3" class="flag-tabs tab-pane active" style="border-radius:0;"></div>
                    <div id="viFiDeviceNewTab4" class="flag-tabs tab-pane" style="border-radius:0;"></div>
                    <div id="vifiActionTab2" class="flag-tabs tab-pane" style="border-radius:0;"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- 分析模态框  uuwifi活动记录-->
    <div class="modal fade modal-primary" id="anls_vifiAction"  aria-hidden="true">
      <div class="modal-dialog" style="width:740px;margin:50px auto;">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" @click="clsAnalysis_vifiAction"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title text-success" id="">
                <span><i class=" fa fa-edit"></i>
                <span id="anls_vifiAction_VifiId" style="font-size:13px;"></span><span style="font-size:13px;">/</span>
                <span id="anls_vifiAction_Date" style="font-size:13px;"></span>
                <input id="anls_vifiAction_dateVal" type="hidden" value=""/>
          </span>
            </h4>
          </div>
          <div class="modal-body bg-white no-padding" style="overflow-y:auto;max-height: 80vh;">
            <div id="anls_vifiAction_content" style="margin: 50px 10px 20px 10px;"></div>
            <div id="actionsHeatMap" style="height:170px;width:700px;margin:10px;"></div>
            <div style="margin:0 10px 30px 10px;">
              <table width="150px;" class="">
                <tbody>
                <tr><td width="50px;"><div class="analysis-color" style="background: #1500ce;"></div></td><td>取卡</td>
                  <td>成功</td><td><span id="getSuccess_vifiAction"></span></td></tr>
                <tr><td><div class="analysis-color" style="background: #fc000a;"></div></td><td>取卡</td>
                  <td>失败</td><td><span id="getFailure_vifiAction"></span></td></tr>
                <tr><td><div class="analysis-color" style="background: #35ebff;"></div></td><td>连接</td>
                  <td>成功</td><td><span id="openSuccess_vifiAction"></span></td></tr>
                <tr><td><div class="analysis-color" style="background: #fffa35;"></div></td><td>连接</td>
                  <td>失败</td><td><span id="openFailure_vifiAction"></span></td></tr>
                <tr><td><div class="analysis-color" style="background: #3bd92d;"></div></td><td>连接</td>
                  <td>-</td><td><span id="update_vifiAction"></span></td></tr>
                <tr><td><div class="analysis-color" style="background: #999;"></div></td><td>断开</td>
                  <td>-</td><td><span id="close_vifiAction"></span></td></tr>
                </tbody>
              </table>

            </div>
          </div>
          <div class="modal-footer">
            <button id="vifiActionBtnYest" style="float:left;" class="btn btn-primary" aria-label="Close">前一天</button>
            <button id="vifiActionBtnTomo" style="float:left" class="btn btn-primary" aria-label="Close">后一天</button>
            <button class="btn btn-danger" @click="clsAnalysis_vifiAction" aria-label="Close">关闭</button></div>
        </div>
      </div>
    </div>

    <div class="modal fade modal-primary" id="ImportNewModal" aria-hidden="true">
      <div class="modal-dialog" style="">
        <div class="modal-content">
          <form id="ImportNewModal-form" class="form-horizontal bv-form" onchange="" novalidate="novalidate">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title text-primary"><i class="fa fa-edit"></i>批量导入</h4>
            </div>
            <div class="ng-scope" style="padding-top:15px;" id="ng-scope-uploader">
              <!-- <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">设备组<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="padding-left:0;padding-right:0;">
                    <div class="ng-scope" id="">
                      <select id="ImportNewModalGroupId" name="ImportNewModalGroupId" style="width: 100%;" tabindex="-1">
                      </select>
                    </div>
                  </div>
                </div>
              </div> -->
              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">设备型号<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="padding-left:0;padding-right:0;">
                    <div class="ng-scope" id="">
                      <input type="text" v-model="upLoadData.deviceType" id="ImportNewModalDeviceType" name="ImportNewModalDeviceType" placeholder="请输入设备型号" class="form-control input-sm layer-date">
                      <i class="form-control-feedback" style="display: none;"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">设备计费方式<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="padding-left:0;padding-right:0;">
                    <div class="ng-scope" id="">
                      <select id="ImportNewModalAccountType" name="ImportNewModalAccountType" style="width: 100%;" tabindex="-1">
                        <option value="1" selected = "selected">设备套餐计费</option>
                        <option value="2">账户套餐计费</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <!-- <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">流量套餐<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="padding-left:0;padding-right:0;">
                    <div class="ng-scope" id="">
                      <select id="ImportNewModalKeyDataPkgID" name="ImportNewModalKeyDataPkgID" style="width: 100%;" tabindex="-1">
                      </select>
                    </div>
                  </div>
                </div>
              </div> -->
              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">设备销售价(元)<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="padding-left:0;padding-right:0;">
                    <div class="ng-scope" id="">
                      <input type="text" v-model="upLoadData.salePrice" id="ImportNewModalSalePrice" name="ImportNewModalSalePrice" placeholder="请输入设备销售价(元)" class="form-control input-sm layer-date">
                      <i class="form-control-feedback" style="display: none;"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">设备成本价(元)<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="padding-left:0;padding-right:0;">
                    <div class="ng-scope" id="">
                      <input type="text" v-model="upLoadData.costPrice" id="ImportNewModalCostPrice" name="ImportNewModalCostPrice" placeholder="请输入设备成本价(元)" class="form-control input-sm layer-date">
                      <i class="form-control-feedback" style="display: none;"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">服务级别<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="padding-left:0;padding-right:0;">
                    <div class="ng-scope" id="">
                      <input type="text" v-model="upLoadData.cos" id="ImportNewModalCostPrice" name="ImportNewModalCostPrice" placeholder="请输入服务级别" class="form-control input-sm layer-date">
                      <i class="form-control-feedback" style="display: none;"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">更新周期(秒)<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="padding-left:0;padding-right:0;">
                    <div class="ng-scope" id="">
                      <input type="text" v-model="upLoadData.expire" id="ImportNewModalCostPrice" name="ImportNewModalCostPrice" placeholder="请输入更新周期(秒)" class="form-control input-sm layer-date">
                      <i class="form-control-feedback" style="display: none;"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">分配代理商<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="padding-left:0;padding-right:0;">
                    <div class="ng-scope" id="">
                      <select id="ImportNewModalAgent" name="ImportNewModalAgent" style="width: 100%;" tabindex="-1">
                      </select>
                      <!-- <input type="text" id="modalIdxSCGroupID" name="modalIdxSCGroupID" placeholder="" class="form-control input-sm layer-date">
                      <i class="form-control-feedback" style="display: none;"></i> -->
                    </div>
                  </div>
                </div>
              </div>  

              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">供应商名称<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"></span>
                  </label>
                  <div class="col-sm-8" style="padding-left:0;padding-right:0;">
                    <div class="ng-scope" id="">
                      <input type="text" v-model="upLoadData.supplierName" id="ImportNewModalSupplierName" name="ImportNewModalSupplierName" placeholder="请输入供应商名称" class="form-control input-sm layer-date">
                      <i class="form-control-feedback" style="display: none;"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">供应商联系人<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"></span>
                  </label>
                  <div class="col-sm-8" style="padding-left:0;padding-right:0;">
                    <div class="ng-scope" id="">
                      <input type="text" v-model="upLoadData.supplierContactUser" id="ImportNewModalSupplierContactUser" name="ImportNewModalSupplierContactUser" placeholder="请输入供应商联系人" class="form-control input-sm layer-date">
                      <i class="form-control-feedback" style="display: none;"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">供应商电话<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"></span>
                  </label>
                  <div class="col-sm-8" style="padding-left:0;padding-right:0;">
                    <div class="ng-scope" id="">
                      <input type="text" v-model="upLoadData.supplierContactPhone" id="ImportNewModalSupplierContactPhone" name="ImportNewModalSupplierContactPhone" placeholder="请输入供应商电话" class="form-control input-sm layer-date">
                      <i class="form-control-feedback" style="display: none;"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">采购员<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"></span>
                  </label>
                  <div class="col-sm-8" style="padding-left:0;padding-right:0;">
                    <div class="ng-scope" id="">
                      <input type="text" v-model="upLoadData.buyer" id="ImportNewModalBuyer" name="ImportNewModalBuyer" placeholder="请输入采购员" class="form-control input-sm layer-date">
                      <i class="form-control-feedback" style="display: none;"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">采购员电话<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"></span>
                  </label>
                  <div class="col-sm-8" style="padding-left:0;padding-right:0;">
                    <div class="ng-scope" id="">
                      <input type="text" v-model="upLoadData.buyerPhone" id="ImportNewModalBuyerPhone" name="ImportNewModalBuyerPhone" placeholder="请输入采购员电话" class="form-control input-sm layer-date">
                      <i class="form-control-feedback" style="display: none;"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">备注<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"></span>
                  </label>
                  <div class="col-sm-8" style="padding-left:0;padding-right:0;">
                    <div class="ng-scope" id="">
                      <input type="text" v-model="upLoadData.remark" id="ImportNewModalRemark" name="ImportNewModalRemark" placeholder="请输入备注" class="form-control input-sm layer-date">
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
                        :on-exceed="uploadExceed"
                        :on-error="uploadError"
                        :on-success="uploadSuccess"
                        :http-request="uploadSubmit"
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

              <!-- <div class="form-group has-feedback" id="form-uploaderDom">
                <div data-input="">
                    <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">选择上传Excel<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span></label>
                    <div class="col-sm-8">
                      <div class="ng-scope" id="" style="padding-top: 10px;">
                      <span class="c-red" style="padding-left: 20px;color: red;"><spring:message code="db.tbViFiDevice.uploadMaxLen"/></span>
                      <div class="export">
                        <button class="btn btn-primary btn-export" type="button" @click="DownLoad">模板导出</button>
                        <i class="fa fa-cloud-download"></i>
                        <button class="btn btn-sm btn-primary" type="button" onClick="relUpload()">
                        <i class="fa fa-refresh"></i><spring:message code="db.tbViFiDevice.reUpload"/></button>
                        <button class="btn btn-sm btn-primary" type="button" onClick="Back()">
                        <i class="fa fa-close"></i>返回</button>
                      </div>
                 
                      <div id="uploader" class="wu-example">
                        <div class="queueList">
                            <div id="dndArea" class="placeholder">
                                <div id="filePicker"></div>
                                <p>或将Excel文件拖到这里</p>
                            </div>
                        </div>
                        <div class="statusBar" style="display:none;">
                          <div class="progress">
                            <span class="text">0%</span>
                            <span class="percentage"></span>
                          </div>
                          <div class="info"></div>
                          <div class="btns">
                            <div class="uploadBtn">开始上传</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->
            </div>
            <div class="modal-footer " style="background-color:#FFFFFF;">
              <a href="javaScript:;" class="el-button el-button--primary" style="" @click="submitUpload">保存</a>
              <button class="el-button el-button--default" data-dismiss="modal" aria-label="Close">取消</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="modal fade modal-primary" id="cmdModal" aria-hidden="true">
      <div class="modal-dialog" style="width:740px;margin:50px auto;">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" data-dismiss="modal" class="close" onclick="clsAnalysis_vifiAction()">&times;</button>
            <h4 class="modal-title text-success"><span><i class="fa fa-edit"></i>操作</span></h4>
          </div>
          <div class="modal-body bg-white" style="overflow-y:auto;max-height: 80vh; padding:15px 0px;">
            <div style="margin:0 20px 5px 0px;">
                <span class="adv-name" style="text-align: right;">设备ID：</span>
                <div class="adv-value">
                  <div>
                    <input type="text" name="idxViFiID" class="input-sm" placeholder="请输入设备ID"/>
                  </div>
                </div>
            </div>
            <div style="margin:0 20px 5px 0px;">
                <span class="adv-name" style="text-align: right;">控制类型：</span>
                <div class="adv-value">
                  <div>
                    <select type="text" id="cmd" name="cmd" class="input-sm" style="width:100%;"></select>
                  </div>
                </div>
            </div>
            <div class="dev-con" style="margin:0 20px 5px 0px;display:none;">
              <span class="adv-name" style="text-align: right;">修改设备：</span>
              <div class="adv-value"><div>
                <select type="text" name="dev" class="input-sm" style="width:100%;" multiple="multiple"></select>
              </div></div></div>

            <div class="log-con" style="margin:0 20px 5px 0px;">
                <span class="adv-name" style="text-align: right;">获取日志：</span>
                <div class="adv-value"><div>
                  <select type="text" id="logSelect" name="log" class="input-sm" style="width:100%;"></select>
                </div></div></div>

            <div class="power-con" style="margin:0 20px 5px 0px;display:none;">
              <span class="adv-name" style="text-align: right;">省电待机(秒)：</span>
              <div class="adv-value"><div>
                <input type="text" name="power" class="input-sm" placeholder="请输入进入省电模式需要时长"/>
              </div></div></div>

            <div class="ssid-con" style="margin:0 20px 5px 0px;display:none;">
              <span class="adv-name" style="text-align: right;">SSID：</span>
              <div class="adv-value"><div>
                  <input type="text" name="ssid" class="input-sm" placeholder="请输入SSID"/>
              </div></div></div>

            <div class="pwd-con" style="margin:0 20px 5px 0px;display:none;">
              <span class="adv-name" style="text-align: right;">PWD：</span>
              <div class="adv-value"><div>
                  <input type="text" name="pwd" class="input-sm" placeholder="请输入PWD"/>
              </div></div></div>
          </div>
          <div class="modal-footer">
              <a href="javaScript:;" id="vifiCmdSave" class="el-button el-button--primary" style="">保存</a>
              <button class="el-button el-button--default" data-dismiss="modal" aria-label="Close">取消</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade modal-primary" id="deviceDistributeModal" aria-hidden="true">
      <div class="modal-dialog" style="">
        <div class="modal-content">
          <form id="distribute-form" class="form-horizontal bv-form" onchange="" novalidate="novalidate">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title text-primary"><i class="fa fa-edit"></i>设备分配</h4>
            </div>
            <div class="ng-scope" style="padding-top:15px;">
              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">选择设备数量<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="padding-left:0;padding-right:0;">
                    <div class="ng-scope" id="">
                      <input type="text" id="deviceDistributeModalSelectNum" name="deviceDistributeModalSelectNum" placeholder="" class="form-control input-sm layer-date" data-bv-field="name" disabled>
                      <i class="form-control-feedback" data-bv-field="name" style="display: none;"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">分配代理商<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="padding-left:0;padding-right:0;">
                    <div class="ng-scope" id="">
                      <select id="deviceDistributeModalAgent" name="deviceDistributeModalAgent" style="width: 100%;" tabindex="-1">
                      </select>
                      <!-- <input type="text" id="modalIdxSCGroupID" name="modalIdxSCGroupID" placeholder="" class="form-control input-sm layer-date">
                      <i class="form-control-feedback" style="display: none;"></i> -->
                    </div>
                  </div>
                </div>
              </div>  

              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">设备计费方式<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="padding-left:0;padding-right:0;">
                    <div class="ng-scope" id="">
                      <select id="deviceDistributeModalAccountType" name="deviceDistributeModalAccountType" style="width: 100%;" tabindex="-1">
                        <option value="1" selected = "selected">设备套餐计费</option>
                        <option value="2">账户套餐计费</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">备注 <span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"></span>
                  </label>
                  <div class="col-sm-8" style="padding-left:0;padding-right:0;">
                    <div class="ng-scope" id="">
                      <input type="text" id="deviceDistributeModalRemark" name="deviceDistributeModalRemark" placeholder="请输入备注" class="form-control input-sm layer-date">
                      <i class="form-control-feedback" style="display: none;"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer " style="background-color:#FFFFFF;">
              <a href="javaScript:;" class="el-button el-button--primary pass" style="">保存</a>
              <button class="el-button el-button--default" data-dismiss="modal" aria-label="Close">取消</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="modal fade modal-primary" id="deviceCheckOutModal" aria-hidden="true">
      <div class="modal-dialog" style="">
        <div class="modal-content">
          <form id="orderConfirmModal-new-form" class="form-horizontal bv-form" onchange="" novalidate="novalidate">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title text-primary"><i class="fa fa-edit"></i>设备验收</h4>
            </div>
            <div class="ng-scope" style="padding-top:15px;">
              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">选择设备数量<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="padding-left:0;padding-right:0;">
                    <div class="ng-scope" id="">
                      <input type="text" id="deviceCheckOutModalSelectNum" name="deviceCheckOutModalSelectNum" placeholder="" class="form-control input-sm layer-date" data-bv-field="name" disabled>
                      <i class="form-control-feedback" data-bv-field="name" style="display: none;"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">是否通过<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"><b>*</b></span>
                  </label>
                  <div class="col-sm-8" style="padding-left:0;padding-right:0;">
                    <div class="ng-scope" id="">
                      <select id="deviceCheckOutModalStatus" name="deviceCheckOutModalStatus" style="width: 100%;" tabindex="-1">
                        <option value="0">通过</option>
                        <option value="1">不通过</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group has-feedback">
                <div data-input="">
                  <label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">备注<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;"></span>
                  </label>
                  <div class="col-sm-8" style="padding-left:0;padding-right:0;">
                    <div class="ng-scope" id="">
                      <input type="text" id="deviceCheckOutModalRemark" name="deviceCheckOutModalRemark" placeholder="请输入备注" class="form-control input-sm layer-date">
                      <i class="form-control-feedback" style="display: none;"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer " style="background-color:#FFFFFF;">
              <a href="javaScript:;" class="el-button el-button--primary pass" style="">保存</a>
              <button class="el-button el-button--default" data-dismiss="modal" aria-label="Close">取消</button>
              <!-- <a class="btn btn-success pass" style="" >提交</a>
              <button class="btn btn-danger" data-dismiss="modal" aria-label="Close">取消</button> -->
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script> 
      /*import "../../../static/js/webuploader/webuploader.min.js"
      import "../../../static/js/webuploader/webuploader-excel.js"*/
      import echarts from 'echarts'
      export default {
        data() {
          return {
            uploaderURL:window.PATH + "/device/import",
            upLoadData:{
                //deviceGroupId:"",
                deviceType:"",
                cos:"Ntls",
                expire:"180",
                //keyDataPkgID:"",
                salePrice:"",
                costPrice:"",
                supplierName:"",
                supplierContactUser:"",
                supplierContactPhone:"",
                buyer:"",
                buyerPhone:"",
                remark:"",
                userId:this.yzxcookie.getCookies("userId"),
                referType:this.yzxcookie.getCookies("referType")
            }
          }
        },
        methods: {
          uploadSubmit(opt){
            /*if (opt.file.type.split("/")[0] != "image"){
              this.$message.error('只能上传图片格式文件');
              this.$refs.upload.clearFiles();
              return false;
            }*/
            
            if (this.upLoadData.deviceType == "" || this.upLoadData.salePrice == "" || this.upLoadData.costPrice == "" ||this.upLoadData.cos == ""||this.upLoadData.expire == ""){
                this.$message.error('必填字段');
                return false
            }
            
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
            
            var r =  /^[0-9]+.?[0-9]*$/;
            if (!r.test(this.upLoadData.salePrice) || !r.test(this.upLoadData.costPrice)){
                layer.msg.error("请输入数字");
                return false;
            }

            if ((this.upLoadData.salePrice).toString().split(".").length >= 2 || (this.upLoadData.costPrice).toString().split(".").length >= 2){
                if ((this.upLoadData.salePrice).toString().split(".")[1].length > 2){
                  layer.msg.error("请输入最多两位小数");
                  return false;
                }
            }
          
            var idxAgentID = $("#ImportNewModalAgent").val();
            if (!idxAgentID){
              return layer.msg.error("请选择");
            }

            var accountTypeID = $("#ImportNewModalAccountType").val();
            if (!accountTypeID){
              return layer.msg.error("请选择");
            }

            form_data.append('file', opt.file);
            form_data.append('deviceType', this.upLoadData.deviceType);
            form_data.append('ucpAccountType', accountTypeID);
            
            form_data.append('salePrice', this.upLoadData.salePrice*100);
            form_data.append('costPrice', this.upLoadData.costPrice*100);

            form_data.append('cos', this.upLoadData.cos);
            form_data.append('expire', this.upLoadData.expire);
            
            form_data.append('agentId', idxAgentID);

            form_data.append('supplierName', this.upLoadData.supplierName);
            form_data.append('supplierContactUser', this.upLoadData.supplierContactUser);
            form_data.append('supplierContactPhone', this.upLoadData.supplierContactPhone);
            form_data.append('buyer', this.upLoadData.buyer);
            form_data.append('buyerPhone', this.upLoadData.buyerPhone);
            form_data.append('remark', this.upLoadData.remark);

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
                    //that.imgUrl = data.data.relativePath;
                    $("#ImportNewModal").modal("hide");
                    that.$refs.upload.clearFiles();
                    switchTabAndTools('viFiDeviceNewTab3','viFiDeviceNewTool3');
                    return layer.msg.success("上传成功");
                  }else{
                    return layer.msg.error(data.message);
                  }
                },error:function(){
                  return layer.msg.error("上传失败");
                }
            });
          },
          clsAnalysis_vifiAction(){
            $("#anls_vifiAction").modal("hide");
          },
          downloadModel(){
            $(function(){
              exportRowModel("mifi_import",window.SUBPATH + "/download/MiFi设备导入模板.xls");
            })
          },
          DownLoad(){
              window.location.href="/vsw/viFiDeviceNew/modelDown";
          },
          submitUpload() {
            //this.beforeUpload();
            if (this.upLoadData.deviceType == "" || this.upLoadData.salePrice == "" || this.upLoadData.costPrice == "" || this.upLoadData.cos == "" || this.upLoadData.expire == ""){
                this.$message.error('必填字段');
                return false
            }
            this.$refs.upload.submit();
          },
          beforeUpload(file){
            /*if (this.upLoadData.deviceType == "" || this.upLoadData.salePrice == "" || this.upLoadData.costPrice == ""){
                this.$message.error('必填字段');
                return false
            }
            const extension = file.name.split('.')[1] === 'xls'
            const extension2 = file.name.split('.')[1] === 'xlsx'
            //const isLt2M = file.size / 1024 / 1024 < 10
            if (!extension && !extension2) {
              this.$message.error('上传模板只能是xls、xlsx格式');
              return false
            }*/
            /*if (!isLt2M) {
              console.log('上传模板大小不能超过 10MB!')
            }*/
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
          }
        },
        mounted: function () {
          var that = this;
          $(function(){
              $("#ImportNewModal").on("hidden.bs.modal", function() {
                $("#ImportNewModalGroupId").val("");
                $("#ImportNewModalDeviceType").val("");
                $("#ImportNewModalKeyDataPkgID").val("");
                $("#ImportNewModalSalePrice").val("");
                $("#ImportNewModalCostPrice").val("");
                $("#ImportNewModalSupplierName").val("");
                $("#ImportNewModalSupplierContactUser").val("");
                $("#ImportNewModalSupplierContactPhone").val("");
                $("#ImportNewModalBuyer").val("");
                $("#ImportNewModalBuyerPhone").val("");
                $("#ImportNewModalRemark").val("");
                that.$refs.upload.clearFiles();
                //$("#ImportNewModal-new-form").data('bootstrapValidator').resetForm();
                  //formValidator();
            });

            /*$('#ImportNewModal').on('show.bs.modal', function(){
              $("#form-uploaderDom").remove();
                var uploaderDom = '<div class="form-group has-feedback" id="form-uploaderDom"><div data-input=""><label class="control-label col-sm-3" style="padding-left:0px;padding-right:0px">选择上传Excel<span class="required" style="color:red;width:8px;display:inline-block;margin:0 5px 0 10px;" aria-required="true"><b>*</b></span></label><div class="col-sm-8"><div class="ng-scope" id="" style="padding-top: 10px;"><!-- <span class="c-red" style="padding-left: 20px;color: red;">最多只能上传4000条</span> --><div class="export"><button class="btn btn-primary btn-export" type="button" @click="DownLoad">模板导出</button><!-- <button class="btn btn-sm btn-primary" type="button" onClick="relUpload()"><i class="fa fa-refresh"></i>重新上传</button> --><!-- <button class="btn btn-sm btn-primary" type="button" onClick="Back()"><i class="fa fa-close"></i>返回</button> --></div><div id="uploader" class="wu-example"><div class="queueList"><div id="dndArea" class="placeholder"><div id="filePicker" class="webuploader-container"><div class="webuploader-pick">选择文件</div><div id="rt_rt_1buumoipsgvc66u18ngp8scbk1" style="position: absolute; top: -33px; left: 126px; width: 132px; height: 48px; overflow: hidden;"><input type="file" name="file" class="webuploader-element-invisible" multiple="multiple" accept="application/xls,application/xlsx"><label style="opacity: 0; width: 100%; height: 100%; display: block; cursor: pointer; background: rgb(255, 255, 255);"></label></div></div><p>或将Excel文件拖到这里</p></div><ul class="filelist"></ul></div><div class="statusBar" style="display:none;"><div class="progress" style="display: none;"><span class="text">0%</span><span class="percentage" style="width: 0%;"></span></div><div class="info"></div><div class="btns"><div class="uploadBtn state-pedding">开始上传</div></div></div></div></div></div></div></div>';

                $("#ng-scope-uploader").append(uploaderDom);
                $.getScript("/static/js/webuploader/webuploader.min.js");
                $.getScript("/static/js/webuploader/webuploader-excel.js");
            });

            $("#ImportNewModal-new-form").validate({
                rules:{
                  ImportNewModalGroupId:{
                        required:true
                    },
                    ImportNewModalDeviceType:{
                        required:true
                    },
                    ImportNewModalKeyDataPkgID:{
                        required:true
                    },
                    ImportNewModalSalePrice:{
                        required:true,
                        number:true
                    },
                    ImportNewModalCostPrice:{
                        required:true,
                        number:true
                    }
                },
                messages:{
                  ImportNewModalGroupId:{
                        required:getJsonData("bootstrapValidator.required")
                    },
                    ImportNewModalDeviceType:{
                       required:getJsonData("bootstrapValidator.required")
                    },
                    ImportNewModalKeyDataPkgID:{
                        required:getJsonData("bootstrapValidator.required")
                    },
                    ImportNewModalSalePrice:{
                        required:getJsonData("bootstrapValidator.required"),
                        number: getJsonData("bootstrapValidator.numeric")
                    },
                    ImportNewModalCostPrice:{
                        required:getJsonData("bootstrapValidator.required"),
                        number: getJsonData("bootstrapValidator.numeric")
                    }             
                }      
            })                */
            
              //概括信息
              Utils.ajax({
                  url: window.PATH + "/device/outlineInfo",
                  data: {},
                  success: function(resp){
                      if( resp && resp.state===0){
                          $("#deviceTotal").text(resp.data.list[0].allDeviceCount);
                          $("#deviceOnline").text(resp.data.list[0].onlineDeviceCount);
                          $("#deviceActive").text(resp.data.list[0].activeDeviceCount);
                          $("#deviceNew").text(resp.data.list[0].addMonthDeviceCount);
                      }else{
                          layer.msg.error(resp.message);
                      }
                  }
              })



              var permi = ["0","0","0","0"];
              var cosDefault = "Ntls";

              /**
               * UUWIFI设备
               */

              function openBatchImportModal(){
                  var $modal = $("#batchImportModal");
                  $modal.modal("show");
              }

              var deviceUrl = "/vsw/viFiDeviceNew/";
              function getDeviceSelectedRows() {
                  var checkedsubList = $("input[name*='viFiDeviceNewTab4-rowItems']:checked").length;
                  return checkedsubList;
              }

              function openImportNewModal(){
                  var $modal = $("#ImportNewModal"); 
                 /* Utils.ajax({
                      url: window.PATH + deviceUrl +"packageS2Data.ajax",
                      data: {},
                      success: function(resp){
                          if( resp && resp.state===0){
                              $("#ImportNewModalKeyDataPkgID").empty();
                              for (var i=0;i<resp.data.items.length;i++){
                                  $("#ImportNewModalKeyDataPkgID").append("<option value='" + resp.data.items[i].id + "'>" + resp.data.items[i].text + "</option>");
                              }
                          }
                      }
                  })*/
                 /* Utils.ajax({
                      url: window.PATH + deviceUrl +"viFiGrpS2Data.ajax",
                      data: {},
                      success: function(resp){
                          if( resp && resp.state===0){
                              $("#ImportNewModalGroupId").empty();
                              for (var i=0;i<resp.data.items.length;i++){
                                  $("#ImportNewModalGroupId").append("<option value='" + resp.data.items[i].id + "'>" + resp.data.items[i].text + "</option>");
                              }
                          }
                      }
                  })*/
                  //沿用select2下拉框
                  $("#ImportNewModalAccountType").val("1");
                  var item = {editInit:false,url:window.PATH + "/sysconfig/agentManager/agentS2Data"};
                  var selector = '#ImportNewModal-form [name="ImportNewModalAgent"]';
                  var placeholder = "请选择代理商";
                  select2DataImpl({
                      params: item,
                      selector: selector,
                      placeholder: placeholder,
                      tableKeyVal: 3120174000000797,
                      multiple: false
                  });

                  $("#ImportNewModalAgent").empty();
                  //$("#ImportNewModalAgent").select2('val','');
                  that.upLoadData.deviceType = "";
                  that.upLoadData.salePrice = ""
                  that.upLoadData.costPrice = "";
                  that.upLoadData.cos = "Ntls";
                  that.upLoadData.expire = "180";
                  that.upLoadData.supplierName = "";
                  that.upLoadData.supplierContactUser = "";
                  that.upLoadData.supplierContactPhone = "";
                  that.upLoadData.buyer = "";
                  that.upLoadData.buyerPhone = "";
                  that.upLoadData.remark = "";
                  $modal.modal("show");
              }

              function openDeviceCheckOutModal(){
                  var $modal = $("#deviceCheckOutModal");
                  var DeviceId = $("input[name*='viFiDeviceNewTab3-rowItems']:checked").length;
                  if(!DeviceId){
                      layer.msg.error("no selected rows!");
                      return;
                  }
                  $("#deviceCheckOutModalSelectNum").val(DeviceId);
                  $modal.modal("show");
              }

              $("#deviceCheckOutModal").find(".modal-footer>a").click(function(e){
                  if( $(e.target).hasClass("pass")){
                      checkOutConfirm();
                  }
              });

              function checkOutConfirm(){
                  var checkedsubList = $("input[name*='viFiDeviceNewTab3-rowItems']:checked");
                  var idList = [];

                  for (var i=0;i<checkedsubList.length;i++){
                      var number = checkedsubList[i].value.split("-|-");
                      idList.push(number[0]);
                  }

                  var isSucceed = $("#deviceCheckOutModalStatus").val();
                  var remark = $("#deviceCheckOutModalRemark").val();
                  Utils.ajax({
                      url: window.PATH + "/device/check",
                      data: {idList: idList, isSucceed :isSucceed ,remark:remark},
                      success: function(resp){
                          if( resp && resp.state===0){
                              layer.msg.success(getJsonData("agentLevel.success"));
                              $("#deviceCheckOutModal").modal("hide");
                              //refresh
                              switchTabAndTools('viFiDeviceNewTab3','viFiDeviceNewTool3');
                          }else{
                              layer.msg.error(getJsonData("agentLevel.failed")+(resp.message||""));
                          }
                      }
                  })
              }

              function openDeviceDistributeModal(){
                  var DeviceId = $("input[name*='viFiDeviceNewTab3-rowItems']:checked").length;
                  if(!DeviceId){
                      layer.msg.error("no selected rows!");
                      return;
                  }
                  $("#deviceDistributeModalSelectNum").val(DeviceId);
                  var $modal = $("#deviceDistributeModal");
                  /*Utils.ajax({
                      url: window.PATH + "/sysconfig/agentManager/agentS2Data.ajax",
                      data: {},
                      success: function(resp){
                          if( resp && resp.state===0){
                              $("#deviceDistributeModalAgent").empty();
                              console.log(resp);
                              for (var i=0;i<resp.data.items.length;i++){
                                  $("#deviceDistributeModalAgent").append("<option value='" + resp.data.items[i].id + "'>" + resp.data.items[i].text + "</option>");
                              }
                          }
                      }
                  })*/

                  $("#deviceDistributeModalAccountType").val("1");
                  //沿用select2下拉框
                  var tableId = "viFiDeviceNewTab3";
                  var tableDates = getSelectedRowData(tableId);
                  var url = window.PATH + "/sysconfig/agentManager/agentS2Data";
                  var columnVal = tableDates.idxAgentID;
                  var selector = '#distribute-form [name="deviceDistributeModalAgent"]';  
                  var item = {editInit:true,url:url};
                  var placeholder = "请选择代理商";
                  select2DataImpl({
                      params: item,
                      selector: selector,
                      placeholder: placeholder,
                      tableKeyVal: 3120174000000797,
                      multiple: false
                  });
                  $modal.modal("show");
                  var colText = columnVal ? initEditS2Text(url, columnVal, 3120174000000797) : columnVal;
                  $(selector).append("<option value='" + columnVal + "'>" + colText + "</option>");
                  $(selector).val(columnVal).trigger("change");
              }

              $("#deviceDistributeModal").find(".modal-footer>a").click(function(e){
                  if( $(e.target).hasClass("pass")){
                      distributeConfirm();
                  }
              });

              $("#ImportNewModal").find(".modal-footer>a").click(function(e){
                  if( $(e.target).hasClass("pass")){
                      ImportNewConfirm();
                  }
              });

              function distributeConfirm() {
                  var checkedsubList = $("input[name*='viFiDeviceNewTab3-rowItems']:checked");
                  var idList = [];

                  for (var i=0;i<checkedsubList.length;i++){
                      var number = checkedsubList[i].value.split("-|-");
                      idList.push(number[0]);
                  }

                  var remark = $("#deviceDistributeModalRemark").val();
                  var idxAgentID = $("#deviceDistributeModalAgent").val();
                  var accountTypeID = $("#deviceDistributeModalAccountType").val();

                  if (!idxAgentID){
                    return layer.msg.error("请选择代理商");
                  }

                  if (!accountTypeID){
                    return layer.msg.error("请选择计费方式");
                  }
                  
                  Utils.ajax({
                      url: window.PATH +"/device/distribute",
                      data: {idList: idList, idxAgentID :idxAgentID ,ucpAccountType:accountTypeID,remark:remark},
                      //data: {idList: idList, idxAgentID :idxAgentID ,remark:remark},
                      success: function(resp){
                          if( resp && resp.state===0){
                              layer.msg.success(resp.message);
                              $("#deviceDistributeModal").modal("hide");
                              //refresh
                              switchTabAndTools('viFiDeviceNewTab3','viFiDeviceNewTool3');
                          }else{
                              layer.msg.error(getJsonData("agentLevel.failed")+(resp.message||""));
                          }
                      }
                  })
              }

              function ImportNewConfirm() {
                  if (!$("#ImportNewModal-new-form").valid()){
                      return false
                  }
                  var groupId = $("#ImportNewModalGroupId").val();
                  var deviceType = $("#ImportNewModalDeviceType").val();
                  var keyDataPkgID = $("#ImportNewModalKeyDataPkgID").val();
                  var salePrice = $("#ImportNewModalSalePrice").val();
                  var costPrice = $("#ImportNewModalCostPrice").val();
                  var supplierName = $("#ImportNewModalSupplierName").val();
                  var supplierContactUser = $("#ImportNewModalSupplierContactUser").val();
                  var supplierContactPhone = $("#ImportNewModalSupplierContactPhone").val();
                  var buyer = $("#ImportNewModalBuyer").val();
                  var buyerPhone = $("#ImportNewModalBuyerPhone").val();
                  var remark = $("#ImportNewModalRemark").val();
                  /*Utils.ajax({
                      url: window.PATH + deviceUrl +"uploadExcel.ajax",
                      data: {idList: idList, idxAgentID :idxAgentID ,remark:remark},
                      success: function(resp){
                          if( resp && resp.state===0){
                              layer.msg.success(getJsonData("agentLevel.success"));
                              $("#deviceDistributeModal").modal("hide");
                              //refresh
                              switchTabAndTools('viFiDeviceNewTab4','viFiDeviceNewTool4');
                          }else{
                              layer.msg.error(getJsonData("agentLevel.failed")+(resp.message||""));
                          }
                      }
                  })*/
              }

              var $modal = $("#cmdModal"),
                  // idxViFiID = EouUtils.getSelectedRowID("viFiDeviceNewTab3"),
                  $devCon = $modal.find(".dev-con"),
                  $logCon = $modal.find(".log-con"),
                  $ssidCon = $modal.find(".ssid-con"),
                  $pwdCon = $modal.find(".pwd-con"),
                  $cmd = $modal.find("[name=cmd]"),
                  $dev = $modal.find("[name=dev]"),
                  $log = $modal.find("[name=log]"),
                  $ssid = $modal.find("[name=ssid]"),
                  $pwd = $modal.find("[name=pwd]");
              select2BaseImpl({
                  params: {data:getJsonData("db.tbViFiCtrlCmd.cmd.comData"), selectE: function(){
                      var val = $cmd.val();
                      //reset
                      $devCon.hide();
                      $dev.val("").trigger("change");
                      //$logCon.hide();
                      $log.val("3").trigger("change");
                      $ssidCon.hide();
                      $ssid.val("").trigger("change");
                      $pwdCon.hide();
                      $pwd.val("").trigger("change");
                      //单选
                      if(val==="LOG"){
                          $logCon.show();
                          $devCon.hide();
                      }else if(val==="DEV"){
                          $devCon.show();
                          $logCon.hide();
                      }else{
                          $logCon.hide();
                          $devCon.hide();
                      }
                      //远程关机和远程重启：无操作
                  }},
                  placeholder: getJsonData("db.tbViFiCtrlCmd.cmd.help"),
                  selector: "#cmdModal [name=cmd]"
              });
              select2BaseImpl({
                  params: {data:getJsonData("db.tbViFiCtrlCmd.dev.comData"), selectE: function(){
                      var val = $dev.val();
                      $ssidCon.hide();
                      $ssid.val("").trigger("change");
                      $pwdCon.hide();
                      $pwd.val("").trigger("change");
                      if(val.indexOf("wifissid")!==-1){
                          $ssidCon.show();
                      }
                      if(val.indexOf("wifipwd")!==-1){
                          $pwdCon.show();
                      }
                  }},
                  placeholder: getJsonData("db.tbViFiCtrlCmd.dev.help"),
                  selector: "#cmdModal [name=dev]",
                  multiple: true
              });

              select2BaseImpl({
                  params: {data:getJsonData("db.tbViFiCtrlCmd.log.comData"), selectE: function(){}},
                  placeholder: getJsonData("db.tbViFiCtrlCmd.log.help"),
                  selector: "#cmdModal [name=log]"
              });

              $("#logSelect").val("3");
              $("#vifiCmdSave").click(saveViFiCmdAjax);

              $("#operation").click(function(){
                  var checkedRows = $("#viFiDeviceNewTab3-body").find("input[name*=viFiDeviceNewTab3-rowItems]:checked");
                  if ( !checkedRows.length) {
                      layer.msg.error("请选择");
                      return false;
                  }
                  if ( checkedRows.length > 1) {
                      layer.msg.error("只能选择一项");
                      return false;
                  }
                  openViFiCmdModal();
              })

              function saveViFiCmdAjax(){
                  var data = {},
                      $modal = $("#cmdModal"),
                      $idxViFiID = $modal.find("[name=idxViFiID]"),
                      $cmd = $modal.find("[name=cmd]"),
                      $dev = $modal.find("[name=dev]"),
                      $log = $modal.find("[name=log]"),
                      $ssid = $modal.find("[name=ssid]"),
                      $pwd = $modal.find("[name=pwd]");
                  if( !$idxViFiID.val() ){
                      layer.msg.error("idxViFiID undefined!");
                      return ;
                  }
                  //entity:TbViFiCtrlCmd
                  data.idxViFiID = $idxViFiID.val();
                  var cmd = $cmd.val();
                  if (cmd == null){
                    cmd = "LOG"
                  }
                  data.cmd = $cmd.val();
                  var params = {};
                  if( cmd.indexOf("LOG")!==-1){
                      var getlog = $log.val();
                      if(getlog.indexOf("3")!==-1){
                          params.getlog = 3;
                      }
                      if(getlog.indexOf("4")!==-1){
                          params.getlog = 4;
                      }
                  }
                  if( cmd.indexOf("DEV")!==-1){
                      var getdev = $dev.val();
                      if(getdev.indexOf("powermode")!==-1){
                          params.powermode = 1;
                      }
                      if(getdev.indexOf("wifissid")!==-1){
                          params.wifissid = $ssid.val();
                      }
                      if(getdev.indexOf("wifipwd")!==-1){
                          params.wifipwd = $pwd.val();
                      }
                  }
                  if( cmd.indexOf("SHUTDOWN")!==-1){
                      params.shutdown = 1;
                  }
                  if( cmd.indexOf("REBOOT")!==-1){
                      params.reboot = 1;
                  }
                  data.params = JSON.stringify(params);
                  Utils.ajax({
                      url: window.PATH + "/device/operationcmd",
                      data: data,
                      success: function(resp){
                          $modal.modal("hide");
                          layer.msg.success("操作成功");
                      },
                      error(resp){
                          layer.msg.error(getJsonData("label.common.error")+resp.state);
                      }
                  })
              }


              function openViFiCmdModal(){
                  //重置窗口状态
                  var $modal = $("#cmdModal"),
                      $devCon = $modal.find(".dev-con"),
                      $logCon = $modal.find(".log-con"),
                      $ssidCon = $modal.find(".ssid-con"),
                      $pwdCon = $modal.find(".pwd-con"),
                      $idxViFiID = $modal.find("[name=idxViFiID]"),
                      $status = $modal.find("[name=status]"),
                      $cmd = $modal.find("[name=cmd]"),
                      $dev = $modal.find("[name=dev]"),
                      $log = $modal.find("[name=log]"),
                      $ssid = $modal.find("[name=ssid]"),
                      $pwd = $modal.find("[name=pwd]");
                  //传入ID
                  $idxViFiID.val(EouUtils.getSelectedRowID("viFiDeviceNewTab3")).trigger("change");
                  //$("#cmd").val("");
                  $status.val("").trigger("change");
                  $cmd.val("LOG").trigger("change");
                  $dev.val("").trigger("change");
                  $log.val("3").trigger("change");
                  $ssid.val("").trigger("change");
                  $pwd.val("").trigger("change");
                  $devCon.hide();
                  //$logCon.hide();
                  $ssidCon.hide();
                  $pwdCon.hide();
                  $("#cmdModal").modal("show");
              }

              var priceFormat = function(value){
                  return "<span class='label label-info' style='width:70px;text-align:right;'>" + value + "</span>";
              };

              function formatSeconds(value) {
                  var seconds= parseInt(value);// 秒
                  var minutes = 0;// 分
                  var hours = 0;// 小时
                  var time="";
                  if(seconds>60){
                      minutes=parseInt(seconds/60);
                      if (minutes>60){
                          hours=parseInt(minutes/60);
                          minutes=parseInt(minutes%60);
                          time=hours+"时";
                      }
                      time=time+minutes+"分";
                  }else {
                      time=seconds+"秒";
                  }
                  return time;
              }

              function formatdatas(value) {
                  var dataM= parseInt(value/1000);// M
                  var dataG = 0;// G
                  var data="";
                  if(value>1000){
                      dataG=Math.ceil(dataM/10)/100;

                      data=dataG+"G";
                  }else {
                      data=Math.ceil(dataM)+"M";
                  }
                  return data;
              }

              var viFiDev_expandDetail = function(tableId, number){
                  var keyVal = getSelectedRowData(tableId).keyDevID;
                  var result={};
                  Utils.ajax({
                      url:window.PATH + "/device/devLastStatus",
                      async: false,
                      dataType: "json",
                      data: {id:keyVal},
                      type:"get",
                      success: function(res){
                          var data = res.data;
                          if( !data ){
                              return;
                          }
                          var status;
                          if (data.tbVifiStatus){
                            status=data.tbVifiStatus;
                          }else{
                            status= {
                              "addrs": "",
                              "apn": "",
                              "apnnum": "",
                              "apnpwd": "",
                              "apnusr": "",
                              "autolog": 0,
                              "battery": 0,
                              "cellid": "",
                              "charging": 0,
                              "clients": "",
                              "cpuusage": 0,
                              "createDate": "",
                              "datadown": 0,
                              "datatval": "",
                              "datatype": "",
                              "dataup": 0,
                              "discharging": 0,
                              "dns1": "",
                              "dns2": "",
                              "ecin": 0,
                              "ecout": 0,
                              "firstmnc": "0",
                              "gcellid": "",
                              "gdatadown": 0,
                              "gdataup": 0,
                              "getsimst": 0,
                              "giccid": "",
                              "gnetenb": "",
                              "gnettype": 0,
                              "gps": "",
                              "gsigdbm": 0,
                              "gsigint": 0,
                              "gstatus": 0,
                              "idxOwnerId": "eu.",
                              "idxViFiID": "",
                              "ispid": 0,
                              "ispname": "",
                              "keyStatusID": 0,
                              "lanip": "",
                              "lastrate": "{[0,0,0],[0,0,0],[0,0,0]}",
                              "netenb": "",
                              "nettype": 0,
                              "oemname": "",
                              "others": "",
                              "powermode": 0,
                              "rate": 0,
                              "ratedown": 0,
                              "rateup": 0,
                              "riccid": "",
                              "rsigdbm": 0,
                              "rstatus": 0,
                              "sigint": 0,
                              "sigtype": 0,
                              "updateDate": "",
                              "updateIP": "",
                              "updateTimes": 0,
                              "uptime": 0,
                              "uuwifarea": "",
                              "version": "",
                              "voltage": 0,
                              "wanip": "",
                              "wificonnt": 0,
                              "wififreq": 0,
                              "wifisig": 0
                            }
                          }
                          

                          if(!status.sigtype || status.sigtype==-1) {
                              status.sigtype="-";
                          }else {
                              status.sigtype=status.sigtype+"G";
                          }
                          var isp="-";
                          if(status.ispname){
                              isp=status.ispname;
                          }else {
                              if(status.ispid){
                                  switch (status.ispid) {
                                      case 46000:
                                      case 46002:
                                      case 46007:
                                          isp = "中国移动";
                                          break;
                                      case 46001:
                                      case 46006:
                                          isp= "中国联通";
                                          break;
                                      case 46003:
                                      case 46005:
                                      case 46011:
                                          isp = "中国电信";
                                          break;
                                  }
                              }
                          }


                          var html = [
                              '<div class="row" style="padding: 0;">',
                              '<div class="row col-lg-12 col-sm-12 col-xs-12" style="position: relative;overflow: hidden;background-color: rgb(0, 160, 233) !important;color: white !important;padding-left:0;padding-right:0;">',

                              '<div style=" position: relative;float: left;padding: 20px 10px;width: 100%;height:60px;box-sizing: border-box;border-bottom: 1px solid #C0C0C0;"> <div class="">'+
                              '<a id="euwx-devtl" style="margin-left: 42%;font-size: large">',keyVal.substring(keyVal.length-8,keyVal.length),'</a><a id="euwx-onlinestate"></a>'+
                              '<div id="euwx-updateDate" class="" style="float: right;margin-top: 15px;height: 19px;margin-right: 8px;font-size: 10px;color: #CACACA;">',status.updateDate && status.updateDate>0?new Date(status.updateDate).Format("MM-dd hh:mm:ss"):"-",'</div>'+
                              '</div></div>',

                              '<div style=" position: relative;float: left;padding: 20px 10px;width: 33.33333333%;box-sizing: border-box;border-bottom: 1px solid #C0C0C0;border-right: 1px solid #C0C0C0;">',
                              '<p style="display: block;text-align: center;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;color: white !important;font-size: 13px;">',status.sigtype,'</p>',
                              '<p style="display: block;text-align: center;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;color: #CACACA !important;font-size: 10px !important;" >',isp,'</p>',
                              '</div>',
                              '<div style=" position: relative;float: left;padding: 20px 10px;width: 33.33333333%;box-sizing: border-box;border-bottom: 1px solid #C0C0C0;border-right: 1px solid #C0C0C0;">',
                              '<p style="display: block;text-align: center;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;color: white !important;font-size: 13px;">',(status.wificonnt || status.wificonnt==0) && status.wificonnt>=0?status.wificonnt+"台":"-",'</p>',
                              '<p style="display: block;text-align: center;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;color: #CACACA !important;font-size: 10px !important;" >',getJsonData("status.device.wificonnt"),'</p>',
                              '</div>',
                              '<div style=" position: relative;float: left;padding: 20px 10px;width: 33.33333333%;box-sizing: border-box;border-bottom: 1px solid #C0C0C0;">',
                              '<p style="display: block;text-align: center;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;color: white !important;font-size: 13px;">',!status.battery || status.battery<0?"-":status.battery+"%",'</p>',
                              '<p style="display: block;text-align: center;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;color: #CACACA !important;font-size: 10px !important;" >',getJsonData("status.device.battery"),'</p>',
                              '</div>',
                              '<div style=" position: relative;float: left;padding: 20px 10px;width: 33.33333333%;box-sizing: border-box;border-right: 1px solid #C0C0C0;">',
                              '<p style="display: block;text-align: center;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;color: white !important;font-size: 13px;">',(status.uptime && status.uptime>0) || status.uptime==0?formatSeconds(status.uptime):"-",'</p>',
                              '<p style="display: block;text-align: center;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;color: #CACACA !important;font-size: 10px !important;" >',getJsonData("status.device.uptime"),'</p>',
                              '</div>',
                              '<div style=" position: relative;float: left;padding: 20px 10px;width: 33.33333333%;box-sizing: border-box;border-right: 1px solid #C0C0C0;">',
                              '<p style="display: block;text-align: center;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;color: white !important;font-size: 13px;">',data.dayUsage || data.dayUsage==0?formatdatas(data.dayUsage):"-",'</p>',
                              '<p style="display: block;text-align: center;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;color: #CACACA !important;font-size: 10px !important;" >',getJsonData("status.device.dayUsage"),'</p>',
                              '</div>',
                              '<div style=" position: relative;float: left;padding: 20px 10px;width: 33.33333333%;box-sizing: border-box;">',
                              '<p style="display: block;text-align: center;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;color: white !important;font-size: 13px;">',data.monthUsage || data.monthUsage==0?formatdatas(data.monthUsage):"-",'</p>',
                              '<p style="display: block;text-align: center;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;color: #CACACA !important;font-size: 10px !important;" >',getJsonData("status.device.monthUsage"),'</p>',
                              '</div>',
                              '</div>',

                              // '<div class="row col-lg-12 col-sm-12 col-xs-12" style="margin-left:10px;position: relative;overflow: hidden;>',

                              '<div class="row col-lg-6 col-sm-6 col-xs-6" style="padding-left:0;padding-right:0;margin-top:10px;border-left:1px solid #ddd;border-top:1px solid #ddd;margin-right:0">',
                              '<table class="table table-bordered table-striped  detailTable" style="border-right:1px solid #ddd !important;">',
                              '<tbody>',
                              '<div class="row col-lg-12 col-sm-12 col-xs-12" style="margin-left:0;text-align: center;border-bottom:1px solid #ddd;height:34px;line-height:34px;border-right:1px solid #ddd">',getJsonData("status.device.simcard"),'</div>',
                              '<tr class="ng-scope">',
                              '<td class="text-right" width="30%">', getJsonData("status.device.sigint"), '</td>',
                              '<td>',
                              '<div style="word-wrap:break-word;word-break: break-all;" class="f-p-tips">',status.gsigint || status.gsigint==0?status.gsigint:"-",'</div>',
                              '</td></tr>',
                              '<tr class="ng-scope">',
                              '<td class="text-right" width="30%">', getJsonData("status.device.cellid"), '</td>',
                              '<td>',
                              '<div style="word-wrap:break-word;word-break: break-all;" class="f-p-tips">',status.gcellid || status.gcellid==0?status.gcellid:"-",'</div>',
                              '</td></tr>',
                              '<tr class="ng-scope">',
                              '<td class="text-right" width="30%">', getJsonData("status.device.datauo"), '</td>',
                              '<td>',
                              '<div style="word-wrap:break-word;word-break: break-all;" class="f-p-tips">',status.gdataup || status.gdataup==0?status.gdataup:"-",'</div>',
                              '</td></tr>',
                              '<tr class="ng-scope">',
                              '<td class="text-right" width="30%">', getJsonData("status.device.datadown"), '</td>',
                              '<td>',
                              '<div style="word-wrap:break-word;word-break: break-all;" class="f-p-tips">',status.gdatadown|| status.gdatadown==0?status.gdatadown:"-",'</div>',
                              '</td></tr>',
                              '<tr class="ng-scope">',
                              '<td class="text-right" width="30%">', getJsonData("status.device.workstatus"), '</td>',
                              '<td>',
                              '<div style="word-wrap:break-word;word-break: break-all;" class="f-p-tips">',status.sigtype,'</div>',
                              '</td></tr>',
                              '<tr class="ng-scope">',
                              '<td class="text-right" width="30%">', getJsonData("status.device.status"), '</td>',
                              '<td>',
                              '<div style="word-wrap:break-word;word-break: break-all;" class="f-p-tips">',status.gstatus?matchComdata2Alias("db.tbViFiStatus.gstatus.comData",status.gstatus):"-",'</div>',
                              '</td></tr>',

                              '</tbody></table>',
                              '</div>',



                              '<div class="row col-lg-6 col-sm-6 col-xs-6" style="margin-left:0;margin-right:0;margin-top:10px;padding-left:0;padding-right:0;border-top:1px solid #ddd；border-right:1px solid #ddd">',
                              '<table class="table table-bordered table-striped  detailTable" style="border-right:1px solid #ddd !important;">',
                              '<tbody>',
                              '<div class="row col-lg-12 col-sm-12 col-xs-12" style="margin-left: 0;margin-top: 0;text-align: center;height:34px;line-height:34px;border-top:1px solid #ddd;border-right:1px solid #ddd">',getJsonData("status.device.simCard"),'</div>',

                              '<tr class="ng-scope" style="border-top:1px solid #ddd;">',
                              '<td class="text-right" width="30%">', getJsonData("status.device.sigint"), '</td>',
                              '<td>',
                              '<div style="word-wrap:break-word;word-break: break-all;" class="f-p-tips">',status.sigint?status.sigint:"-",'</div>',
                              '</td></tr>',
                              '<tr class="ng-scope">',
                              '<td class="text-right" width="30%">', getJsonData("status.device.cellid"), '</td>',
                              '<td>',
                              '<div style="word-wrap:break-word;word-break: break-all;" class="f-p-tips">',status.cellid?status.cellid:"-",'</div>',
                              '</td></tr>',
                              '<tr class="ng-scope">',
                              '<td class="text-right" width="30%">', getJsonData("status.device.datauo"), '</td>',
                              '<td>',
                              '<div style="word-wrap:break-word;word-break: break-all;" class="f-p-tips">',status.dataup?status.dataup:"-",'</div>',
                              '</td></tr>',
                              '<tr class="ng-scope">',
                              '<td class="text-right" width="30%">', getJsonData("status.device.datadown"), '</td>',
                              '<td>',
                              '<div style="word-wrap:break-word;word-break: break-all;" class="f-p-tips">',status.datadown?status.datadown:"-",'</div>',
                              '</td></tr>',
                              '<tr class="ng-scope">',
                              '<td class="text-right" width="30%">', getJsonData("status.device.workstatus"), '</td>',
                              '<td>',
                              '<div style="word-wrap:break-word;word-break: break-all;" class="f-p-tips">',status.gnettype && status.gnettype!=-1?status.gnettype+"G":"-",'</div>',
                              '</td></tr>',
                              '<tr class="ng-scope">',
                              '<td class="text-right" width="30%">', getJsonData("status.device.status"), '</td>',
                              '<td>',
                              '<div style="word-wrap:break-word;word-break: break-all;" class="f-p-tips">',status.rstatus?matchComdata2Alias("db.tbViFiStatus.rstatus.comData",status.rstatus):"-",'</div>',
                              '</td></tr>',

                              '</tbody></table>',
                              // '</div>',
                              '</div>',


                              '<div class="row col-lg-12 col-sm-12 col-xs-12" style="padding-left:0;padding-right:0;border-left:1px solid #ddd;border-top:1px solid #ddd;border-bottom: 1px solid #ddd;margin-bottom: 20px;">',
                              '<table class="table table-bordered table-striped  detailTable" style="border-right:1px solid #ddd !important;">',
                              '<tbody>',
                              '<div class="row col-lg-12 col-sm-12 col-xs-12" style="margin-left: 0;margin-top: 0;text-align: center;height:34px;line-height:34px;border-bottom:1px solid #ddd;border-right:1px solid #ddd">',getJsonData("status.device.deviceInfo"),'</div>',

                              '<tr class="ng-scope">',
                              '<td class="text-right" width="20%">', getJsonData("status.device.wififreq"), '</td>',
                              '<td>',
                              '<div style="word-wrap:break-word;word-break: break-all;" class="f-p-tips">',status.wififreq?status.wififreq:"-",'</div>',
                              '</td></tr>',
                              '<tr class="ng-scope">',
                              '<td class="text-right" width="20%">', getJsonData("status.device.cpuusage"), '</td>',
                              '<td>',
                              '<div style="word-wrap:break-word;word-break: break-all;" class="f-p-tips">',status.cpuusage?status.cpuusage:"-",'</div>',
                              '</td></tr>',
                              '<tr class="ng-scope">',
                              '<td class="text-right" width="20%">', getJsonData("status.device.dns1"), '</td>',
                              '<td>',
                              '<div style="word-wrap:break-word;word-break: break-all;" class="f-p-tips">',status.dns1?status.dns1:"-",'</div>',
                              '</td></tr>',
                              '<tr class="ng-scope">',
                              '<td class="text-right" width="20%">', getJsonData("status.device.dns2"), '</td>',
                              '<td>',
                              '<div style="word-wrap:break-word;word-break: break-all;" class="f-p-tips">',status.dns2?status.dns2:"-",'</div>',
                              '</td></tr>',
                              '<tr class="ng-scope">',
                              '<td class="text-right" width="20%">', getJsonData("status.device.charging"), '</td>',
                              '<td>',
                              '<div style="word-wrap:break-word;word-break: break-all;" class="f-p-tips">',status.charging?(status.charging==1?"已接线":"未连线"):"-",'</div>',
                              '</td></tr>',
                              '<tr class="ng-scope">',
                              '<td class="text-right" width="20%">', getJsonData("status.device.discharging"), '</td>',
                              '<td>',
                              '<div style="word-wrap:break-word;word-break: break-all;" class="f-p-tips">',status.discharging?(status.discharging==0?"已接线":"未连线"):"-",'</div>',
                              '</td></tr>',
                              '<tr class="ng-scope">',
                              '<td class="text-right" width="20%">', getJsonData("status.device.voltage"), '</td>',
                              '<td>',
                              '<div style="word-wrap:break-word;word-break: break-all;" class="f-p-tips">',status.voltage?status.voltage+"mV":"-",'</div>',
                              '</td></tr>',
                              '<tr class="ng-scope">',
                              '<td class="text-right" width="20%">', getJsonData("status.device.ecin"), '</td>',
                              '<td>',
                              '<div style="word-wrap:break-word;word-break: break-all;" class="f-p-tips">',status.ecin?status.ecin+"mA":'-','</div>',
                              '</td></tr>',
                              '<tr class="ng-scope">',
                              '<td class="text-right" width="20%">', getJsonData("status.device.ecout"), '</td>',
                              '<td>',
                              '<div style="word-wrap:break-word;word-break: break-all;" class="f-p-tips">',status.ecout?status.ecout+"mA":'-','</div>',
                              '</td></tr>',
                              '<tr class="ng-scope">',
                              '<td class="text-right" width="20%">', getJsonData("status.device.gps"), '</td>',
                              '<td>',
                              '<div style="word-wrap:break-word;word-break: break-all;" class="f-p-tips">',status.gps?status.gps:'-','</div>',
                              '</td></tr>',
                              '<tr class="ng-scope">',
                              '<td class="text-right" width="20%">', getJsonData("status.device.addrs"), '</td>',
                              '<td>',
                              '<div style="word-wrap:break-word;word-break: break-all;" class="f-p-tips">',status.addrs?status.addrs:'-','</div>',
                              '</td></tr>',
                              '<tr class="ng-scope">',
                              '<td class="text-right" width="20%">', getJsonData("status.device.updateIP"), '</td>',
                              '<td>',
                              '<div style="word-wrap:break-word;word-break: break-all;" class="f-p-tips">',status.updateIP?status.updateIP:'-','</div>',
                              '</td></tr>',

                              '</tbody></table>',
                              // '</div>',
                              '</div>',
                              "</div>"

                          ];
                          result.detailHtml = html.join('');
                          result.col = 5;
                      },
                      error: function(data){
                          layer.msg.error("error.");
                          return undefined;
                      }
                  });
                  return result;
              };

              var vifiDeviceOptions = {
                  version: 201720241, tableKey: "keyDevID", i18nPrefix: "db.tbViFiDevice.", expandDetail: viFiDev_expandDetail,
                  batchEdit: true, imports: false, exports: true,exportUrl:"/device/exportCsv",
                  initParams:{tableId:"viFiDeviceNewTab3", toolsId:"viFiDeviceNewTool3", urlPrefix: "/device/", permissions: ["0","0","0","0"]},
                  //vifi控制命令记录操作，未完成
                  customComps:{
                      custom:[
                      {
                          name:"deviceDistribution",
                          location:0,
                          color:"primary",
                          icon:"la-share-alt",
                          click:function(){
                              openDeviceDistributeModal();
                          }
                      }]
                  },
                  trs:[
                      /*{name:"keyDevID",width:180, hideEdit:"A", vali: {stringLength: 64}, show:false},*/
                      {name:"idxViFiID",disabled:"E",width:180,vali:{stringLength:[0,50],digits:true}, advQry: ['LIKE']},//16位或者24位，未实现
                      {name:"iccidGlobal",hideEdit:"A", width:180, show:false},
                      {name:"imei",width:100, vali: {stringLength: 45,digits:true}, show:false},
                      /*{name:"alaisName",width:100, vali: {stringLength: 45, required:false}, show:false,hideEdit:"A"},*/
                      {
                          name: "devStates", detailShow:false,hideEdit:"A", vali: {stringLength: 1}, advQry: ["IN"],
                          comType: "select", width: 80, addDef: "E",show:false
                      },
                      {
                          name: "devState", batchEdit: true, vali: {stringLength: 1},
                          comType: "select", width: 80, addDef: "E"
                      },
                     /* {name:"idxDevGrpID", batchEdit:true,width:100, vali: {stringLength: 64, required:false}, //valFormat:"devGrpIDFormat"
                          show:false, comType: "ajaxSelect", comDataS2:{url:"vifiGrpS2Data.ajax"}},*/
                  
                      /*{name:"groupName", batchEdit:true, width:60,
                          comType:"ajaxSelect", comDataS2:{url:"viFiGrpS2Data.ajax"}},*/
                      {name:"onlineList", detailShow:false, show:false,hideEdit:"A",vali:{integer:true,LessThan:10000},advQry:['IN'],width:90,
                          comType:"select",valFormat:function(value){
                          return matchData2FormatSpan("db.tbViFiDevice.onlineList.dataPlus", value, 80);
                      }},//增加radio选项

                      {name:"online", hideEdit:"A",vali:{integer:true,LessThan:10000},width:90,
                          comType:"select",valFormat:function(value){
                          return matchData2FormatSpan("db.tbViFiDevice.online.dataPlus", value, 80);
                      }},//增加radio选项
                      
                      {name: "ucpAccountType", vali: {stringLength: 1}, addDef: "1", advQry: ["LIKE"],width:130,comType: "select",valFormat:function(value){
                          return matchData2FormatSpan("db.tbViFiDevice.ucpAccountType.dataPlus", value, 100);
                      }},

                      /*{name: "idxAgentID", hideEdit:"N",comType: "ajaxSelect",vali: {stringLength: 64},width:130, comDataS2:{url:window.PATH + "/sysconfig/agentManager/agentS2Data"},show:false},*/
                      {name: "idxAgentName", hideEdit:"A",vali: {stringLength: 64},width:130,
                      comType: "ajaxSelect", comDataS2:{url:window.PATH + "/sysconfig/agentManager/agentS2Data"},advQry:['LIKE']},

                      {name:"ucpDevType",width:100, vali: {stringLength: 8,number:true},advQry:['LIKE']},
                      // {name:"idxDevGrpID", batchEdit:true,width:100, vali: {stringLength: 64}, valFormat:"devGrpIDFormat",show:false,
                      //     comType: "ajaxSelect", comDataS2:{url:"vifiGrpS2Data.ajax"}, advQry: ['LIKE']},
                      // {name:"groupName", hideEdit:"A", width:120},
                      /*{name: "idxUserID",  vali: {stringLength: 64,required:false}, width:100,
                          comType:"ajaxSelect",comDataS2:{url:"userIDS2Data.ajax"}, queryParams:{type:"search"},hideEdit:"A"},*/
                      /*{name: "idxIccid", hideEdit:"A", width:180, show:false},*/
                      {name: "lastUUWiFiAreaId", hideEdit:"A", vali:{stringLength:64,required:false}, width:180, wifiAreaFM:true},
                      {name: "usageAttr", hideEdit: "A", comType: "select", width: 100, advQry: ['LIKE'], show: false},
                      {name: "debugIdt", batchEdit:true, vali: {stringLength: 4}, show: false, comType: "select", addDef:"0"},
                      
                      {name: "softwareVer", hideEdit:"A", disabled: "E", vali: {stringLength: 100,required:false}, /*comType:"ajaxSelect", comDataS2:{url:"S2SoftwareVer"},*/advQry:['LIKE']},
                      /*{name: "lastConnectTime", vali:{date:true}, hideEdit: "A", width:125, show:false},
                      {name: "lastConnectIP", vali: {stringLength: 32}, hideEdit: "A", width:95, show:false},*/
                      
                      {name:"hardwareVer", hideEdit: "A", width:95,show:false},
                      {name:"ucpSalePrice",width:100, vali: {stringLength: 45,between:[0,100000],decimals:2},ratio:100},
                      {name:"ucpCostPrice",width:100, vali: {stringLength: 45,between:[0,100000],decimals:2},ratio:100},
                      {name:"cos", vali:{stringLength:4}, addDef:cosDefault, show:false},
                      {name: "expire",vali:{integer:true,lessThan:100000}, addDef:180,width:100, show:false},
                      {name:"ucpSupplierName",width:100, vali: {stringLength: [0,100],required:false}, show: false},
                      {name:"ucpSupplierTel",width:100, vali: {stringLength: 45,required:false,phone:true}, show: false},
                      
                      {name:"ucpImportId", width:100,hideEdit:"A",disabled:"A",show:false},
                      {name: "remark", vali: {stringLength: 256,required:false}, show: false},
                      {name: "mdfTm", hideEdit: "A", width:120, sort:true},
                      {name: "mdfBy", hideEdit: "A", width:120},
                      {name: "crtTm", hideEdit: "A",advQry: ["DURING"], qryType:"date", width:120,sort:true},
                      {name: "crtBy", hideEdit: "A", width:120}

                      //修改
                      /*{name:"keyDevID",width:180, hideEdit:"A", vali: {stringLength: 64}, show:false},
                      {name:"deviceType",width:100, vali: {stringLength: 45, required:false}, show:false},
                      {name:"salePrice",width:100, vali: {stringLength: 45}, show:false},
                      {name:"costPrice",width:100, vali: {stringLength: 45}, show:false},
                      {name: "supplierName", vali: {stringLength: 256,required:false}, show: false},
                      {name: "supplierContactUser", vali: {stringLength: 256,required:false}, show: false},
                      {name: "supplierContactPhone", vali: {stringLength: 256,required:false}, show: false},
                      {name: "buyer", vali: {stringLength: 256,required:false}, show: false},
                      {name: "buyerPhone", vali: {stringLength: 256,required:false}, show: false},
                      {name: "remark", vali: {stringLength: 256,required:false}, show: false},
                      {
                          name: "remark", show: true, comType: "file",
                          comData: {
                              dirKey: "VERSION_APP",maxSize:"512MB",
                              callback: function (resp) {
                                  if (resp.status == 200 && resp.data && resp.data.data[0]) {
                                      console.log(resp);
                                  }
                              }
                          }
                      },
                      {name: "mdfTm", hideEdit: "A", width:140, show:false},
                      {name: "mdfBy", hideEdit: "A", width:140, show: false},
                      {name: "crtTm", hideEdit: "A", width:140, show: false},
                      {name: "crtBy", hideEdit: "A", width:140, show: false}*/
                  ]};
                  //vifiDeviceOptions.trs.splice(11,0,{name: "idxAgentID", vali: {stringLength: 64},width:130});

                  /*vifiDeviceOptions.trs.splice(11,0,
                      {name:"cos", vali:{stringLength:4}, batchEdit:true, addDef:cosDefault, show:false},
                      {name:"idxVNSID",hideEdit:"A", show:false,
                          vali: {stringLength: 64},width:130, comType: "ajaxSelect", comDataS2:{url:"S2VNSID.ajax"}},
                      {name:"upSoftVer",hideEdit:"A",width:100,show:false},
                      {name: "totalGetFailed", hideEdit:"A", vali:{integer:true, less:10000, required:false}, width:100, show:false},
                      {name: "contGetFailed", hideEdit:"A", vali:{integer:true, less:10000, required:false}, width:100, show:false}
                  );*/
            var ucpType = getCookie("ucpType");

            if (parseInt(ucpType) == 0 || parseInt(ucpType) == 1) {
               vifiDeviceOptions.customComps.custom.push({
                          name:"batchImport",
                          location:2,
                          color:"primary",
                          icon:"la-upload",
                          click:function(){
                              openImportNewModal();
                          }
                      })
              }else if(parseInt(ucpType) == 2){
                  vifiDeviceOptions.customComps.custom.push({
                          name:"deviceCheckOut",
                          location:1,
                          color:"primary",
                          /*icon:"la-check",*/
                          icon:"deviceCheckOutIcon",
                          click:function(){
                              openDeviceCheckOutModal();
                          }
                      })
                  vifiDeviceOptions.initParams.permissions = ["1","1","1","1"];
              }else{
                  vifiDeviceOptions.initParams.permissions = ["1","1","1","1"];
              }
              
              InitTableModuleNew(vifiDeviceOptions);
              //CheckAndInitStorage(vifiDeviceOptions);

              //移动按钮
              $("#viFiDeviceNewTab3-tools-deviceDistribution").insertBefore('#viFiDeviceNewTab3-tools-setting'); 
              $("#viFiDeviceNewTab3-tools-batchImport").insertBefore('#viFiDeviceNewTab3-tools-setting'); 
              
              //$("#viFiDeviceNewTool3").prepend($("#viFiDeviceNewTab3-tools-deviceDistribution").clone(true));  
              

              /******************************** uuwifi设备活动  begin ************************************/

              var vifiAction_respCode_color = function(value){
                  if(value===0){
                      //"<span style='color:green;'>"+ value +"</span>"
                      return "<span class='label label-success' style='width:40px;'>"+ value +"</span>";
                  }else if(value===200){
                      return "<span class='label label-success' style='width:40px;'>"+ value +"</span>";
                  }else if(value){
                      return "<span class='label label-danger' style='width:40px;'>"+ value +"</span>";
                  }else{
                      return "<span class='label label-default' style='width:40px;'>"+ value +"</span>";
                  }
              };
              var vifiActionItems = {
                  version: 201710251,
                  tableKey:"keyActionID",
                  i18nPrefix:"db.vifiAction.",
                  customComps:{
                      custom:[{
                          name:"analysis",
                          location:1,
                          color:"primary",
                          icon:"la-film",
                          click:function(){
                              anls_vifiActionBtn2();
                          }
                      }]
                  },
                  initParams:{tableId:"vifiActionTab2", toolsId:"vifiActionTool2", urlPrefix: "/device/event", permissions: ["0","1","1","1"],page:"1"},
                  trs:[
                      {name:"keyActionID",disabled:"A", width:60},
                      {name:"idxViFiID", width:180, advQry:["LIKE"], comType:"ajaxSelect", comDataS2:{url:window.PATH + "/device/keyDevIDS2Data"},sort:true},
                      {name: "idxICCID",  width:180,show:false,detailShow:false},
                      {
                          name: "reqAct",
                          advQry: ["IN"],
                          width: 80,
                          comType: "select",
                          comData: [["GET", "GET"], ["KEEP_ALIVE", "KEEP_ALIVE"],["VCLOSE", "VCLOSE"], ["VOPEN", "VOPEN"], ["VSWHB", "VSWHB"], ["VUPDATE", "VUPDATE"]]
                          // comData: [["GET", "GET"], ["GSREG", "GSREG"], ["KEEP_ALIVE", "KEEP_ALIVE"], ["LOGIN", "LOGIN"], ["SPUBLISH", "SPUBLISH"],
                          //     ["VCLOSE", "VCLOSE"], ["VOPEN", "VOPEN"], ["VSWHB", "VSWHB"], ["VUPDATE", "VUPDATE"]]
                      },//, comType:"ajaxSelect", comDataS2:{url:"actionS2Data.ajax"}
                      {name:"reqIP", width:100},
                      {name:"reqAreaId", width:180, wifiAreaFM:true},
                      {name:"respCode", valFormat:vifiAction_respCode_color, width:60,advQry:['LIKE']},

                      {name:"respReasonRemark", width:180, tip:function(value){
                          if(value){
                              var reason = value.split(" ")[0];
                              value = getJsonData(reason) || "-";
                          }
                          return value;
                      },valFormat: function(value){
                          if(value){
                              var reason = value.split(" ")[0];
                              value = getJsonData(reason) || "-";
                          }
                          return value;
                      }},

                      {name:"respReason", show:false,width:260, tip:function(value){
                          if(value){
                              var reason = value.split(" ")[0];
                              value = getJsonData(reason) || "-";
                          }
                          return value;
                      },advQry:['LIKE']},
                      /*{name:"sessionId",width:230, show:false},*/
                      /*{name:"idxUserId",width:100, show:false,detailShow:false},
                      {name:"version",detailShow:false},*/
                      {name:"handTime", sort:true, valFormat: function(value){
                          if( value && value>2000){
                              return '<div style="color:red;">'+value+'</div>';
                          }
                          return '<div>'+value+'</div>';
                      }},
                      {name:"extv1", width:80, show:false},
                      /*{name:"extv2", width:80, show:false,detailShow:false},*/
                      {name:"reqDate",width:140,advQry:["DURING"],vali:{date:true, required:false},sort:true},
                      /*{name:"reqTime", width:100, show:false,detailShow:false}*/
                  ]};
              CheckAndInitStorage(vifiActionItems);

              function clsAnalysis_vifiAction(){
                  $("#anls_vifiAction").modal("hide");
              }

              //前一天后一天
              $("#vifiActionBtnYest").click(function(){
                  anls_vifiActionBtn2(-1);
              });
              $("#vifiActionBtnTomo").click(function(){
                  anls_vifiActionBtn2(1);
              });

              function anls_vifiActionBtn2(type){
                  // 测试热力图
                  //showActionsHeatMap();
                  //var uuwifiId = $("#search-vifiActionTab2-idxViFiID").val();
                  // if(!uuwifiId){
                  //    layer.msg.error(getJsonData("db.vifiAction.idxViFiID.help"));
                  //    return
                  // }
                  var queryParams = getSearchParams_vifiAction(type);
                  var loadInx = layer.load(2);//打开加载圈图标
                  Utils.ajax({
                      url:window.PATH + "/device/event/analysis",
                      data: queryParams,
                      type:"post",
                      dataType: "json",
                      success:function(req){
                          var content = req.data.content,
                              heatMap = req.data.heatMap.list;
                          if( heatMap && heatMap.length>0){
                              showActionsHeatMap(heatMap);
                          }
                          if(content && content.length>0){
                              var len = content.length,
                                  html ="<table style='margin-top:50px;width:auto;' class='table table-striped'>",
                                  trValue = "<tr>",
                                  trTime = "<tr>",
                                  colspan = 0;
                              for(var i=0;i<len;i++){
                                  var item = content[i];
                                  if(item.status==0){
                                      trValue +="<td style='background:#FAFAFA;width:3px;height:100px;padding:0;'></td>";
                                  }else if(item.status==1){
                                      trValue +="<td style='background:" + getActColor(item.act,1) + ";width:3px;height:100px;padding:0;' title='"+
                                          item.desc+"'></td>";
                                  }else if(item.status==2){
                                      trValue +="<td style='background:" + getActColor(item.act,-1)+ ";width:3px;height:100px;padding:0;' title='"+
                                          item.desc+"'></td>";
                                  }else if(item.status==3){
                                  }else if(item.status==4){
                                  }

                                  trTime +="<td style='height:30px;padding:0;'>" +item.hms +"</td>";
                              }
                              html+= trValue +"</tr>"+trTime+"</tr>"+"</table><br/></br>";
                              //计数
                              var firstItem = content[0];
                              $("#getSuccess_vifiAction").html(firstItem.getSuccess);
                              $("#getFailure_vifiAction").html(firstItem.getFailure);
                              $("#openSuccess_vifiAction").html(firstItem.openSuccess);
                              $("#openFailure_vifiAction").html(firstItem.openFailure);
                              $("#update_vifiAction").html(firstItem.update);
                              $("#close_vifiAction").html(firstItem.close);
                          }
                          $("#anls_vifiAction_content").html(html);
                          $("#anls_vifiAction").modal({backdrop: 'static'});
                          layer.close(loadInx);//关闭加载圈图标
                      },
                      error: function (xhr, type, exception) {
                          layer.close(loadInx);//关闭加载圈图标
                      }
                  });
              }

              function getActColor(act,val) {
                  switch(act) {
                      case "GET":   return (val>0 ? "#1500ce" : "#fc000a");
                      case "VOPEN": return (val>0 ? "#35ebff" : "#fffa35");
                      case "VUPDATE":return "#3bd92d";
                      case "VCLOSE": return "#999";
                  }
              }

              function getSearchParams_vifiAction(type){
                  var rowNmb = 0;
                  var checkedRows = $("input[name*=vifiActionTab2-rowItems]:checked");
                  if(checkedRows){
                      rowNmb = checkedRows[0].value.split("-|-");
                      rowNmb = rowNmb[1];
                  }

                  var queryDate = $("#vifiActionTab2").data("queryData");//getLocalStorageModel("vifiActionTab2", "queryData");
                  //console.log($("#vifiActionTab2").data("queryData"));
                  var data = getSelectedRowData("vifiActionTab2");
                  var dateRow = data;
                  var uuwifiId = dateRow.idxViFiID;
                  /** type: undefined/0 查询当天或指定日期  1查询明天  -1查询前一天
                   * $("#analysisModal_date").val();前一天后一天时参数；$("#search-vifiActionTab2-reqDate-GTE").val();搜索框参数
                   ***/
                  var dateParam = "";
                  if(type){
                      var dateStr = $("#anls_vifiAction_dateVal").val();
                      var newDate = type>0?new Date(Date.parse(dateStr) + 24*60*60*1000):new Date(Date.parse(dateStr) - 24*60*60*1000);
                      dateParam = newDate.format("yyyy-MM-dd");
                  }else{
                      var reqDate = dateRow.reqDate;
                      //var reqDate = $("#search-vifiActionTab2-reqDate-GTE").val();
                      if(!reqDate){
                          dateParam = new Date().format("yyyy-MM-dd");
                      }else{
                          var newDate = new Date(Date.parse(reqDate));
                          dateParam = newDate.format("yyyy-MM-dd");
                      }
                  }
                  $("#anls_vifiAction_dateVal").val(dateParam);
                  $("#anls_vifiAction_VifiId").html(uuwifiId);
                  $("#anls_vifiAction_Date").html(dateParam)
                  var dateStart = dateParam +" 00:00:00";
                  var dateEnd = dateParam +" 23:59:59";

                  var params = {};
                  params["idxViFiID"] = uuwifiId;
                  params["startCreateTime"] = dateStart;
                  params["endCreateTime"] = dateEnd;
                  params.orderList = "[['reqDate',1]]";
                  return params;
              }

              function showActionsHeatMap(mapData){
                var max = 100, range = [],
                    result = getMapData(mapData);
                function getMapData(data){
                    var start = new Date(new Date().getTime() - 365*24*3600*1000).format("yyyy-MM-dd"),
                        end = new Date(new Date().getTime()).format("yyyy-MM-dd"),
                        res = [];
                    range = [start, end];
                    for( var i=0,len=data.length; i<len; i++){
                        var vali = data[i].value;
                        max = vali>max ? (parseInt(vali/5)+1)*5 : max;
                        res.push([data[i].name, data[i].value]);
                    }
                    return res;
                }

                var option = {
    //            title: {
    //                top: 30,
    //                left: 'center',
    //                text: '2016年某人每天的步数'
    //            },
                    tooltip : {},
                    visualMap: {
                        min: 0,
                        max: max,
                        type: 'piecewise',
                        orient: 'horizontal',
                        left: 'center',
                        top: 10,
                        textStyle: {
                            color: '#000'
                        }
                    },
                    calendar: {
                        top: 60,
                        left: 30,
                        right: 30,
                        cellSize: ['auto', 13],
                        range: range,
                        itemStyle: {
                            normal: {borderWidth: 0.5}
                        },
                        yearLabel: {show: false}
                    },
                    series: {
                        type: 'heatmap',
                        coordinateSystem: 'calendar',
                        data: result
                    }
                };
                var actionsHeatMap = echarts.init(document.getElementById('actionsHeatMap'));
                actionsHeatMap.setOption(option);
                actionsHeatMap.on("click", function(params){//.off("click")
                    //console.log(params.name);
                });
            }

            /********************************   导入历史记录   ************************************/
            var importRcdPermi = ["0","1","1","1"];
            var DeviceImportOptions = {
                version: 201720241, tableKey: "importId", i18nPrefix: "db.tbViFiDevice.", exports: true,exportUrl:"/device/importlog/export",
                initParams:{tableId:"viFiDeviceNewTab4", toolsId:"viFiDeviceNewTool4", urlPrefix: "/device/importlog/", permissions: importRcdPermi},
                customComps:{
                    custom:[]
                },
                trs:[
                    //修改
                    {name: "importId",width:180, hideEdit:"A", vali: {stringLength: 64}, show:false},
                    /*{name:"deviceGroupId", batchEdit:true, width:60,
                        comType:"ajaxSelect", comDataS2:{url:"viFiGrpS2Data.ajax"},show:false},*/
                    {name: "deviceType",width:100, vali: {stringLength: 45, required:false}, advQry: ["LIKE"]},
                    /*{name: "keyDevID", hideEdit: "A", width:140, advQry: ["LIKE"]},*/
                    /*{name:"pkgName", batchEdit:true, width:120,
                        comType:"ajaxSelect", comDataS2:{url:"packageS2Data.ajax"},show:false},
                    {name:"keyDataPkgID", batchEdit:true, width:60, show:false,hideEdit:"A",
                        comType:"ajaxSelect", comDataS2:{url:"packageS2Data.ajax"}},*/
                    {name: "salePrice",width:100, vali: {stringLength: 45},ratio:100,valFormat:priceFormat},
                    {name: "costPrice",width:100, vali: {stringLength: 45},ratio:100,show:false,valFormat:priceFormat},
                    {name: "supplierName", vali: {stringLength: 256,required:false}, show:false},
                    {name: "supplierContactUser", vali: {stringLength: 256,required:false}, show: false},
                    {name: "supplierContactPhone", vali: {stringLength: 256,required:false}, show: false},
                    {name: "buyer", vali: {stringLength: 256,required:false}, show: false},
                    {name: "buyerPhone", vali: {stringLength: 256,required:false}, show: false},
                    {name: "totalCnt", vali: {stringLength: 256,required:false}},
                    {name: "succCnt", vali: {stringLength: 256,required:false}},
                    {name: "remark",advQry:["LIKE"], vali: {stringLength: 256,required:false},valFormat:function(value,data){
                        //return '<button onclick="layer.open({type:1,skin:&quot;layui-layer-rim &quot;,content:&quot;' + value +'&quot;})" class="btn btn-primary btn-sm">查看</button>'
                        if (value){
                            return '<button onclick="layer.msg(&quot;' + value +'&quot;,{time:99999999999999,btn:[&quot;关闭&quot;]})" class="btn btn-primary btn-sm">查看</button>';
                        }else{
                            return '<button onclick="layer.msg(&quot;' + getJsonData("nodata") +'&quot;,{time:2000})" class="btn btn-primary btn-sm">查看</button>';
                        }
                        
                    }},
                    {name: "createTime", hideEdit: "A", width:140,advQry:["DURING"],qryType:"date",sort:true},
                    {name: "createUser", hideEdit: "A", width:140, show: false}
                ]};

            /*导入记录查询 新增设备数*/
            /*$("#viFiDeviceNewBtn3").click(function(){
                $(":input","#viFiDeviceNewTab3-searchArea").not(":button",":reset","hidden","submit");
                $(":input","#viFiDeviceNewTab3-searchArea").val("");
                $(":input","#viFiDeviceNewTab3-searchArea").removeAttr("checked");
                $(":input","#viFiDeviceNewTab3-searchArea").removeAttr("selected");

                $("#viFiDeviceNewTab3-searchArea").find(".btn-searchBox").attr("onclick","");
                $("#deviceNum").remove();
                $("#viFiDeviceNewTab3-searchArea").find(".col-md-offset-0").css("float","right");
                if ($("#deviceNum").length == 0){
                    var deviceNumNode = $("#viFiDeviceNewTab3-searchArea").find(".margin-bottom-5").eq(0).clone(true);
                    deviceNumNode.attr("id","deviceNum");
                    deviceNumNode.find(".adv-name").text(getJsonData("db.tbViFiDevice.deviceNum") + ':');
                    deviceNumNode.find(".input-sm").attr("placeholder",getJsonData("db.tbViFiDevice.deviceNum.help"));
                    deviceNumNode.find(".input-sm").attr("name","cx_LIKE-|-assignNum");
                    deviceNumNode.find(".input-sm").attr("id","assignNum-input");
                    $("#viFiDeviceNewTab3-searchArea").find(".row").children().eq(0).after(deviceNumNode);
                    $("#viFiDeviceNewTab3-searchArea").validate({
                        rules:{
                            "cx_LIKE-|-assignNum":{
                                number:true
                            }
                        },
                        messages:{
                            "cx_LIKE-|-assignNum":{
                                number: getJsonData("bootstrapValidator.numeric")
                            }              
                        }                      
                    });
                    $("#viFiDeviceNewTab3-searchArea").find(".btn-searchBox").click(function(){
                        if (!$("#viFiDeviceNewTab3-searchArea").valid()){
                            return false
                        }
                    });
                    $("#viFiDeviceNewTab3-searchArea").find(".btn-searchBox").click(function(){
                        $("#viFiDeviceNewTab3-searchArea").find(".btn-searchBox").attr("onclick","");
                        if ( isNaN($("#assignNum-input").val())){
                            layer.msg.error(getJsonData("db.tbViFiDevice.deviceNum") + getJsonData("bootstrapValidator.numeric"));
                        }else{
                            $("#viFiDeviceNewTab3-searchArea").find(".btn-searchBox").attr("onclick","queryTableDataModel('viFiDeviceNewTab3',1)");
                            queryTableDataModel('viFiDeviceNewTab3',1);
                        }
                    });
                }
            })*/
/*            if (parseInt(g_var.view.userProfile.type) == 0 || parseInt(g_var.view.userProfile.type) == 1) {
                vifiDeviceOptions.customComps.custom.push({
                    name:"deviceCheckOut",
                    location:3,
                    color:"primary",
                    icon:"fa-check",
                    click:function(){
                        openDeviceCheckOutModal();
                    }
                })

                DeviceImportOptions.customComps.custom.push({
                    name:"batchImport",
                    location:1,
                    color:"primary",
                    icon:"fa-download",
                    click:function(){
                        openImportNewModal();
                    }
                })
            }*/
            CheckAndInitStorage(DeviceImportOptions);
            /*$("#viFiDeviceNewTool4").click(function(){
               CheckAndInitStorage(DeviceImportOptions);
            })

            $("#vifiActionTool2").click(function(){
               CheckAndInitStorage(vifiActionItems);
            })*/


          })
        },
        components: {},
        beforeCreate: function () {},
        created: function () {},
        beforeMount: function () {
        },
        created: function () {
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
