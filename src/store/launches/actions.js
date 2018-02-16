import { ACTIONS, MUTATIONS } from './constants'
import { getLaunch, getPastLaunches, getUpcomingLaunches } from '@/api/launches'
import { buildLaunchModel } from '@/models/launch/launch'

const addLaunches = (commit, response) => {
  response.data.forEach(launch => {
    const launchModel = buildLaunchModel(launch)
    if (launchModel) {
      commit(MUTATIONS.ADD_LAUNCH, launchModel)
    }
  })
}

export default {
  [ACTIONS.FETCH_PAST] ({ commit }) {
    return getPastLaunches().then(response => addLaunches(commit, response))
  },
  [ACTIONS.FETCH_UPCOMING] ({ commit }) {
    return getUpcomingLaunches().then(response => addLaunches(commit, response))
  },
  [ACTIONS.FETCH_LAUNCH] ({ commit }, flight) {
    return getLaunch({ flight }).then(response => addLaunches(commit, response))
  }
}
