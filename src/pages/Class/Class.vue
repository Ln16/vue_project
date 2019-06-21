<template>
  <div class="container">
    <div class="search">
      <div class="searchInput" @click="$router.push('/search')">
        <span>
          <i class="iconfont icon-iconfontzhizuobiaozhun22"></i>
          搜索商品,共24949款好物
        </span>
      </div>
      <div class="classify">
        <ul class="classifyList">
          <li class="classifyItem" v-for="(item, index) in categoryL1List" :key="index"
           @click="setIndex(index)" :class="{active:categoryIndex===index}">
            <span>{{item.name}}</span>
          </li>
        </ul>
      </div>
    </div>
    <Category :categoryL1List="categoryL1List[categoryIndex]"></Category>
  </div>
</template>

<script type="text/ecmascript-6">
import {reqCategory} from '../../api'
import Category from './Category/Category'
import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        categoryL1List:[],
        categoryIndex:0
      }
    },
    components:{
      Category
    },
    methods:{
      setIndex(index){
        this.categoryIndex=index
      }
    },
    async mounted() {
      const result = await reqCategory()
      if (result.code===0) {
        this.categoryL1List = result.data.categoryL1List
      }
      new BScroll('.classify',{
        click: true
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.container
  width 100%
  height 100%
  background-color #f4f4f4
  .search
    position relative
    width 100%
    height 88px
    background-color #fff
    padding 0 30px
    box-sizing border-box
    line-height 88px
    display flex
    align-items center
    .searchInput 
      width 690px
      height 56px
      background-color #ededed
      justify-content center
      display flex
      align-items center
      font-size 28px
      color #666
      i  
        font-size 32px
  .classify
    width 162px
    position absolute
    top 88px
    left 0
    background-color #fff
    margin-top 3px
    overflow hidden
    height 1148.5px
    .classifyList
      padding 20px 0  
      .classifyItem    
        height 50px
        padding 20px 0 20px 30px
        color #333
        font-size 28px
        line-height 50px
        position relative
        &.active
          color #ab2b2b
          &:before
            content: ' '
            position: absolute
            top: 50%
            transform translateY(-50%)
            left: 0
            bottom: 0
            width: 5px
            height 50px
            background-color: #ab2b2b
</style>
