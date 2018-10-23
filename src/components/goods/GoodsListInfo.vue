<template>
  <div class="goodsinfo-container">
    <!-- 轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
              <swiper :lunbotuList="lunbotuList" :isfull="false"></swiper>
        </div>
      </div>
    </div>

    <!-- 商品购买区域 -->
     <div class="mui-card">
      <div class="mui-card-header">标题</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：<del>￥555</del>&nbsp;&nbsp;销售价：<span class="now_price">￥222</span>
          </p>
          <p>购买数量：</p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" >加入购物车</mt-button>
            <!-- 分析： 如何实现加入购物车时候，拿到 选择的数量 -->
            <!-- 1. 经过分析发现： 按钮属于 goodsinfo 页面， 数字 属于 numberbox 组件 -->
            <!-- 2. 由于涉及到了父子组件的嵌套了，所以，无法直接在 goodsinfo 页面zhong 中获取到 选中的商品数量值-->
            <!-- 3. 怎么解决这个问题：涉及到了 子组件向父组件传值了（事件调用机制） -->
            <!-- 4. 事件调用的本质： 父向子传递方法，子调用这个方法， 同时把 数据当作参数 传递给这个方法 -->
          </p>
        </div>
      </div>
    </div>

    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：</p>
          <p>库存情况：件</p>
          <p>上架时间：</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain >图文介绍</mt-button>
        <mt-button type="danger" size="large" plain >商品评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
  import swiper from '../subcomponents/LunbotuList.vue'
  export default {
    data(){
      return {
        lunbotuList:[],
        id:this.$route.params.id
      }
    },
    created(){
        this.getlunboList()
    },
    methods:{
        getlunboList(){
          this.$http.get("api/getthumimages/"+this.id).then(result =>{

              if(result.body.status === 0){
                result.body.message.forEach(element => {
                  element.img=element.src
                });
                this.lunbotuList=result.body.message
              }
          })
        }
    },
    components:{
    swiper
  }
  }
</script>
<style lang="less" scoped>
  .goodsinfo-container{
    background-color: #eee;
    overflow: hidden;
  }
</style>
