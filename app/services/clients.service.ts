import { apiRequest } from '../helpers/axios-request'
import { getToken } from './manage-token.service'

export const getClients = async () => {
  return apiRequest('clients', await getToken())
}

export const getOneClient = async (id) => {
  return (await apiRequest('clients', await getToken())).find(client => client.id === id)
}

export const getPoliciesByClient = async (id) => {
  return (await apiRequest('policies', await getToken())).filter((policie) => policie.clientId === id)
}