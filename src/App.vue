<template>
  <div class="app">
    <router-view></router-view>
    <FooterNav v-if="this.$route.meta.footer"></FooterNav>
  </div>
</template>

<script>
import FooterNav from '../src/components/footerNav/FooterNav'
export default {
  name: 'app',
  components: {
    FooterNav
  }
}
</script>
<style lang="stylus" scoped>

  .app
    width 100%
    height 100%
    // background-color #eee
</style>
