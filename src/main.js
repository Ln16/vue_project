import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
import './assets/icon/iconfont.css'
import '../src/assets/css/reset.css'
import VueRouter from 'vue-router'
import router from './router'
import 'swiper/dist/css/swiper.min.css'
import 'lib-flexible/flexible'
import './mock/mockServer'
import BackTop from './components/BackTop/BackTop'
import './assets/css/initSwiper.stylus'
Vue.use(VueLazyload, {
  preLoad: 1.0, //距离当前dom距离页面底部的高度
  error: '', //加载失败显示的图片
  loading: require('./assets/images/gif/lazy.gif'), //加载中显示的图片
  attempt: 1 // 图片加载失败，最多重试的次数
});
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.component('BackTop', BackTop)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
