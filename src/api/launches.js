import { http } from './spacex-common'

function getPastLaunches () {
  return http.get('/launches')
}

function getUpcomingLaunches (launchFilter = {}) {
  return http.get('/launches/upcoming')
}

function getLaunch (launchFilter = {}) {
  const filter = {
    flight_number: launchFilter.flight
  }

  return http.get('/launches', { params: filter })
}

export {
  getLaunch,
  getPastLaunches,
  getUpcomingLaunches
}
