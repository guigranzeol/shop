import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import ProductDetails from '@/views/productDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/product',
      name: 'productDetails',
      component: ProductDetails
    },
  ]
})