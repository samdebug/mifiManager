import Vue from 'vue'
import Router from 'vue-router'


/*
2.0新菜单 按需加载
Date:2017/12/7
author:malanpeng
*/
//登录首页

const home = r => require.ensure( ['@/components/home'], () => r (require('@/components/home')))
const login = r => require.ensure( ['@/components/login'], () => r (require('@/components/login')))
const layout = r => require.ensure( ['@/components/layout'], () => r (require('@/components/layout')))
const NotFound = r => require.ensure( ['@/components/NotFoundComponent'], () => r (require('@/components/NotFoundComponent')))

//供应商管理
const flowSupplier = r => require.ensure( ['@/components/supplier/flowSupplier'], () => r (require('@/components/supplier/flowSupplier')))
const supplierBill = r => require.ensure( ['@/components/supplier/supplierBill'], () => r (require('@/components/supplier/supplierBill')))
const supplierServer = r => require.ensure( ['@/components/supplier/supplierServer'], () => r (require('@/components/supplier/supplierServer')))

//代理商管理
const agentManager = r => require.ensure( ['@/components/agent/agentManager'], () => r (require('@/components/agent/agentManager')))
const agentCharge = r => require.ensure( ['@/components/agent/agentCharge'], () => r (require('@/components/agent/agentCharge')))
const profitIn = r => require.ensure( ['@/components/agent/profitIn'], () => r (require('@/components/agent/profitIn')))
const profitOut = r => require.ensure( ['@/components/agent/profitOut'], () => r (require('@/components/agent/profitOut')))
const accountCheck = r => require.ensure( ['@/components/agent/accountCheck'], () => r (require('@/components/agent/accountCheck')))


//设备管理
const miFiDevice = r => require.ensure( ['@/components/miFiDevice/miFiDevice'], () => r (require('@/components/miFiDevice/miFiDevice')))
const globalSim = r => require.ensure( ['@/components/miFiDevice/globalSim'], () => r (require('@/components/miFiDevice/globalSim')))

//套餐管理
const trafficPkg = r => require.ensure( ['@/components/packageConsume/trafficPkg'], () => r (require('@/components/packageConsume/trafficPkg')))
const mifiPkg = r => require.ensure( ['@/components/packageConsume/mifiPkg'], () => r (require('@/components/packageConsume/mifiPkg')))

//订单管理
const orderManager = r => require.ensure( ['@/components/order/orderManager'], () => r (require('@/components/order/orderManager')))

//数据统计
const flowChart = r => require.ensure( ['@/components/count/flowChart'], () => r (require('@/components/count/flowChart')))
const deviceDaily = r => require.ensure( ['@/components/count/deviceDaily'], () => r (require('@/components/count/deviceDaily')))
const flowDaily = r => require.ensure( ['@/components/count/flowDaily'], () => r (require('@/components/count/flowDaily')))

//系统设置
const frameUser = r => require.ensure( ['@/components/frame/frameUser'], () => r (require('@/components/frame/frameUser')))
const frameRole = r => require.ensure( ['@/components/frame/frameRole'], () => r (require('@/components/frame/frameRole')))
const frameMenu = r => require.ensure( ['@/components/frame/frameMenu'], () => r (require('@/components/frame/frameMenu')))
const audit = r => require.ensure( ['@/components/frame/audit'], () => r (require('@/components/frame/audit')))
const author = r => require.ensure( ['@/components/frame/author'], () => r (require('@/components/frame/author')))
const hardwareVer = r => require.ensure( ['@/components/frame/hardwareVer'], () => r (require('@/components/frame/hardwareVer')))

//监控预警
const monitorSetting = r => require.ensure( ['@/components/monitor/monitorSetting'], () => r (require('@/components/monitor/monitorSetting')))
const monitorLog = r => require.ensure( ['@/components/monitor/monitorLog'], () => r (require('@/components/monitor/monitorLog')))


//官网控制
const banner = r => require.ensure( ['@/components/website/banner'], () => r (require('@/components/website/banner')))
const base = r => require.ensure( ['@/components/website/base'], () => r (require('@/components/website/base')))




