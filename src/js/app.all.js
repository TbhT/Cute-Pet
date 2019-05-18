import $$ from 'dom7'
import Framework7 from 'framework7/framework7.esm.bundle.js';

import 'framework7/css/framework7.bundle.css'

import '../assets/fonts/iconfont.css'

import '../css/icons.css'
import '../css/app.css'


import routes from './routes.all.js'

const app = new Framework7({
  root: '#app',
  name: 'CutePet',
  theme: 'ios',
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
      // Demo products for Catalog section
      products: [
        {
          id: '1',
          title: 'Apple iPhone 8',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
        },
        {
          id: '2',
          title: 'Apple iPhone 8 Plus',
          description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
        },
        {
          id: '3',
          title: 'Apple iPhone X',
          description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
        },
      ]
    }
  },
  methods: {

  },
  routes: routes
})


// app.preloader.show()

// setInterval(() => {
//   app.preloader.hide()
// }, 2000);

