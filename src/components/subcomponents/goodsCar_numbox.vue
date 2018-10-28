<template>
  <div class="mui-numbox" data-numbox-step='1' data-numbox-min='1' data-numbox-max='200' style="height: 25px">
      <button class="mui-btn mui-numbox-btn-minus"  ref="sub" type="button">-</button>
      <input @change="updateCount" @keyup="maxCount" class="mui-numbox-input" type="number" :value="goodsC" ref="count"/>
      <button  class="mui-btn mui-numbox-btn-plus" ref="add" type="button">+</button>
</div>
</template>
<script>
import mui from '../../assets/mui/js/mui.min.js'
 export default {
   mounted() {
      mui('.mui-numbox').numbox()
   },
    methods:{
      updateCount(){
          // console.log();
          var buygoodsinfo={id:this.goodId ,count:this.$refs.count.value}
          this.$store.commit('updateCar',buygoodsinfo)

      },
      maxCount(){
        if(this.$refs.count.value >=200){
          this.$refs.count.value=200
        }
         if(this.$refs.count.value <=1){
           this.$refs.count.value=1
        }
      //    if(this.$refs.count.value >=200 ){
      //       this.$refs.add.disabled=false
      //     }else if(this.$refs.count.value <=1){
      //       this.$refs.sub.disabled=false
      //     }else{
      //       this.$refs.add.disabled=true
      //       this.$refs.sub.disabled=true
      //     }
       }
    },
    props:['goodsC','goodId']
 }
</script>
<style lang="less" scoped>
</style>

