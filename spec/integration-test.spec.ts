import request from 'request-promise-native'
import envConfig from '../app/config/env'
import app from '../app'

describe('route integration testing example', () => {

  const endPoint = envConfig.app.protocol + '://' + envConfig.app.domain + ':' + envConfig.app.port

  afterAll((done) => {
    app.close(() => {
      done()
    })
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