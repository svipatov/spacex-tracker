import { spacex } from '@/api/spacex-common'
import {
  getLaunch,
  getUpcomingLaunches,
  getPastLaunches
} from '@/api/launches'

describe('Launches API', function () {
  beforeAll(() => {
    spacex.get = jest.fn().mockResolvedValue('get request response')
  })

  describe('getLaunch', () => {
    describe('with filters', () => {
      beforeAll(() => {
        this.victim = getLaunch({ flight: 1 })
      })

      it('should return the data retrieved by network', (done) => {
        this.victim.then((requestResponse) => {
          expect(requestResponse).toEqual('get request response')
          done()
        })
      })

      it('should be called with the correct url route and filters', () => {
        expect(spacex.get).toHaveBeenCalledWith('/launches/all', {
          params: {
            flight_number: 1
          }
        })
      })
    })

    describe('without filters', () => {
      beforeAll(() => {
        this.victim = getLaunch()
      })

      it('should return the data retrieved by network', (done) => {
        this.victim.then((requestResponse) => {
          expect(requestResponse).toEqual('get request response')
          done()
        })
      })

      it('should be called with the correct url route', () => {
        expect(spacex.get).toHaveBeenCalledWith('/launches/all', {
          params: {
            flight_number: undefined
          }
        })
      })
    })
  })

  describe('getUpcomingLaunches', () => {
    beforeAll(() => {
      this.victim = getUpcomingLaunches()
    })

    it('should return the data retrieved by network', (done) => {
      this.victim.then((requestResponse) => {
        expect(requestResponse).toEqual('get request response')
        done()
      })
    })

    it('should be called with the correct url route', () => {
      expect(spacex.get).toHaveBeenCalledWith('/launches/upcoming')
    })
  })

  describe('getPastLaunches', () => {
    beforeAll(() => {
      this.victim = getPastLaunches()
    })

    it('should return the data retrieved by network', (done) => {
      this.victim.then((requestResponse) => {
        expect(requestResponse).toEqual('get request response')
        done()
      })
    })

    it('should be called with the correct url route', () => {
      expect(spacex.get).toHaveBeenCalledWith('/launches')
    })
  })
})
