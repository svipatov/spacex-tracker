import * as DateHelper from './date'
jest.mock('fecha', () => ({
  format: date => date + '10'
}))

describe('Helpers - Date', () => {
  describe('when asking for an american date', () => {
    const date = DateHelper.americanDate('1000')

    it('should modify the date accordingly', () => {
      expect(date).not.toBe('1000')
    })
  })
})
