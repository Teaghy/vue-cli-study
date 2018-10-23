<template>
  <div class="hello">
    <!-- 轮播图区域 -->
    <swiper :lunbotuList="imageList" :isfull="true"></swiper>
    <!-- <mt-swipe :auto="4000" >
      <mt-swipe-item v-for="(item,index) in imageList" :key="index">
          <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe> -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newsList">
                <img src="../../images/menu1.png" alt="">
                <div class="mui-media-body">新闻资讯</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photo">
               <img src="../../images/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodsList">
                <img src="../../images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newsList">
              <img src="../../images/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newsList">
              <img src="../../images/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newsList">
               <img src="../../images/menu6.png" alt="">
                <div class="mui-media-body">练习我们</div></router-link></li>
	</ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import swiper from '../subcomponents/LunbotuList.vue'
export default {
  data() {
    return {
      imageList: [] // 定义存放图片的数组
    };
  },
  created() {
    // 发起获取轮播图的数据请求
    this.getlunbo();
  },
  methods: {
    getlunbo() {
      // 使用vue-resource的get请求方式发送数据请求
      this.$http.get("api/getlunbo").then(result => {
        if (result.body.status === 0) {
          // 将请求回来的数据赋值给存放图片的数组
          this.imageList = result.body.message;
          // console.log(result.body.message)
        } else {
          Toast("数据加载失败...");
        }
      });
    }
  },
  components:{
    swiper
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    img {
      height: 100%;
      width: 100%;
    }
  }
}
.mui-grid-view.mui-grid-9{
  background-color: #fff;
  img{
    width: 60px;
  }
  .mui-media-body{
    font-size: 13px;
  }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border: none;
}
</style>
