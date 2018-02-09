import Yup from 'yup'
import { buildRocketModel } from './rocket'
import { buildLaunchSiteModel } from './launch_site'

const schema = Yup.object().shape({
  id: Yup.number().required(),
  date: Yup.date(),
  rocket: Yup.object(),
  details: Yup.string().nullable(),
  launch_site: Yup.object().nullable(),
  patch_logo: Yup.string()
    .url()
    .nullable()
})

class Model {
  constructor (launch) {
    this.id = launch.flight_number
    this.rocket = buildRocketModel(launch.rocket)
    this.details = launch.details
    this.date = new Date(launch.launch_date_unix * 1000) // Unix timestamp conversion in Javascript
    this.patch_logo = launch.links.patch
    this.launch_site = buildLaunchSiteModel(launch.launch_site)
  }

  isPast () {
    return this.date < new Date()
  }

  validate () {
    return schema.validateSync(this, schema)
  }
}

export function buildLaunchModel (launch) {
  const model = new Model(launch)
  if (model.validate()) {
    return model
  }
}
