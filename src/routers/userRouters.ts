import express, { Request, Response } from 'express'
import * as userController from '../controllers/userController'
import { LIST_USER_URL, USER_CREATE_URL, USER_DEFAULT_URL } from '../util/constants/user.api'

const userRouter = express.Router()

userRouter.post(USER_CREATE_URL, (request: Request, response: Response) => {
    userController.userCreate(request, response)
})

userRouter.get(LIST_USER_URL, (request: Request, response: Response) => {
    userController.userList(request, response)
})

userRouter.get(USER_DEFAULT_URL, (request: Request, response: Response) => {
    userController.userGet(request, response)
})

userRouter.delete('/delete/:id', (request: Request, response: Response) => {
    userController.userDelete(request, response)
})

userRouter.put('/update/:id', (request: Request, response: Response) => {
    userController.userUpdate(request, response)
})

export default userRouter;