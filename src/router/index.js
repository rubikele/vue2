import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '@/router/routes'
Vue.use(VueRouter)


const originPush = VueRouter.prototype.push;
const originReplace = VueRouter.prototype.replace;

//重新定义
VueRouter.prototype.push = function (location, OnResolved, onReject) {
  if (OnResolved === undefined && onReject === undefined) {
    return originPush.call(this, location).catch(() => { })
  } else {
    return originPush.call(this, location, OnResolved, onReject)
  }
}

VueRouter.prototype.replace = function (location, OnResolved, onReject) {
  if (OnResolved === undefined && onReject === undefined) {
    return originReplace.call(this, location).catch(() => { })
  } else {
    return originReplace.call(this, location, OnResolved, onReject)
  }
}

export default new VueRouter({
  routes
})