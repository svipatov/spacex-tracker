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
  },
  'FETCH_LAUNCH': ({ commit }, flight) => {
    return getLaunches({ flight }).then((response) => {
      commit('SET_LAUNCHES', response.data)
    })
  }
}
const getters = {
  getAllLaunches (state) {
    return state.launches
  },
  getLaunch (state) {
    return (flight) => state.launches.find((launch) => launch.flight_number === flight)
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: true
})
