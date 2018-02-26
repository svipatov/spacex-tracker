import View from './Launch'
import { shallow, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Views - Launch', function () {
  beforeEach(() => {
    this.launch = {
      id: 1
    }
    const getters = {
      getLaunch: flight => flight => this.launch
    }
    const actions = {
      fetchLaunch: jest.fn()
    }
    const store = new Vuex.Store({
      modules: {
        launches: {
          getters,
          actions,
          namespaced: true
        }
      }
    })
    this.buildComponent = props =>
      shallow(View, {
        propsData: props,
        store,
        localVue
      }).vm
  })

  describe('Computed properties', () => {
    describe('@launch', () => {
      it('should return a launch information from the store regarding the flight number', () => {
        const cmp = this.buildComponent({
          flight: 1
        })
        expect(cmp.launch).toBe(this.launch)
      })
    })
  })
})
