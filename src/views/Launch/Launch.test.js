import View from './Launch'
import { shallow, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Views - Launch', function () {
  const store = new Vuex.Store({
    getters: {
      'launches/getLaunch': flight => ({
        id: flight,
        details: 'xpto'
      })
    },
    actions: {
      'launches/fetchLaunch': jest.fn()
    }
  })
  this.buildComponent = props =>
    shallow(View, {
      propsData: props,
      store,
      localVue
    }).vm

  describe('Computed properties', () => {
    describe('@launch', () => {
      it("should return false when the launch's success is undefined", () => {
        const cmp = this.buildComponent({
          flight: 1
        })
        expect(cmp.success).toBe(false)
      })
    })
  })
})
