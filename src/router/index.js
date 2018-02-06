import Vue from 'vue'
import Router from 'vue-router'
import Launches from '@/views/Launches'
import Launch from '@/views/Launch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/launches',
      name: 'launches',
      alias: '/',
      component: Launches
    },
    {
      path: '/launches/:flight',
      name: 'launch',
      component: Launch,
      props: true
    }
  ]
})
