import { MUTATIONS } from './constants'

export default {
  [MUTATIONS.SET_LAUNCHES] (state, launches) {
    state.launches = launches
  }
}
