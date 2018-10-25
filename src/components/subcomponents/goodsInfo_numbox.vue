<template>
  <div class="mui-numbox" data-numbox-step='1' data-numbox-min='1' data-numbox-max='10'>
      <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
      <input @change.once="updateMax" v-model="num" @keyup="maxNum" class="mui-numbox-input" type="number" value="1"/>
      <button  class="mui-btn mui-numbox-btn-plus" type="button">+</button>
</div>
</template>
<script>
import mui from '../../assets/mui/js/mui.min.js'
 export default {
   data(){
     return {
        num : 1
     }
   },
   methods:{
        updateMax(){
          mui('.mui-numbox').numbox().setOption('max',this.stock)
        },
        maxNum(){
          if(this.num > this.stock){
            this.num =this.stock
          }
        }
   },
   mounted() {
      mui('.mui-numbox').numbox()
   },
   props:['stock']
 }
</script>
<style lang="less" scoped>
</style>

