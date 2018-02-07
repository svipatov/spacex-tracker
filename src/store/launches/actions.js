import { ACTIONS, MUTATIONS } from './constants'
import { getLaunch, getPastLaunches, getUpcomingLaunches } from '@/api/launches'

export default {
  [ACTIONS.FETCH_PAST] ({ commit }) {
    return getPastLaunches().then(response => {
      commit(MUTATIONS.SET_LAUNCHES, response.data)
    })
  },
  [ACTIONS.FETCH_UPCOMING] ({ commit }) {
    return getUpcomingLaunches().then(response => {
      commit(MUTATIONS.SET_LAUNCHES, response.data)
    })
  },
  [ACTIONS.FETCH_LAUNCH] ({ commit }, flight) {
    return getLaunch({ flight }).then(response => {
      commit(MUTATIONS.SET_LAUNCHES, response.data)
    })
  }
}
