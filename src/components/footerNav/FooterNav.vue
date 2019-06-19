<template>
  <div class="FooterNav">
    <div class="navList">
      <div class="navItem" :class="{active:index===0}" @click="toRouter(0)">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
      </div>
      <div class="navItem" :class="{active:index===1}" @click="toRouter(1)">
        <i class="iconfont icon-chouti"></i>
        <span>分类</span>
      </div>
      <div class="navItem" :class="{active:index===2}" @click="toRouter(2)">
        <i class="iconfont icon-tupian"></i>
        <span>识物</span>
      </div>
      <div class="navItem" :class="{active:index===3}" @click="toRouter(3)">
        <i class="iconfont icon-gouwuche"></i>
        <span>购物车</span>
      </div>
      <div class="navItem" :class="{active:index===4}" @click="toRouter(4)">
        <i class="iconfont icon-icon-test"></i>
        <span>个人</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        index:0
      }
    },
    methods:{
      toRouter(index){
        this.index=index
        switch (index) {
          case 0:
            this.$router.push('/home')
            break
          case 1:
            this.$router.push('/class')
            break
          case 2:
            this.$router.push('/home')
            break
          case 3:
            this.$router.push('/home')
            break
          case 4:
            this.$router.push('/home')
            break 
        }
      }
    }
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
