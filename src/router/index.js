import Vue from 'vue'
import Router from 'vue-router'
import animationNav from '@/components/AnimationNav'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'animation-nav',
      component: animationNav
    }
  ]
})
