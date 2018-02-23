import axios from 'axios'

export const spacex = axios.create({
  baseURL: 'https://api.spacexdata.com/v2/'
})
