<template>
  <div class="mui-numbox" data-numbox-step='1' data-numbox-min='1' :data-numbox-max='stock'>
      <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
      <input @change="updateMax"  @keyup="maxNum" class="mui-numbox-input" type="number" value="1" ref="count"/>
      <button  class="mui-btn mui-numbox-btn-plus" type="button">+</button>
</div>
</template>
<script>
import mui from '../../assets/mui/js/mui.min.js'
 export default {
   data(){
     return {
        countNum: 1
     }
   },
   methods:{
        updateMax(){
          this.$emit('getCount', parseInt(this.$refs.count.value))
        },
        maxNum(){
          if(this.$refs.count.value >= this.stock){
            this.$refs.count.value =this.stock
            // mui('.mui-numbox').numbox().setOption('max',newval)
          }
        }
   },
   mounted() {
      mui('.mui-numbox').numbox()
   },
   props:['stock'],
   watch:{
     'stock':function (newval,oldval) {
       mui('.mui-numbox').numbox().setOption('max',newval)
     }
   }
 }
</script>
<style lang="less" scoped>
</style>