/*//供应商管理
import flowSupplier from '@/components/supplier/flowSupplier'
import supplierBill from '@/components/supplier/supplierBill'

//代理商管理
import agentManager from '@/components/agent/agentManager'
import agentCharge from '@/components/agent/agentCharge'
import profitIn from '@/components/agent/profitIn'
import profitOut from '@/components/agent/profitOut'
import accountCheck from '@/components/agent/accountCheck'

//设备管理
import miFiDevice from '@/components/miFiDevice/miFiDevice'
import globalSim from '@/components/miFiDevice/globalSim'

//套餐管理
import trafficPkg from '@/components/packageConsume/trafficPkg'
import mifiPkg from '@/components/packageConsume/mifiPkg'

//订单管理
import orderManager from '@/components/order/orderManager'

//数据统计
import flowChart from '@/components/count/flowChart'
import deviceDaily from '@/components/count/deviceDaily'
import flowDaily from '@/components/count/flowDaily'

//系统设置
import frameUser from '@/components/frame/frameUser'
import frameRole from '@/components/frame/frameRole'
import audit from '@/components/frame/audit'

//监控预警
import monitorSetting from '@/components/monitor/monitorSetting'
import monitorLog from '@/components/monitor/monitorLog'


//官网控制
import banner from '@/components/website/banner'
import base from '@/components/website/base'*/

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },

    /*{
      path: '/',
      name: 'home',
      meta: { requireAuth: true },
      component: home
    },*/

    {
      path: '/',
      component: layout,
      meta: { requireAuth: true },
      children: [{
          path: '/supplier/flowSupplier',
          name: 'flowSupplier',
          meta: { requireAuth: true },
          component: flowSupplier
        },
        {
          path: '/home',
          name: 'home',
          meta: { requireAuth: true },
          component: home
        },
        {
          path: '/supplier/supplierBill',
          name: 'supplierBill',
          meta: { requireAuth: true },
          component: supplierBill
        },
        {
          path: '/supplier/supplierServer',
          name: 'supplierServer',
          meta: { requireAuth: true },
          component: supplierServer
        },

        //代理商管理
        {
          path: '/agent/agentManager',
          name: 'agentManager',
          meta: { requireAuth: true },
          component: agentManager
        },
        {
          path: '/agent/agentCharge',
          name: 'agentCharge',
          meta: { requireAuth: true },
          component: agentCharge
        },
        {
          path: '/agent/profitIn',
          name: 'profitIn',
          meta: { requireAuth: true },
          component: profitIn
        },
        {
          path: '/agent/profitOut',
          name: 'profitOut',
          meta: { requireAuth: true },
          component: profitOut
        },
        {
          path: '/agent/accountCheck',
          name: 'accountCheck',
          meta: { requireAuth: true },
          component: accountCheck
        },

        //设备管理
        {
          path: '/miFiDevice/miFiDevice',
          name: 'miFiDevice',
          meta: { requireAuth: true },
          component: miFiDevice
        },
        {
          path: '/miFiDevice/globalSim',
          name: 'globalSim',
          meta: { requireAuth: true },
          component: globalSim
        },

        //套餐管理
        {
          path: '/packageConsume/trafficPkg',
          name: 'trafficPkg',
          meta: { requireAuth: true },
          component: trafficPkg
        },
        {
          path: '/packageConsume/mifiPkg',
          name: 'mifiPkg',
          meta: { requireAuth: true },
          component: mifiPkg
        },

        //订单管理
        {
          path: '/order/orderManager',
          name: 'orderManager',
          meta: { requireAuth: true },
          component: orderManager
        },

        //数据统计
        {
          path: '/count/deviceDaily',
          name: 'deviceDaily',
          meta: { requireAuth: true },
          component: deviceDaily
        },
        {
          path: '/count/flowDaily',
          name: 'flowDaily',
          meta: { requireAuth: true },
          component: flowDaily
        },
        {
          path: '/count/flowChart',
          name: 'flowChart',
          meta: { requireAuth: true },
          component: flowChart
        },

        //系统设置
        {
          path: '/frame/frameUser',
          name: 'frameUser',
          meta: { requireAuth: true },
          component: frameUser
        },
        {
          path: '/frame/frameRole',
          name: 'frameRole',
          meta: { requireAuth: true },
          component: frameRole
        },
        {
          path: '/frame/frameMenu',
          name: 'frameMenu',
          meta: { requireAuth: true },
          component: frameMenu
        },
        {
          path: '/frame/audit',
          name: 'audit',
          meta: { requireAuth: true },
          component: audit
        },
        {
          path: '/frame/author',
          name: 'author',
          meta: { requireAuth: true },
          component: author
        },
        {
          path: '/frame/hardwareVer',
          name: 'hardwareVer',
          meta: { requireAuth: true },
          component: hardwareVer
        },

        //监控预警
        {
          path: '/monitor/monitorSetting',
          name: 'monitorSetting',
          meta: { requireAuth: true },
          component: monitorSetting
        },
        {
          path: '/monitor/monitorLog',
          name: 'monitorLog',
          meta: { requireAuth: true },
          component: monitorLog
        },

        //官网控制
        {
          path: '/website/banner',
          name: 'banner',
          meta: { requireAuth: true },
          component: banner
        },
        {
          path: '/website/base',
          name: 'base',
          meta: { requireAuth: true },
          component: base
        }
      ]
    },
    {
        path: '*',
        component: NotFound
    }


    //供应商管理
    
    /*{
      path: '/website/user',
      name: 'user',
      component: user
    }*/
  ]
})