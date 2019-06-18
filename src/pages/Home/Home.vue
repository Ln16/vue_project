<template>
  <div>
    <HomeHeader></HomeHeader>
    <Recommend :kingKongList="kingKongList" 
      :promise="promise"
      :sceneLightShoppingGuideModule="sceneLightShoppingGuideModule"
      :personalShop="personalShop"
    ></Recommend>
  </div>
</template>

<script type="text/ecmascript-6">
import HomeHeader from '../../components/HomeHeader/HomeHeader'
import Recommend from './Recommend/Recommend'
import {reqHomeData} from '../../api'
  export default {
    data() {
      return {
        kingKongList:[],
        promise:[],
        sceneLightShoppingGuideModule:[],
        personalShop:[]
      }
    },
    async mounted(){
      //发请求获取mock数据
      const result = await reqHomeData()
      if(result.code===0){
        this.kingKongList = result.data.kingKongModule.kingKongList
        this.promise = result.data.policyDescList
        this.sceneLightShoppingGuideModule = result.data.sceneLightShoppingGuideModule
        this.personalShop = result.data.personalShop
        console.log(result.data.personalShop)
      }
    },
    components:{
      HomeHeader,
      Recommend
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
