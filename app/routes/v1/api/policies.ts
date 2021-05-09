import { Router } from 'express'
import policiesController from '../../../controllers/policies'
const router = Router()

router.get('/', policiesController.getAll)
router.get('/:id', policiesController.getOne)

export default router