<template>
  <div>
    <mt-swipe :auto="4000" >
      <mt-swipe-item v-for="(item,index) in lunbotuList" :key="index">
          <img :src="item.img" alt="" :class="{isfull:isfull}">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
  import { Toast } from "mint-ui";
  export default {
  data() {
    return {
       // 定义存放图片的数组
    };
  },
  created() {
    // 发起获取轮播图的数据请求

  },
  methods: {

  },
  props:['lunbotuList','isfull']
};
</script>
<style lang="less" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    text-align: center;
    img {
      height: 100%;
    }
    .isfull{
      width: 100%;
    }
  }
}
</style>

