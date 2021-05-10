import { setToken } from '../app/services/manage-token.service'
import app from '../app'
import request from 'request-promise-native';
import envConfig from '../app/config/env';

describe('e2e testing example', () => {

  const endPoint = envConfig.app.protocol + '://' + envConfig.app.domain + ':' + envConfig.app.port

  beforeAll(async (done) => {
    await setToken()
    done()
  })

  afterAll((done) => {
    app.close(() => {
      done()
    })
  })

  it('Call to clients list endpoint', async () => {
    const resp = await request({
      uri: endPoint + '/api/v1/clients',
      method: 'GET',
      resolveWithFullResponse: true,
      simple: false,
      json: true,       
    })
    expect(resp.data).toMatchSnapshot()
  })
})