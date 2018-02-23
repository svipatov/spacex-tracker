import SubNavigationBar from './SubNavigationBar'
import { shallow } from 'vue-test-utils'

describe('Components - SubNavigationBar', function () {
  this.buildComponent = props => shallow(SubNavigationBar, { propsData: props }).vm

  it('should pass all props', () => {
    const cmp = this.buildComponent({
      items: ['item 1', 'item 2']
    })
    expect(cmp.items).toEqual(['item 1', 'item 2'])
  })
})
