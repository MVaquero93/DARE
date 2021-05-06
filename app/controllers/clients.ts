import axios from 'axios'
import { Request, Response } from 'express'
import envConfig from '../config/env'
import { getClients, getOneClient, getPoliciesByClient } from '../services/clients.service'

const clientsController = {

  getAll: async (req, res: Response) => {
    try {  
      res.send(await getClients())
    } catch(e) {
      res.send(e.toString())
    }
  },

  getOne: async (req, res: Response) => {
    res.send(await getOneClient(req.params.id))
  },

  getPoliciesByClient: async (req, res: Response) => {
    res.send(await getPoliciesByClient(req.params.id))
  }
}

export default clientsController