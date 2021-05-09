import { Request, Response } from 'express'
import { getOnePolice, getPolicies } from '../services/policies.service'

const policiesController = {

  getAll: async (req, res: Response) => {
    try {  
      res.send(await getPolicies())
    } catch(e) {
      res.send(e.toString())
    }
  },

  getOne: async (req, res: Response) => {
    res.send(await getOnePolice(req.params.id))
  },
}

export default policiesController
