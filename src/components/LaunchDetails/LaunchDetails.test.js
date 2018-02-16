import LaunchDetails from './LaunchDetails'
import { shallow } from 'vue-test-utils'

describe('Components - LaunchDetails', function () {
  this.buildComponent = props => shallow(LaunchDetails, { propsData: props }).vm

  describe('Computed properties', () => {
    describe('@Success', () => {
      it("should return false when the launch's success is undefined", () => {
        const cmp = this.buildComponent({
          launch: {
            property: 'bananas'
          }
        })
        expect(cmp.success).toBe(false)
      })

      it("should return Successful when the launch's success is truthy", () => {
        const cmp = this.buildComponent({
          launch: {
            success: true
          }
        })

        expect(cmp.success).toBe('Successful')
      })

      it("should return Failed when the launch's success is falsy", () => {
        const cmp = this.buildComponent({
          launch: {
            success: false
          }
        })

        expect(cmp.success).toBe('Failed')
      })
    })
  })
})
