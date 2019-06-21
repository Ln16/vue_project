<template>
  <div class="header">
    <div class="headerTopContainer">
      <h1>
        <a href="javascript:;">
          <img src="../../assets/images/logo/logo.png">
        </a>
      </h1>
      <div class="search" @click="$router.push('/search')">
        <!-- icon -->
        <i class="iconfont icon-iconfontzhizuobiaozhun22"></i>
        <span>搜索商品,共25116件好物</span>
      </div>
      <div class="loginBtn" @click="$router.push('/personal')">登录</div>
    </div>
    <div class="headerNav clearfix">
      <div class="headerNavWrap">
        <ul class="headerNavList">
          <li class="headerNavItem active">
            <div>推荐</div>
          </li>
          <li class="headerNavItem">
            <div>居家生活</div>
          </li>
          <li class="headerNavItem">
            <div>服饰鞋包</div>
          </li>
          <li class="headerNavItem">
            <div>美食酒水</div>
          </li>
          <li class="headerNavItem">
            <div>个护清洁</div>
          </li>
          <li class="headerNavItem">
            <div>母婴亲子</div>
          </li>
          <li class="headerNavItem">
            <div>运动旅行</div>
          </li>
          <li class="headerNavItem">
            <div>数码家电</div>
          </li>
          <li class="headerNavItem">
            <div>全球特色</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="spinner">
      <div class="spinnerShadow">
        <div :class="{active:navWrapShow}">
          <i class="iconfont icon-jiantou" @click="showAllNav"></i>
        </div>
      </div>
    </div>
    <div class="navWrap" v-show="navWrapShow">
      <div class="navWrapTitle">
        <span>全部频道</span>
        <!-- <i class="iconfont icon-jiantou" @click="showAllNav"></i> -->
      </div>
      <ul class="allNavList">
        <li class="allNavItem" v-for="(item, index) in 9" :key="index" :class="{active:index===selected}" @click="selectNav(index)">
          推荐
        </li>
      </ul>
      <div class="mask" @click="showAllNav"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        navWrapShow:false,
        selected:0
      }
    },
    methods:{
      selectNav(index){
        this.selected=index
      },
      showAllNav(){
        this.navWrapShow=!this.navWrapShow
      }
    },
    mounted(){
      new BScroll('.headerNavWrap',{
        scrollX: true,
        click: true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header
    width 750px
    height 19.6vw
    background-color #fff
    position fixed
    z-index 10
    top 0
    left 0
    padding 2.7vw 4vw
    box-sizing border-box
    .headerTopContainer
      display flex
      justify-content space-between
      align-items center
      h1 
        a
          img 
            height 5.3vw  
      .search 
        width 59vw  
        height 7.2vw
        background-color #ededed
        border-radius 4px
        text-align center
        color #666
        line-height 7.2vw
        i 
          margin 0.5vw
      .loginBtn 
        border 1.1px solid rgba(180,40,45,0.5)
        color #b4282d
        border-radius 6px
        width 9.2vw   
        height 4.7vw  
        font-size 3vw
        text-align center
        line-height 4.7vw
    .headerNav  
      margin-top 3vw
      .headerNavWrap
        width 640px
        .headerNavList
          float left
          white-space nowrap
          .headerNavItem
            display inline-block
            margin-right 7vw
            &.active
              border-bottom 0.5vw solid #b4282d
            div 
              text-align center
              height 6vw
              width 13vw
    .spinner
      width 140px 
      height 60px
      position absolute
      bottom 2px
      right 0  
      overflow hidden
      .spinnerShadow
        width 100px
        height 60px
        background-color #fff
        box-shadow -25px 0 25px #fff
        text-align center
        line-height 60px
        float right
        position relative
        z-index 1
        div 
          transition 0.5s
          &.active
            transform rotate(180deg)
    .navWrap   
      position absolute
      top 88px
      left 0
      width 100%
      height 372px
      background-color #fff 
      .navWrapTitle
        width 100%
        height 60px
        line-height 60px
        padding 0 30px
        span 
          font-size 28px
        i 
          position absolute
          right 40px
          top 5px
      .allNavList
        width 100%
        height 288px
        padding-top 24px
        .allNavItem
          width 150px 
          height 56px
          float left
          margin 0 0 40px 30px
          text-align center
          line-height 56px
          //设置圆角时边框消失
          border-radius 5px
          border 1.1px solid #ddd
          background-color #fafafa
          &.active
            border 1.1px solid #b4282d
            color #b4282d
      .mask
        width 100%   
        height 100%
        background-color rgba(0,0,0,.5)
        position fixed
</style>