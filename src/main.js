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
import VuePreview from 'vue-preview'
import Vuex from 'vuex'

// defalut install


// Vue.use(moment) moment不需要在Vue.use()上使用
Vue.use(vueResource)
Vue.use(MintUI)
Vue.use(VuePreview)
Vue.http.options.root = 'http://027xin.com:8899';
Vue.http.options.emulateJSON = true;
Vue.use(Vuex)

Vue.filter('dateFromat', function (datastr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(datastr).format(pattern)
})
import './assets/mui/css/mui.css'
import './assets/mui/css/icons-extra.css'
Vue.config.productionTip = false
// /* eslint-disable no-new */

var car = JSON.parse(localStorage.getItem('car') || '[]');
var store = new Vuex.Store({
  state: {
    car: car
  },
  mutations: {
    addToCar(state, buyGoodsInfo) {
      // state.num=50
      //console.log('这是使用vuex调用的方法')
      //console.log(goodsinfo)

      var flag = false
      state.car.some(item => {
        //如果有商品,则只需要在购物车中增加所需要的商品的数量即可
        if (item.id == buyGoodsInfo.id) {
          item.count += parseInt(buyGoodsInfo.count)
          flag = true
          //console.log(state.car)
          return true
        }
      })
      if (!flag) {
        //如果没有此商品,新增一项到购物车中
        state.car.push(buyGoodsInfo)
        //console.log(state.car)
      }
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateCar(state, datainfo) {
      //console.log(datainfo)
      state.car.some(item => {
        if (item.id == datainfo.id) {
         // console.log(item.count)
          item.count = parseInt(datainfo.count)
          //  console.log(item.count)
          return true
        }
      })
      // console.log(123)
      // console.log(state.car)
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    deleteGoods(state,id){
        // console.log(id)
        state.car.some((item,index) =>{
          if(item.id == id){
              state.car.splice(index , 1)
            return true
          }
        })
      localStorage.setItem('car', JSON.stringify(state.car))
    },
   updateGoodsSelected(state, info) {
    // console.log(selected)
     state.car.some((item, index) => {
       if (item.id == info.id) {
         // state.car.splice(index, 1)
         item.select = info.selected
         return true
       }
     })
     localStorage.setItem('car', JSON.stringify(state.car))
    }
  },
  getters: {
    getAllCount(state) {
      var counts = 0;
      state.car.forEach(item => {
        counts += item.count
      })
      return counts
    },
    getGoodsCount(state) {
      var goodCount = {};
      state.car.forEach(item => {
        goodCount[item.id] = item.count
      })
      return goodCount
    },
    getGoodsSelected(state) {
      var o = {};

      state.car.forEach(item => {
        // console.log(item)
        o[item.id] = item.select
      })
      // console.log(o)
      return o
    },
    updateCounts(state){
      var newCar=state.car.filter(item =>{
            return item.select == true
      })
     // console.log(newCar)
      //return newCar
      var newCount={
        count: 0,
        price: 0
      };
      newCar.forEach(item =>{
        newCount.count+=item.count;
        newCount.price += item.count * item.sellprice
      })
     // console.log(newCount)
      return newCount
    }
  }
})
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>',
  store
})
