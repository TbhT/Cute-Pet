<template>
  <f7-app :params="f7params">
    <!-- Status bar overlay for fullscreen mode-->
    <!-- <f7-statusbar></f7-statusbar> -->

    <f7-views tabs class="safe-areas">
      <f7-toolbar tabbar labels position="bottom">
        <f7-link
          tab-link="#me-view-home"
          tab-link-active
          icon="iconfont icon-ios7homeoutline"
          text="首页"
        ></f7-link>

        <f7-link tab-link="#me-view-activities" icon-ios="f7:list_fill" text="活动"></f7-link>

        <f7-link tab-link="#me-view-market" icon-ios="f7:settings_fill" text="市场"></f7-link>

        <f7-link tab-link="#me-view-person" icon-ios="f7:home_fil" text="我的"></f7-link>
      </f7-toolbar>

      <f7-view id="me-view-home" stackPages main tab tab-active url="/"></f7-view>

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
        // App root data
        data: function() {
          return {
            user: {
              firstName: 'John',
              lastName: 'Doe'
            },
            // Demo products for Catalog section
            products: [
              {
                id: '1',
                title: 'Apple iPhone 8',
                description:
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
              },
              {
                id: '2',
                title: 'Apple iPhone 8 Plus',
                description:
                  'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
              },
              {
                id: '3',
                title: 'Apple iPhone X',
                description:
                  'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
              }
            ]
          }
        },

        // App routes
        routes: routes,

        // Register service worker
        serviceWorker: {
          path: '/service-worker.js'
        }
      },

      // Login screen data
      username: '',
      password: ''
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
    alertLoginData() {
      this.$f7.dialog.alert(
        'Username: ' + this.username + '<br>Password: ' + this.password
      )
    },
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
