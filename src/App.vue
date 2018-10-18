<template>
  <div class="app-container" >
      <mt-header fixed title="欢迎来到德莱联盟"></mt-header>
      <nav class="mui-bar mui-bar-tab">
        <a class="mui-tab-item mui-active" href="#tabbar">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </a>
        <a class="mui-tab-item" href="#tabbar-with-chat">
          <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
          <span class="mui-tab-label">消息</span>
        </a>
        <a class="mui-tab-item" href="#tabbar-with-contact">
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">通讯录</span>
        </a>
        <a class="mui-tab-item" href="#tabbar-with-map">
          <span class="mui-icon mui-icon-gear"></span>
          <span class="mui-tab-label">设置</span>
        </a>
      </nav>


      <h1>123</h1>
    </div>


</template>

<script>
// import { Swipe, SwipeItem } from "mint-ui";
import { Toast } from "mint-ui";
import { Indicator } from "mint-ui";
export default {
  name: "App",
  methods: {
    handle() {
      Toast("提示信息");
    },
    loading() {
      Indicator.open({
        text: "加载中...",
        spinnerType: "fading-circle"
      });
      setTimeout(() => {
        Indicator.close();
      }, 4000);
    }
  }
};
</script>

<style scoped>
  .app-container{
    padding-top: 40px;
  }
</style>
