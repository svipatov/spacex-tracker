export default {
  getAllLaunches (state) {
    return state.launches
  },
  getPast (state) {
    return state.launches.filter(launch => launch.isPast())
  },
  getUpcoming (state) {
    return state.launches.filter(launch => !launch.isPast())
  },
  getLaunch (state) {
    return flight =>
      state.launches.find(launch => launch.id === Number(flight))
  }
}
