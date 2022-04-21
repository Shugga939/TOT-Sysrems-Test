import {Router} from 'express'
import mailRouter from './mailRouter.js'

const router = new Router()

router.use('/mail', mailRouter)

export default router
