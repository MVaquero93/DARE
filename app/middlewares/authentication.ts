import { setToken } from '../services/manage-token.service'

export const authenticate = async (req, res, next) => {
  const token = await setToken()

  if (token) {
    req.token = token
    return next()
  }
  return res.status(401).json({
    message: 'Unauthorized',
  })
}