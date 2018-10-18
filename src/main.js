// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'
import vueResource from 'vue-resource'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(vueResource)
Vue.use(MintUI)
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
