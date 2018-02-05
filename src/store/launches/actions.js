import { ACTIONS, MUTATIONS } from './constants'
import { getLaunches } from '@/api/launches'

export default {
  [ACTIONS.FETCH_LAUNCHES] ({ commit }) {
    return getLaunches().then(response => {
      commit(MUTATIONS.SET_LAUNCHES, response.data)
    })
  },
  [ACTIONS.FETCH_LAUNCH] ({ commit }, flight) {
    return getLaunches({ flight }).then(response => {
      commit(MUTATIONS.SET_LAUNCHES, response.data)
    })
  }
}
