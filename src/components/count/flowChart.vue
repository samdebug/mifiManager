<template>
  <div id="user">
    <div class="bs-example">
        <div class="row">
            <div class="col-xs-12 col-md-12">
                <div class="widget no-margin-bottom">
                    <div class="widget-body no-padding">
                        <div id="searchable_wrapper">
                            <div class="tabbable">
                                <!-- <ul class="nav nav-tabs">
                                    <li class="flag-tabs-btn active" id="flowChartBtn">
                                      <a data-toggle="tab" href="javaScript:void(0)" onclick="switchTabAndTools('deviceSummary','')"><span class="tab-title">概要信息</span></a>
                                    </li>
                                </ul> -->
                                <div class="tab-content no-padding tabs-flat" style="border-radius:0;">
                                  <div id="deviceSummary" class="flag-tabs tab-pane in active summary-tab" style="padding-top:25px">
                                    <el-radio-group v-model="querySelected" @change="changeHandler" style="border:1px solid #e6e9f0;padding:20px;width:100%">
                                      <el-radio name="queryDate" value="1" :label="1" id="todayClick">今日</el-radio>
                                      <el-radio name="queryDate" value="2" :label="2" id="weekClick">本周</el-radio>
                                      <el-radio name="queryDate" value="3" :label="3" id="monthClick">本月</el-radio>
                                      <el-radio name="queryDate" value="4" :label="4" id="selfClick">自定义</el-radio>
                                      <el-date-picker
                                            v-model="dateValue"
                                            style="margin-left:25px;width:400px"
                                            type="daterange"
                                            range-separator="至"
                                            start-placeholder="开始日期"
                                            end-placeholder="结束日期">
                                          </el-date-picker>
                                      <!-- <button type="button" id="queryDateBtn" class="btn btn-primary" style="height:34px;margin-right:30px;float:right;display:none;"><i class="fa fa-search"></i>查询</button> -->
                                      <el-button type="primary" id="queryDateBtn" icon="el-icon-search" style="float:right;display:none">查询</el-button>
                                    </el-radio-group>
                                  <!-- <div class="row" style="border: 1px solid #e6e6e6;padding: 20px 30px 0px;">
                                    <div class="col-lg-2 col-md-2 col-sm-4 col-xs-4">
                                        <label>
                                            <input name="queryDate" type="radio" value="1" checked="checked" id="todayClick"/>
                                            <span class="text">今日</span>
                                        </label>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-4 col-xs-4">
                                        <label>
                                            <input name="queryDate" type="radio" value="2" id="weekClick"/>
                                            <span class="text">本周</span>
                                        </label>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-4 col-xs-4">
                                        <label>
                                            <input name="queryDate" type="radio" value="3" id="monthClick"/>
                                            <span class="text">本月</span>
                                        </label>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 margin-bottom-5" style="padding-right:45px;">
                                        <span class="adv-name" style="width: 30%;"><label><input name="queryDate" type="radio" value="4" id="selfClick"/>
                                        <span class="text"></span>
                                        </label>自定义:</span>
                                        <div class="adv-value">
                                            <input type="text" style="width:47%;" name="startDate2" onclick="laydate.render({elem:this,istime: true,format:'yyyy-MM-dd'})" class="input-sm laydate-input" placeholder="开始时间"/>
                                            <span style="display:inline-block;width: 1%;text-align: center;">-</span>
                                            <input type="text" style="width:47%;" name="endDate2" onclick="laydate.render({elem:this,istime: true,format:'yyyy-MM-dd'})" class="input-sm laydate-input" placeholder="结束时间"/>
                                        </div>
                                    </div>

                                    <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12" id="queryDateBtn" style="display:none">
                                        <button type="button" class="btn btn-primary" style="height:34px;margin-right:30px;float:right;"><i class="fa fa-search"></i>查询</button>
                                    </div>
                                </div> -->
                                  <div class="row" style="padding-top: 25px;">
                                      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                          <a class="dashboard-stat dashboard-stat-v2 blue" href="#" style="height: 100px;">
                                              <div class="visual">
                                                  <!-- <i class="la la-user"></i> -->
                                              </div>
                                              <div class="details">
                                                  <div class="number">
                                                      <span data-counter="counterup" id="outlineInfo2" data-value="1349">0</span>
                                                  </div>
                                                  <div class="desc">总流量(G)</div>
                                              </div>
                                          </a>
                                      </div>
                                      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                          <a class="dashboard-stat dashboard-stat-v2 red" href="#" style="height: 100px;">
                                              <div class="visual">
                                                  <!-- <i class="la la-device"></i> -->
                                              </div>
                                              <div class="details">
                                                  <div class="number">
                                                      <span data-counter="counterup" id="outlineInfo5" data-value="1349">0</span>
                                                  </div>
                                                  <div class="desc alarm-target">活跃设备(台)</div>
                                              </div>
                                          </a>
                                      </div>
                                      <!-- <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                          <a class="dashboard-stat dashboard-stat-v2 green" href="#" style="height: 100px;">
                                              <div class="visual">
                                              </div>
                                              <div class="details">
                                                  <div class="number">
                                                      <span  data-counter="counterup" data-value="1349">活跃客户</span>
                                                  </div>
                                                  <div class="desc feedback-target" id="outlineInfo8">0</div>
                                              </div>
                                          </a>
                                      </div> -->
                                      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                          <a class="dashboard-stat purple" href="#" style="height: 100px;">
                                              <div class="visual">
                                                  <!-- <i class="la la-money"></i> -->
                                              </div>
                                              <div class="details">
                                                  <div class="number">
                                                      <span data-counter="counterup" id="outlineInfo7" data-value="1349">0</span>
                                                  </div>
                                                  <div class="desc">结算收入(元)</div>
                                              </div>
                                          </a>
                                      </div>
                                  </div>
                                  <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                              <div class="widgetNew widget-fullwidth week-chart widgetChart">
                                           <div class="widget-head"><span class="title">流量消耗趋势</span></div>
                                           <div class="widget-chart-container">
                                             <div id="week-chart" style="height: 215px; padding: 0px; position: relative;text-align: center;">
                                                 <div class="col-sm-12" style="text-align: center;">
                                                     <!-- <div data-toggle="easypiechart" class="easyPieChart" data-barcolor="#57b5e3" data-linecap="butt" data-percent="60" data-animate="500" data-linewidth="7" data-size="100" data-trackcolor="#eee"></div> -->
                                                     <div id="traffic-info-line" style="width: 100%;height:300px;"></div>
                                                 </div>
                                             </div>   
                                           </div>
                                           <div class="row widget-info">
                                             <!-- <div class="col-sm-4 counter-block"><span class="counter">735</span><span class="title">活跃设备</span></div> -->
                                             <div class="col-sm-12 counter-block"><span id="flowTotal" class="counter device-target1">0</span><span class="title">消耗总流量</span></div>
                                             <!-- <div class="col-sm-4 counter-block"><span class="counter device-target2">73%</span><span class="title">环比</span></div> -->
                                           </div>
                                         </div>
                                      </div>
                                      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                              <div class="widgetNew widget-fullwidth week-chart widgetChart" style="min-height: 480px;">
                                           <div class="widget-head"><span class="title">活跃设备</span></div>
                                           <div class="widget-chart-container">
                                             <div id="week-chart" style="height: 215px; padding: 0px; position: relative;text-align: center;">
                                                 <div class="col-sm-12" style="text-align: center;">
                                                     <!-- <div data-toggle="easypiechart" class="easyPieChart" data-barcolor="#57b5e3" data-linecap="butt" data-percent="60" data-animate="500" data-linewidth="7" data-size="100" data-trackcolor="#eee"></div> -->
                                                     <div id="device-info-line" style="width: 100%;height:300px;"></div>
                                                 </div>
                                             </div>   
                                           </div>
                                           <div class="row widget-info">
                                             <!-- <div class="col-sm-4 counter-block"><span class="counter">735</span><span class="title">活跃设备</span></div> -->
                                             <!-- <div class="col-sm-12 counter-block"><span id="flowTotal" class="counter device-target1">0</span><span class="title">消耗总流量</span></div> -->
                                             <!-- <div class="col-sm-4 counter-block"><span class="counter device-target2">73%</span><span class="title">环比</span></div> -->
                                           </div>
                                         </div>
                                      </div>
                                  </div>
                                  <div class="row">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                              <div class="widgetNew widget-fullwidth week-chart widgetChart" style="min-height: 530px;">
                                           <div class="widget-head"><span class="title">流量使用地区</span></div>
                                           <div class="widget-chart-container">
                                             <div id="week-chart" style="height: 215px; padding: 0px; position: relative;text-align: center;">
                                                 <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12" style="text-align: center;">
                                                     <!-- <div data-toggle="easypiechart" class="easyPieChart" data-barcolor="#57b5e3" data-linecap="butt" data-percent="60" data-animate="500" data-linewidth="7" data-size="100" data-trackcolor="#eee"></div> -->
                                                     <div id="map1" style="height:390px;"></div>
                                                 </div>
                                                 <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12" style="text-align: center;">
                                                     <section style="border-left:1px solid #e6e9f0;margin-top: 0;">
                                                       <!--for demo wrap-->
                                                         <!-- <h1 style="color: black;font-size: 1.58462rem;padding: 25px;"><i class="la la-trophy"></i>地区流量TOP10</h1> -->
                                                       <div class="tbl-header">
                                                       <table class="chartTable" cellpadding="0" cellspacing="0" border="0">
                                                         <thead>
                                                         <tr>
                                                           <th>地区</th>
                                                           <th>名称</th>
                                                           <th>流量(G)</th>
                                                         </tr>
                                                         </thead>
                                                       </table>
                                                       </div>
                                                       <div class="tbl-content">
                                                        <div class="scroller">
                                                         <table class="chartTable" cellpadding="0" cellspacing="0" border="0">
                                                           <tbody>
                                                           <tr v-for="tab in areaFlowTop10">
                                                             <td><span><i class="img-country country-cn"></i></span></td>
                                                             <td>{{tab.name}}</td>
                                                             <td>{{((tab.value)/1024/1024).toFixed(3)}}</td>
                                                           </tr>
                                                           </tbody>
                                                         </table>
                                                        </div>
                                                       </div>
                                                        <div class="tbl-footer" style="text-align:center;padding:20px;">
                                                         <a href="#/count/deviceDaily" style="color:black;font-size:14px;border:1px solid #1989fa;background:#1989fa;color:#fff;padding:10px;border-radius:5px;">更多</a>
                                                       </div>
                                                     </section>
                                                 </div>
                                             </div>   
                                           </div>
                                           <!-- <div class="row widget-info">
                                             <div class="col-sm-4 counter-block"><span class="counter">735</span><span class="title">活跃设备</span></div>
                                             <div class="col-sm-4 counter-block"><span class="counter device-target1">73%</span><span class="title">消耗总流量</span></div>
                                             <div class="col-sm-4 counter-block"><span class="counter device-target2">73%</span><span class="title">本月新增设备</span></div>
                                           </div> -->
                                         </div>
                                      </div>
                                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                              <div class="widgetNew widget-fullwidth week-chart widgetChart" style="min-height: 530px;">
                                           <div class="widget-head"><span class="title">设备流量使用</span></div>
                                           <div class="widget-chart-container">
                                             <div id="week-chart" style="height: 215px; padding: 0px; position: relative;text-align: center;">
                                                 <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12" style="text-align: center;">
                                                     <div id="trafficPie" style="height:360px;"></div>
                                                 </div>
                                                 <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12" style="text-align: center;">
                                                     <section style="border-left:1px solid #e6e9f0;margin-top: 0;">
                                                       <!--for demo wrap-->
                                                         <!-- <h1 style="color: black;font-size: 1.58462rem;padding: 25px;"><i class="la la-trophy"></i>流量使用占比</h1> -->
                                                       <div class="tbl-header">
                                                           <table class="chartTable" cellpadding="0" cellspacing="0" border="0">
                                                             <thead>
                                                             <tr>
                                                               <th>比例</th>
                                                               <th>设备(台)</th>
                                                             </tr>
                                                             </thead>
                                                           </table>
                                                       </div>
                                                       <div class="tbl-content">
                                                        <div class="scroller">
                                                         <table class="chartTable" cellpadding="0" cellspacing="0" border="0">
                                                           <tbody>
                                                           <tr v-for="tab in flowRangeData">
                                                             <td>{{tab.name}}</td>
                                                             <td>{{tab.value}}</td>
                                                           </tr>
                                                           </tbody>
                                                         </table>
                                                        </div>
                                                       </div>
                                                       <div class="tbl-footer" style="text-align:center;padding:20px;">
                                                         <a href="#/count/deviceDaily" style="color:black;font-size:14px;border:1px solid #1989fa;background:#1989fa;color:#fff;padding:10px;border-radius:5px;">更多</a>
                                                       </div>
                                                     </section>
                                                 </div>
                                             </div>   
                                           </div>
                                           <!-- <div class="row widget-info">
                                             <div class="col-sm-4 counter-block"><span class="counter">735</span><span class="title">活跃设备</span></div>
                                             <div class="col-sm-4 counter-block"><span class="counter device-target1">73%</span><span class="title">消耗总流量</span></div>
                                             <div class="col-sm-4 counter-block"><span class="counter device-target2">73%</span><span class="title">本月新增设备</span></div>
                                           </div> -->
                                         </div>
                                      </div>
                                  </div>
                                  <div class="row">
                                      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                         <section style="border: 1px solid rgb(222, 222, 222);">
                                           <!--for demo wrap-->
                                            <h1 style="color: black;font-size: 1.58462rem;padding: 25px;"><i class="la la-trophy"></i>设备流量top10</h1>
                                            <span><a href="s"></a></span>
                                           <div class="tbl-header">
                                              <table class="chartTable" cellpadding="0" cellspacing="0" border="0">
                                                <thead>
                                                <tr>
                                                  <th>设备编号</th>
                                                  <th>代理商</th>
                                                  <th>流量(G)</th>
                                                </tr>
                                                </thead>
                                              </table>
                                           </div>
                                           <div class="tbl-content">
                                            <div class="scroller">
                                             <table class="chartTable" cellpadding="0" cellspacing="0" border="0">
                                               <tbody>
                                               <tr v-for="tab in deviceFlowTop10">
                                                 <td>{{tab.name}}</td>
                                                 <td>{{tab.agentName}}</td>
                                                 <td>{{((tab.value)/1024/1024).toFixed(3)}}</td>
                                               </tr>
                                               </tbody>
                                             </table>
                                            </div>
                                           </div>
                                           <div class="tbl-footer" style="text-align:center;padding:20px;">
                                             <a href="#/count/deviceDaily" style="color:black;font-size:14px;border:1px solid #1989fa;background:#1989fa;color:#fff;padding:10px;border-radius:5px;">更多</a>
                                           </div>
                                         </section>
                                       </div>
                                       <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                           <section style="border: 1px solid rgb(222, 222, 222);">
                                             <!--for demo wrap-->
                                               <h1 style="color: black;font-size: 1.58462rem;padding: 25px;"><i class="la la-trophy"></i>代理商流量TOP10</h1>
                                             <div class="tbl-header">
                                               <table class="chartTable" cellpadding="0" cellspacing="0" border="0">
                                                 <thead>
                                                 <tr>
                                                   <th>代理商</th>
                                                   <th>流量(G)</th>
                                                 </tr>
                                                 </thead>
                                               </table>
                                             </div>
                                             <div class="tbl-content">
                                              <div class="scroller">
                                               <table class="chartTable" cellpadding="0" cellspacing="0" border="0">
                                                 <tbody>
                                                 <tr v-for="tab in customerFlowTop10">
                                                  <td>{{tab.name}}</td>
                                                  <td>{{((tab.value)/1024/1024).toFixed(3)}}</td>
                                                 </tr>
                                                 </tbody>
                                               </table>
                                              </div>
                                             </div>
                                             <div class="tbl-footer" style="text-align:center;padding:20px;">
                                               <a href="#/count/deviceDaily" style="color:black;font-size:14px;border:1px solid #1989fa;background:#1989fa;color:#fff;padding:10px;border-radius:5px;">更多</a>
                                             </div>
                                           </section>
                                         </div>
                                     </div>
                                  </div>
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
      import echarts from 'echarts'
      import 'echarts/map/js/china.js'

      export default {
        data() {
          return {
             radio5: '今日',
             deviceFlowTop10:"",
             areaFlowTop10:[],
             customerFlowTop10:"",
             flowRangeData:"",
             dateValue:"",
             querySelected:1
          }
        },
        methods:{
          areaFormat(AreaId){
            $(function(){
              return wifiAreaS2Format({id:AreaId}).text();
            })
          },
          getQueryDate() {
              var that = this;
              var dateHtml = "";
              var date = {};
              var selected = $("input[name=queryDate]:checked").val();
              if (!selected) {
                  return false;
              }
              if (selected == 1) {
                  date.startDate = dateHtml = new Date().format("yyyy-MM-dd ");
              } else if (selected == 2) {
                  var today = new Date(),
                      dayInWeek = today.getDay(),
                      startDate = today.getTime() - dayInWeek * 24 * 3600 * 1000,
                      endDate = today.getTime() + (7 - dayInWeek) * 24 * 3600 * 1000;
                  date.startDate = new Date(startDate).format("yyyy-MM-dd");
                  date.endDate = new Date(endDate).format("yyyy-MM-dd");
                  dateHtml = date.startDate + "-" + date.endDate;
              } else if (selected == 3) {
                  date.monthDate = dateHtml = new Date().format("yyyy-MM-dd");
              } else if (selected == 4) {
                  /*date.startDate = $("input[name=startDate2]").val();
                  date.endDate = $("input[name=endDate2]").val();*/
                  
                  if (!that.dateValue){
                      layer.msg.error("请选择查询时间");
                      return false;
                  }else{
                      date.startDate = new Date(that.dateValue[0]).format("yyyy-MM-dd");
                      date.endDate = new Date(that.dateValue[1]).format("yyyy-MM-dd");
                      dateHtml = date.startDate + "-" + date.endDate;
                  }

                  var startStamp = Date.parse(new Date(date.startDate));
                  var endStamp = Date.parse(new Date(date.endDate));

                  if (startStamp > endStamp){
                    layer.msg.error("开始时间不能大于结束时间");
                    return false;
                  }
              }
              date.agent="*";
              that.initdata(date);
          },
          changeHandler(value){
            var that = this;
            if (value == 4){
                $("#queryDateBtn").show();
            }else{
                that.getQueryDate();
                $("#queryDateBtn").hide();
            }
          },
          initdata(data) {
              var that = this;
              $(function(){
                    Utils.ajax({
                        url: PATH + "/deviceFlow/queryflowconsume",
                        type: "POST",
                        data: data || {},
                        success: function (res) {
                            if (!res || !res.data) {
                                return undefined;
                            }
                            if (res.data.axisKeys && res.data.flowValues){
                              var dataX_traffic = res.data.axisKeys;
                              for (var i = 0;i<res.data.flowValues.length;i++) {
                                 res.data.flowValues[i] = (res.data.flowValues[i]/1024/1024).toFixed(3);
                              }
                              var dataY_traffic = res.data.flowValues;
                              var flowTotal = (res.data.sumFlow/1024/1024).toFixed(3) + "G";
                            }else{
                              var dataX_traffic = ['周一','周二','周三','周四','周五','周六','周日'];
                              var dataY_traffic = [0, 0, 0, 0, 0, 0, 0];
                              var flowTotal = "0G"
                            }

                            if (res.data.axisKeys && res.data.deviceValues){
                              var dataX_device = res.data.axisKeys;
                              for (var i = 0;i<res.data.deviceValues.length;i++) {
                                 res.data.deviceValues[i] = (res.data.deviceValues[i]/1);
                              }
                              var dataY_device = res.data.deviceValues;
                            }else{
                              var dataX_device = ['周一','周二','周三','周四','周五','周六','周日'];
                              var dataY_device = [0, 0, 0, 0, 0, 0, 0];
                            }

                            //var data = [["12-24", 0],["12-25", 0],["12-26", 0],["12-27", 0],["12-28", 0],["12-29", 0],["12-30", 0]];  
                            $("#flowTotal").html(flowTotal);
                            var format;
                            if (data.startDate && !data.endDate && !data.monthDate){
                               format = ":00";
                            }else{
                               format = "号"
                            }
                            //在线设备
                            var myChart_device = echarts.init(document.getElementById('device-info-line'));
                            //流量消耗
                            var myChart_traffic = echarts.init(document.getElementById('traffic-info-line'));
                            var option_traffic = {
                                title: {
                                    text: '',
                                    subtext: '',
                                    x: ''
                                },
                                tooltip: {
                                    trigger: 'axis',
                                    formatter: function(data) {
                                       data = data[0]
                                       return data.name + format + '<br/>' +data.seriesName + ":" + data.value   + 'GB<br/>';
                                    }
                                },
                                legend: {
                                    data:['流量使用状况']
                                },
                                xAxis:  {
                                    type: 'category',
                                    boundaryGap: false,
                                    data: dataX_traffic,
                                    axisTick:{
                                      show:false
                                    },
                                    axisLabel:{
                                      fontWeight:"lighter",
                                      fontStyle:"italic"
                                    },
                                    axisLine:{
                                      lineStyle:{
                                        color:"#a0a0a0"
                                      },
                                      show:false
                                    }
                                },
                                yAxis: {
                                    name:"GB",
                                    type: 'value',
                                    /*axisLabel: {
                                        formatter: '{value}GB'
                                    },*/
                                    axisLine:{
                                      lineStyle:{
                                        color:"#a0a0a0"
                                      },
                                      show:false
                                    },
                                    axisLabel:{
                                      fontWeight:"lighter",
                                      fontStyle:"italic"
                                    },
                                    axisTick:{
                                      show:false
                                    },
                                    splitLine: {
                                        lineStyle: {
                                            // 使用深浅的间隔色
                                            color: ['#ddd'],
                                            type:"dashed"
                                        }
                                    }
                                },
                                color:['rgba(53, 152, 220,1)', 'rgba(53, 152, 220,0.2)'],
                                series: [
                                    {
                                        name:'流量使用状况',
                                        center: ['50%', '10%'],
                                        type:'line',
                                        data:dataY_traffic,
                                        smooth: true,
                                        lineStyle: {
                                            normal: {
                                                width: 3,
                                                shadowColor: 'rgba(0,0,0,0.4)',
                                                shadowBlur: 10,
                                                shadowOffsetY: 10
                                            }
                                        },
                                        markPoint: {
                                            data: [
                                                {type: 'max', name: '最大值'}
                                            ]
                                        },
                                        markLine: {
                                            data: [
                                                {type: 'average', name: '平均值'}
                                            ]
                                        }
                                    }
                                ]
                            };
                            var option_device = {
                                title : {
                                    text: '',
                                    subtext: ''
                                },
                                tooltip : {
                                    trigger: 'axis',
                                    formatter: function(data) {
                                       data = data[0]
                                       return data.name + format + '<br/>' +data.seriesName + ":"  + data.value + '台<br/>';
                                    }
                                },
                                color:['rgba(53, 152, 220,1)', 'rgba(53, 152, 220,0.2)'],
                                legend: {
                                    data:['活跃设备']
                                },
                                toolbox: {
                                    show : false,
                                    feature : {
                                        dataView : {show: true, readOnly: false},
                                        magicType : {show: true, type: ['line', 'bar']},
                                        restore : {show: true},
                                        saveAsImage : {show: true}
                                    }
                                },
                                calculable : true,
                                xAxis : [
                                    {
                                        type : 'category',
                                        data : dataX_device,
                                        axisTick:{
                                          show:false
                                        },
                                        axisLabel:{
                                          fontWeight:"lighter",
                                          fontStyle:"italic"
                                        },
                                        axisLine:{
                                          lineStyle:{
                                            color:"#a0a0a0"
                                          },
                                          show:false
                                        }
                                    }
                                ],
                                yAxis : [
                                    {
                                        name:"台",
                                        type : 'value',
                                        /*axisLabel: {
                                            formatter: '{value}台'
                                        },*/
                                        minInterval : 1,
                                        boundaryGap : [ 0, 0.1 ],
                                        axisLine:{
                                          lineStyle:{
                                            color:"#a0a0a0"
                                          },
                                          show:false
                                        },
                                        axisLabel:{
                                          fontWeight:"lighter",
                                          fontStyle:"italic"
                                        },
                                        axisTick:{
                                          show:false
                                        },
                                        splitLine: {
                                            lineStyle: {
                                                // 使用深浅的间隔色
                                                color: ['#ddd'],
                                                type:"dashed"
                                            }
                                        }
                                    }
                                ],
                                series : [
                                    {
                                        name:'活跃设备',
                                        type:'bar',
                                        data:dataY_device,
                                        markPoint : {
                                            data : [
                                                {type : 'max', name: '最大值'},
                                                {type : 'min', name: '最小值'}
                                            ]
                                        },
                                        markLine : {
                                            data : [
                                                {type : 'average', name: '平均值'}
                                            ]
                                        }
                                    }
                                ]
                            };
                            myChart_traffic.setOption(option_traffic,true);
                            myChart_device.setOption(option_device,true);
                            $(window).resize(function () {
                                myChart_traffic.resize();
                                myChart_device.resize();
                            });
                        }
                    })


                    Utils.ajax({
                        url: PATH + "/deviceFlow/outlineInfo",
                        type: "POST",
                        data: data || {},
                        success: function (res) {
                            if (!res || !res.data) {
                                return undefined;
                            }
                            var data = res.data;
                            //todo 代理商控制

                            if (data.outlineInfo) {
                                var outlineInfo = data.outlineInfo[0];
                                //总流量：单位G，除1000000, 修改的时候需要注意
                                //outlineInfo.outlineInfo5 = toDecimals(outlineInfo.outlineInfo5 / 1000000, 2);
                                /*$("#outlineInfo").find(".info-number>span").each(function(index, item){
                                    $(this).html(outlineInfo["outlineInfo"+(index+1)] || 0);
                                });*/
                                $("#outlineInfo2").html((parseInt(outlineInfo["outlineInfo2"])/1024/1024).toFixed(3) || 0.00);
                                $("#outlineInfo5").html(parseInt(outlineInfo["outlineInfo5"]) || 0);
                                $("#outlineInfo8").html(parseInt(outlineInfo["outlineInfo8"]) || 0);
                                $("#outlineInfo7").html((parseInt(outlineInfo["outlineInfo7"])/100).toFixed(3) || 0.00);
                            }
                        

                            //设备流量
                            /*EouCharts.pie4Top10(document.getElementById("trafficPie"), {
                                name: getJsonData("label.deviceDaily.deviceTraffic"),
                                data: data.flowRangeData,
                                title: ""
                            });*/
                            var formatData = data.flowRangeData,
                                len = formatData.length,
                                nameData = [],
                                nameLen = 10,
                                result = [];

                            if (len <= nameLen) {
                                for( var i=0; i<len; i++){
                                    nameData.push(formatData[i].name);
                                }
                            }else{
                                var restValue = 0;
                                for( var j=0; j<len; j++){
                                    if (j <= (nameLen - 2)) {
                                        nameData.push(formatData[j].name);
                                        result.push(formatData[j]);
                                    }else{
                                        restValue += formatData[j].value;
                                    }
                                }
                                nameData.push(getJsonData("label.common.rests"));
                                result.push( {name:getJsonData("label.common.rests"), value:restValue} );
                                formatData = result;
                            }
                            var myChart_trafficPie = echarts.init(document.getElementById('trafficPie'));
                            var option_trafficPie = {
                                tooltip: {
                                    trigger: 'item',
                                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                                },
                                color:["#3598dc","#e85617",'#9060e8','#916f5a','#11c19a','#f7b527'],
                                legend: {
                                    orient: 'vertical',
                                    left: 'right',
                                    top: 120,
                                    data: nameData,
                                    textStyle:{
                                        color:"#636363"
                                    }
                                },
                                series: [
                                    {
                                        name: getJsonData("label.deviceDaily.deviceTraffic"),
                                        type: 'pie',
                                        radius: ['55%', '45%'],
                                        center: ["40%", "50%"],
                                        avoidLabelOverlap: false,
                                        label: {
                                            normal: {
                                                show: false,
                                                position: 'center',
                                                formatter: "{b}\n{c} ({d}%)"
                                            },
                                            emphasis: {
                                                show: true,
                                                textStyle: {
                                                    fontSize: '12',
                                                    fontWeight: 'bold'
                                                }
                                            }
                                        },
                                        labelLine: {
                                            normal: {
                                                show: false
                                            }
                                        },
                                        data: formatData
                                    }
                                ]
                            };
                            myChart_trafficPie.setOption(option_trafficPie,true);
                            $(window).resize(function () {
                                myChart_trafficPie.resize();
                            });

                            data.flowRangeData && data.flowRangeData.length > 0 ? $("#trafficPie-noData").hide() : $("#trafficPie-noData").show();


                            if (data.areaFlowTop10) {
                                for (var i = 0, len = data.areaFlowTop10.length; i < len; i++) {
                                    data.areaFlowTop10[i].name = wifiAreaS2Format({id:data.areaFlowTop10[i].name}).text();
                                }
                            }
                            that.deviceFlowTop10 = data.deviceFlowTop10;
                            that.customerFlowTop10 = data.customerFlowTop10;
                            //that.areaFlowTop10 = data.areaFlowTop10;
                            that.areaFlowTop10 = data.areaFlowTop10;
                            that.flowRangeData = data.flowRangeData;
                            /*that.flowRangeData = [{name:"123",value:12},{name:"123",value:12},{name:"123",value:12},{name:"123",value:12},{name:"123",value:12},{name:"123",value:12},{name:"123",value:12},{name:"123",value:12},{name:"123",value:12},{name:"123",value:12},{name:"123",value:12},{name:"123",value:12},{name:"123",value:12},{name:"123",value:12},{name:"123",value:12}];*/

                            $('.scroller').slimScroll({
                                height: 'auto'
                            })
                          /*  if (data.areaFlowTop10) {
                                for (var i = 0, len = data.areaFlowTop10.length; i < len; i++) {
                                    data.areaFlowTop10[i].value = toDecimals(data.areaFlowTop10[i].value / 1000000, 2);//G
                                }
                                $("#topArea").html(EouWidget.getTopRankHtml(data.areaFlowTop10, "", "deviceDailyTab1", "deviceDailyTool1", "deviceDailyBtn1","/#/count/deviceDaily"));
                            }

                            if (data.customerFlowTop10) {
                                for (var i = 0, len = data.customerFlowTop10.length; i < len; i++) {
                                    data.customerFlowTop10[i].value = toDecimals(data.customerFlowTop10[i].value / 1000000, 2);//G
                                }
                                $("#topClient").html(EouWidget.getTopRankHtml(data.customerFlowTop10, "", "deviceDailyTab1", "deviceDailyTool1", "deviceDailyBtn1"));
                            }

                            if (data.deviceFlowTop10) {
                                for (var i = 0, len = data.deviceFlowTop10.length; i < len; i++) {
                                    data.deviceFlowTop10[i].value = toDecimals(data.deviceFlowTop10[i].value / 1000000, 2);//G
                                }
                                $("#topDevice").html(EouWidget.getTopRankHtml(data.deviceFlowTop10, "", "deviceDailyTab1", "deviceDailyTool1", "deviceDailyBtn1","/#/count/deviceDaily"));
                            }*/

                            if (data.deviceCountInChinaMap) {
                                /*EouCharts.chinaMapAtProvince(document.getElementById("map1"), {
                                    name: getJsonData("label.deviceDaily.deviceTraffic"),
                                    data: data.deviceCountInChinaMap, title: "", ratio: 1048576,
                                    formatter: function (params) {
                                        if (!params || !params.value) {
                                            return undefined;
                                        }
                                        return params.name + ":" + params.value + "G";
                                    }
                                });*/
                                var params = {
                                    name: getJsonData("label.deviceDaily.deviceTraffic"),
                                    data: data.deviceCountInChinaMap, title: "", ratio: 1048576,
                                    /*formatter: function (params) {
                                        if (!params || !params.value) {
                                            return undefined;
                                        }
                                        return params.name + ":" + params.value + "G";
                                    }*/
                                }
                                var myChart_map = echarts.init(document.getElementById('map1'));
                                var max = 0;
                                var mapData = data.deviceCountInChinaMap;
                                for( var i=0,len=mapData.length; i<len; i++){
                                    var name = mapData[i].name, value = mapData[i].value;
                                    if(name){
                                        var areas = name.split("."),
                                            areaName = areas.length === 1 ? getJsonData("cn.region." + areas[0]) : "",
                                            region = areas.length >= 4 ? getJsonData("cn.region." + areas[3]) : "";
                                        // country = areas.length >= 3 ? getJsonData("country."+areas[2]) : "";
                                        name = areaName || region;
                                    }
                                    mapData[i].name = name || getJsonData("cn.region.beijing");
                                    if (value) {
                                        if (params.ratio) {
                                            mapData[i].value = value = div(value ,params.ratio).toFixed(3);
                                        }
                                        max = value > max ? parseInt(value) : max;
                                    }
                                }
                                var option_map = {
                                    backgroundColor: '#fff',
                                    tooltip: {
                                        trigger: 'item',
                                        formatter: params.formatter || function (params) {
                                            if (!params || !params.value) {
                                                return undefined;
                                            }
                                            return params.name + ' : ' + params.value;
                                        }
                                    },
                                    visualMap: {
                                        show:true,
                                        min: 0,
                                        max: max + 100,
                                        left: 'left',
                                        top: 'bottom',
                                        calculable: true,
                                        inRange: {
                                            color: ['#0564af', '#033257']
                                        },
                                        textStyle: {
                                            color: '#fff'
                                        }
                                    },
                                    toolbox: {
                                        show: true,
                                        // orient: 'vertical',
                                        left: 'right',
                                        top: 'top',
                                        feature: {
                                            dataView: {readOnly: false},
                                            restore: {},
                                            saveAsImage: {}
                                        }
                                    },
                                    series: [
                                        {
                                            name: params.name,
                                            type: 'map',
                                            mapType: 'china',
                                            data: mapData,
                                            roam: false,
                                            zoom: 1.2,
                                            symbolSize: 12,
                                            label: {
                                                normal: {
                                                    show: false
                                                },
                                                emphasis: {
                                                    show: false
                                                }
                                            },
                                            itemStyle: {
                                                normal: {
                                                    areaColor: '#004882',
                                                    borderColor: '#1389bf'
                                                },
                                                emphasis: {
                                                    areaColor: 'rgb(24, 133, 182)'
                                                }
                                            }
                                            /*itemStyle: {
                                                normal: {
                                                    areaColor: '#323c48',
                                                    borderColor: '#404a59'
                                                },
                                                emphasis: {
                                                    areaColor: '#2a333d',
                                                    borderColor: '#fff',
                                                    borderWidth: 1
                                                }
                                            }*/
                                        }
                                    ]
                                };
                                myChart_map.setOption(option_map,true);
                                $(window).resize(function () {
                                    myChart_map.resize();
                                });
                            }
                          /* if (data.flowRangeData) {
                                $("#topPercent").html(EouWidget.getTopRankHtml(data.flowRangeData, "", "deviceDailyTab1", "deviceDailyTool1", "deviceDailyBtn1"));
                            }*/
                        }
                    });
                  })
           }            
            
        },
        mounted: function () {
          var that = this;
          var bAgent = true;

              $("#queryDateBtn").on("click", function(){
                  that.getQueryDate();
              });

              that.getQueryDate();
               /*$("#todayClick").click(function(){
                getQueryDate();
                $("#queryDateBtn").hide();
              })
              $("#weekClick").click(function(){
                getQueryDate();
                $("#queryDateBtn").hide();
              })
              $("#monthClick").click(function(){
                 getQueryDate();
                 $("#queryDateBtn").hide();
              })
              $("#selfClick").click(function(){
                $("#queryDateBtn").show();
              })*/
              //$(".laydate-input").click();
              //getQueryDate();
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
