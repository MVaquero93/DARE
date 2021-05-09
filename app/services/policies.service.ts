import { apiRequest } from "../helpers/axios-request"
import { getToken } from "../helpers/manage-token"

export const getPolicies = async () => {
  return apiRequest('policies', await getToken())
}

export const getOnePolice = async (id) => {
  return (await apiRequest('policies', await getToken())).filter(policie => policie.id === id)
}