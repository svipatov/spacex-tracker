import { MUTATIONS } from '@/store/launches/constants'
import mutations from '@/store/launches/mutations'

describe('Launch Mutations', () => {
  describe(MUTATIONS.ADD_LAUNCH, function () {
    describe('when the launch being added does not exist in the store', function () {
      beforeAll(() => {
        this.state = {
          launches: []
        }
        this.launch = 'x'
      })

      it('should add a launch to the state', () => {
        const addLaunchMutation = mutations[MUTATIONS.ADD_LAUNCH]

        addLaunchMutation(this.state, this.launch)

        expect(this.state.launches).toEqual(['x'])
      })
    })

    describe('when the launch being added exists in the store', function () {
      beforeAll(() => {
        this.state = {
          launches: [
            {
              id: 1,
              name: 'test 1'
            }
          ]
        }
        this.launch = {
          id: 1,
          name: 'test 1'
        }
      })

      it('should produce no mutations', () => {
        const addLaunchMutation = mutations[MUTATIONS.ADD_LAUNCH]
        const expectedState = [
          {
            id: 1,
            name: 'test 1'
          }
        ]

        expect(this.state.launches).toEqual(expectedState)

        addLaunchMutation(this.state, this.launch)

        expect(this.state.launches).toEqual(expectedState)
      })
    })
  })
})
