import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index'
import Indexone from '@/components/indexone'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/indexone',
      component: Indexone
    }
  ]
})
