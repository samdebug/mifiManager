<template>
  <div id="warning" style="background:#fff;padding:20px;-webkit-box-shadow: 0px 1px 15px 1px rgba(69, 65, 78, 0.08);-moz-box-shadow: 0px 1px 15px 1px rgba(69, 65, 78, 0.08);box-shadow: 0px 1px 15px 1px rgba(69, 65, 78, 0.08);">
    <el-row style="border-bottom:2px dotted #ebebeb;padding-bottom:20px;padding-top:20px" v-for="(dataItem, dataIndex) in data" :key="dataIndex" >
      <el-col :span="2" style="padding-top:5px;padding-left:10px;">
        <el-switch
          v-model="dataItem.status"
          :active-value="activeValue"
          :inactive-value="inactiveValue"
          active-color="#409EFF"
          inactive-color="#ccc">
        </el-switch>
      </el-col>
      <el-col :span="16">
        <h4>{{dataItem.name}}</h4>
       <!-- 多个条件框-->
        <div v-if='dataItem.rules.length>=2'>
            <div class="element-row balance-wrapper" v-for='(rulesItem,rulesIndex) in dataItem.rules'>
              <el-row>
                <el-col :span='1' style="padding-top:7px;">
                  <el-checkbox v-model="rulesItem.checked" @change='selectEvent(rulesItem.status,dataItem,rulesItem.id)'></el-checkbox>
                  <!-- <el-radio v-model="rulesItem.status" :label="1" @change='radioSele(rulesItem.status,dataItem)'></el-radio> -->
                </el-col>
                <el-col :span="23">
                  <el-input placeholder="请输入内容" v-model="rulesItem.conditionValue" class='balance'>
                    <template slot="prepend">{{rulesItem.description.split("#")[0]}}</template>
                    <template slot="append">{{rulesItem.description.split("#")[2]}}</template>
                  </el-input>
                </el-col>
              </el-row>
            </div>
        </div>
        <div v-if='dataItem.rules.length<2'>
          <div v-for='(ruleItem,ruleIndex) in dataItem.rules'>
            <!--单个条件框-->
            <div class="element-row" v-if="/#[A-Za-z]+#/.test(ruleItem.description)">
              <el-input placeholder="请输入内容" v-model="ruleItem.conditionValue">
                <template slot="prepend">{{ruleItem.description.split("#")[0]}}</template>
                <template slot="append">{{ruleItem.description.split("#")[2]}}</template>
              </el-input>
            </div>
            <!--文字提醒说明-->
            <div class="element-row" v-if="!(/#[A-Za-z]+#/.test(ruleItem.description))">
              <p>{{ruleItem.description}}</p>
            </div>
          </div>
        </div>
        <!--多选框-->
        <div v-if='dataItem.iscustomerreceive===false'>
          <el-row>
            <el-col :span="20" style="padding-top:7px;padding-left:10px">
                <el-checkbox v-if="dataItem.showSOFTWARE" v-model="dataItem.sendSoftware" label="软件提醒"></el-checkbox>
                <el-checkbox v-if="dataItem.showEMAIL" v-model="dataItem.sendEmail" label="邮件提醒"></el-checkbox>
                <el-checkbox v-if="dataItem.showSMS" v-model="dataItem.sendSms" label="短信提醒"></el-checkbox>
                <el-checkbox v-if="dataItem.showWECHAT" v-model="dataItem.sendWechat" label="微信提醒"></el-checkbox>
            </el-col>
          </el-row>
        </div>
        <!--多选输入框-->
        <div v-if='dataItem.iscustomerreceive===true'>
          <div>
            <el-row class="element-row" style="">
              <el-col :span="4" style="padding-top:7px;">
                <el-checkbox v-model="dataItem.sendEmail" label="邮件提醒"></el-checkbox>
              </el-col>
              <el-col :span="20">
                <el-input v-model="dataItem.email" placeholder="多个邮箱之间用英文逗号 , 隔开"></el-input>
              </el-col>
            </el-row>
            <el-row class="element-row" style="">
              <el-col :span="4" style="padding-top:7px;">
                <el-checkbox v-model="dataItem.sendSms" label="短信提醒"></el-checkbox>
              </el-col>
              <el-col :span="20">
                <el-input v-model="dataItem.sms" placeholder="多个手机号之间用英文逗号 , 隔开"></el-input>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
    <!--<el-row style="border-bottom:2px dotted #ebebeb;padding-bottom:20px;padding-top:20px" >
      <el-col :span="1" style="padding-top:5px;padding-left:10px;">
        <el-switch
          v-model="cardSwitch"
          active-color="#409EFF"
          inactive-color="#ff4949">
        </el-switch>
      </el-col>
      <el-col :span="11">
        <h5>卡流量预警监控</h5>
        <div class="element-row">
          <el-input placeholder="请输入内容" v-model="cardMax">
            <template slot="prepend">当流量吃中的口张卡流量使用≥</template>
            <template slot="append">GB时，向运营人员发出预警信息</template>
          </el-input>
        </div>
        <div>
          <el-row class="element-row" style="margin-top:15px">
            <el-col :span="4" style="padding-top:10px;">
              <el-checkbox v-model="cardEmailCheck" label="邮件提醒"></el-checkbox>
            </el-col>
            <el-col :span="20">
              <el-input v-model="cardEmail" placeholder="多个邮箱之间用英文逗号 , 隔开"></el-input>
            </el-col>
          </el-row>
          <el-row class="element-row" style="margin-top:15px">
            <el-col :span="4" style="padding-top:10px;">
              <el-checkbox v-model="cardMsgCheck" label="短信提醒"></el-checkbox>
            </el-col>
            <el-col :span="20">
              <el-input v-model="cardMsg" placeholder="多个手机号之间用英文逗号 , 隔开"></el-input>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>-->
