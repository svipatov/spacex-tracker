import LaunchCard from './LaunchCard'
import * as dateHelpers from '@/helpers/date'
import { shallow } from 'vue-test-utils'

describe('Components - LaunchCard', function () {
  this.buildComponent = props => shallow(LaunchCard, { propsData: props }).vm

  describe('Computed properties', () => {
    describe('@date', () => {
      beforeAll(() => {
        dateHelpers.americanDate = jest.fn().mockReturnValue('american date formatting')
      })

      it('should return the formatted date', () => {
        const cmp = this.buildComponent({
          launch: {
            date: 'string',
            rocket: {}
          }
        })
        expect(cmp.date).toBe('american date formatting')
      })
    })
  })
})
