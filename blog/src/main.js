import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import { BootstrapVue} from 'bootstrap-vue'
import dayjs from 'dayjs'
// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.filter('timeFormat', function(msg) {    // msg 为固定的参数 即是你需要过滤的数据
  return dayjs(msg).format('YYYY-MM-DD HH:mm:ss')
})
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
