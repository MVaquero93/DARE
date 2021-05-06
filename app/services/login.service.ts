import axios from 'axios'
import envConfig from '../config/env'
import { TokenData } from '../interfaces/tokenData.interface'

export const login = async (): Promise<TokenData> => {
  const resp = await axios.post(envConfig.api.url + 'login', {
    client_id: envConfig.credentials.client_id,
    client_secret: envConfig.credentials.client_secret
  })

  return {
    token: resp.data.token,
    type: resp.data.type,
    expires_in: envConfig.credentials.expires_in,
  }
}
