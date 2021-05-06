import express from 'express'
import envConfig from './app/config/env'
import routes from './app/routes'

const app = express()

app.use(routes);

app.get('/', (req, res) => {
  res.send('Welcome to DARE')
})

const appServer = app.listen(envConfig.app.port, () => {
  console.log('listening at port: ' + envConfig.app.port)
})

export default appServer
