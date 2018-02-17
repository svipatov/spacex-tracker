import { buildLaunchSiteModel } from '@/models/launch_site/launch_site'

describe('Launch Site Model', () => {
  describe('when building a launch site model', () => {
    const launchSite = buildLaunchSiteModel({ site_name: 'LS1' })

    it('should create launch site with name', () => {
      expect(launchSite).toBeDefined()
      expect(launchSite).toHaveProperty('name')
      expect(launchSite.name).toBe('LS1')
    })
  })
})
