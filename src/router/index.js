import Vue from 'vue'
import Router from 'vue-router'
import Editorial from '@/pages/Editorial'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'index',
      component: Editorial,
    },
  ]
})
