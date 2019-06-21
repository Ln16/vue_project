<template>
  <div class="phoneLogin">
    <div class="logoWrap">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png">
    </div>
    <form>
      <div class="inputWrap">
        <div class="phoneWrap">
          <input type="text" :placeholder="email?'邮箱账号':'请输入手机号'"
           maxlength="11" v-model="phone">
        </div>
        <div class="codeWrap">
          <input :type="isPwd?'password':'text'"
           :placeholder="isPwd?'请输入密码':'请输入短信验证码'"
            maxlength="4" v-model="pwd">
          <div class="getCode" v-show="!isPwd">获取验证码</div>
        </div>
        <div class="toggleWrap" v-if="!email">
          <span>{{isPwd?'忘记密码？':'遇到问题？'}}</span>
          <span class="toggle" @click="toggle">使用{{isPwd?'短信':'密码'}}验证登录</span>
        </div>
        <!-- 当点击的是邮箱登录时 -->
        <div class="toggleWrap" v-else>
          <span>注册账号</span>
          <span class="toggle" style="color:#7f7f7f">忘记密码</span>
        </div>
      </div>
      <div class="btnWarp">
        <div class="phoneLogin" :style="{color:phone&&pwd?'#fff':'#CA7677'}">
          登录
        </div>
        <div class="emailLogin" @click="$emit('setShow',0)">
          其他登录方式
        </div>
        <span v-show="!email">注册账号></span>
      </div>
    </form>  
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      email:Boolean
    },
    data() {
      return {
        isPwd:false,
        phone:'',
        pwd:''
      }
    },
    methods:{
      toggle(){
        this.isPwd=!this.isPwd
        this.pwd=''
      }
    },
    mounted(){
      if (this.email) {
        this.isPwd=true
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.phoneLogin
  width 100%
  height 100%
  background-color #fff
  .logoWrap
    width 100%
    height 64px
    padding-top 46px
    display flex
    justify-content center
    img 
      height 100%
  form  
    .inputWrap
      width 100%
      padding 150px 40px 30px
      box-sizing border-box  
      .phoneWrap,.codeWrap
        width 100%
        height 91px
        line-height 91px
        color #666
        border-bottom 1.1px solid #eaeaea
        margin 15px 0px 15px
        input 
          border none 
          &::-webkit-input-placeholder, textarea::-webkit-input-placeholder
            color: #888
      .codeWrap
        display flex    
        justify-content space-between
        align-items center
        height auto
        min-height 80px
        .getCode
          width 168px
          height 54px
          border 1.1px solid #333
          border-radius 10px
          line-height 54px
          text-align center
          margin-right 20px
          font-size 28px
          color #333
          margin 30px 0 30px
      .toggleWrap
        height 50px  
        display flex
        justify-content space-between
        align-items center
        color #333
        font-size 28px
        :first-child 
          color #7f7f7f
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
      .phoneLogin
        background-color #b4282d  
        color #fff
      .emailLogin
        color #b4282d 
        border 1.1px solid #b4282d
      span 
        color #333
        font-size 28px     
</style>
