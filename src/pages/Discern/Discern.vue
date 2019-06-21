<template>
  <div class="container">
    <div class="DiscernHeader">
      <div class="header">
        <i class="iconfont icon-shouye" @click="$router.push('/home')"></i>
        <div class="text">
          <span :class="{active:isDiscover}" @click="isDiscover=true">发现</span>
          <span :class="{active:!isDiscover}" @click="isDiscover=false">甄选家</span>
        </div>
        <i class="iconfont icon-gouwuche" @click="$router.push('/shoppingCart')"></i>
        <i class="iconfont icon-iconfontzhizuobiaozhun22" @click="$router.push('/search')"></i>
      </div>
      <nav class="nav clearfix">
        <ul class="navList">
          <li class="navItem" :class="{active:true}">
            推荐
          </li>
          <li class="navItem">
            618年中盛典
          </li>
          <li class="navItem">
            好货内部价
          </li>
          <li class="navItem">
            回购榜
          </li>
          <li class="navItem">
            晒单
          </li>
          <li class="navItem">
            开发者日记
          </li>
          <li class="navItem">
            达人
          </li>
          <li class="navItem">
            HOME
          </li>
        </ul>
      </nav>
    </div>
    <div class="discernContent">
      <ul class="DiscernList">
        <li class="DiscernItem" v-for="(item, index) in discoverList" :key="index">
          
          <div class="type2" v-if="item.type===2">
            <div class="info">
              <div class="user">
                <img v-lazy="item.avatar">
                <span class="username">{{item.nickname}}</span>
              </div>
              <div class="title">{{item.title}}</div>
              <div class="subTitle">{{item.subTitle}}</div>
              <div class="watch"><i class="iconfont icon-yanjing"></i> {{item.readCount}}人看过</div>
            </div>
            <img v-lazy="item.picUrl" class="bigImg">
          </div>
          <div class="type1" v-else>
            <div class="user">
              <img v-lazy="item.avatar">
              <span class="username">{{item.nickname}}</span>
            </div>
            <div class="title">{{item.title}}</div>
            <img v-lazy="item.picUrl" class="bigImg">
            <div class="watch"><i class="iconfont icon-yanjing"></i> {{item.readCount}}人看过</div>
          </div>
        </li>
        <div class="noMore" v-show="noMore">没有更多了</div>
      </ul>
    </div>
    <BackTop></BackTop>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import {reqDiscover} from '../../api'
  export default {
    data() {
      return {
        discoverList:[],
        isDiscover:true,
        dropDown:false,
        noMore:false
      }
    },
    methods:{
      scrollFn(){
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll('.discernContent', {
              click: true,
              scrollY: true,
              probeType: 3
            });
            new BScroll('.nav',{
              scrollX: true,
              click: true
            })
          }else{
            this.scroll.refresh();
          }
          //touchEnd（手指离开以后触发） 通过这个方法来监听下拉刷新
          this.scroll.on('touchEnd', async (pos) => {
              //上拉加载 总高度>下拉的高度+10 触发加载更多
            if(this.scroll.maxScrollY>pos.y+10){
              const result = await reqDiscover(++this.page,2)
              if(result.code==='200'){
                for (let index = 0; index < result.data.result.length; index++) {
                  result.data.result[index].topics.forEach(element => {
                    if (element.readCount>=10000) {
                      element.readCount = Math.round(element.readCount/100)/10+'k'
                    }
                    this.discoverList.push(element)
                  });
                }
                if (!result.data.hasMore) {
                  this.noMore=true
                }
              }else{
                alert('获取数据失败');
              }
              //使用refresh 方法 来更新scroll  解决无法滚动的问题
              this.scroll.refresh()
            }
          })
        });
      }
    },
    async mounted() {
      this.page = 1
      const result = await reqDiscover(1,2)
      if(result.code==='200'){
        for (let index = 0; index < result.data.result.length; index++) {
          result.data.result[index].topics.forEach(element => {
            if (element.readCount>=10000) {
              element.readCount = Math.round(element.readCount/100)/10+'k'
            }
            this.discoverList.push(element)
          });
        }
      }else{
        alert('获取数据失败');
      }
      
      this.scrollFn()
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .container
    width 100%
    height 100%
    background-color #f5f5f5
    .DiscernHeader
      width 100%
      height 172px
      .header
        height 100px
        padding 0 26px
        background-color #fff
        box-sizing border-box
        position relative
        line-height 100px
        .text
          color #7f7f7f
          font-size 28px
          position absolute
          top 50%
          left 50%
          transform translate(-50%,-50%)
          .active
            color #b4282d
            font-size 40px
            font-weight 700
            margin 0 30px
        i 
          font-size 50px
        .icon-shouye
          float left
        .icon-iconfontzhizuobiaozhun22,.icon-gouwuche
          float right
        .icon-iconfontzhizuobiaozhun22
          margin-right 30px
      .nav
        border-top 1px solid #ccc
        height 70px
        background-color #fff
        overflow hidden
        border-bottom 1px solid #ccc
        .navList
          float left
          white-space nowrap
          .navItem
            display inline-block
            margin 0 28px
            font-size 28px 
            line-height 72px
            color #7f7f7f
            position relative
            &.active
              color #b4282d
              &:before
                content: ''
                position: absolute
                bottom 0
                left: 50%
                transform translate(-50%,-50%)
                width: 100%
                height 4px
                background-color: #b4282d
  .discernContent
    height 1064px
    overflow hidden
    .DiscernList
      background-color #f5f5f5
      margin-top 20px
      .DiscernItem
        .type1
          width 100%
          // height 678px
          padding 36px 30px
          margin-top 20px
          background-color #fff
          box-sizing border-box
          .user 
            height 56px
            line-height 56px
            margin-bottom 24px
            display flex
            font-size 28px
            color #333
            img 
              height 100%
              border-radius 50%
              margin-right 15px
          .title
            color #333  
            font-size 36px  
            margin-bottom 16px
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;  //这里是在第二行有省略号
            overflow: hidden;
          .bigImg
            width 100%    
          .watch
            margin-top 28px
            color #999  
            i 
              font-size 28px
              opacity 0.6  
        .type2
          width 100% 
          height 336px
          padding 32px 30px
          margin-top 20px
          background-color #fff
          box-sizing border-box
          display flex
          justify-content space-between
          .info
            width 400px
            height 272px
            .user
              width 100%
              height 56px
              line-height 56px
              margin-bottom 24px
              display flex
              font-size 28px
              color #333
              img 
                height 100%
                border-radius 50%
                margin-right 15px
          .title   
            color #333  
            font-size 32px  
            margin-bottom 10px
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;  //这里是在第二行有省略号
            overflow: hidden;
          .subTitle
            font-size 28px
            color #7f7f7f 
            margin-bottom 25px 
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;  //这里是在第二行有省略号
            overflow: hidden;
          .watch
            margin-top 28px
            color #999 
            i 
              font-size 28px
              opacity 0.6   
          .bigImg 
            width 272px   
    .noMore  
      width 100%
      height 100px 
      background-color #fff
      line-height 100px
      text-align center       
</style>
