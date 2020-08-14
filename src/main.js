import App from './App.vue';
import Vue from 'vue';
import router from '@/router';
import TypeNav from '@/components/TypeNav';
import store from '@/store';
//引入api
import '@/api';  //为了测试用的
//取消浏览器的默认警告
Vue.config.productionTip = false;
//全局注册
Vue.component('TypeNav', TypeNav)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
