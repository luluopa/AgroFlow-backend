import express, { Request, Response } from 'express'
import * as userController from '../controllers/userController'

const userRouter = express.Router()

userRouter.post('/create', (request: Request, response: Response) => {
    userController.userCreate(request, response)
})

userRouter.get('/list', (request: Request, response: Response) => {
    userController.userList(request, response)
})

userRouter.get('/:id', (request: Request, response: Response) => {
    userController.userGet(request, response)
})

userRouter.delete('/delete/:id', (request: Request, response: Response) => {
    userController.userDelete(request, response)
})

userRouter.put('/update/:id', (request: Request, response: Response) => {
    userController.userUpdate(request, response)
})

export default userRouter;