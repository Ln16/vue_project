<template>
  <div class="FooterNav">
    <div class="navList">
      <div class="navItem" :class="{active:this.$route.path==='/home'}" @click="$router.push('/home')">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
      </div>
      <div class="navItem" :class="{active:this.$route.path==='/class'}" @click="$router.push('/class')">
        <i class="iconfont icon-chouti"></i>
        <span>分类</span>
      </div>
      <div class="navItem" :class="{active:this.$route.path==='/discern'}" @click="$router.push('/discern')">
        <i class="iconfont icon-tupian"></i>
        <span>识物</span>
      </div>
      <div class="navItem" :class="{active:this.$route.path==='/shoppingCart'}" @click="$router.push('/shoppingCart')">
        <i class="iconfont icon-gouwuche"></i>
        <span>购物车</span>
      </div>
      <div class="navItem" :class="{active:this.$route.path==='/personal'}" @click="$router.push('/personal')">
        <i class="iconfont icon-icon-test"></i>
        <span>个人</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .FooterNav
    background-color #fff
    display flex
    align-items center
    width 750px
    height 13vw
    position fixed
    bottom 0
    left 0
    z-index 999
    .navList
      width 100%
      display flex
      justify-content space-around
      .navItem
        color #666
        display flex
        flex-direction column
        align-items center
        &.active
          color #b4282d
        i 
          font-size 5vw
        span 
          font-size 3vw  
</style>
