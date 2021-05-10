import { TokenData } from '../interfaces/tokenData.interface'
import { login } from './login.service'
let data = {} as TokenData
let expiration

export const getToken = async () => {
  // Check if cache has token data
  if(data.token) {
    // Validate token expiration
    if(validateExpirationToken()) return data.token
    console.log('Token expired. Getting a new one...')

    // If token has expired ask new one.
    const renovatedToken = await setToken()
    if(renovatedToken) return renovatedToken.token
  }
  return null
}

export const setToken = async () => {
  try {
    data = await login()
    saveNextExpiration(data.expires_in)
    return data
  } catch (err) {
    throw new Error('Something went wrong')
  }
}

const validateExpirationToken = () => {
  return new Date() < expiration
}

const saveNextExpiration = (expiresIn) => {
  const t = new Date()
  t.setSeconds(t.getSeconds() + expiresIn)
  expiration = t
}