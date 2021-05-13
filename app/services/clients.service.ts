import { apiRequest } from '../helpers/api-request'
import { paginator } from '../helpers/paginator'
import { getToken } from './manage-token.service'

export const getClients = async (req) => {
  const clients = await apiRequest('clients', await getToken())
  return paginator(clients, req.query.page, req.query.limit)
}

export const getOneClient = async (id) => {
  return (await apiRequest('clients', await getToken())).find(client => client.id === id)
}

export const getPoliciesByClient = async (id) => {
  return (await apiRequest('policies', await getToken())).filter((policie) => policie.clientId === id)
}