import express from 'express'
import envConfig from './app/config/env'

const app = express()

app.get('/', (req, res) => {
  res.send('Welcome to DARE')
})

const appServer = app.listen(envConfig.app.port, () => {
  console.log('listening at port: ' + envConfig.app.port)
})

export default appServer
