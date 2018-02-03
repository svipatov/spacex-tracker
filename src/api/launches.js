import { http } from './spacex-common'

function getLaunches () {
  return http.get('/launches')
}

export {
  getLaunches
}
