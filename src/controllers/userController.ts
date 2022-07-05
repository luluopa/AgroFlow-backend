import { Request, Response } from "express";
import { User } from "../models/user";
import { getUserOr404 } from "../services/util/getObjectOrNotFound";

const userCreate = async (request: Request, response: Response): Promise<Response> => {
    const user: User | null = await User.create({ ...request.body })
    return response.status(201).json(user)
}

const userDelete = async (request: Request, response: Response): Promise<Response> => {
    const { id }: string | any = request.params
    try{
        const user: User | null = await User.findByPk(id)
        if(user != null){
            user.is_deleted = true
            await user.save()
            return response.status(200).json('Deleted')
        }
        return response.status(404).json("404 Not Found")
    }
    catch(error){
        return response.status(404).json("404 Not Found")
    }
}

const userList = async (request: Request, response: Response): Promise<Response> => {
    const listUser = await User.findAll()
    return response.status(200).json(listUser)
}

const userGet = async (request: Request, response: Response): Promise<Response> => {
    const { id }: string | any = request.params
    try{
        const user: User | null = await User.findByPk(id)
        if(user != null){
            return response.status(200).json(user)
        }
        return response.status(404).json("404 Not Found")
    }
    catch(error){
        return response.status(404).json("404 Not Found")
    }
}

const userUpdate = async (request: Request, response: Response): Promise<Response> => {
    const { id }: string | any = request.params
    try{
        const user: User | null = await User.findByPk(id)
        if(user != null){
            user.update({ ...request.body })
            user.updated_at = new Date()
            await user.save
            return response.status(200).json(user)
        }
        return response.status(404).json("404 Not Found")
    }
    catch(error){
        return response.status(404).json("404 Not Found")
    }
}

export { userCreate, userDelete, userGet, userList, userUpdate }
