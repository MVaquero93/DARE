import { Router } from 'express'
import apiRouter from './v1'


const router = Router()

/**
 * load api routes
 */
router.use('/api', apiRouter)


export default router
