import Yup from 'yup'

const schema = Yup.object().shape({
  name: Yup.string()
})

class Model {
  constructor (site) {
    this.name = site.name
  }

  validate () {
    return schema.validateSync(this, schema)
  }
}

export function buildLaunchSiteModel (launch) {
  const model = new Model(launch)
  if (model.validate()) {
    return model
  }
}
