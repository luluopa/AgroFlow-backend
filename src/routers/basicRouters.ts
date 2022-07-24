import express, { Request, Response } from 'express'
import database from '../models'
import { CHECKDB_URL, INDEX_URL } from '../util/constants/api_routers/basic.api'
import { MESSAGES } from '../util/constants/messages/message'

const basicRouter = express.Router()

basicRouter.get(INDEX_URL, (request: Request, response: Response) => {
    response.status(200).send(JSON.stringify({ 'Success': MESSAGES['indexMessage'] }))
})
  
basicRouter.get(CHECKDB_URL, async (request: Request, response: Response) => {
    try {
        await database.authenticate().then(() => {
        response.status(200).send(JSON.stringify({ 'Connection status to the database' : MESSAGES['dbConnectionOk'] }))
        })
    } catch (error) {
        response.status(500).send(JSON.stringify({ 'Connection status to the database' : MESSAGES['dbConnectionFail'] }))
    }
})

export default basicRouter