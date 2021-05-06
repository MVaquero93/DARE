import express from 'express'
import clientsRouter from './clients'
import policiesRouter from './policies'
import loginRouter from './login'


const router = express.Router()

/**
 * load login routes
 */
 router.use('/login', loginRouter)

/**
 * load policies routes
 */
router.use('/policies', policiesRouter)

/**
 * load clients routes
 */
router.use('/clients', clientsRouter)


export default router
