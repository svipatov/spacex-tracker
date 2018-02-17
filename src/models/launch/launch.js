import Yup from 'yup'
import { buildRocketModel } from '@/models/rocket/rocket'
import { buildLaunchSiteModel } from '@/models/launch_site/launch_site'

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

class LaunchModel {
  constructor (launch) {
    this.id = launch.flight_number
    this.details = launch.details
    this.year = launch.launch_year
    this.success = this.buildSuccess(launch)

    if (launch.rocket) {
      this.rocket = buildRocketModel(launch.rocket)
    }
    if (launch.launch_site) {
      this.launch_site = buildLaunchSiteModel(launch.launch_site)
    }
    if (launch.links) {
      this.patch_logo = launch.links.mission_patch
    }
    if (launch.launch_date_unix) {
      this.date = new Date(launch.launch_date_unix * 1000) // Unix timestamp conversion in Javascript
    }
  }

  buildSuccess (launch) {
    if (launch.launch_success === null) {
      return undefined
    }
    return launch.launch_success
  }

  isPast () {
    return this.date < new Date()
  }

  validate () {
    return schema.validateSync(this, schema)
  }
}

export function buildLaunchModel (launch) {
  const model = new LaunchModel(launch)

  if (model.validate()) {
    return model
  }
}
