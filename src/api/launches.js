import { spacex } from './spacex-common'

function getPastLaunches () {
  return spacex.get('/launches')
}

function getUpcomingLaunches (launchFilter = {}) {
  return spacex.get('/launches/upcoming')
}

function getLaunch (launchFilter = {}) {
  const filter = {
    flight_number: launchFilter.flight
  }

  return spacex.get('/launches/all', { params: filter })
}

export {
  getLaunch,
  getPastLaunches,
  getUpcomingLaunches
}
