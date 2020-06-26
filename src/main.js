import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'
import './assets/styles/main.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false

Vue.use(require('vue-moment'));

new Vue({
  store,
  created () {
    AOS.init()
  },
  render: h => h(App),
}).$mount('#app')
