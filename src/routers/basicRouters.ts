import express, { Request, Response } from 'express'
import database from '../models'

const basicRouter = express.Router()

basicRouter.get('/', async (request: Request, response: Response) => {
    response.status(200).send(JSON.stringify({ Success: 'Your first app' }))
})
  
basicRouter.get('/db/', async (request: Request, response: Response) => {
    try {
        await database.authenticate().then(() => {
        response.status(200).send(JSON.stringify({ 'Connection status to the database: ': 'OK' }))
        })
    } catch (error) {
        response.status(500).send(JSON.stringify({ 'Connection status to the database': 'FAIL' }))
    }
})

export default basicRouter