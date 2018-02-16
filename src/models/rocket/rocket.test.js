import { buildRocketModel } from '@/models/rocket/rocket'

describe('Rocket Model', () => {
  describe('when an invalid rocket payload is provided', () => {
    it('should throw an error', () => {
      expect(() => buildRocketModel({ fruit: 'banana' })).toThrowError()
    })
  })

  describe('when no rocket payload is provided', () => {
    it('should throw an error', () => {
      expect(() => buildRocketModel()).toThrowError()
    })
  })

  describe('when a rocket payload only contains an ID', () => {
    const rocket = buildRocketModel({ rocket_id: 'R1' })

    it('should create rocket with only the id', () => {
      expect(rocket).toBeDefined()
      expect(rocket).toHaveProperty('id')
      expect(rocket.id).toBe('R1')
    })

    it('should set the name with a default value', () => {
      expect(rocket.name).toBe('No name')
    })

    it('should not create the type param', () => {
      expect(rocket.type).toBeUndefined()
    })
  })
})
