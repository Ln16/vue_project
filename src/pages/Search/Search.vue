<template>
  <div class="container">
    <div class="search">
      <!-- 需要icon -->
      <input type="text" placeholder="动态的数据">
      <span class="goBack" @click="$router.back()">取消</span>
    </div>
    <div class="associate">

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
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
    padding 0 30px
    box-sizing border-box
    line-height 88px
    background-color #fff
    input 
      background-color #F4F4F4
      width 564px
      height 56px
      padding 0 20px
      margin-right 25px
      border none
      border-radius 5px
    .goBack 
      display inline-block
      width 56px
      height 41px
      text-align center
      line-height 41px
      font-size 28px
  .associate
    width 100%
    height 404px
    padding 0 30px 30px 
    box-sizing border-box
    background-color #fff
</style>
