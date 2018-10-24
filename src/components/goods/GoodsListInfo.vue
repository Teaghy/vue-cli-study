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
      <div class="mui-card-header">{{goodsInfo.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：<del>￥{{goodsInfo.market_price}}</del>&nbsp;&nbsp;销售价：<span class="now_price">￥{{goodsInfo.sell_price}}</span>
          </p>
          <p class="goodsSum">购买数量：
              <button class="sub" @click="countSub" :class="[{'subBgc' : subflag}]">-</button>
              <input class="sum" type="text"  v-model="count">
              <button class="add" :class="[{'addBgc' : addflag}]" @click="countAdd">+</button>
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" >加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>

    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{goodsInfo.goods_no}}</p>
          <p>库存情况：{{goodsInfo.stock_quantity}}件</p>
          <p>上架时间：{{goodsInfo.add_time | dateFromat}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button  type="primary" size="large" plain >图文介绍</mt-button>
        <mt-button type="danger"  size="large" plain >商品评论</mt-button>
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
        id:this.$route.params.id,
        goodsInfo:{},
        count:1,
        subflag:true,
        addflag:false
      }
    },
    created(){
        this.getlunboList()
        this.getGoodsinfo()
    },
    methods:{
        countAdd(){
          if(this.count <this.goodsInfo.stock_quantity){
              this.count++;
               this.subflag=false
          }else{
              this.addflag=true;
          }
        },
        countSub(){
          if(this.count > 1 ){
            this.count--
            this.subflag=false
            this.addflag=false;
          }else{
            this.subflag=true
          }

        },
        getlunboList(){
          this.$http.get("api/getthumimages/"+this.id).then(result =>{

              if(result.body.status === 0){
                result.body.message.forEach(element => {
                  element.img=element.src
                });
                this.lunbotuList=result.body.message
              }
          })
        },
        getGoodsinfo(){
          this.$http.get('api/goods/getinfo/'+this.id).then(result =>{
           // console.log(result)
            if(result.body.status === 0){
              this.goodsInfo=result.body.message[0]
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
  .now_price{
    color:red;
    font-size:16px;
    font-weight: bold;
  }
  .goodsSum{
    display: inline-block;
    position: relative;
    height: 35px;
    line-height: 35px;
    .sum{
      display: inline-block;
      text-align: center;
      font-size:17px;
      height: 35px;
      width: 120px;
      border:1px solid #ccc;
      margin:0;
      // box-sizing: border-box;
      padding: 0 40px;
    }
    .add{
      position: absolute;
      padding: 0;
      font-size:18px;
      width: 40px;
      line-height: 35px;
      height: 35px;
      right: 0;
      top:0 ;
    }
    .sub{
      position:absolute;
      padding: 0;
      font-size:18px;
      line-height: 35px;
      width: 40px;
      height: 35px;
      right: 80px;
      top:0;
    }
  }
   .mui-card-footer {
    display: block;
    button {
      margin: 15px 0;
    }
  }
  .subBgc,.addBgc{
    color:#fff;
    background-color: #ccc;
  }
</style>
