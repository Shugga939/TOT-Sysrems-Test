import {Router} from 'express'
import mailController from './../controlers/mailController.js'

const mailRouter = new Router()

mailRouter.get('/folders',mailController.getFolders)
mailRouter.post('/folders',mailController.addFolder)
mailRouter.put('/folders',mailController.editFolder)
mailRouter.get('/:folder',mailController.getAllLetters)
mailRouter.get('/:folder/:id',mailController.getLetter)




export default mailRouter