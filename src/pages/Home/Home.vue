<template>
  <div>
    <HomeHeader></HomeHeader>
    <Recommend :kingKongList="kingKongList" 
      :promise="promise"
      :sceneLightShoppingGuideModule="sceneLightShoppingGuideModule"
      :personalShop="personalShop"
      :flashSaleModule="flashSaleModule"
      :newItemList='newItemList'
      :popularItemList='popularItemList'
      :topicList='topicList'
      :zhongChouList='zhongChouList'
      :categoryHotSellModule='categoryHotSellModule'
      :indexActivityModule='indexActivityModule'
      :tagList='tagList'
      :categoryModule='categoryModule'
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
        personalShop:[],
        flashSaleModule:{},
        newItemList:[],
        popularItemList:[],
        topicList:[],
        zhongChouList:[],
        categoryHotSellModule:{},
        indexActivityModule:[],
        tagList:[],
        categoryModule:[]
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
        this.flashSaleModule = result.data.flashSaleModule
        this.newItemList = result.data.newItemList
        this.popularItemList = result.data.popularItemList
        this.topicList = result.data.topicList
        this.zhongChouList = result.data.zhongChouList
        this.categoryHotSellModule = result.data.categoryHotSellModule
        this.indexActivityModule = result.data.indexActivityModule
        this.tagList = result.data.tagList
        this.categoryModule = result.data.categoryModule
        // console.log(result.data.popularItemList)
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
