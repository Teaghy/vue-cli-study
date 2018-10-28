<template>
  <div class="shopcar-container">
    <div class="shop-Info">
      <div class="mui-card" v-for="(item,index) in goodslist" :key="index">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
              <mt-switch v-model="$store.getters.getGoodsSelected[item.id]" @change="selectChanged(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
              <img :src="item.thumb_path">
              <div class="goodsinfo">
                <h1 >{{item.title}}</h1>
                <div class="info">
                  <span class="price">${{item.sell_price}}</span>
                  <div class="numbox">
                    <numbox :goodsC="$store.getters.getGoodsCount[item.id]" :goodId="item.id"></numbox>
                    <a href="#" @click.prevent="del(item.id,index)">删除</a>
                  </div>

                </div>
              </div>
					</div>
				</div>
			</div>
    </div>
      <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner pay" >
                <div class="left_box">
                  <p>总计(不含运费)</p>
                  <p>已勾选商品<span>{{$store.getters.updateCounts.count}}</span>件,总价<span>¥{{$store.getters.updateCounts.price}}</span></p>
                </div>
                <mt-button type="danger">去计算</mt-button>
					</div>
				</div>
			</div>
      <!-- <p>{{$store.getters.updateCounts}}</p> -->
    </div>
</template>

<script>
import shopCarNumbox from "../subcomponents/goodsCar_numbox.vue";
export default {
  data() {
    return {
      goodslist: [],
      flag: false
    };
  },
  methods: {
    getShopcarData() {
      var idArr = [];
      this.$store.state.car.forEach(item => {
        idArr.push(item.id);
      });
      if (idArr.length <= 0) {
        return;
      }
      this.$http
        .get("api/goods/getshopcarlist/" + idArr.join(","))
        .then(result => {
          //console.log(result)
          this.goodslist = result.body.message;
        });
    },
    del(id, index) {
      // console.log(id, index);
      this.$store.commit("deleteGoods", id);
      this.goodslist.splice(index, 1);
    },
    selectChanged(id,selected){
      //console.log(id,selected)
      this.$store.commit('updateGoodsSelected',{id,selected})
    }
  },
  mounted() {
    this.getShopcarData();
  },
  components: {
    numbox: shopCarNumbox
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.shopcar-container {
  background-color: #eee;
  overflow: hidden;
  .mui-card-content-inner {
    display: flex;
    align-items: center;
  }
  .shop-Info {
    .goodsinfo {
      // margin-left: 5px;
    }
    img {
      // margin-left:5px;
      height: 60px;
      width: 60px;
    }
    h1 {
      font-size: 13px;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .price {
        color: red;
        font-weight: bold;
      }
      .numbox {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .pay {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .left_box {
    p {
      font-size: 13px;
    }
    span {
      font-size: 16px;
      color: red;
    }
  }
}
</style>
