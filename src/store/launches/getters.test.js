import getters from '@/store/launches/getters'

describe('Launch Getters', function () {
  beforeAll(() => {
    this.state = {
      launches: [
        {
          id: 1,
          isPast: jest.fn().mockReturnValue(true)
        },
        {
          id: 2,
          isPast: jest.fn().mockReturnValue(false)
        }
      ]
    }
  })

  describe('getAllLaunches', () => {
    it('should return all the launches unmodified', () => {
      const allLaunches = getters.getAllLaunches(this.state)

      expect(allLaunches).toEqual(this.state.launches)
    })
  })

  describe('getPast', () => {
    it('should return only past launches', () => {
      const pastLaunches = getters.getPast(this.state)

      expect(pastLaunches).toEqual([this.state.launches[0]])
    })
  })

  describe('getUpcoming', () => {
    it('should return only upcoming launches', () => {
      const pastLaunches = getters.getUpcoming(this.state)

      expect(pastLaunches).toEqual([this.state.launches[1]])
    })
  })

  describe('getLaunch', () => {
    describe('when it is an id that exists in the state', () => {
      it('should return the launch that was found', () => {
        const foundLaunch = getters.getLaunch(this.state)(2)

        expect(foundLaunch).toEqual(this.state.launches[1])
      })
    })

    describe('when it is an id that does not exist in the state', () => {
      it('should return undefined', () => {
        const foundLaunch = getters.getLaunch(this.state)('some random string')

        expect(foundLaunch).toBeUndefined()
      })
    })
  })
})
