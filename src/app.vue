<template>
  <f7-app :params="f7params">
    <!-- Status bar overlay for fullscreen mode-->
    <!-- <f7-statusbar></f7-statusbar> -->

    <f7-view id="main-view" url="/" main></f7-view>
  </f7-app>
</template>
<script>
import routes from './routes.js'

export default {
  data() {
    return {
      // Framework7 Parameters
      f7params: {
        name: 'CutePet', // App name
        theme: 'auto', // Automatic theme detection
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
  methods: {
    alertLoginData() {
      this.$f7.dialog.alert(
        'Username: ' + this.username + '<br>Password: ' + this.password
      )
    }
  },
  mounted() {
    this.$f7ready(f7 => {
      // Call F7 APIs here
    })
  }
}
</script>
