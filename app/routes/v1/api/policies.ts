import { Router } from 'express'
import policiesController from '../../../controllers/policies'
import { authorization } from '../../../middlewares/authorization'
import { hTPE } from '../../../services/express-helper.service'

const router = Router()
router.use(authorization)

router.get('/', hTPE(policiesController.getAll))
router.get('/:id', hTPE(policiesController.getOne))

export default router