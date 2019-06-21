<template>
  <div class="personal">
    <div class="header">
      <i class="iconfont icon-shouye" @click="$router.push('/home')"></i>
      <div class="logo">
      </div>
      <i class="iconfont icon-gouwuche" @click="$router.push('/shoppingCart')"></i>
      <i class="iconfont icon-iconfontzhizuobiaozhun22" @click="$router.push('/search')"></i>
    </div>
    <div class="login" v-if="isShow===0">
      <div class="logoWrap">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png">
      </div>
      <div class="btnWarp">
        <div class="phoneLogin" @click="isShow=1">
          <i class="iconfont icon-shouji"></i>
          手机号码登录
        </div>
        <div class="emailLogin" @click="isShow=2">
          <i class="iconfont icon-youxiang"></i>
          邮箱账号登录
        </div>
        <span>手机号快捷注册></span>
      </div>
      <div class="thirdWarp">
        <div class="wx">
          <i class="iconfont icon-weixin"></i>
          微信
        </div>
        <div class="qq">
          <i class="iconfont icon-qq"></i>
          QQ
        </div>
        <div class="wb">
          <i class="iconfont icon-weibo"></i>
          微博
        </div>
      </div>
    </div>
    <!-- 用自定义事件，让子元素修改父元素的数据 -->
    <PhoneLogin v-if="isShow===1" @setShow="setIsShow"></PhoneLogin>
    <PhoneLogin v-if="isShow===2" @setShow="setIsShow" :email="true"></PhoneLogin>
  </div>
</template>

<script type="text/ecmascript-6">
import PhoneLogin from './PhoneLogin/PhoneLogin'
  export default {
    data() {
      return {
        isShow:0
      }
    },
    methods: {
      setIsShow(value){
        this.isShow=value
      }
    },
    components:{
      PhoneLogin
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.personal
  width 100%
  height 100%
  background-color #f2f5f4
  .header
    height 88px
    padding 0 26px
    background-color #fff
    box-sizing border-box
    position relative
    line-height 100px
    border-bottom 1px solid #ddd
    .logo
      width 172px
      height 54px
      color #7f7f7f
      font-size 28px
      position absolute
      top 50%
      left 50%
      transform translate(-50%,-50%)
      background-image url('../../assets/images/logo/logo.png')
      background-size 100%
      background-repeat no-repeat
    i 
      font-size 50px
    .icon-shouye
      float left
    .icon-iconfontzhizuobiaozhun22,.icon-gouwuche
      float right
    .icon-iconfontzhizuobiaozhun22
      margin-right 30px
  .logoWrap
    width 100%
    height 410px
    padding 160px 0
    box-sizing border-box
    img 
      height 100%
      margin 0 auto
  .btnWarp
    width 100%
    height 292px
    padding 0 40px
    box-sizing border-box  
    text-align center
    div
      height 94px
      font-size 28px
      line-height 94px
      margin-bottom 32px
      border-radius 5px
      display flex
      justify-content center
      i 
        font-size 44px
        margin-right 10px
    .phoneLogin
      background-color #b4282d  
      color #fff
    .emailLogin
      color #b4282d 
      border 1.1px solid #b4282d
    span 
      color #333
      font-size 28px  
  .thirdWarp
    width 100%
    height 40px
    box-sizing border-box
    display flex
    justify-content center
    margin-top 415px   
    div
      width 151px
      height 40px
      border-right 2px solid #aaa
      text-align center
      color #7f7f7f
      font-size 28px
      padding 0 10px
      &:last-child
        border none
      i 
        font-size 40px
</style>
