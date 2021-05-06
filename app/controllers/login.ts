import { Request, Response } from 'express'

const loginController = {
  login: async (req, res: Response) => {
    res.send(req.token)
  }
}

export default loginController
