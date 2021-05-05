import express from 'express'
import apiRouter from './api'


const router = express.Router()

/**
 * load api routes
 */
router.use('/api', apiRouter)


export default router
