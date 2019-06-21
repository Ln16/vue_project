<template>
  <div class="container">
    <div class="search">
      <!-- 需要icon -->
      <div class="searchHeader">
        <i class="iconfont icon-iconfontzhizuobiaozhun22"></i>
        <input type="text" :placeholder="placeholder" v-model="searchText">
        <span class="goBack" @click="$router.back()">取消</span>
      </div>
      <ul class="searchList">
        <li class="searchItem" v-for="(item, index) in searchArr" :key="index">
          {{item}}
        </li>
      </ul>
    </div>
    <div class="associate" v-show="!searchText">
      <p class="hot">热门搜索</p>
      <ul class="hotList">
        <li class="hotItem" v-for="(item, index) in hotKeywordVOList" :key="index">
          {{item.keyword}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {reqSearchInit,reqMatching} from '../../api'
  export default {
    data() {
      return {
        searchText:'',
        placeholder:'',
        hotKeywordVOList:[],
        searchArr:[]
      }
    },
    async mounted(){
      const result = await reqSearchInit()
      if(result.code==='200'){
        this.placeholder = result.data.defaultKeyword.keyword
        this.hotKeywordVOList = result.data.hotKeywordVOList
      }
      this.economy = false
    },
    watch: {
      async searchText(){
        //函数节流，减少请求次数
        if (this.economy) {
          return
        }
        this.economy = true
        window.setTimeout(()=>{
          this.economy = false
        },300)
        const result = await reqMatching(this.searchText)
        this.searchArr = result.data
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.container
  width 100%
  height 100%
  background-color #F4F4F4
  .search
    width 100%
    height 88px
    box-sizing border-box
    line-height 88px
    background-color #fff
    position relative
    .searchHeader
      padding 0 30px
      i 
        position absolute
        top 0
        left 50px
        font-size 34px
      input 
        background-color #F4F4F4
        width 514px
        height 56px
        padding 0 20px 0 70px
        margin-right 25px
        border none
        border-radius 5px
        &::-webkit-input-placeholder
          font-size 26px
          color #999
      .goBack 
        display inline-block
        width 56px
        height 41px
        text-align center
        line-height 41px
        font-size 28px
    .searchList
      padding 0 40px
      background-color #fff
      .searchItem
        height 100px
        color #333
        font-size 28px
        line-height 100px
        border-bottom 2px solid #F4F4F4
        
  .associate
    width 100%
    height 404px
    padding 0 30px 30px 
    box-sizing border-box
    background-color #fff
    .hot
      width 100%
      height 90px
      font-size 28px
      color #999
      line-height 90px
    .hotList
      .hotItem
        line-height 47px
        padding 0 15px
        margin 0 32px 32px 0
        border 1.1px solid #cccccc
        color #333
        float left
        border-radius 8px
        &:first-child 
          border 1.1px solid #b4282d
          color #b4282d
</style>
