import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Show from '../components/List/Show'
import Cart from '../components/Cart/Cart'
import Pay from '../components/Info/Pay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Show',
      component: Show
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/pay',
      component: Pay,
      name: 'pay'
    }
  ]
})
