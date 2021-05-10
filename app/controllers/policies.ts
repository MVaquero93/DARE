import { Request, Response } from 'express'
import { getOnePolice, getPolicies } from '../services/policies.service'

const policiesController = {

  getAll: async (req, res: Response) => {
    try {  
      return getPolicies()
    } catch(e) {
      return e
    }
  },

  getOne: async (req, res: Response) => {
    try {  
      return getOnePolice(req.params.id)
    } catch(e) {
      return e
    }
  },
}

export default policiesController
