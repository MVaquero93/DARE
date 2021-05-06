import { apiRequest } from "../helpers/axios-request"
import { getToken } from "../helpers/manage-token"

export const getClients = async () => {
  return apiRequest('clients', await getToken())
}

export const getOneClient = async (id) => {
  return (await apiRequest('clients', await getToken())).filter(client => client.id === id)
}

export const getPoliciesByClient = async (id) => {
  return (await apiRequest('policies', await getToken())).filter((policie) => policie.clientId === id)
}