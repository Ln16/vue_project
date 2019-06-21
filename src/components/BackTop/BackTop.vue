<template>
  <div class="top" ref="top" @click="backTop">
    <i class="iconfont icon-jiantou"></i>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods:{
      backTop(){
        const step = document.documentElement.scrollTop/30
        const intervalId = window.setInterval(()=>{
          document.documentElement.scrollTop = document.documentElement.scrollTop - step
          if (document.documentElement.scrollTop<=0) {
            document.documentElement.scrollTop = 0
            window.clearInterval(intervalId)
          }
        },16)
      }
    },
    mounted(){
      this.isScroll = false
      document.addEventListener("scroll", ()=>{
        //函数节流
        if (this.isScroll) {
          return
        }
        this.isScroll=true
        window.setTimeout(()=>this.isScroll=false,300)
        if (this.$refs.top) {
          if (window.scrollY>600) {
            this.$refs.top.style.opacity=1
          }else{
            this.$refs.top.style.opacity=0
          }
        }
      });
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .top  
    position fixed  
    bottom 120px
    right 20px
    z-index 10
    background-color rgba(255,255,255,.8)
    width 82px
    height 82px
    border-radius 50%
    line-height 82px
    text-align center
    transform rotate(180deg)
    opacity 0
    transition 1s
    border 1px solid #ccc
    i 
      font-size 42px
 
</style>
