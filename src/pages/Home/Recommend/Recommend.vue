<template>
  <div class="homeContent">
    <div class="swiper-container" id="swiper1">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../../assets/images/carousel/1.jpg">
        </div>
        <div class="swiper-slide">
          <img src="../../../assets/images/carousel/2.jpg">
        </div>
      </div>
    <!-- 如果需要分页器 -->
      <div class="swiper-pagination" id="pagination1"></div>
    </div>
    <div class="promise">
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
        <div class="swiper-container" id="swiper2">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(personalShops, index) in personalShopBigArr" :key="index">
              <ul class="customizeList">
                <li class="customizeItem" v-for="(item, index) in personalShops" :key="index">
                  <img :src="item.listPicUrl">
                  <!-- 写到这了 -->
                  <span class="name">{{item.name}}<span class="price">￥{{item.retailPrice}}</span></span>
                </li>
              </ul>
            </div>
          </div>
        <!-- 如果需要分页器 -->
          <div class="swiper-pagination" id="pagination2"></div>
        </div>
      </div>
      <div class="limit">
        <div class="countDown">
          <span class="text">限时购</span> 
          <span class="time">02</span>:
          <span class="time">26</span>:
          <span class="time">02</span>
          <span class="more">更多></span>
        </div>
        <ul class="limitList">
          <li class="limitItem" v-for="(item, index) in flashSaleModule.itemList" :key="index">
            <img :src="item.picUrl">
            <div class="price">
              <span>￥{{item.activityPrice}}</span>
              <del>￥{{item.originPrice}}</del>
            </div>
          </li>
        </ul>
      </div>
      <!-- 复制了上面的结构 -->
      <div class="newProduct limit">
        <div class="countDown">
          <span class="text">新品首发</span> 
          <span class="more">更多></span>
        </div>
        <ul class="limitList">
          <li class="limitItem" v-for="(item, index) in newItemListArr" :key="index">
            <img :src="item.listPicUrl">
            <span class="text">{{item.name}}</span>
            <span class="price"><span>￥{{item.counterPrice}}</span></span>
          </li>
        </ul>
      </div>
      <div class="popularItemList">
        <div class="title">
          <span class="text">人气推荐</span> 
          <span class="more">更多></span>
        </div>
        <div class="popularContent">
          <img :src="popularItemListFirst&&popularItemListFirst.listPicUrl">
          <div class="describe">
            <span class="popularTag">{{popularItemListFirst&&popularItemListFirst.itemTagList&&popularItemListFirst.itemTagList[0].name}}</span>
            <span class="popularTitle">{{popularItemListFirst&&popularItemListFirst.name}}</span>
            <span class="popularSubhead">{{popularItemListFirst&&popularItemListFirst.simpleDesc}}</span>
            <span class="popularPrice">￥{{popularItemListFirst&&popularItemListFirst.counterPrice}}</span>
          </div>
        </div>
        <ul class="popularList">
          <li class="popularItem" v-for="(item, index) in popularItemListArr" :key="index">
            <img :src="item.listPicUrl">
            <span class="text">{{item.name}}</span>
            <span class="price">￥{{item.counterPrice}}</span>
          </li>
        </ul>
      </div>
      <!-- 类目热销榜 -->
      <div class="categoryHotSellModule">
        <div class="title">
          <span class="text">类目热销榜</span> 
        </div>
        <div class="categoryHotSellModuleContent">
          <ul class="categoryHotSellModuleListBig">
            <li class="categoryHotSellModuleItemBig" v-for="(item, index) in categoryHotSellModuleBig" :key="index">
              <div>{{item.categoryName}}</div>
              <img :src="item.picUrl">
            </li>
          </ul>
          <ul class="categoryHotSellModuleListSmall">
            <li class="categoryHotSellModuleItemSmall" v-for="(item, index) in categoryHotSellModuleArr" :key="index">
              <p>{{item.categoryName}}</p>
              <img :src="item.picUrl">
            </li>
          </ul>
        </div>
      </div>
      <div class="indexActivityModule">
        <ul class="indexActivityModuleList">
          <li class="indexActivityModuleItem" v-for="(item, index) in indexActivityModule" :key="index">
            <div class="indexActivityModuleDescribe">
              <p class="title">{{item.title}}</p>
              <p class="subTitle">{{item.subTitle}}</p>
              <p class="tag">{{item.tag}}</p>
            </div>
            <img :src="item.picUrl">
            <div class="price">
              <span class="newPrice">{{item.activityPrice}}</span>
              <del class="oldPrice">{{item.originPrice}}</del>
            </div>
          </li>
        </ul>
      </div>
      <div class="brand">
        <div class="title">
          <span class="text">品牌制造商直供</span> 
          <span class="more">更多></span>
        </div>
        <ul class="brandList">
          <li class="brandItem" v-for="(item, index) in tagList" :key="index" :style="{backgroundImage:`url(${item.picUrl})`}">
            <div class="brandDescribe">
              <p class="brandTitle">{{item.name}}</p>
              <p class="brandSubTitle">{{item.floorPrice}}元起</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="special">
        <div class="title">
          <span class="text">专题精选</span> 
          <span class="more">更多></span>
        </div>
        <div class="specialContent">
          <ul class="specialList">
            <li class="specialItem" v-for="(item, index) in topicListArr" :key="index">
              <img :src="item.itemPicUrl">
              <p class="specialTitle">{{item.title}}</p>
              <p class="specialSubTitle">{{item.subtitle}}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="crowdFunding">
        <div class="title">
          <span class="text">众筹</span> 
          <span class="more">更多></span>
        </div>
        <div class="crowdFundingContent">
          <ul class='crowdFundingList'>
            <li class="crowdFundingItem" v-for="(item, index) in zhongChouList" :key="index">
              <img :src="item.picUrl">
              <div class="crowdFundingDescribe">
                <p class="crowdFundingTitle">{{item.name}}</p>
                <p class="crowdFundingPrice">￥{{item.retailPrice}}<span class="smallText">{{item.retailPricePostfix}}</span>
                </p>
                <div class="crowdFundingSchedule">
                  <div class="sum">
                    <div class="progress"></div>
                    
                  </div>
                  <span>53%</span>
                </div>
                <p class="crowdFundingCount">{{item.supportNum}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="categoryModule">
        <ul class="categoryModuleList">
          <li class="categoryModuleItem" v-for="(item, index) in categoryModule" :key="index">
            <img :src="item.titlePicUrl" class="bigImg">
            <div class="categoryContent" :id="'category'+index">
              <ul class="categoryList">
                <!-- 写到这 --> 
                <li class="categoryItem" v-for="(item, index) in item.itemList" :key="index">
                  <img :src="item.listPicUrl">
                  <span class="name">{{item.name}}</span>
                  <div class="price">
                    <span class="newPrice">￥{{item.retailPrice}}</span>
                    <del class="oldPrice">￥{{item.counterPrice}}</del>
                    <div class="tag">
                      <span class="tagItem" v-for="(item, index) in item.itemTagList" :key="index">
                        {{item.name}}
                      </span>
                    </div>
                  </div>
                  
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <footer class="homeFooter">
        <div class="homeFooterBtn">
          <div class="btn">下载APP</div>
          <div class="btn">电脑版</div>
        </div>
        <div class="companyInfo">
          <p>网易公司版权所有 © 1997-</p>
          <p>食品经营许可证：JY13301080111719</p>
        </div>
      </footer>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
import BScroll from 'better-scroll'
import { Promise } from 'q';
  export default {
    data() {
      return {
        popularItemListFirst:{},     
        categoryHotSellModuleBig:[]   
      }
    },
    props:{
      kingKongList:Array,
      promise:Array,
      sceneLightShoppingGuideModule:Array,
      personalShop:Array,
      flashSaleModule:Object,
      newItemList:Array,
      popularItemList:Array,
      topicList:Array,
      zhongChouList:Array,
      categoryHotSellModule:Object,
      indexActivityModule:Array,
      tagList:Array,
      categoryModule:Array
    },
    methods:{
      setPopular(){
        this.popularItemList.forEach((el) => {
          if (el.name.length>15) {
            el.name=el.name.slice(0,12)+'...'
          }
        }) 
        this.popularItemListFirst = this.popularItemList[0]
        return this.popularItemList.filter((item,index)=>{
          if (index!=0) {
            return item
          }
        })
      },
      setCategoryHotSellModule(){
        const arr = this.categoryHotSellModule.categoryList
        // arr中可能因为categoryHotSellModule数据没有获取到而值为undefined，为了避免报错，return
        if (!arr) {
          return
        }
        this.categoryHotSellModuleBig = [arr[0],arr[1]]
        return arr.filter((item,index)=>{
          if (index!=0&&index!=1) {
            return item
          }
        })
      },
      setTopicList(){
        this.topicList.forEach((el) => {
          if (el.title.length>15) {
            el.title=el.title.slice(0,12)+'...'
          }
        })
        return this.topicList
      }
    },
    computed:{
      personalShopBigArr(){
        const bigArr = []
        let smallArr = []
        this.personalShop.forEach((el,index) => {
          if (el.name.length>15) {
            el.name=el.name.slice(0,12)+'...'
          }
          if (index%3===0) {
            smallArr = []
            bigArr.push(smallArr)
          }
          smallArr.push(el)
        });
        return bigArr
      },
      newItemListArr(){
        this.newItemList.forEach((el) => {
          if (el.name.length>15) {
            el.name=el.name.slice(0,12)+'...'
          }
        })  
        return this.newItemList
      },
      popularItemListArr(){
         
        return this.setPopular()
      },
      categoryHotSellModuleArr(){
        return this.setCategoryHotSellModule()
      },
      topicListArr(){
        return this.setTopicList()
      }
    },
    mounted(){
      this.$nextTick(()=>{
        //需要优化，多个Swiper无法同时开启自动轮播和循环问题
        new Swiper ('#swiper2', {
          loop: true,
          autoplay: true,
          observer:true,//修改swiper自己或子元素时，自动初始化swiper 
          observeParents:true,//修改swiper的父元素时，自动初始化swiper
          pagination: {
            el: '#pagination2',
          },
        })
        new Swiper ('#swiper1', {
          loop: true, 
          // autoplay: true,
          observer:true,//修改swiper自己或子元素时，自动初始化swiper 
          observeParents:true,//修改swiper的父元素时，自动初始化swiper
          pagination: {
            el: '#pagination1',
          },
        }) 
        new BScroll('.specialContent',{
          scrollX: true,
          click: true
        })
      })
    },
    watch:{
      categoryModule(){
        if(this.bScrolls){
          return
        }
        this.bScrolls = true
        this.$nextTick(()=>{
          for (let index = 0; index < this.categoryModule.length; index++) {
            new BScroll('#category'+index,{
              scrollX: true,
              click: true
            })
          }
        })
          
      }
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
    height 430px    
    background-color #fff   
    margin-top 20px 
    box-sizing border-box 
    padding 0 20px 
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
        .name 
          .price
            color #b4282d 
  .limit
    width 100%
    height 698px
    margin-top 20px
    .countDown  
      width 100%
      height 100px 
      background-color #fff  
      line-height 100px 
      .text
        font-size 32px
        margin 28px
      .time 
        font-size 24px  
        margin-right 14px
        background-color #000
        color #fff
        padding 2px
      .more 
        float right  
        margin-right 28px
        font-size 28px
    .limitList
      width 100%
      height 598px
      background-color #fdfdfd
      padding 0 21px
      box-sizing border-box
      .limitItem   
        width 216px
        height 269px
        float left
        padding 10px
        img 
          width 100%
          background-color #f5f5f5
        .price
          width 216px
          height 41px
          padding 15px 10px
          span 
            color #b4282d
            font-size 28px
            padding-right 5px
          del 
            color #7f7f7f
            font-size 24px
  .newProduct  
    width 100%
    height 1100px 
    background-color #fff   
    margin-top 20px 
    .limitItem
      height 300px !important
      img 
        margin-bottom 15px
  .popularItemList  
    width 100%
    height 724px
    background-color #fff
    margin-top 20px
    .title
      width 100%
      height 100px 
      background-color #fff  
      line-height 100px 
      .text
        font-size 32px
        margin 28px
      .more 
        float right  
        margin-right 28px
        font-size 28px
    .popularContent
      width 690px
      height 288px 
      margin 0 30px 20px 
      background-color #FEF0DF
      display flex
      .describe
        display flex
        flex-direction column
        justify-content center
        padding 30px
        .popularTag
          color #b4282d
          background-color #ffffff
          border 1px solid #b4282d
          font-size 20px
          width 100px
          transform scale(0.8)
          padding 2px
          text-align center
          transform-origin left 
        .popularTitle
          font-size 28px
          color #333  
        .popularSubhead
          font-size 24px
          color #7f7f7f  
        .popularPrice
          font-size 28px 
          color #b4282d 
      img 
        width 288px
        height 288px
    .popularList
      width 100%
      height 354px
      padding 0 20px
      box-sizing border-box
      .popularItem
        width 216px 
        height 100% 
        float left
        margin 0 10px
        img 
          width 100%
          background-color #F5f5f5
  .categoryHotSellModule
    width 100%
    height 710px
    background-color #fff 
    margin-top 20px
    .title
      width 100%
      height 100px 
      background-color #fff  
      line-height 70px 
      .text
        font-size 32px
        margin 0px 28px   
    .categoryHotSellModuleContent
      width 100%
      height 610px 
      padding 0 20px
      box-sizing border-box  
      .categoryHotSellModuleListBig
        width 100%
        height 200px
        display flex
        justify-content space-around
        margin-bottom 5px
        .categoryHotSellModuleItemBig
          width 340px
          height 200px
          display flex
          justify-content space-between
          align-items center
          img 
           width 200px
          &:first-child
            background-color #f9f3e4
          &:last-child
            background-color #ebeff6
          div 
            position relative
            padding 0 0 20px 24px
            font-size 28px
            color #333
            &:after
              content: ''
              position: absolute
              left: 24px
              top 50px
              width: 48px
              height: 4px
              background: #333;  
      .categoryHotSellModuleListSmall
        width 100%
        height 380px 
        padding 0 2px 
        .categoryHotSellModuleItemSmall
          width 165px
          height 180px
          background-color #f5f5f5
          float left
          margin 5.6px
          display flex
          flex-direction column
          justify-content space-around
          align-items center
          img 
            width 120px
          p   
            margin-top 15px 
            color #333 
  .indexActivityModule        
    width 100%
    height 274px
    padding 28px
    box-sizing border-box
    margin-top 20px
    background-color #fff
    .indexActivityModuleList
      display flex
      .indexActivityModuleItem
        position relative
        display flex
        justify-content space-between
        align-items center
        width 343px
        height 220px
        padding 20px 0 20px 30px
        box-sizing border-box
        &:first-child
          background-color #EBEFF6
          margin-right 8px
        &:last-child
          background-color #EAF3E7
        img
          width 200px
        .indexActivityModuleDescribe
          height 180px  
          color #7f7f7f
          font-size 24px
          .title
            color #333
            font-size 32px
            white-space nowrap
            margin-bottom 5px
        .price
          width 75px
          height 75px
          background-color rgba(255,150,0,0.7)
          border-radius 50%
          position absolute   
          right 30px
          top 30px
          color #fff
          display flex
          flex-direction column
          justify-content center
          align-items center
          line-height 20px
          .newPrice
            font-size 30px
            float left
            transform scale(0.7)
          .oldPrice  
            font-size 24px
            transform scale(0.7)
  .brand
    width 100%
    height 662px
    background-color #fff
    margin-top 20px
    .title
      width 100%
      height 100px 
      background-color #fff  
      line-height 100px 
      .text
        font-size 32px
        margin 0px 28px   
      .more 
        float right  
        margin-right 28px
        font-size 28px
    .brandList
      width 100%
      height 554px    
      box-sizing border-box
      padding 0 28px
      .brandItem
        width 343px
        height 260px
        float left
        background-repeat no-repeat
        background-size 100%
        margin 0 4px 4px 0
        &:nth-child(3)
          background-color #F6F6F8
        &:nth-child(4)
          background-color #F1F7FA
        .brandDescribe
          width 100%
          height 95px
          padding-top 23px
          display flex
          flex-direction column
          justify-content center
          align-items center
  .categoryModule
    .categoryModuleList
      .categoryModuleItem
        width 100%
        height 781px
        background-color #fff
        margin-top 20px 
        .bigImg
          width 100%
          height 370px     
        .categoryContent
          width 100%
          height 391px
          overflow hidden
          .categoryList
            height 361px
            float left
            padding 20px 20px
            box-sizing border-box
            white-space nowrap
            .categoryItem  
              width 200px
              height 361px
              margin 0 10px
              display inline-block
              img
                width 200px
                background-color #f4f4f4
              .name 
                margin 8px
                white-space:normal
                float left
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;  //这里是在第二行有省略号
                overflow: hidden;
              .price 
                float left
                padding 0 5px
                .newPrice
                  color #b4282d
                  margin-right 5px
                .oldPrice
                  color #999    
                .tag
                  .tagItem
                    border 1.1px solid #ce2424
                    color #ce2424
                    border-radius 15px
                    padding 4px
                    float left
                    transform scale(0.8)
  .special    
    width 100%
    height 508px
    background-color #fff 
    margin-top 20px 
    .title
      width 100%
      height 100px 
      background-color #fff  
      line-height 70px 
      .text
        font-size 32px
        margin 28px
      .more 
        float right  
        margin-right 28px
        font-size 28px
    .specialContent
      width 100%
      height 378px
      overflow hidden
      padding 0 30px 30px  
      box-sizing border-box   
      .specialList
        height 100%
        float left
        padding-left 31.25px
        display flex
        .specialItem
          width 480px
          height 354px
          background-color #f5f5f5
          border-radius 12px
          overflow hidden
          padding-bottom 24px
          margin-right 31.25px
          img
            width 100%
          p 
            padding 0 30px  
          .specialTitle
            font-size 28px
            color #333  
          .specialSubTitle
            font-size 24px
            color #7f7f7f  
  .crowdFunding 
    width 100%
    height 611px 
    background-color #fff 
    margin-top 20px 
    .title
      width 100%
      height 100px 
      background-color #fff  
      line-height 100px 
      .text
        font-size 32px
        margin 28px
      .more 
        float right  
        margin-right 28px
        font-size 28px   
    .crowdFundingContent
      border-top 1px solid #f5f5f5
      .crowdFundingList 
        .crowdFundingItem   
          width 100%
          height 240px 
          box-sizing border-box
          padding 30px 30px 0
          display flex
          align-items center
          img 
            width 210px
            background-color #f5f5f5
          .crowdFundingDescribe
            width 450px
            height 168px  
            padding 0 20px
            .crowdFundingTitle
              font-size 28px
              color #333
            .crowdFundingPrice
              font-size 32px
              color #b4282d  
              .smallText
                font-size 24px
            .crowdFundingSchedule
              width 450px
              display flex
              justify-content space-between
              .sum
                width 360px    
                height 6px
                background-color #f5f5f5
                margin-top 20px
                .progress
                  width 210px    
                  height 6px
                  background-color #fea438
              span 
                color #7f7f7f 
                padding-top 4px   
            .crowdFundingCount
              color #7f7f7f    
              margin-top 10px
  .homeFooter
    width 100%
    height 244px
    padding 54px 20px 28px 
    box-sizing border-box  
    margin-top 20px 
    background-color #414141  
    .homeFooterBtn
      width 100%       
      height 62px
      margin-bottom 36px
      display flex
      justify-content center
      .btn
        width 172px
        height 62px
        font-size 24px
        margin 0 25px
        color #fff
        border 1px solid rgba(130,130,130,0.5)
        text-align center
        line-height 62px
    .companyInfo
      width 100%
      height 64px   
      text-align center
      color #999 
</style>
