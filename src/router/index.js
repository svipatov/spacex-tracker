import Vue from 'vue'
import Router from 'vue-router'
import { LaunchesRouting } from '@/router/launches'
import { RocketsRouting } from '@/router/rockets'

Vue.use(Router)

export default new Router({
  routes: [
    ...LaunchesRouting,
    ...RocketsRouting
  ]
})
