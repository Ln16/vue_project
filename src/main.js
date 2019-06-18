import Vue from 'vue'
import App from './App.vue'
import './assets/icon/iconfont.css'
import '../src/assets/css/reset.css'
import VueRouter from 'vue-router'
import router from './router'
import 'swiper/dist/css/swiper.min.css'
import 'lib-flexible/flexible'
import './mock/mockServer'
Vue.config.productionTip = false
Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
