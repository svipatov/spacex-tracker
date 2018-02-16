import { ACTIONS, MUTATIONS } from '@/store/launches/constants'
import actions from '@/store/launches/actions'
import * as api from '@/api/launches'
import * as model from '@/models/launch/launch'

describe('Launch Actions', () => {
  describe(ACTIONS.FETCH_LAUNCH, function () {
    beforeAll(function () {
      api.getLaunch = jest.fn().mockResolvedValue({
        data: [{}]
      })
    })

    describe('when it is possible to create a launch model', function () {
      beforeAll(() => {
        this.actionMock = { commit: jest.fn() }

        model.buildLaunchModel = jest.fn().mockReturnValue('launchModel')
      })

      it('should call the mutation to add a launch ', () => {
        const fetchLaunchAction = actions[ACTIONS.FETCH_LAUNCH]

        fetchLaunchAction(this.actionMock, 1).then(() => {
          expect(this.actionMock.commit).toHaveBeenCalledWith(MUTATIONS.ADD_LAUNCH, 'launchModel')
        })
      })
    })

    describe('when it is impossible to create a launch model', function () {
      beforeAll(() => {
        this.actionMock = { commit: jest.fn() }

        model.buildLaunchModel = jest.fn().mockReturnValue('')
      })

      it('should not call the mutation to add a launch ', () => {
        const fetchLaunchAction = actions[ACTIONS.FETCH_LAUNCH]

        fetchLaunchAction(this.actionMock, 1).then(() => {
          expect(this.actionMock.commit).not.toHaveBeenCalled()
        })
      })
    })
  })
})
