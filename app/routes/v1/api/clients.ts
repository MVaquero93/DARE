import { Router } from 'express'
import clientsController from '../../../controllers/clients'
import { authenticate } from '../../../middlewares/authentication'

const router = Router()

router.get('/', authenticate, clientsController.getAll)

export default router
