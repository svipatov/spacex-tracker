import vue from 'vue'
import vueRouter from 'vue-router'
import routes from './index'

import { LaunchesRouting } from '@/router/launches'
import { RocketsRouting } from '@/router/rockets'

jest.mock('vue', () => ({ use: jest.fn() }))
jest.mock('vue-router', () => jest.fn().mockImplementation(params => params))

describe('When creating the router', () => {
  it('should delegate the routing responsibilities to vue-router', () => {
    expect(vueRouter).toBeCalled()
    expect(vue.use).toBeCalledWith(vueRouter)
  })
  it('should contain the several routing configs merged', () => {
    expect(routes).toEqual({
      routes: [...LaunchesRouting, ...RocketsRouting]
    })
  })
})
