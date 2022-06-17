import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import DB_CONNECT from './usuario/models/index'

dotenv.config()

const app: Express = express()
const port = process.env.PORT
const env = process.env.NODE_ENV

app.get('/', async (request: Request, response: Response) => {
  response.status(200).send(JSON.stringify({ Success: 'Your first app' }))
})

app.get('/db/', async (request: Request, response: Response) => {
  try {
    await DB_CONNECT.authenticate().then(() => {
      response.status(200).send(JSON.stringify({ 'Connection status to the database: ': 'OK' }))
    })
  } catch (error) {
    response.status(500).send(JSON.stringify({ 'Connection status to the database': 'FAIL' }))
  }
})

if (env !== 'test') {
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
  })
}

export default app
