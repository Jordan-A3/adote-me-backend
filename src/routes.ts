import { Router } from 'express'
import multer from 'multer'

import uploadConfig from './config/upload'
import UserController from './Controllers/User'

const routes = Router()
const upload = multer(uploadConfig)

routes.post('/', upload.array('images'), UserController.create)

export default routes