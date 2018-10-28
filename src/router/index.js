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
import Photoinfo from '@/components/photo/Photoinfo.vue'
import GoodsList from '@/components/goods/GoodsList.vue'
import GoodsListInfo from '@/components/goods/GoodsListInfo.vue'
import GoodsDesc from '@/components/goods/GoodsDesc.vue'
import GoodsComment from '@/components/goods/GoodsComment.vue'


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
      component: ShopCarContainer
    },
     {
       path: '/search',
       name: 'ShopCarContainer',
       component: SearchContainer
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
         path: '/home/photoinfo/:id',
         name: 'Photoinfo',
         component: Photoinfo
      },
       {
         path: '/home/goodsList',
         name: 'goodsList',
         component: GoodsList
       },
       {
         path: '/home/goodsListInfo/:id',
         name: 'goodsListinfo',
         component: GoodsListInfo
       },
        {
          path: '/home/goodsDesc/:id',
          name: 'goodsDesc',
          component: GoodsDesc
        },
         {
           path: '/home/goodsComment/:id',
           name: 'goodsComment',
           component: GoodsComment
         },
      {
        path: '*',
        name: 'HomeContainer',
        component: HomeContainer
      },
  ],
  linkActiveClass:'mui-active'
})
