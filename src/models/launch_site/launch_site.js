import Yup from 'yup'

const schema = Yup.object().shape({
  name: Yup.string()
})

class LaunchSiteModel {
  constructor (site) {
    this.name = site.site_name
  }

  validate () {
    return schema.validateSync(this, schema)
  }
}

export function buildLaunchSiteModel (launchSite) {
  const model = new LaunchSiteModel(launchSite)

  if (model.validate()) {
    return model
  }
}
