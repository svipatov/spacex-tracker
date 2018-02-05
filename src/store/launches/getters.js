export default {
  getAllLaunches (state) {
    return state.launches
  },
  getLaunch (state) {
    return flight =>
      state.launches.find(launch => launch.flight_number === Number(flight))
  }
}
