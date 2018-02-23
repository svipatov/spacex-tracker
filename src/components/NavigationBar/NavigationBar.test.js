import NavigationBar from './NavigationBar'
import { shallow } from 'vue-test-utils'

describe('Components - NavigationBar', function () {
  this.buildComponent = props => shallow(NavigationBar, { propsData: props }).vm

  it('should pass all props', () => {
    const cmp = this.buildComponent({
      title: 'title'
    })
    expect(cmp.title).toBe('title')
  })
})
