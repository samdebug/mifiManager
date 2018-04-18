<template>
  <div id="home" style="padding:15px;">
    <input id="gainDate" type="hidden" value=""/>
    <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <a class="dashboard-stat dashboard-stat-v2 dashboard-stat-v3" href="#" >
                        <div class="visual">
                            <!-- <i class="la la-user"></i> -->
                            <img class="image" src="/static/images/menuIcon/wellcome.png">
                        </div>
                        <div class="details" style="padding-top: 38px;">
                            <div class="number">
                                <span data-counter="counterup" data-value="1349">欢迎</span>
                            </div>
                            <div class="desc" style="">{{userName}}</div>
                            <!-- <div class="desc" style="padding-top:15px">{{role}}</div> -->
                        </div>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <a class="dashboard-stat dashboard-stat-v2 dashboard-stat-v3" href="#" style="height: 223px;">
                        <div class="visual">
                            <!-- <i class="stat-icon icon-lg la la-exclamation-triangle"></i> -->
                            <img class="image" style="padding-top: 70px;" src="/static/images/menuIcon/alarm.png">
                        </div>
                        <div class="details">
                            <div class="number">
                                <span data-counter="counterup" data-value="1349">系统警告</span>
                            </div>
                            <div class="desc alarm-target">{{alarmNum}}</div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <a class="dashboard-stat dashboard-stat-v2 dashboard-stat-v3" href="#" style="height: 223px;">
                        <div class="visual">
                            <!-- <i class="stat-icon icon-lg la la-desktop"></i> -->
                            <img class="image" style="padding-top: 70px;" src="/static/images/menuIcon/version.png">
                        </div>
                        <div class="details">
                            <div class="number">
                                <span data-counter="counterup" data-value="1349">版本号</span>
                            </div>
                            <div class="desc" id="showVersionModal">{{version}}</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12" id="device-info">
                <div class="widgetNew widget-fullwidth week-chart widgetNew-noborder">
             <div class="widget-head"><span class="title"><i class="la la-server" style="font-size:18px;padding-right:5px;color:#3598dc"></i>在线设备</span></div>
             <div class="widget-chart-container">
               <div id="week-chart" style="height: 215px; padding: 0px; position: relative;text-align: center;">
                   <div class="col-sm-12" style="text-align: center;">
                       <!-- <div data-toggle="easypiechart" class="easyPieChart" data-barcolor="#57b5e3" data-linecap="butt" data-percent="60" data-animate="500" data-linewidth="7" data-size="100" data-trackcolor="#eee"></div> -->
                       <div id="device-info-pie" style="width: 100%;height:250px;"></div>
                   </div>
               </div>   
             </div>
             <div class="row widget-info">
               <div class="col-sm-4 counter-block"><span data-toggle="counter" data-end="735" class="counter device-target0">0</span><span class="title">活跃设备</span></div>
               <div class="col-sm-4 counter-block"><span data-toggle="counter" data-end="73" data-suffix="%" class="counter device-target1">0</span><span class="title">总设备</span></div>
               <div class="col-sm-4 counter-block"><span data-toggle="counter" data-end="73" data-suffix="%" class="counter device-target2">0</span><span class="title">本月新增设备</span></div>
             </div>
           </div>
        </div>
      </div>
      <div class="row" >
        <div class="col-lg-12 col-sm-12 col-xs-12" id="agnet-info" >
           <div class="widgetNew widget-fullwidth week-chart widgetNew-noborder">
             <div class="widget-head">
                <span class="title"><i class="la la-bar-chart itemIcon" style="font-size:18px;padding-right:5px;color:#3598dc"></i>代理商日活跃设备</span>


                <span style="float:right;padding-top:30px">
                  <el-button type="primary" size="mini" id="queryDateBtn" @click="goFind" icon="el-icon-search" style="height: 32px;">查询</el-button>
                </span>
                <span style="float:right;padding-top:30px">
                  <el-date-picker
                    v-model="dateValue"
                    style="width:400px;margin:0px 10px"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                  </el-date-picker>
                </span>

                <span style="float:right;padding:30px 0px">
                  <el-select
                    v-model="agentSelected"
                    multiple
                    :multiple-limit="limitNum"
                    collapse-tags
                    style="width: 260px;"
                    placeholder="请选择代理商">
                    <el-option
                      v-for="item in agentSelectedList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>


                  <!-- <el-select multiple style="height:40px !important;width: 430px;" v-model="agentSelected" placeholder="请选择" @change="clickAgentList">
                      <el-option
                        v-for="item in agentSelectedList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                  </el-select> -->
                </span>
             </div>
             <div class="widget-chart-container">
               <div id="week-chart" style="height: 215px; padding: 0px; position: relative;">
                    <div class="col-sm-12">
                        <div id="agent-info-line" style="width: 100%;height:300px;"></div>
                    </div>
               </div>
             </div>
             <div class="row widget-info">
             </div>
           </div>
        </div>
      </div>

    <div class="row" >
        <div class="col-lg-12 col-sm-12 col-xs-12" id="traffic-info" >
           <div class="widgetNew widget-fullwidth week-chart widgetNew-noborder">
             <div class="widget-head"><span class="title"><i class="la la-bar-chart itemIcon" style="font-size:18px;padding-right:5px;color:#3598dc"></i>流量使用记录</span></div>
             <div class="widget-chart-container">
               <div id="week-chart" style="height: 215px; padding: 0px; position: relative;">
                    <div class="col-sm-12">
                        <div id="traffic-info-line" style="width: 100%;height:300px;"></div>
                    </div>
               </div>
             </div>
             <div class="row widget-info">
               <div class="col-sm-3 counter-block"><span data-toggle="counter" data-end="735" class="counter traffic-target1">0</span><span class="title">已用总流量</span></div>
               <div class="col-sm-3 counter-block"><span data-toggle="counter" data-end="73" data-suffix="%" class="counter traffic-target2">0</span><span class="title">今日流量</span></div>
               <div class="col-sm-3 counter-block"><span data-toggle="counter" data-end="73" data-suffix="%" class="counter traffic-target3">0</span><span class="title">昨日流量</span></div>
               <div class="col-sm-3 counter-block"><span data-toggle="counter" data-end="73" data-suffix="%" class="counter traffic-target4">0</span><span class="title">本月流量</span></div>
             </div>
           </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 col-sm-12 col-xs-12" id="traffic-info" >
           <div class="widgetNew widget-fullwidth week-chart widgetNew-noborder" style="min-height: 540px;">
             <div class="widget-head"><span class="title"><i class="la la-hdd-o itemIcon" style="font-size:18px;padding-right:5px;color:#3598dc"></i>在线设备分布</span></div>
             <div class="widget-chart-container">
               <div id="week-chart" style="padding: 0px; position: relative;" class="row">
                    <div class="col-lg-8 col-sm-8 col-xs-12">
                        <div id="chinaDeviceMap" style="width:100%;height:410px;"></div>
                    </div>
                    <div class="col-lg-4 col-sm-4 col-xs-12">
                            <section style="border-left:1px solid #e6e9f0;margin-top: 0;">
                            <!--for demo wrap-->
                              <!-- <h1 style="color: black;font-size: 20px;padding: 25px;"><i class="la la-hdd-o"></i>在线设备地区分布数</h1> -->
                            <div class="tbl-header">
                            <table class="chartTable" cellpadding="0" cellspacing="0" border="0">
                              <thead>
                              <tr>
                                <th>地区</th>
                                <th>名称</th>
                                <th>在线数(台)</th>
                              </tr>
                              </thead>
                            </table>
                            </div>
                            <div class="tbl-content">
                              <div id="scroller">
                                <table class="chartTable" cellpadding="0" cellspacing="0" border="0">
                                  <tbody>
                                  <tr v-for="tab in areaFlowTop10">
                                   <td><span><i class="img-country country-cn"></i></span></td>
                                   <td>{{tab.name}}</td>
                                   <td>{{tab.formatValue}}</td>
                                  </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <div class="tbl-footer" style="text-align:center;padding:20px;">
                              <a href="#/miFiDevice/miFiDevice" style="color:black;font-size:14px;border:1px solid #1989fa;background:#1989fa;color:#fff;padding:10px;border-radius:5px;">更多</a>
                            </div>
                          </section>
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
            alarmNum:0,
            userName:"",
            role:"",
            version:"v2.3.0",
            areaFlowTop10:"",
            agentSelected:[],
            agentSelectedList: [],
            dateValue:"",
            limitNum:5
          }
        },
        methods:{
          clickAgentList(){
            /*if (this.agentSelected.length = 4){
              layer.msg.error("只能同时查询五个代理商");
              return false;
            }*/
          },
          selectAgent(){
            var that =this;
             Utils.ajax({
                url: window.PATH + "/sysconfig/agentManager/agentS2Data",
                data: {},
                success: function(res){
                    if( res && res.state===0){
                        for (var i=0;i<res.data.items.length;i++){
                          res.data.items[i].value = res.data.items[i].id;
                          res.data.items[i].label = res.data.items[i].text;
                        }
                        that.agentSelectedList = res.data.items;
                        //that.initagentLineData(res.data)
                    }else{
                        that.$message.error(res.message);
                    }
                }
            })
          },
          goFind(){
            var that = this;
            var data = {};
            if (!that.dateValue){
                layer.msg.error("请选择查询时间");
                return false;
            }else{
                data.startDate = new Date(that.dateValue[0]).format("yyyy-MM-dd");
                data.endDate = new Date(that.dateValue[1]).format("yyyy-MM-dd");
            }

            /*var startStamp = Date.parse(new Date(data.startDate));
            var endStamp = Date.parse(new Date(data.endDate));

            if (startStamp > endStamp){
              layer.msg.error("开始时间不能大于结束时间");
              return false;
            }*/
            data.idxAgentNameList = that.agentSelected.join(",");
            that.getAgentLineData(data);
          },
          getAgentLineData(data){
            var data = (data) ? data : "";
            var that = this;
            Utils.ajax({
                url: window.PATH + "/home/agentActiveDevLine",
                data: data,
                success: function(res){
                    if( res && res.state===0){
                        that.initagentLineData(res.data)
                    }else{
                        that.$message.error(res.message);
                    }
                }
            })
          },
          initagentLineData(deviceData){
            var dataY = [];
            var dataX = [];
            var legendName = [];
            var flowRatio = [];

            if (deviceData.length){
              dataX = deviceData[0].axisKeys;
              for (var i=0;i<deviceData.length;i++){
                legendName.push(deviceData[i].nameValues[0]);
                flowRatio.push(deviceData[i].flowValues);
                dataY.push({ name:deviceData[i].nameValues[0],center: ['50%', '50%'],type:'line',lineStyle: {normal: {width: 3,shadowColor: 'rgba(0,0,0,0.4)',shadowBlur: 10,shadowOffsetY: 10}},smooth: true,stack: deviceData[i].nameValues[0],data:deviceData[i].deviceValues});
              }
            }

            var agentLine = echarts.init(document.getElementById('agent-info-line'));
            var option = {
                title: {
                    text: ''
                },
                tooltip: {
                    trigger: 'axis',
                    formatter: function(data) {
                       var tooltipHtml = "";
                       if (data){
                          var tooltipHtml = data[0].name + '<br/>';
                          for (var i=0;i<data.length;i++){
                             if (data[i].seriesName == "总计"){
                                tooltipHtml = tooltipHtml + "<span style='background-color:" + data[i].color + ";width:10px;height:10px;border-radius:10px;display: inline-block;margin-right: 5px;'></span>" + data[i].seriesName + "<br/>活跃设备：" + data[i].value   + '台<br/><br/>' ;
                             }else{
                                tooltipHtml = tooltipHtml + "<span style='background-color:" + data[i].color + ";width:10px;height:10px;border-radius:10px;display: inline-block;margin-right: 5px;'></span>" + data[i].seriesName + "<br/>活跃设备：" + data[i].value   + '台' + "<br/>占总活跃设备：" +flowRatio[i][data[i].dataIndex] + "%<br/>";
                             }
                          }
                       }
                       return tooltipHtml;
                    }
                },
                legend: {
                    data:legendName,
                    textStyle:{
                        color:"#898b96"
                    }
                },
              /*  grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },*/
                toolbox: {
                    feature: {
                        saveAsImage: {show:false}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: dataX,
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
                    },
                },
                color:["#e85617","#3598dc",'#9060e8','#916f5a','#11c19a','#f7b527'],
                yAxis: {
                    type: 'value',
                    name:"台",
                    /*axisLabel: {
                        formatter: '{value}台'
                    },*/
                    axisLine:{
                      lineStyle:{
                        color:"#a0a0a0"
                      },
                      show:false
                    },
                    nameTextStyle:{
                      fontStyle:"italic"
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
                    },
                    minInterval : 1,
                    boundaryGap : [ 0, 0.1 ]
                },
                series: dataY
            };
            agentLine.setOption(option, true);
            $(window).resize(function () {
                agentLine.resize();
            });
          }
        },
        components: {},
        beforeCreate: function () {},
        created: function () {      
        },
        beforeMount: function () {
        },
        mounted : function () {
          var that = this;
          that.getAgentLineData();
          that.selectAgent();
          this.userName = that.yzxcookie.getCookies("account");
          var ucpType = that.yzxcookie.getCookies("ucpType");
          if (parseInt(ucpType) == 0){
              this.role = "运营商";
          }else if(parseInt(ucpType) == 1){
              this.role = "OEM";
          }else if(parseInt(ucpType) == 2){
              this.role = "总代理";
          }else if(parseInt(ucpType) == 3){
              this.role = "区域代理";
          }else if(parseInt(ucpType) == 4){
              this.role = "普通代理";
          }else{
              this.role = "普通用户";
          }
          function initBetaUserInfo(data){
              var $user = $("#user-info"),
                  /*$pie = $user.find(".easyPieChart"),*/
                  percent = 0;
              $user.find(".totalUsers-target").html(data.totalUser);
              $user.find(".todayUsers-target").html(data.todayNew);
              $user.find(".monthUsers-target").html(data.monthNew);
              var myChart_user = echarts.init(document.getElementById('user-info-pie'));
              var option_user = {
                  title : {
                      text: '',
                      subtext: '',
                      x:'center'
                  },
                  tooltip : {
                      trigger: 'item',
                      formatter: "{b} :{d}%"
                  },
                  color:['rgba(53, 152, 220,1)', 'rgba(53, 152, 220,0.2)'],
                  legend: {   
                      orient: 'vertical',
                      left: 'left',
                      data: ['活跃','不活跃'],
                      textStyle:{
                        color:"#898b96"
                      }
                  },
                  series : [
                      {
                          name: '',
                          type: 'pie',
                          radius : '55%',
                          center: ['50%', '50%'],
                          data:[
                              {value:data.activeUser, name:'活跃'},
                              {value:(data.totalUser-data.activeUser), name:'不活跃'}
                          ],
                          itemStyle: {
                              emphasis: {
                                  shadowBlur: 10,
                                  shadowOffsetX: 0,
                                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                              }
                          }
                      }
                  ]
              };
              myChart_user.setOption(option_user);
          }

          function initBetaDeviceInfo(data){
              var $device = $("#device-info"),
                  $pie = $device.find(".easyPieChart"),
                  percent = 0;
              $device.find(".device-target0").html(data.deviceInfo3);
              $device.find(".device-target1").html(data.deviceInfo6);
              $device.find(".device-target2").html(data.deviceInfo5);
              if( !data.deviceInfo1 ){
                  $pie.attr("data-trackcolor", "#eee");
              }else{
                  $pie.attr("data-trackcolor", "#11a9cc");
                  percent = Math.round(data.deviceInfo1*100/data.deviceInfo2);
              }
              $device.find(".easyPieChart").attr("data-percent", percent);
              $device.find(".databox-sparkline span").html(data.recentDevices);

              var myChart_device = echarts.init(document.getElementById('device-info-pie'));
              var option_device = {
                  title : {
                      text: '',
                      subtext: '',
                      x:'center'
                  },
                  tooltip : {
                      trigger: 'item',
                      formatter: "{b} :{d}%"
                  },
                  color:['rgba(53, 152, 220,1)', 'rgba(53, 152, 220,0.2)'],
                  legend: {
                      orient: 'vertical',
                      left: 'left',
                      data: ['在线','不在线'],
                      textStyle:{
                        color:"#898b96"
                      }
                  },
                  series : [
                      {
                          name: '访问来源',
                          type: 'pie',
                          radius : '55%',
                          center: ['50%', '50%'],
                          data:[
                              {value:data.deviceInfo1, name:'在线'},
                              {value:data.deviceInfo2, name:'不在线'}
                          ],
                          itemStyle: {
                              emphasis: {
                                  shadowBlur: 10,
                                  shadowOffsetX: 0,
                                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                              }
                          }
                      }
                  ]
              };
              myChart_device.setOption(option_device,true);
              $(window).resize(function () {
                  myChart_device.resize();
              });
          }

          function initBetaTrafficInfo(data){
              var $traffic = $("#traffic-info"),
                  $date = $traffic.find(".date-target");
              $traffic.find(".traffic-target1").html(((data.totalTraffic)/1024/1024).toFixed(3) + "GB");
              $traffic.find(".traffic-target2").html(((data.todayTraffic)/1024/1024).toFixed(3) + "GB");
              $traffic.find(".traffic-target3").html(((data.yesterdayTraffic)/1024/1024).toFixed(3)  + "GB");
              $traffic.find(".traffic-target4").html(((data.monthTraffic)/1024/1024).toFixed(3)  + "GB");
              $traffic.find(".databox-sparkline span").html(data.trafficList);
              var trafficDate = [];
              $.each(data.trafficDateList, function(i, item){
                  $date.append([
                      '<div class="databox-cell homepage-cell1of7 text-align-center no-padding padding-top-5">',
                      '<span class="databox-header white">',
                      item,
                      '</span>',
                      '</div>'].join(''));
                  trafficDate.push(item);
              });
              var trafficDetail = data.trafficList.split(",");
              var myChart_traffic = echarts.init(document.getElementById('traffic-info-line'));
              var option_traffic = {
                  title: {
                      text: '',
                      subtext: ''
                  },
                  tooltip: {
                      trigger: 'axis'
                  },
                  legend: {
                      data:['流量使用状况'],
                      textStyle:{
                        color:"#898b96"
                      }
                  },
                  xAxis:  {
                      type: 'category',
                      boundaryGap: false,
                      data: trafficDate,
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
                      axisLabel:{
                        fontWeight:"lighter",
                        fontStyle:"italic"
                      },
                      minInterval : 1,
                      nameLocation:"end",
                      nameTextStyle:{
                        fontStyle:"italic"
                      },
                      splitLine: {
                          lineStyle: {
                              // 使用深浅的间隔色
                              color: ['#ddd'],
                              type:"dashed"
                          }
                      },
                      axisTick:{
                        show:false
                      },
                      axisLine:{
                        lineStyle:{
                          color:"#a0a0a0"
                        },
                        show:false
                      }
                  },
                  color:['rgba(53, 152, 220,1)', 'rgba(53, 152, 220,0.2)'],
                  series: [
                      {
                          name:'流量使用状况',
                          center: ['50%', '50%'],
                          type:'line',
                          lineStyle: {normal: {width: 3,shadowColor: 'rgba(0,0,0,0.4)',shadowBlur: 10,shadowOffsetY: 10}},
                          smooth: true,
                          data:trafficDetail,
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
              myChart_traffic.setOption(option_traffic,true);
              $(window).resize(function () {
                  myChart_traffic.resize();
              });
          }

          function initAcitveDevice(data) {
            var deviceNumMax = 10, res = [];
            for(var i=0, len=data.length; i<len; i++){
                // name 地区 code 经纬度 value 统计设备数量
                var gps = data[i].code && data[i].code.split(",");
                if( !gps || gps.length!==2){
                    gps = [123.478315,25.754826];
                }
                res.push({
                    name: EouUtils.formatArea(data[i].name),
                    value: gps.concat(data[i].value)
                });
                if(data[i].value > deviceNumMax){
                    deviceNumMax = data[i].value;
                }
            }
            if (res.length){
              for (var i = 0, len = res.length; i < len; i++) {
                  res[i].formatValue = res[i].value[2];
              }
            }/*else{
              res = [{name:"中国-广东-深圳",formatValue:"0"},{name:"中国-河南-郑州",formatValue:"0"},{name:"中国-上海-上海",formatValue:"0"},{name:"中国-江苏-常州",formatValue:"0"},{name:"中国-浙江-杭州",formatValue:"0"},{name:"中国-河南-商丘",formatValue:"0"}];
            }*/
            $('#scroller').slimScroll({
                height: 'auto',
                width:"auto"
            })

            /*$("#scroller").mCustomScrollbar({
                axis:"y",
                theme:"minimal-dark" // vertical and horizontal scrollbar
            });*/

            that.areaFlowTop10 = res;
            /*that.areaFlowTop10 = [{name:"中国-广东-深圳",formatValue:"0"},{name:"中国-河南-郑州",formatValue:"0"},{name:"中国-上海-上海",formatValue:"0"},{name:"中国-江苏-常州",formatValue:"0"},{name:"中国-浙江-杭州",formatValue:"0"},{name:"中国-河南-商丘",formatValue:"0"},{name:"中国-河南-商丘",formatValue:"0"},{name:"中国-河南-商丘",formatValue:"0"},{name:"中国-河南-商丘",formatValue:"0"},{name:"中国-河南-商丘",formatValue:"0"},{name:"中国-河南-商丘",formatValue:"0"},{name:"中国-河南-商丘",formatValue:"0"},{name:"中国-河南-商丘",formatValue:"0"},{name:"中国-河南-商丘",formatValue:"0"},{name:"中国-河南-商丘",formatValue:"0"},{name:"中国-河南-商丘",formatValue:"0"},{name:"中国-河南-商丘",formatValue:"0"}];*/
            var option = {
                backgroundColor: '#fff',
                title: {
                    text: "",
                    x: 'left',
                    textStyle: {
                        color: '#fff',
                        fontSize: 14,
                        fontWeight: "normal"
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: function (params) {
                        return params.name + ' : ' + params.value[2];
                    }
                },
                visualMap: {
                    show: true,
                    min: 0,
                    max: deviceNumMax,
                    calculable: true,
                    inRange: {
                        color: ['#50a3ba', '#eac736', '#d94e5d']
                    },
                    textStyle: {
                        color: '#fff'
                    }
                },
                geo: {
                    map: 'china',
                    label: {
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
                        name: 'devices',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: res,
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
                            emphasis: {
                                borderColor: '#fff',
                                borderWidth: 1
                            }
                        }
                    }
                ]
            };
            var chinaDeviceMap = echarts.init(document.getElementById('chinaDeviceMap'));
            chinaDeviceMap.setOption(option,true);
            $(window).resize(function () {
                chinaDeviceMap.resize();
            });
          }
          
          $(function(){
              Utils.ajax({
                  url: window.PATH + "/home/betaHome",
                  data: {},
                  success: function(res){
                      if( res && res.state===0){
                          //系统告警
                          that.alarmNum = res.data.alarm;
                          that.$store.state.valueNum = res.data.alarm;
                          //设备在线
                          if(res.data && res.data.deviceInfo){
                              //在线 总数 今日 本月 近7日
                              var info = res.data.deviceInfo;
                              var deviceInfo = {
                                  deviceInfo1: info.outlineInfo1,
                                  deviceInfo2: info.outlineInfo2,
                                  deviceInfo3: info.outlineInfo3,
                                  deviceInfo4: info.outlineInfo4,
                                  deviceInfo5: info.outlineInfo5,
                                  deviceInfo6: info.outlineInfo6
                              };
                              deviceInfo.recentDevices = info.outlineInfo5 +","+info.outlineInfo6 +","
                                  +info.outlineInfo7 +","+info.outlineInfo8 +","+info.outlineInfo9 +"," +info.outlineInfo10 +"," +info.outlineInfo11 ;
                              initBetaDeviceInfo(deviceInfo);
                          }
                          
                          //在线设备
                          if (res.data.devCount4china) {
                            initAcitveDevice(res.data.devCount4china);
                          }
                          //initAcitveDevice(data);
                          //initMapNew(data);

                          //活跃用户
                          /*if(res.data.data && res.data.data.trafficInfo){
                              var userInfo = {
                                  activeUser: res.data.data.trafficInfo.outlineInfo1,
                                  totalUser: res.data.data.trafficInfo.outlineInfo2,
                                  todayNew: res.data.data.trafficInfo.outlineInfo3,
                                  monthNew: res.data.data.trafficInfo.outlineInfo4
                              };
                              initBetaUserInfo(userInfo);
                          }*/


                          //流量使用情况折线图
                          if( res.data && res.data.trafficInfo && res.data.trafficList){
                              var trafficList = "",
                                  trafficDateList = [],
                                  vo = res.data.trafficList;
                              var trafficInfo = {
                                  totalTraffic: res.data.trafficInfo.outlineInfo1,
                                  todayTraffic: res.data.trafficInfo.outlineInfo2,
                                  yesterdayTraffic: res.data.trafficInfo.outlineInfo3,
                                  monthTraffic: res.data.trafficInfo.outlineInfo4
                              };
                              $.each(vo, function(i, item){
                                  trafficList += (item[1]/1024/1024).toFixed(3) + ",";
                                  trafficDateList.push(item[0]);
                              });
                              if(trafficList){
                                  trafficList = trafficList.substring(0, trafficList.length-1);
                              }
                              trafficInfo.trafficList = trafficList;
                              trafficInfo.trafficDateList = trafficDateList;

                              initBetaTrafficInfo(trafficInfo);
                          }
                      }else{
                          that.$message.error(res.message);
                      }
                  }
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
  .simCard-row8{
        height: 12.5% ;
    }
    .homepage-cell1of7{
        width:14.28% !important;
    }
    .userInfo-span{
        position: relative;
        top:15px;
        left:15px;
    }
    
</style>
