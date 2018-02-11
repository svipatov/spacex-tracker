import Yup from 'yup'

const schema = Yup.object().shape({
  id: Yup.string(),
  name: Yup.string(),
  type: Yup.string()
})

const convertModel = rocket => {
  return {
    id: rocket.rocket_id,
    name: rocket.rocket_name,
    type: rocket.rocket_type
  }
}

export function buildRocketModel (rocket) {
  const convertedModel = convertModel(rocket)
  const isValid = schema.validateSync(convertedModel, schema)
  if (isValid) {
    return convertedModel
  }
}
