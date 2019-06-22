<template>
  <div class="comment">
    <div class="life">
      <p>让生活更好的N种方法</p>
      <p class="title">{{title}}</p>
      <div class="listWrap">
        <ul class="ADlist">
          <li class="ADItem" v-for="(item, index) in ADImg" :key="index"
          :style="{backgroundImage:`url(${item.banner.picUrl})`}">
            <!-- <img :src="item.banner.picUrl"> -->
          </li>
        </ul>
      </div>
    </div>
    <div class="commentConcent">
      <ul class="commentList">
        <li class="commentItem" v-for="(item, index) in comments" :key="index">
          <img :src="item.bannerInfo.picUrl" class="commentImg">
          <p class="commentText">{{item.content}}</p>
          <div class="user">
            <img src="" class="avatar">
            <span class="username"></span>
            <span class="like">
              <i class="iconfont"></i>
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import {reqADImg,reqComment} from '../../../api'
  export default {
    data() {
      return {
        ADImg:[],
        title:'',
        comments:[],
        hasMore:true,

      }
    },
    created() {
    },
    methods:{
      async getADImg(){
        const result = await reqADImg(81)
        if(result.code==='200'){
          this.ADImg = result.data.lookList
          this.title = result.data.title
          new BScroll('.listWrap',{
            click: true,
            scrollX: true,
          })
        }
      },
      async getComment(){
        const result = await reqComment(1,10)
        if(result.code==='200'){
          this.comments = result.data.topicList
          this.hasMore = result.data.hasMore
          this.imgsArr = result.data.topicList.map((item)=>item.bannerInfo.picUrl)
        }
      }
    },
    mounted(){
      this.getADImg()
      this.getComment()
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.comment
  width 100%
  height 100%
  background-color #f5f5f5
  .life
    width 100%
    height 452px
    background-color #fff
    display flex
    flex-direction column
    justify-content space-around
    align-items center
    p 
      font-size 28px
      color #7f7f7f
    .title 
      font-size 32px
      color #333  
    .listWrap
      width 100%
      height 240px
      overflow hidden
      .ADlist
        float left
        white-space nowrap
        padding 0 20px
        .ADItem
          width 240px
          height 240px
          display inline-block
          background-size cover
          border-radius 10px
          margin 0 10px
  .commentConcent
    .commentList
      padding 0 20px 98px
      background-color #fff
      display flex
      flex-wrap wrap
      .commentItem
        width 343px
        border 1.1px solid #ccc
        border-radius 12px
        overflow hidden
        // float left
        .commentImg
          width 100% 
          display: flex;
</style>
