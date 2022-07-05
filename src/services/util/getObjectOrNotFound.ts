import express, { Request, Response } from "express";
import { Model } from "sequelize/types";
import { User } from "../../models/user";

export const getUserOr404 = async (request: Request, response: Response): Promise<User | null> => {
    const { id } = request.params
    try{
        const model: User | null = await User.findByPk(id)
        if (model != null){
            return model
        }
        return null
    }
    catch(error){
        return null
    }
}

