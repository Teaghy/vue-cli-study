import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import HomeContainer from '@/components/tabbar/HomeContainer.vue'
import MemberContainer from '@/components/tabbar/MemberContainer.vue'
import SearchContainer from '@/components/tabbar/SearchContainer.vue'
import ShopCarContainer from '@/components/tabbar/ShopCarContainer.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'HomeContainer',
      component: HomeContainer
    },
    {
      path: '/member',
      name: 'MemberContainer',
      component: MemberContainer
    },
    {
      path: '/shopping',
      name: 'SearchContainer',
      component: SearchContainer
    },
     {
       path: '/search',
       name: 'ShopCarContainer',
       component: ShopCarContainer
     },
      {
        path: '*',
        name: 'HomeContainer',
        component: HomeContainer
      }
  ],
  linkActiveClass:'mui-active'
})
