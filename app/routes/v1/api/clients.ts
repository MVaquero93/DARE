import { Router } from 'express'
import clientsController from '../../../controllers/clients'
import { authorization } from '../../../middlewares/authorization'
import { hTPE } from '../../../services/express-helper.service'

const router = Router()
router.use(authorization)

router.get('/', hTPE(clientsController.getAll))
router.get('/:id', hTPE(clientsController.getOne))
router.get('/:id/policies', hTPE(clientsController.getPoliciesByClient))

export default router
