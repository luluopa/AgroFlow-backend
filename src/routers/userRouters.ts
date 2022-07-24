import express, { Request, Response } from 'express'
import * as userController from '../controllers/userController'
import { LIST_USER_URL, USER_CREATE_URL, USER_DEFAULT_URL, USER_DELETE_URL, USER_UPDATE_URL } from '../util/constants/api_routers/user.api'

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

userRouter.delete(USER_DELETE_URL, (request: Request, response: Response) => {
    userController.userDelete(request, response)
})

userRouter.put(USER_UPDATE_URL, (request: Request, response: Response) => {
    userController.userUpdate(request, response)
})

export default userRouter;