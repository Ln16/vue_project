<template>
  <div class="homeContent">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../../assets/images/carousel/1.jpg">
        </div>
        <div class="swiper-slide">
          <img src="../../../assets/images/carousel/2.jpg">
        </div>
      </div>
    <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="promise"  @click="getArr">
      <ul class="promiseList">
        <li class="promiseItem" v-for="(item, index) in promise" :key="index">
          <img :src="item.icon">
          <span>{{item.desc}}</span>
        </li>
      </ul>
    </div>
    <section class="content">
      <div class="contentNav">
        <ul class="contentNavList">
          <li class="contentNavItem" v-for="(kingKong, index) in kingKongList" :key="index">
            <a :href="kingKong.schemeUrl">
              <img :src="kingKong.picUrl" alt="">
              <span>{{kingKong.text}}</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="jamboree">
        <img src="../../../assets/images/gif/1.gif" alt="">
      </div>
      <div class="activityModule">
        <ul class="activityList clearfix">
          <li class="activityItem" v-for="(item, index) in 6" :key="index">
            <a href="javascript:;">
              <img src="../../../assets/images/activity/1.png">
              <img src="../../../assets/images/activity/2.png" class="smallImg">
            </a>
          </li>
        </ul>
        <div class="discounts">
          <img src="../../../assets/images/discounts/1.png">
          <img src="../../../assets/images/discounts/1.png">
          <img src="../../../assets/images/discounts/1.png">
        </div>
        <div class="classified"></div>
        <div class="category">
          <ul class="categoryList clearfix">
            <li class="categoryItem" v-for="(item, index) in 12" :key="index">
              <a href="javascript:;">
                <span class="title">洗护美妆</span>
                <span>每满299减100</span>
                <img src="../../../assets/images/nav2/1.png">
              </a>
            </li>
          </ul>
        </div>
        
      </div>
      <div class="ADgif">
        <img src="../../../assets/images/gif/2.gif">
      </div>
      <div class="sceneLightShoppingGuideModule">
        <ul class="sceneLightShoppingGuideModuleList clearfix">
          <li class="sceneLightShoppingGuideModuleItem" v-for="(item, index) in sceneLightShoppingGuideModule" :key="index">
            <p>{{item.styleItem.title}}</p>
            <span>{{item.styleItem.desc}}</span>
            <div class="imgList">
              <img :src="item.styleItem.picUrlList[0]">
              <img :src="item.styleItem.picUrlList[1]">
            </div>
          </li>
        </ul>
      </div>
      <div class="customize">
        <h3>私人定制</h3>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(personalShops, index) in personalShopBigArr" :key="index">
              <ul class="customizeList">
                <li class="customizeItem" v-for="(item, index) in personalShops" :key="index">
                  <img :src="item.listPicUrl">
                  <!-- 写到这了 -->
                  <span class="name">{{item.name}}</span>
                  <span class="price">￥{{item.retailPrice}}</span>
                </li>
              </ul>
            </div>
          </div>
        <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
import { setTimeout } from 'timers';
  export default {
    props:{
      kingKongList:Array,
      promise:Array,
      sceneLightShoppingGuideModule:Array,
      personalShop:Array
    },
    methods:{
      getArr(){
        console.log(this.kingKongList)
      }
    },
    computed:{
      personalShopBigArr(){
        const bigArr = []
        let smallArr = []
        this.personalShop.forEach((el,index) => {
          if (index%3===0) {
            smallArr = []
            bigArr.push(smallArr)
          }
          smallArr.push(el)
        });
        console.log(bigArr)
        return bigArr
      }
    },
    mounted(){
      new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      }) 
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.homeContent
  width 100%
  position absolute
  top 147px
  padding-bottom 97.5px
  background-color #f5f5f5
  .swiper-slide
    img
      width 100%
  .promise
    height 9.6vw
    width 100%
    background-color #fff
    .promiseList
      height 100%
      display flex
      justify-content space-around
      align-items center
      padding 0 2vw
      .promiseItem
        font-size 2vw
        color #b4282d
        img 
          width 32px
          height 32px
          display inline-block
          vertical-align middle
  .content
    .contentNav
      height 50vw
      background-color #fff
      .contentNavList   
        .contentNavItem
          width 20vw
          height 25vw
          position relative
          float left
          a 
            position absolute
            top 50%
            left 50%
            transform translate(-50%,-50%)
            text-align center
            img 
              width 15vw
            span 
              color #000 
              font-size 3vw
    .jamboree
      img 
        width 100%
    .activityModule
      background #B0151B 
      padding 2vw  
      .activityList
        .activityItem
          float left
          margin 0 0.74vw
          a 
            display inline-block
            position relative
            img 
              width 46.5vw
            .smallImg
              width 21vw  
              position absolute
              right 1vw
              top 50%
              transform translateY(-50%)
      .discounts
        padding 0 1.5vw
        img 
          width 31vw
          display inline-block  
      .classified  
        height 10.6vw
        background-image url("../../../assets/images/bg/1.png") 
        background-repeat no-repeat
        background-size 100%   
    .category
      background #B0151B 
      .categoryList
        .categoryItem 
          width 172px
          height 220px
          background-color #ccc  
          float left  
          margin 4px 
          background-image url("../../../assets/images/bg/2.png")   
          background-repeat no-repeat
          background-size 100%  
          border-radius 8px
          a 
            display flex
            flex-direction column
            justify-content space-between
            align-items center
            padding 5px
            img 
              width 140px
              height 140px
            span 
              color #af6207 
              transform scale(0.8)
              &.title
                font-weight 700 
                transform scale(1)
  .ADgif
    height 126.75px   
    img 
      width 100%  
  .sceneLightShoppingGuideModule
    width 100%
    height 576px  
    background-color #fff  
    .sceneLightShoppingGuideModuleList
      padding 10px 26px
      .sceneLightShoppingGuideModuleItem
        width 343px
        height 264px
        float left
        background-color #f5f5f5
        margin 3px
        box-sizing border-box
        padding 20px
        p
          font-size 32px
          color #333
          padding-left 10px
        span 
          font-size 24px
          color #7f7f7f 
          padding-left 10px 
        .imgList
          display flex  
          justify-content space-around
          align-items center
          img 
            width 150px
            height 150px    
  .customize  
    width 100%
    height 470px    
    background-color #fff   
    margin-top 20px 
    box-sizing border-box 
    padding 20px 
    h3 
      width 100%
      height 100px
      font-size 32px
      color #333
      font-weight 400
      line-height 100px
      padding 0 10px
      box-sizing border-box
    .customizeList
      .customizeItem
        width 216px
        height 310px
        float left   
        margin 10px
        img 
          width 216px
          height 216px
          background-color #f5f5f5
</style>