<!--    <el-row style="border-bottom:2px dotted #ebebeb;padding-bottom:20px;padding-top:20px">
      <el-col :span="1" style="padding-top:5px;padding-left:10px;">
        <el-switch
          v-model="TicketTimeOut"
          active-color="#409EFF"
          inactive-color="#ff4949">
        </el-switch>
      </el-col>
      <el-col :span="11">
        <h5>话单接受超时</h5>
        <div class="element-row">
          <el-input placeholder="请输入内容" v-model="timeOutMax">
            <template slot="prepend">当话单重发此参数≥</template>
            <template slot="append">次时，向运营人员发出预警信息</template>
          </el-input>
        </div>
        <el-row class="element-row" style="margin-top:15px">
          <el-col :span="4" style="padding-top:10px;">
            <el-checkbox v-model="timeOutEmailCheck" label="邮件提醒"></el-checkbox>
          </el-col>
          <el-col :span="20">
            <el-input v-model="timeOutEmail" placeholder="多个邮箱之间用英文逗号 , 隔开"></el-input>
          </el-col>
        </el-row>
        <el-row class="element-row" style="margin-top:15px">
          <el-col :span="4" style="padding-top:10px;">
            <el-checkbox v-model="timeoutMsgCheck" label="短信提醒"></el-checkbox>
          </el-col>
          <el-col :span="20">
            <el-input v-model="timeoutMsg" placeholder="多个手机号之间用英文逗号 , 隔开"></el-input>
          </el-col>
        </el-row>
      </el-col>
    </el-row>-->
    <!--<el-row style="border-bottom:2px dotted #ebebeb;padding-bottom:20px;padding-top:20px">
      <el-col :span="1" style="padding-top:5px;padding-left:10px;">
        <el-switch
          v-model="taskPower"
          active-color="#409EFF"
          inactive-color="#ff4949">
        </el-switch>
      </el-col>
      <el-col :span="11">
        <h5>定时任务异常</h5>
        <div class="element-row">
          <p>有定时任务非正常结束时，向运营人员发出预警消息</p>
        </div>
        <el-row class="element-row" style="margin-top:15px">
          <el-col :span="4" style="padding-top:10px;">
            <el-checkbox v-model="taskEmailCheck" label="邮件提醒"></el-checkbox>
          </el-col>
          <el-col :span="20">
            <el-input v-model="taskEmail" placeholder="多个邮箱之间用英文逗号 , 隔开"></el-input>
          </el-col>
        </el-row>
        <el-row class="element-row" style="margin-top:15px">
          <el-col :span="4" style="padding-top:10px;">
            <el-checkbox v-model="taskMsgCheck" label="短信提醒"></el-checkbox>
          </el-col>
          <el-col :span="20">
            <el-input v-model="taskMsg" placeholder="多个手机号之间用英文逗号 , 隔开"></el-input>
          </el-col>
        </el-row>
      </el-col>
    </el-row>-->
