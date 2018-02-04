import { http } from './spacex-common'

function getLaunches (launchFilter = {}) {
  const filter = {
    flight_number: launchFilter.flight
  }

  return http.get('/launches', { params: filter })
}

export {
  getLaunches
}
