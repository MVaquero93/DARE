import {config} from 'dotenv'
config({path: '../../.env'})

const envConfig = {
  app: {
    protocol: process.env.APP_PROTOCOL || 'http',
    domain: process.env.APP_DOMAIN || 'localhost',
    port: process.env.PORT || '3030',
  },
  api: {
    url: process.env.DARE_API || 'https://dare-nodejs-assessment.herokuapp.com/api/',  
  },
  credentials: {
    client_id: process.env.CLIENT_ID || 'dare',
    client_secret: process.env.CLIENT_SECRET || 's3cr3t',
    expires_in: 60 * 60 * 1000,
  }
}

export default envConfig
