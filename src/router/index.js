import Vue from 'vue'
import VueRouter from 'vue-router'


import Mobile from '../views/Mobile.vue'
import SG from '../views/SG.vue'
import Engine from '../views/Engine.vue'
import Policy from '../views/Policy.vue'
import Aesthetic from '../views/Aesthetic.vue'
import Screen from '../views/testing/Screen.vue'






Vue.use(VueRouter)

const routes = [

  {
    path: '/screen',
    name: 'Screen',
    component: Screen
  },
  {
    path: '/engine',
    name: 'Engine',
    component: Engine
  },
  {
    path: '/sg',
    name: 'SG',
    component:SG,
    meta:{
      title:'服务指南'
    }
  },
  {
    path: '/aesthetic',
    name: 'Aesthetic',
    component: Aesthetic,
    meta:{
      title:'车型筛选'
    }
  },
  {
    path: '/mobile',
    component:Mobile
  },
  {
    path: '/policy',
    component: Policy
  },
  {
    path: '/product',
    component: () => import('../views/Productfrom.vue'),
  },
  {
    path: '/tabs',
    name: 'Tabs',
    component: () => import('../views/testing/Tabs.vue'),
  },

  {
    path: '/cara',
    name: 'Cara',
    component: () => import('../views/Cara.vue'),
  },
  {
    path: '/car',
    name: 'Car',
    component: () => import('../views/Car.vue'),
    meta:{
      title:'车型总览'
    }
  },
  {
    path: '/purchase',
    component: () => import('../views/Purchase.vue'),
    meta:{
      title:'在线购车'
    }
  },
  {
    path: '/map',
    component: () => import('../views/Map.vue'),
  },
  {
    path: '/hello',
    component: () => import('../views/testing/Hello.vue'),
  },
  {
    path: '/financial',
    name: 'Financial',
    component: () => import('../views/Financial.vue'),
    meta:{
      title:'金融服务'
    }
  },
  {
    path: '/reg',
    component: () => import('../views/Reg.vue'),
    meta:{
      title:'注册页'
    }
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
    meta:{
      title:'登录页'
    }
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    mata:{
      title:'首页'
    }
  },
  {
    path: '/coupon',
    name: 'Coupon',
    component: () => import('../views/Coupon.vue'),
   meta:{
     title:'限时优惠方案'
   }
  }
]

const router = new VueRouter({
  routes
})

export default router
