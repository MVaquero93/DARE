import axios from 'axios'
import envConfig from '../config/env'
import { TokenData } from '../interfaces/tokenData.interface'
import { login } from '../services/login.service'
let data = {} as TokenData

export const getToken = async () => {
  return data.token
}

export const setToken = async () => {
  try {
    data = await login()

    setTimeout(() => {
      data = {} 
    }, envConfig.credentials.expires_in)

    return data
  } catch (err) {
    console.error(err)
    return null
  }
}