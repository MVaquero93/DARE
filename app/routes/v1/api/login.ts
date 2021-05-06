import express from 'express'
import loginController from '../../../controllers/login'
import { authenticate } from '../../../middlewares/authentication'

const router = express.Router()

router.post('/', authenticate, loginController.login)

export default router