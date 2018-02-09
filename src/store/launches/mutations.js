import { MUTATIONS } from './constants'

export default {
  [MUTATIONS.ADD_LAUNCH] (state, launch) {
    if (state.launches.every(l => l.id !== launch.id)) {
      state.launches.push(launch)
    }
  }
}
