import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  launches: []
}

export default {
  actions,
  getters,
  mutations,
  state,
  namespaced: true
}
