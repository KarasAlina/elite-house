import '@/assets/styles/imports.sass';
import Vue from 'vue'
import router from './router'
import App from './App.vue'

import 'slick-carousel/slick/slick.js'
import 'slick-carousel/slick/slick.css'
import {currency} from "@/filters/currency"
import VueSmoothScroll from 'vue2-smooth-scroll'


Vue.filter('currency', currency)
Vue.use(VueSmoothScroll,{
  updateHistory: false
})

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

