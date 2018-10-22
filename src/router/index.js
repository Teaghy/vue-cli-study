import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import HomeContainer from '@/components/tabbar/HomeContainer.vue'
import MemberContainer from '@/components/tabbar/MemberContainer.vue'
import SearchContainer from '@/components/tabbar/SearchContainer.vue'
import ShopCarContainer from '@/components/tabbar/ShopCarContainer.vue'
import NewsList from '@/components/news/NewsList.vue'
import NewsInfo from '@/components/news/NewsInfo.vue'
import photoList from '@/components/photo/PhotoList.vue'


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
        path: '/home/newsList',
        name: 'newsList',
        component: NewsList
      },
      {
        path: '/home/newinfo/:id',
        name: 'NewsInfo',
        component: NewsInfo
      },
      {
        path:'/home/photo',
        name:'PhotoList',
        component: photoList
      },
      {
        path: '*',
        name: 'HomeContainer',
        component: HomeContainer
      },
  ],
  linkActiveClass:'mui-active'
})
