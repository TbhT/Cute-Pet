
// import HomePage from './pages/home.vue';
import AboutPage from './pages/about.vue';
import FormPage from './pages/form.vue';
import CatalogPage from './pages/catalog.vue';
import ProductPage from './pages/product.vue';
import SettingsPage from './pages/settings.vue';

import DynamicRoutePage from './pages/dynamic-route.vue';
import RequestAndLoad from './pages/request-and-load.vue';
import NotFoundPage from './pages/404.vue';


import HomePage from './pages/home.vue'
import TopicDetailPage from './pages/topic-detail.vue'
import TweetDetailPage from './pages/tweet-detail.vue'
import ActivitiesPage from './pages/activities.vue'
import AddActivitiesPage from './pages/add-activity.todo.vue'
import LoginPage from './pages/login.todo.vue'
import SignupPage from './pages/signup.todo.vue'


const routes = [
  {
    path: '/',
    component: HomePage,
    keepAlive: true,
  },
  {
    path: '/topic/:topicId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      this.app.preloader.show()

      const topicId = routeTo.params.topicId
      const topicText = routeTo.params.topicText
      //  TODO: 模仿ajax请求

      const tweets = [
        {
          tweetId: 1,
          userId: 10,
          nickname: 'Tom',
          createTime: Date.now(),
          text: 'yes aaaaaaaaaaaaaaaaaa',
          image: 'https://loremflickr.com/1000/700/nature?lock=5'
        },
        {
          tweetId: 2,
          userId: 11,
          nickname: 'Alice',
          createTime: Date.now(),
          text: 'lfakdjfklajdkflajldkjflkajdlfkjalkdjflkajdslfjald',
          image: 'https://loremflickr.com/1000/700/nature?lock=3'
        },
        {
          tweetId: 4,
          userId: 114,
          nickname: 'Hello',
          createTime: Date.now(),
          text: 'dklsjfaldjflkajdlfkjalkfjlakjflkajldfjaldjflkajfljalf',
          image: 'https://loremflickr.com/1000/700/nature?lock=7'
        },
        {
          tweetId: 5,
          userId: 90,
          nickname: 'James',
          createTime: Date.now(),
          text:
            'lkdfjakldfa 发快递了放假啊看到法兰克都快疯了安居房卡房间里肯德基奥菲罗克的',
          image: 'https://loremflickr.com/1000/700/nature?lock=8'
        }
      ]

      setTimeout(() => {
        resolve(
          {
            component: TopicDetailPage
          },
          {
            props: {
              tweets,
              topicText
            }
          }
        )

        this.app.preloader.hide()
      }, 1000);
    }
  },
  {
    path: '/tweet/:tweetId',
    async: function (to, from, resolve, reject) {
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
      }, 1000);
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
    path: '/user/login',
    component: LoginPage
  },
  {
    path: '/user/signup',
    component: SignupPage
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/catalog/',
    component: CatalogPage,
  },
  {
    path: '/product/:id/',
    component: ProductPage,
  },
  {
    path: '/settings/',
    component: SettingsPage,
  },

  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        const user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
