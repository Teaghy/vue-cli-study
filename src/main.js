// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import VueRouter from 'vue-router'
import router from './router'
import vueResource from 'vue-resource'
import moment from 'moment'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/css/index.css'

// Vue.use(moment) moment不需要在Vue.use()上使用
Vue.use(vueResource)
Vue.use(MintUI)
Vue.http.options.root = 'http://027xin.com:8899';
Vue.http.options.emulateJSON = true;

Vue.filter('dateFromat',function (datastr,pattern="YYYY-MM-DD HH:mm:ss") {
  return moment(datastr).format(pattern)
})
import './assets/mui/css/mui.css'
import './assets/mui/css/icons-extra.css'
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
