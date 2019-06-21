<template>
  <div class=" twoCategories">
    <ul class="twoCategoriesList">
      <img v-lazy="categoryL1List&&categoryL1List.wapBannerUrl" class="wapBanner">
      <li class="twoCategoriesItem" v-for="(item, index) in categoryL1List&&categoryL1List.subCateList" :key="index">
        <img v-lazy="item.wapBannerUrl">
        <span>{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
  export default {
    props:{
      categoryL1List:Object
    },
    mounted(){
      new BScroll('.twoCategories',{
        scrollX: true,
        click: true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.twoCategories
  width 588px
  background-color #fff
  float right
  margin-top 3px
  overflow hidden
  height 1148.5px
  .twoCategoriesList
    img
      padding-top 30px
    float left
    .wapBanner
      width 100%
    padding 0 18px
    .twoCategoriesItem
      width 144px
      height 216px
      margin 0 20px
      float left
      text-align center
      img 
       width 100%
</style>
