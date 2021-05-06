import { Router } from 'express'
import clientsController from '../../../controllers/clients'
import { authorization } from '../../../middlewares/authorization'

const router = Router()
router.use(authorization)

router.get('/', clientsController.getAll)
router.get('/:id', clientsController.getOne)
router.get('/:id/policies', clientsController.getPoliciesByClient)

export default router
