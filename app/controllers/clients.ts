import { Request, Response } from 'express'
import { getClients, getOneClient, getPoliciesByClient } from '../services/clients.service'

const clientsController = {

  getAll: async (req, res: Response) => {
    try {
      return getClients()
    } catch(e) {
      return e
    }
  },

  getOne: async (req, res: Response) => {
    try {
      return getOneClient(req.params.id)
    } catch(e) {
      return e
    }
  },

  getPoliciesByClient: async (req, res: Response) => {
    try {
      return getPoliciesByClient(req.params.id)
    } catch(e) {
      return e
    }
  },
}

export default clientsController