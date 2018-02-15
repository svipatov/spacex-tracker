import Yup from 'yup'

const schema = Yup.object().shape({
  id: Yup.string().required(),
  name: Yup.string(),
  type: Yup.string()
})

const convertModel = rocket => {
  if (!rocket) {
    return {}
  }

  const { rocket_name: name = 'No name' } = rocket

  return {
    id: rocket.rocket_id,
    type: rocket.rocket_type,
    name
  }
}

export const buildRocketModel = rocket => {
  const convertedModel = convertModel(rocket)
  const isValid = schema.validateSync(convertedModel, schema)
  if (isValid) {
    return convertedModel
  }
  return false
}
