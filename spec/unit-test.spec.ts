import { setToken } from '../app/services/manage-token.service'
import app from '../app'

describe('unit testing example', () => {

  afterAll((done) => {
    app.close(() => {
      done()
    })
  });

  it('Set token method', async () => {
    const data = await setToken()
    data.token = ''
    expect(data).toMatchSnapshot()
  })
})