import { buildLaunchModel } from '@/models/launch/launch'

describe('Launch Model', () => {
  describe('when an invalid launch payload is provided', () => {
    it('should throw an error', () => {
      expect(() => buildLaunchModel({ fruit: 'banana' })).toThrowError()
    })
  })

  describe('when no Launch payload is provided', () => {
    it('should throw an error', () => {
      expect(() => buildLaunchModel()).toThrowError()
    })
  })

  describe('when a launch payload only contains an ID', () => {
    const launch = buildLaunchModel({ flight_number: 10 })

    it('should create Launch with only the id', () => {
      expect(launch).toBeDefined()
      expect(launch).toHaveProperty('id')
      expect(launch.id).toBe(10)
    })
  })

  describe('when a launch payload contains all the fields', () => {
    const rocket = {
      rocket_id: 1
    }

    const launchSite = {
      site_name: 'LS'
    }

    const launch = buildLaunchModel({
      flight_number: 1,
      details: 'xpto big details about stupid things',
      launch_year: 2018,
      success: true,
      launch_date_unix: 1000,
      links: { mission_patch: 'https://google.com' },
      launch_site: launchSite,
      rocket
    })

    it('should be valid', () => {
      expect(launch).toBeDefined()
    })
  })

  describe('when there is no launch success flags', () => {
    const launch = buildLaunchModel({
      flight_number: 69,
      launch_success: null
    })
    it('should set the launch success as undefined', () => {
      expect(launch.success).toBeUndefined()
    })
  })

  describe('when the launch date is in the past', () => {
    const oldTimestamp = 151890307
    const launch = buildLaunchModel({
      flight_number: 3,
      launch_date_unix: oldTimestamp
    })

    expect(launch.isPast()).toBeTruthy()
  })

  describe('when the launch date is in the future', () => {
    const futureTimestamp = 3518904302
    const launch = buildLaunchModel({
      flight_number: 3,
      launch_date_unix: futureTimestamp
    })

    expect(launch.isPast()).toBeFalsy()
  })
})
