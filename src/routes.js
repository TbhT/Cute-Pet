import AboutPage from './pages/about.vue'
import FormPage from './pages/form.vue'
import CatalogPage from './pages/catalog.vue'
import ProductPage from './pages/product.vue'
import SettingsPage from './pages/settings.vue'

import DynamicRoutePage from './pages/dynamic-route.vue'
import RequestAndLoad from './pages/request-and-load.vue'
import NotFoundPage from './pages/404.vue'

import HomePage from './pages/home.vue'
import TopicDetailPage from './pages/topic-detail.vue'
import TweetDetailPage from './pages/tweet-detail.vue'
import ActivitiesPage from './pages/activities.vue'
import AddActivitiesPage from './pages/add-activity.vue'
import AddPetPage from './pages/add-pet.vue'
import LoginPage from './pages/login.vue'
import SignupPage from './pages/signup.vue'
import PersonPage from './pages/person.vue'
import MarketPage from './pages/market.vue'
import AddMarketPage from './pages/add-market.vue'
import { getTopicTweets } from './utils'

const routes = [
  {
    path: '/',
    component: HomePage,
    keepAlive: true
  },
  {
    path: '/topic/:topicId/',
    async: async function(routeTo, routeFrom, resolve, reject) {
      this.app.preloader.show()

      const topicId = routeTo.params.topicId

      try {
        const tweets = await getTopicTweets({ topicId })
        resolve(
          {
            component: TopicDetailPage
          },
          {
            props: {
              tweets
            }
          }
        )
      } catch (error) {
        console.error(error)
      } finally {
        this.app.preloader.hide()
      }
    }
  },
  {
    path: '/tweet/:tweetId',
    async: function(to, from, resolve, reject) {
      const tweetId = to.params.tweetId
      console.log(`tweet ${tweetId} 加载`)
      // TODO: 拉取某条tweet下的评论
      this.app.preloader.show()
      const comments = [
        {
          commentId: 1,
          userId: 114,
          nickname: 'Tom',
          createTime: Date.now(),
          text: '这是第一条评论'
        },
        {
          commentId: 2,
          userId: 115,
          nickname: 'Tom',
          createTime: Date.now(),
          text: '这是第二条评论'
        },
        {
          commentId: 3,
          userId: 116,
          nickname: 'Tom',
          createTime: Date.now(),
          text: '这是第三条评论'
        }
      ]

      setTimeout(() => {
        resolve(
          {
            component: TweetDetailPage
          },
          {
            props: {
              comments
            }
          }
        )
        this.app.preloader.hide()
      }, 1000)
    }
  },
  {
    path: '/activities/',
    component: ActivitiesPage
  },
  {
    path: '/activities/add',
    component: AddActivitiesPage
  },
  {
    path: '/pet/add',
    component: AddPetPage
  },
  {
    path: '/person',
    component: PersonPage
  },
  {
    path: '/market',
    component: MarketPage
  },
  {
    path: '/market/add',
    component: AddMarketPage
  },
  {
    path: '/user/login',
    component: LoginPage
  },
  {
    path: '/user/signup',
    component: SignupPage
  },
  {
    path: '/about/',
    component: AboutPage
  },
  {
    path: '/form/',
    component: FormPage
  },
  {
    path: '/catalog/',
    component: CatalogPage
  },
  {
    path: '/product/:id/',
    component: ProductPage
  },
  {
    path: '/settings/',
    component: SettingsPage
  },

  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function(routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this

      // App instance
      var app = router.app

      // Show Preloader
      app.preloader.show()

      // User ID from request
      var userId = routeTo.params.userId

      // Simulate Ajax Request
      setTimeout(function() {
        // We got user data from request
        const user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io'
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io'
            }
          ]
        }
        // Hide Preloader
        app.preloader.hide()

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad
          },
          {
            context: {
              user: user
            }
          }
        )
      }, 1000)
    }
  },
  {
    path: '(.*)',
    component: NotFoundPage
  }
]

export default routes
