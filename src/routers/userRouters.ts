import express, { Request, Response } from 'express'
import * as userController from '../controllers/userController'

const userRouter = express.Router()

userRouter.post('/create', (request: Request, response: Response) => {
    userController.userCreate(request, response)
})