<template>
  <div class="shopCart">
    <header class="shopCartHeader">
      <div class="cart">购物车</div>
      <div class="ticket">领券</div>
    </header>
    <div class="promise">
      <div>
        <span></span>
        30天无忧退货
      </div>
      <div>
        <span></span>
        48小时快速退款
      </div>
      <div>
        <span></span>
        满88元免邮费
      </div>
    </div>
    <section>
      <div class="cartImg">
      </div>
      <span>去添加点什么吧</span>
      <div class="loginBtn" @click="$router.push('/personal')">登录</div>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.shopCart
  width 100%
  height 100%
  background-color #f5f5f5
  .shopCartHeader
    width 100%
    height 88px
    padding 0 30px
    box-sizing border-box
    background-color #fff
    display flex
    justify-content space-between
    align-items center
    .cart
      font-size 36px
      color #333
    .ticket
      font-size 30px
      color #b4282d  
      padding-right 30px
  .promise    
    width 100%
    height 70px
    padding 0 30px
    box-sizing border-box
    display flex
    justify-content space-between
    div
      display flex
      justify-content space-between
      align-items center
      color #666
      span 
        width 10px
        height 10px
        border 1.1px solid #ccc
        border-radius 50%
        margin-right 5px
        transform scale(.8)
  section 
    width 100%
    height 1080px
    display flex
    flex-direction column
    justify-content center
    align-items center
    .cartImg  
      width 248px
      height 248px  
      background-image url('../../assets/images/bg/3.png')  
      background-size 100%
    span 
      font-size 28px
      color #999  
      margin -20px 0 50px
    .loginBtn
      width 480px
      height 92px
      color #ffffff
      background-color #b4282d
      text-align center
      line-height 92px  
      font-size 30px
      border-radius 5px
</style>
