<template>
  <f7-app :params="f7params">
    <!-- Status bar overlay for fullscreen mode-->
    <!-- <f7-statusbar></f7-statusbar> -->

    <f7-views tabs class="safe-areas">
      <f7-toolbar tabbar labels position="bottom">
        <f7-link tab-link="#me-view-home" tab-link-active icon="iconfont icon-home" text="首页"></f7-link>

        <f7-link tab-link="#me-view-activities" icon-ios="f7:list_fill" text="活动"></f7-link>

        <f7-link tab-link="#me-view-market" icon="iconfont icon-market2" text="市场"></f7-link>

        <f7-link tab-link="#me-view-person" icon="iconfont icon-person" text="我的"></f7-link>
      </f7-toolbar>

      <f7-view id="me-view-home" stackPages tab-active main tab url="/"></f7-view>

      <f7-view id="me-view-activities" stackPages tab url="/activities/"></f7-view>

      <f7-view id="me-view-market" stackPages tab url="/market/"></f7-view>

      <f7-view id="me-view-person" stackPages tab url="/person/"></f7-view>
    </f7-views>

    <f7-popup :opened="commentOpened" @popup:closed="closePopup('commentOpened')">
      <comment></comment>
    </f7-popup>

    <f7-popup :opened="publisherOpened" @popup:closed="closePopup('publisherOpened')">
      <publisher></publisher>
    </f7-popup>

  </f7-app>
</template>
<script>
import routes from './routes.js'
import Publisher from './components/publisher.vue'
import Comment from './components/comment.vue'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  data() {
    return {
      // Framework7 Parameters
      f7params: {
        name: 'CutePet', // App name
        theme: 'ios', // Automatic theme detection
        // App routes
        routes: routes
      }
    }
  },
  computed: {
    ...mapState({
      commentOpened: state => state.popup.commentOpened,
      publisherOpened: state => state.popup.publisherOpened
    })
  },
  components: {
    Comment,
    Publisher
  },
  methods: {
    ...mapMutations(['updatePopup']),
    ...mapActions(['updateUserStatus']),
    closePopup(s) {
      this.updatePopup({
        key: s,
        value: false
      })
    }
  },
  mounted() {
    this.$f7ready(async f7 => {
      // Call F7 APIs here
    })
  }
}
</script>
