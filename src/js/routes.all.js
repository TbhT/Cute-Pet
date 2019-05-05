import Feeds from "../templates/feeds.f7.html";



export default [
  {
    path: '/feeds/',
    component: Feeds
  },
  {
    path: '/activities/'
  },
  {
    path: '/markets/'
  },
  {
    path: '/person/'
  },
  {
    path: '/signup/'
  },
  {
    path: '/login/',
    async: function (params) {
      // TODO: 登录接入 oauth2
    }
  }
]
