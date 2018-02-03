import Vue from 'vue'
import Router from 'vue-router'
import Launches from '@/views/Launches'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/launches',
      name: 'Launches',
      component: Launches
    }
  ]
})
