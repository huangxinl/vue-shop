import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/home'
import Cart from 'pages/cart/cart'
import My from 'pages/my/my'
import Sort from 'pages/sort/sort'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/sort',
      name: 'Sort',
      component: Sort
    },
  ]
})