<!--    <el-row style="border-bottom:2px dotted #ebebeb;padding-bottom:20px;padding-top:20px">
      <el-col :span="1" style="padding-top:5px;padding-left:10px;">
        <el-switch
          v-model="cardFailPower"
          active-color="#409EFF"
          inactive-color="#ff4949">
        </el-switch>
      </el-col>
      <el-col :span="11">
        <h5>卡鉴权失败</h5>
        <div class="element-row">
          <p>有流量卡鉴权失败时，向运营人员发出预警信息，同时将该卡状态置为“失效”，不参与卡调度</p>
        </div>
        <el-row class="element-row" style="margin-top:15px">
          <el-col :span="4" style="padding-top:10px;">
            <el-checkbox v-model="cardFaildEmailCheck" label="邮件提醒"></el-checkbox>
          </el-col>
          <el-col :span="20">
            <el-input v-model="cardFaildEmail" placeholder="多个邮箱之间用英文逗号 , 隔开"></el-input>
          </el-col>
        </el-row>
        <el-row class="element-row" style="margin-top:15px">
          <el-col :span="4" style="padding-top:10px;">
            <el-checkbox v-model="cardFailMsgCheck" label="短信提醒"></el-checkbox>
          </el-col>
          <el-col :span="20">
            <el-input v-model="cardFaildMsg" placeholder="多个手机号之间用英文逗号 , 隔开"></el-input>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row style="border-bottom:2px dotted #ebebeb;padding-bottom:20px;padding-top:20px">
      <el-col :span="1" style="padding-top:5px;padding-left:10px;">
        <el-switch
          v-model="cardOfflinePower"
          active-color="#409EFF"
          inactive-color="#ff4949">
        </el-switch>
      </el-col>
      <el-col :span="11">
        <h5>卡池掉线预警监控</h5>
        <div class="element-row">
          <el-input placeholder="请输入内容" v-model="cardOfflineMax">
            <template slot="prepend">云平台超过≥</template>
            <template slot="append">分钟没有收到卡池的心跳信息时，向运营人员发出预警监控信息</template>
          </el-input>
        </div>
        <el-row class="element-row" style="margin-top:15px">
          <el-col :span="4" style="padding-top:10px;">
            <el-checkbox v-model="cardOfflineEmailCheck" label="邮件提醒"></el-checkbox>
          </el-col>
          <el-col :span="20">
            <el-input v-model="cardOfflineEmail" placeholder="多个邮箱之间用英文逗号 , 隔开"></el-input>
          </el-col>
        </el-row>
        <el-row class="element-row" style="margin-top:15px">
          <el-col :span="4" style="padding-top:10px;">
            <el-checkbox v-model="cardOfflineMsgCheck" label="短信提醒"></el-checkbox>
          </el-col>
          <el-col :span="20">
            <el-input v-model="cardOfflineMsg" placeholder="多个手机号之间用英文逗号 , 隔开"></el-input>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row style="border-bottom:2px dotted #ebebeb;padding-bottom:20px;padding-top:20px">
      <el-col :span="1" style="padding-top:5px;padding-left:10px;">
        <el-switch
          v-model="balanceFlowPower"
          active-color="#409EFF"
          inactive-color="#ff4949">
        </el-switch>
      </el-col>
      <el-col :span="11">
        <h5>卡池可用流量卡预警监控</h5>
        <div class="element-row">
          <el-input placeholder="请输入内容" v-model="balanceFlowMax">
            <template slot="prepend">当卡池内的可用流量卡数量少于≤</template>
            <template slot="append">张时，向运营人员发出预警监控信息</template>
          </el-input>
        </div>
        <el-row class="element-row" style="margin-top:15px">
          <el-col :span="4" style="padding-top:10px;">
            <el-checkbox v-model="balanceFlowEmailCheck" label="邮件提醒"></el-checkbox>
          </el-col>
          <el-col :span="20">
            <el-input v-model="balanceFlowEmail" placeholder="多个邮箱之间用英文逗号 , 隔开"></el-input>
          </el-col>
        </el-row>
        <el-row class="element-row" style="margin-top:15px">
          <el-col :span="4" style="padding-top:10px;">
            <el-checkbox v-model="balanceFlowMsgCheck" label="短信提醒"></el-checkbox>
          </el-col>
          <el-col :span="20">
            <el-input v-model="balanceFlowMsg" placeholder="多个手机号之间用英文逗号 , 隔开"></el-input>
          </el-col>
        </el-row>
      </el-col>
    </el-row>-->
    <div class="el-row" style="text-align: center;padding-top: 20px; padding-bottom: 20px;">
      <button style="width: 100px;" type="button" @click="saveAction" class="el-button el-button--primary"><span>保存</span></button>
      <button style="width: 100px;" type="button" @click="reset" class="el-button el-button--danger"><span>重置</span></button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeValue:1,
        inactiveValue:0,
        changeChecked:1,
        showSOFTWARE:false,
        showEMAIL:false,
        showSMS:false,
        showWECHAT:false,
        //账户余额
       /* blanceSwichValue:true,
        balanceRidio:"1",
        balancePercent:"",
        balance:'',
        balanceCheckList:[],*/
        //卡流量
     /*   cardSwitch:true,
        cardMax:'',
        cardEmailCheck:true,
        cardEmail:"www.sam@164.com",
        cardMsgCheck:true,
        cardMsg:"14878798887",*/
        //话单接受超时
     /*   TicketTimeOut:true,
        timeOutMax:'',
        timeOutEmailCheck:true,
        timeOutEmail:'www.sam@164.com',
        timeoutMsgCheck:true,
        timeoutMsg:'13988888888',*/
        //定时任务异常
     /*   taskPower:true,
        taskEmailCheck:true,
        taskEmail:'www.sam@164.com',
        taskMsgCheck:true,
        taskMsg:'13347855555',*/
        //卡鉴权失败
       /* cardFailPower:true,
        cardFaildEmailCheck:true,
        cardFaildEmail:'www.sam@164.com',
        cardFailMsgCheck:true,
        cardFaildMsg:'',*/
        //卡池掉线预警控制
       /* cardOfflinePower:true,
        cardOfflineMax:'',
        cardOfflineEmailCheck:true,
        cardOfflineEmail:"",
        cardOfflineMsgCheck:true,
        cardOfflineMsg:'',*/
        //卡池可用流量卡预警监控
     /*   balanceFlowPower:true,
        balanceFlowMax:"",
        balanceFlowEmailCheck:true,
        balanceFlowEmail:'',
        balanceFlowMsgCheck:true,
        balanceFlowMsg:'',*/
        //
        data:[],
       /* checked1:true,*/
      }
    },
    methods:{
      reset(){
        this.getMenu();
      },
      selectEvent(val,item,id){
        console.log(val);
        console.log(item);
        console.log(id);
        for (var i = 0; i < item.rules.length; i++) {
          if (item.rules[i].id != id){
            item.rules[i].status = 0;
            item.rules[i].checked = false;
          }else{
            item.rules[i].status = 1;
          }
        }
        /*if (val){
          for (var i = 0; i < item.rules.length; i++) {
            item.rules[i].status = 0;
          }
        }*/
      },
      getMenu(){
        var that = this;
        $(function(){
            Utils.ajax({
                url: window.PATH + "/monitor/list",
                data: {},
                success: function(resp){
                    if( resp && resp.state===0){
                        for (var i = 0; i < resp.data.length; i++) {
                            if(resp.data[i].rules.length > 1){
                                for (var j = 0; j < resp.data[i].rules.length; j++) {
                                  if (resp.data[i].rules[j].status){
                                    resp.data[i].rules[j].checked = true
                                  }else{
                                    resp.data[i].rules[j].checked = false
                                  }
                                }
                            }
                            if(resp.data[i].msgtypes.indexOf("EMAIL") >= 0){
                              resp.data[i].showEMAIL = true;
                            }
                            if (resp.data[i].msgtypes.indexOf("SOFTWARE") >= 0){
                              resp.data[i].showSOFTWARE = true;
                            }
                            if (resp.data[i].msgtypes.indexOf("WECHAT") >= 0){
                              resp.data[i].showWECHAT = true;
                            }
                            if (resp.data[i].msgtypes.indexOf("SMS") >= 0){
                              resp.data[i].showSMS = true;
                            }
                        }
                        that.data= resp.data;
                        //console.log(that.data);
                        //layer.msg.success(resp.message);
                    }else{
                        layer.msg.error(resp.message);
                    }
                }
            })
        })
        

        /*this.yzxhttpPost(window.PATH + 'api/monitor/list',{
          userId:18
        }).then(res =>{
          if(res.data.succeed) {
            this.data= res.data.data;
          } else {
            this.$message.error(res.data.message);
          }
        });*/
      },
      saveAction(){
        var that = this;

        //校验
        var sendData = [];
        for (var i=0;i<that.data.length;i++){
          if (that.data[i].status){
            if (that.data[i].rules.length = 1){
              for(var p=0;p<that.data[i].rules.length;p++){
                if ((that.data[i].rules[p].description).indexOf("#") >=0){
                    if (!that.data[i].rules[p].conditionValue){
                      layer.msg.error("请填写完整");
                      return false;
                    }
                }
              }
            }else{
              var state = false;
              for(var p=0;p<that.data[i].rules.length;p++){
                if (that.data[i].rules[p].status){
                  state = true;
                }
                if ((that.data[i].rules[p].description).indexOf("#") >=0){
                    if (that.data[i].rules[p].status && !that.data[i].rules[p].conditionValue){
                      layer.msg.error("请填写完整");
                      return false;
                    }
                }
              }
              if (!state){
                layer.msg.error("请填写完整");
                return false;
              }
            }

            if (!that.data[i].sendEmail && !that.data[i].sendSms && !that.data[i].sendSoftware && !that.data[i].sendWechat){
                layer.msg.error("请至少选择一种提醒方式");
                return false;
            }

            console.log(that.data[i]);
            if (that.data[i].iscustomerreceive) {
                if (that.data[i].sendEmail){
                  if (that.data[i].email == ""){
                    layer.msg.error("邮箱不能为空");
                    return false;
                  }else{
                      var emailItem = that.data[i].email.split(",");
                      for (var j=0;j<emailItem.length;j++){
                        var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
                        if(!myreg.test(emailItem[j])){
                            layer.msg.error("电子邮箱无效");
                            return false;
                        }
                      }
                  }
                }
                if (that.data[i].sendSms){
                  if (that.data[i].sms == ""){
                    layer.msg.error("手机号码不能为空");
                    return false;
                  }else{
                      var smsItem = that.data[i].sms.split(",");
                      for (var j=0;j<smsItem.length;j++){
                        var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
                        if(!myreg.test(smsItem[j])){
                            layer.msg.error("手机号码无效");
                            return false;
                        }
                      }
                  }
                }
              }
            }
          var item = {};
          item.itemNo = that.data[i].itemno;
          item.itemId = that.data[i].id;
          item.status = parseInt(that.data[i].status);

          item.sendEmail = that.data[i].sendEmail;
          item.sendSms = that.data[i].sendSms;
          item.sendSoftware = that.data[i].sendSoftware;
          item.sendWechat = that.data[i].sendWechat;
          
          item.sms = that.data[i].sms;
          item.software = that.data[i].software;
          item.email = that.data[i].email;
          item.wechat = that.data[i].wechat;

          item.msgtypes = that.data[i].msgtypes;
          item.iscustomerreceive = that.data[i].iscustomerreceive;


          var table = {};
          var idStr = [];
          if (that.data[i].rules.length && that.data[i].rules.length == 1){
            for (var k=0;k<that.data[i].rules.length;k++){
              table[that.data[i].rules[k].id] = that.data[i].rules[k].conditionValue;
              idStr.push(that.data[i].rules[k].id);    
              item.ruleId = idStr.join(",");
              item.conditionValue = table;
            }
          }else if (that.data[i].rules.length && that.data[i].rules.length > 1){
            for (var k=0;k<that.data[i].rules.length;k++){
              if (that.data[i].rules[k].status){
                  table[that.data[i].rules[k].id] = that.data[i].rules[k].conditionValue;
                  idStr.push(that.data[i].rules[k].id);    
              }
              item.ruleId = idStr.join(",");
              item.conditionValue = table;
            }
          }
          sendData.push(item);
        }
        $(function(){
            var jsonString = JSON.stringify(sendData);
            Utils.ajax({
                url: window.PATH + "/monitor/update",
                data: {vos:jsonString},
                success: function(resp){
                    if( resp && resp.state===0){
                        layer.msg.success(resp.message);
                    }else{
                        layer.msg.error(resp.message);
                    }
                }
            })
        })
      },
      radioSele(val,ele){
        
        /*for (var i = 0; i <val.rules.length; i++) {
          val.rules[i]['status'] = 0;
        }
        ele.status = 1;*/
        if (!val){
          for (var i = 0; i <val.rules.length; i++) {
            val.rules[i]['status'] = 0;
          }
        }
        console.log(555);
        console.log(val);
        console.log(ele);
      }
    },
    mounted: function () {
        $(".el-radio__label").hide();
        this.getMenu();
    },
    created: function () {
        $(".el-radio__label").hide();
    },
    beforeMount: function () {
      /*var data = [
        {
          "id":7,
          "itemno":null,
          "monitorgroupid":4,
          "name":"客户账户余额监控",
          "status":0,
          "iscustomerreceive":false,
          "msgtypes":"SOFTWARE,EMAIL,SMS",
          "sendemail":false,
          "sendsms":false,
          "sendwechat":false,
          "sendsoftware":false,
          "email":null,
          "sms":null,
          "wechat":null,
          "software":null,
          "msgTemplate":null,
          "state":true,
          "crttm":"2017-12-14 09:30:58",
          "mdftm":"2017-12-14 09:30:59",
          "crtby":null,
          "mdfby":null,
          "groupNo":"",
          "rules":[
            {
              "id":8,
              "monitoritemid":7,
              "conditionValue":"",
              "description":"当客户的账户余额≤#balance#元时，向客户发出预警信息",
              "status":0,
              "state":true,
              "crttm":"2017-12-14 09:30:58",
              "mdftm":"2017-12-14 09:30:59",
              "crtby":null,
              "mdfby":null
            },
            {
              "id":9,
              "monitoritemid":7,
              "conditionValue":"",
              "description":"当客户的账户余额≤#balance#%时，向客户发出预警信息",
              "status":0,
              "state":true,
              "crttm":"2017-12-14 09:30:58",
              "mdftm":"2017-12-14 09:30:59",
              "crtby":null,
              "mdfby":null
            }
          ]
        },
        {
          "id":8,
          "itemno":null,
          "monitorgroupid":4,
          "name":"卡流量预警监控",
          "status":0,
          "iscustomerreceive":true,
          "msgtypes":"EMAIL,SMS",
          "sendemail":false,
          "sendsms":false,
          "sendwechat":false,
          "sendsoftware":false,
          "email":null,
          "sms":null,
          "wechat":null,
          "software":null,
          "msgTemplate":null,
          "state":true,
          "crttm":"2017-12-14 09:39:01",
          "mdftm":"2017-12-14 09:39:03",
          "crtby":null,
          "mdfby":null,
          "groupNo":"",
          "rules":[
            {
              "id":10,
              "monitoritemid":8,
              "conditionValue":"",
              "description":"当流量池中的某张卡流量在1小时内使用超过#cardTraffic#GB时，向运营人员发出预警信息",
              "status":1,
              "state":true,
              "crttm":"2017-12-14 09:39:01",
              "mdftm":"2017-12-14 09:39:04",
              "crtby":null,
              "mdfby":null
            }
          ]
        },
        {
          "id":9,
          "itemno":null,
          "monitorgroupid":4,
          "name":"话单接收超时",
          "status":0,
          "iscustomerreceive":true,
          "msgtypes":"EMAIL,SMS",
          "sendemail":false,
          "sendsms":false,
          "sendwechat":false,
          "sendsoftware":false,
          "email":null,
          "sms":null,
          "wechat":null,
          "software":null,
          "msgTemplate":null,
          "state":true,
          "crttm":"2017-12-14 09:44:57",
          "mdftm":"2017-12-14 09:44:57",
          "crtby":null,
          "mdfby":null,
          "groupNo":"",
          "rules":[
            {
              "id":11,
              "monitoritemid":9,
              "conditionValue":"",
              "description":"当话单重发次数≥#retryNum#次时，向运营人员发出预警信息",
              "status":1,
              "state":true,
              "crttm":"2017-12-14 09:44:57",
              "mdftm":"2017-12-14 09:44:57",
              "crtby":null,
              "mdfby":null
            }
          ]
        },
        {
          "id":10,
          "itemno":null,
          "monitorgroupid":4,
          "name":"定时任务异常",
          "status":0,
          "iscustomerreceive":true,
          "msgtypes":"EMAIL,SMS",
          "sendemail":false,
          "sendsms":false,
          "sendwechat":false,
          "sendsoftware":false,
          "email":null,
          "sms":null,
          "wechat":null,
          "software":null,
          "msgTemplate":null,
          "state":true,
          "crttm":"2017-12-14 09:48:55",
          "mdftm":"2017-12-14 09:48:56",
          "crtby":null,
          "mdfby":null,
          "groupNo":"",
          "rules":[
            {
              "id":12,
              "monitoritemid":10,
              "conditionValue":"",
              "description":"有定时任务非正常结束时，向运营人员发出预警信息",
              "status":1,
              "state":true,
              "crttm":"2017-12-14 09:48:55",
              "mdftm":"2017-12-14 09:48:56",
              "crtby":null,
              "mdfby":null
            }
          ]
        },
        {
          "id":11,
          "itemno":null,
          "monitorgroupid":4,
          "name":"卡鉴权失败",
          "status":0,
          "iscustomerreceive":true,
          "msgtypes":"EMAIL,SMS",
          "sendemail":false,
          "sendsms":false,
          "sendwechat":false,
          "sendsoftware":false,
          "email":null,
          "sms":null,
          "wechat":null,
          "software":null,
          "msgTemplate":null,
          "state":true,
          "crttm":"2017-12-14 09:52:53",
          "mdftm":"2017-12-14 09:52:54",
          "crtby":null,
          "mdfby":null,
          "groupNo":"",
          "rules":[
            {
              "id":13,
              "monitoritemid":11,
              "conditionValue":"",
              "description":"有流量卡鉴权失败时，向运营人员发出预警信息，同时将该卡状态置为“失效”，不参与卡调度",
              "status":1,
              "state":true,
              "crttm":"2017-12-14 09:52:53",
              "mdftm":"2017-12-14 09:52:54",
              "crtby":null,
              "mdfby":null
            }
          ]
        },
        {
          "id":12,
          "itemno":null,
          "monitorgroupid":4,
          "name":"卡池掉线预警监控",
          "status":0,
          "iscustomerreceive":true,
          "msgtypes":"EMAIL,SMS",
          "sendemail":false,
          "sendsms":false,
          "sendwechat":false,
          "sendsoftware":false,
          "email":null,
          "sms":null,
          "wechat":null,
          "software":null,
          "msgTemplate":null,
          "state":true,
          "crttm":"2017-12-14 09:57:08",
          "mdftm":"2017-12-14 09:57:09",
          "crtby":null,
          "mdfby":null,
          "groupNo":"",
          "rules":[
            {
              "id":14,
              "monitoritemid":12,
              "conditionValue":"",
              "description":"云平台超过#lostTime#分钟没有收到卡池的心跳信息时，向运营人员发出预警监控信息",
              "status":1,
              "state":true,
              "crttm":"2017-12-14 09:57:08",
              "mdftm":"2017-12-14 09:57:09",
              "crtby":null,
              "mdfby":null
            }
          ]
        },
        {
          "id":13,
          "itemno":null,
          "monitorgroupid":4,
          "name":"卡池可用流量卡预警监控",
          "status":0,
          "iscustomerreceive":true,
          "msgtypes":"EMAIL,SMS",
          "sendemail":false,
          "sendsms":false,
          "sendwechat":false,
          "sendsoftware":false,
          "email":null,
          "sms":null,
          "wechat":null,
          "software":null,
          "msgTemplate":null,
          "state":true,
          "crttm":"2017-12-14 10:02:53",
          "mdftm":"2017-12-14 10:02:54",
          "crtby":null,
          "mdfby":null,
          "groupNo":"",
          "rules":[
            {
              "id":15,
              "monitoritemid":13,
              "conditionValue":"",
              "description":"当卡池内的可用流量卡数量少于#availableCardNum#张时，向运营人员发出预警监控信息",
              "status":1,
              "state":true,
              "crttm":"2017-12-14 10:02:53",
              "mdftm":"2017-12-14 10:02:54",
              "crtby":null,
              "mdfby":null
            }
          ]
        }
      ];*/
      //this.data = data;
    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
