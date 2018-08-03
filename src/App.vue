<template lang="pug">
  #app
    .main
      .main__authorize(v-if="authorize")
        authorize(@changeAuthorize="onChange")
      .main__pages(v-else)
        .main__header
          app-header(@changeSidebar="onChangeSidebar")
        .main__wrap
          .main__sidebar(:class="{'active' : sidebar}")
            app-sidebar
          .main__content
            transition(name="fade" mode="out-in")
              router-view
            .main__footer
              app-footer
          .main__backtotop
            back-to-top(visibleoffset="200" bottom="20px")
              .backtotop
                .backtotop__icon
                  img(src="/static/img/general/backtotop.png" alt="backtotop icon")
                span.backtotop__text up
</template>

<script>
import Authorize from '@/components/Authorize'
import AppHeader from '@/components/Header'
import AppSidebar from '@/components/Sidebar'
import AppFooter from '@/components/Footer'
import BackToTop from 'vue-backtotop'
export default {
  name: 'App',
  components: {
    Authorize,
    AppHeader,
    AppSidebar,
    AppFooter,
    BackToTop
  },
  data () {
    return {
      authorize: true,
      sidebar: true
    }
  },
  methods: {
    onChange () {
      this.authorize = !this.authorize
    },
    onChangeSidebar () {
      this.sidebar = !this.sidebar
    }
  }
}
</script>

<style lang="stylus">
  @import './assets/stylus/main.styl'
  #app
    width 100%
    height 100%

  .fade-enter-active,
  .fade-leave-active
    transition opacity .3s

  .fade-enter,
  .fade-leave-to
    opacity 0
</style>
