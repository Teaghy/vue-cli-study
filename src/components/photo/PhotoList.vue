<template>
    <div>
      <!-- 顶部滑动条区域 -->
      <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<!-- <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							推荐
						</a> -->
						<!-- <a :class="index==0? 'mui-control-item mui-active': 'mui-control-item'"  v-for="(item,index) in photoList" :key='index'>
							{{item.title}}
						</a> -->
            	<a :class="['mui-control-item' , index==0? ' mui-active': '']"  v-for="(item,index) in photoList" :key='index' @click="getPhotoListByCateId(item.id)">
							{{item.title}}
						</a>
					</div>
				</div>

			</div>
      <!-- 图片列表区域 -->
      <ul class="photo-list">
        <router-link v-for="(item,index) in list" :key="index" :to="'/home/photoinfo/'+item.id" tag="li">
          <img v-lazy="item.img_url">
          <div class="info">
            <h1 class="info-title">{{item.title}}</h1>
            <div class="info-body">
                {{item.zhaiyao}}
            </div>
          </div>
        </router-link>
      </ul>
    </div>
</template>
<script>
import mui from "../../assets/mui/js/mui.min.js";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      photoList: [],
      list: []
    };
  },
  methods: {
    getPhotoList() {
      this.$http.get("api/getimgcategory").then(result => {
        // console.log(result);
        if (result.body.status == 0) {
          this.photoList = result.body.message;
          this.photoList.unshift({ title: "全部", id: 0 });
        } else {
          Toast("获取失败");
        }
      });
    },
    getPhotoListByCateId(id) {
      this.$http.get("api/getimages/" + id).then(result => {
        if (result.body.status == 0) {
          this.list = result.body.message;
        } else {
          Toast("获取失败");
        }
      });
    }
  },
  created() {
    this.getPhotoList(), this.getPhotoListByCateId(0);
  },
  mounted() {
    // 需要在组件的 mounted 事件钩子中，注册 mui 的 scroll 滚动事件
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>
<style lang="less" scoped>
.photo-list{
  list-style: none;
  padding: 10px;
  margin: 0;
  padding-bottom: 0;
  li{
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    position: relative;
    img{
      width: 100%;
      vertical-align: middle;
    }
    img[lazy=loading] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    .info{
      color: #fff;
      text-align: left;
      position: absolute;
      left: 0;
      bottom:0;
      background-color: rgba(0,0,0,0.4);
      max-height: 84px;
      .info-title{
        font-size: 13px;
      }
      .info-body{
        font-size:12px;
      }
    }

  }
}

</style>


