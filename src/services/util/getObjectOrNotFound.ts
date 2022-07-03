import express, { Request, Response } from "express";
import { Model } from "sequelize/types";
import { User } from "../../models/user";

export const getUserOr404 = async (request: Request, response: Response): Promise<Model | ReturnType<any> > => {
    const { id } = request.params
    const model_find: Model | null = await User.findByPk(id)
    if (model_find != null){
        return model_find
    }
    return response.status(404).json("Not found")
}