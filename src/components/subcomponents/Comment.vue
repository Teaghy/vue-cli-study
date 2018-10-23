<template>
  <dir class="comment">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入评论的内容(最多120字)" maxlength="120" v-model="content"></textarea>
    <mt-button type="primary" size="large" @click="addComment">发表评论</mt-button>
    <div class="cmt-list" v-for="(item,index) in comment" :key="index">
        <div class="cmt-item">
          <div class="cmt-title">
            第{{index+1}}楼 &nbsp;&nbsp;用户:{{item.user_name}} 发表时间:{{item.add_time | dateFromat}}
          </div>
          <div class="cmt-body">
            {{item.content == 'undefined'? '用户太懒了,什么都没有输入': item.content}}
          </div>
        </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMoreList">加载更多</mt-button>
  </dir>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      comment: [],
      pageindex: 1,
      content: ""
    };
  },
  created() {
    this.getcomment();
  },
  methods: {
    getcomment() {
      this.$http
        .get("api/getcomments/" + this.getId + "?pageindex=" + this.pageindex)
        .then(result => {
          console.log(result.body.message);
          if (result.body.status == 0) {
            this.comment = this.comment.concat(result.body.message);
          } else {
            Toast("获取失败");
          }
        });
    },
    getMoreList() {
      this.pageindex++;
      this.getcomment();
    },
    addComment() {
      if(this.content.trim() ==''){
        return Toast('请输入评论内容')
      }
      this.$http.post("api/postcomment/" + this.getId, {
        artid: this.getId,
        content: this.content.trim()
      }).then(result =>{
        if(result.body.status ==0 ){
          var cmt={ user_name : '匿名用户', add_time: Date.now(), content: this.content.trim()}
          this.comment.unshift(cmt)
          this.content=''
        }else{
          Toast('失败')
        }
      });
    }
  },
  props: ["getId"]
};
</script>
<style lang="less" scoped>
.comment {
  padding: 0;
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
  .cmt-list {
    .cmt-item {
      margin: 5px 0;
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>

