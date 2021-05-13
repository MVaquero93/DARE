import { apiRequest } from '../helpers/api-request'
import { getToken } from './manage-token.service'

export const getPolicies = async () => {
  return apiRequest('policies', await getToken())
}

export const getOnePolice = async (id) => {
  return (await apiRequest('policies', await getToken())).find(policie => policie.id === id)
}