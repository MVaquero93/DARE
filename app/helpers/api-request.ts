import axios from 'axios'
import envConfig from '../config/env'

export const apiRequest = async (url, token) => {
  return (await axios.get(envConfig.api.url + url, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })).data
}