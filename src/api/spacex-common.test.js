import axios from 'axios'
import { http } from '@/api/spacex-common'

jest.mock('axios', () => {
  return {
    create: jest.fn().mockReturnValue('axios instance')
  }
})

describe('SpaceX Common API', function () {
  it('should call third party http creator', () => {
    expect(axios.create).toHaveBeenCalledWith({
      baseURL: 'https://api.spacexdata.com/v2/'
    })
  })

  it('should create the http instance', () => {
    expect(http).toEqual('axios instance')
  })
})
