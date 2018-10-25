<template>
  <div>
    <comment :getId="$route.params.id"></comment>
  </div>
</template>
<script>
import comment from '../subcomponents/Comment.vue'
export default {
  data(){
    return {}
  },
  components:{
    comment
  }
}
</script>
<style lang="less" scoped>

</style>

