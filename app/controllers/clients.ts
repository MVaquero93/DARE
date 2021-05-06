import axios from 'axios'
import { Request, Response } from 'express'
import envConfig from '../config/env'
import { getClients } from '../services/clients.service'

const clientsController = {

  getAll: async (req, res: Response) => {
    try {  
      res.send('ok')
    } catch(e) {
      res.send(e.toString())
    }
  },

  getOne: (req, res: Response) => {
  },

  getPoliciesByClient: (req, res: Response) => {
  }
}

export default clientsController