import Vue from 'vue'
import Vuex from 'vuex'
import { getLaunches } from '../api/launches'

Vue.use(Vuex)

const state = {
  launches: []
}
const mutations = {
  'SET_LAUNCHES': (state, launches) => {
    state.launches = launches
  }
}
const actions = {
  'FETCH_LAUNCHES': ({ commit }) => {
    return getLaunches().then((response) => {
      commit('SET_LAUNCHES', response.data)
    })
  }
}
const getters = {
  allLaunches (state) {
    return state.launches
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: true
})
