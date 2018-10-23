<template>
  <div class="myinfo">
    <h3>{{photoinfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间:{{photoinfo.add_time | dateFromat}}</span>
      <span>点击: {{photoinfo.click}}次</span>
    </p>
    <hr>

    <!-- 缩略图区域 -->
    <div class="tumbs">
       <vue-preview :slides="slide1" ></vue-preview>
    </div>
    <div class="content" v-html="photoinfo.content">
      <!-- 内容区域 -->

    </div>
    <!-- 评论子组件 -->
   <comment-box :getId="id"></comment-box>
  </div>
</template>
<script>
import comment from "../subcomponents/Comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      photoinfo: {},
      slide1:[]
    };
  },
  created() {
    this.getPhotoinfo();
    this.handleClose()
  },
  methods: {
    getPhotoinfo() {
      this.$http.get("api/getimageInfo/" + this.id).then(result => {
        //console.log(result);
        if (result.body.status === 0) {
          this.photoinfo = result.body.message[0];
        }
      });
    },
    handleClose(){
      this.$http.get('api/getthumimages/'+this.id).then(result =>{
        console.log(result)
        if(result.body.status ===0){
          var slide=result.body.message
          slide.forEach( item =>{
             item.msrc= item.src,
             item.alt= 'picture1',
             item.title= 'Image Caption 1',
             item.w=300,
             item.h= 300
          })
          this.slide1=slide
        }
      })
    }
  },
  components: {
   'comment-box':comment
  }
};
</script>
<style lang="less" scoped>
.myinfo {
  padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }

  .content {
    font-size: 13px;
    line-height: 30px;
    text-indent: 2em;
  }
  .tumbs {
    /deep/ figure {
        margin: 0;
        display: inline-block;
       img {
            width: 100px;
            height: 100px;
        }
    }
    }
}
</style>

