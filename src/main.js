import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'


// 配置
import axios from 'axios';
axios.defaults.baseURL='http://119.45.180.126:8889/';
Vue.prototype.axios=axios;



// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
//页面标题栏
router.beforeEach((to, from, next) => {
  if(to.meta.title){
    document.title=to.meta.title
  }
  next()
  
})




//引入高德地图api
import VueAMap from 'vue-amap'
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key:'my key',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
})

//创建Footer 全局组件
import Footer from './components/Footer.vue'
Vue.component('mFooter',Footer);


// 创建navbar 全局组件
import Navbar from './components/Navbar.vue'
Vue.component('navbar' ,Navbar);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
