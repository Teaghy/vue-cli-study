<template>
  <div class="goodsinfo-container">

    <transition  @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter">
       <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>
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
              <!-- <button class="sub" @click="countSub" :class="[{'subBgc' : subflag}]">-</button>
              <input class="sum" type="text"  v-model="count">
              <button class="add" :class="[{'addBgc' : addflag}]" @click="countAdd">+</button> -->
              <numbox :stock="goodsInfo.stock_quantity"></numbox>
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addCar">加入购物车</mt-button>
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
        <mt-button  type="primary" size="large" plain @click="goDesc(id)" >图文介绍</mt-button>
        <mt-button type="danger"  size="large" plain @click="goComment(id)" >商品评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import swiper from "../subcomponents/LunbotuList.vue";
import numbox from "../subcomponents/goodsInfo_numbox.vue";
export default {
  data() {
    return {
      lunbotuList: [],
      id: this.$route.params.id,
      goodsInfo: {},
      count: 1,
      ballFlag: false
    };
  },
  created() {
    this.getlunboList();
    this.getGoodsinfo();
  },
  methods: {
    //手动写加减
    // countAdd(){
    //   if(this.count <this.goodsInfo.stock_quantity){
    //       this.count++;
    //        this.subflag=false
    //   }else{
    //       this.addflag=true;
    //   }
    // },
    // countSub(){
    //   if(this.count > 1 ){
    //     this.count--
    //     this.subflag=false
    //     this.addflag=false;
    //   }else{
    //     this.subflag=true
    //   }

    // },
    getlunboList() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          result.body.message.forEach(element => {
            element.img = element.src;
          });
          this.lunbotuList = result.body.message;
        }
      });
    },
    getGoodsinfo() {
      this.$http.get("api/goods/getinfo/" + this.id).then(result => {
        // console.log(result)
        if (result.body.status === 0) {
          this.goodsInfo = result.body.message[0];
        }
      });
    },
    goDesc(id) {
      this.$router.push({ name: "goodsDesc", params: { id } });
    },
    goComment(id) {
      this.$router.push({ name: "goodsComment", params: { id } });
    },
    addCar() {
      this.ballFlag = !this.ballFlag;
    },
    beforeEnter(el) {
      el.style.transform = "translate(0, 0)";
    },
    enter(el, done) {
      el.offsetWidth;
      //getBoundingClientRect() 获取元素在页面中环绕的位置
      const ballPosition=this.$refs.ball.getBoundingClientRect()
      //console.log(ballPosition)
      const badgePosition=document.querySelector('#badge').getBoundingClientRect()
      //console.log(badgePosition)
      const moveX=badgePosition.left - ballPosition.left;
      const moveY=badgePosition.top - ballPosition.top;
      el.style.transform = `translate(${moveX}px , ${moveY}px)`;
      el.style.transition = "all 1s cubic-bezier(.4, -0.3, 1, .68";
      done()
    },
    afterEnter(){
      this.ballFlag=!this.ballFlag
    }
  },
  components: {
    swiper,
    numbox
  }
};
</script>
<style lang="less" scoped>
.goodsinfo-container {
  background-color: #eee;
  overflow: hidden;
  position: relative;
}
.now_price {
  color: red;
  font-size: 16px;
  font-weight: bold;
}
// .goodsSum{
//   display: inline-block;
//   position: relative;
//   height: 35px;
//   line-height: 35px;
// .sum{
//   display: inline-block;
//   text-align: center;
//   font-size:17px;
//   height: 35px;
//   width: 120px;
//   border:1px solid #ccc;
//   margin:0;
//   // box-sizing: border-box;
//   padding: 0 40px;
// }
//}
.mui-card-footer {
  display: block;
  button {
    margin: 15px 0;
  }
}
.ball {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  z-index: 99;
  top: 350px;
  left: 146px;
}
</style>
