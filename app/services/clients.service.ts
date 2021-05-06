import axios from "axios"
import envConfig from "../config/env"

export const getClients = async (req) => {
  const resp = await axios.get(envConfig.api.url + 'clients', {
    headers: {
      Authorization: req.token
    }
  })
}