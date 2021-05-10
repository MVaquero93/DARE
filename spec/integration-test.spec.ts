import request from 'request-promise-native'
import envConfig from '../app/config/env'

describe('route testing', () => {

  const endPoint = envConfig.app.protocol + '://' + envConfig.app.domain + ':3030'
  let server
  beforeAll(async () => {
    server = require('../app')
  })

  afterAll(async () => {
    await server.close();
  });

  it('test welcome route', async () => {
    const resp =
      await request({
        uri: endPoint,
        method: 'GET',
        resolveWithFullResponse: true,
        simple: false,
        json: true,       
      })
    expect(resp.statusCode).toBe(200)
  })

  it('clients endpoint should return 401 if no token setted', async () => {
    const resp =
      await request({
        uri: endPoint + '/api/v1/clients',
        method: 'GET',
        resolveWithFullResponse: true,
        simple: false,
        json: true,       
      })
    expect(resp.statusCode).toBe(401)
  })

  it('clients endpoint should return 200 after login', async () => {
    await request({
      uri: endPoint + '/api/v1/login',
      method: 'POST',
      resolveWithFullResponse: true,
      simple: false,
      json: true,       
    })
    const resp =
      await request({
        uri: endPoint + '/api/v1/clients',
        method: 'GET',
        resolveWithFullResponse: true,
        simple: false,
        json: true,       
      })
    expect(resp.statusCode).toBe(200)
  })
})