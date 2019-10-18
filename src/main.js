import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import router from './assets/js/router.js'
import Mint from 'mint-ui'
Vue.use(Mint)
import '../node_modules/mint-ui/lib/style.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
 
// require styles
import '../node_modules/vue-awesome-swiper/node_modules/swiper/dist/css/swiper.min.css'
 
Vue.use(VueAwesomeSwiper)

import axios from 'axios'
Vue.prototype.$http = axios
new Vue({
  el: '#app',
  render: h => h(App),
  router
  
})
