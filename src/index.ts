import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import database from './models'
import basicrouters from './routers/basicRouters'

dotenv.config()

const app: Express = express()
const port = process.env.PORT
const env = process.env.NODE_ENV

app.use('/', basicrouters)

if (env !== 'test') {
  database.sync({ force: true }).then(() => {
    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`)
    })
  })
}

export default app
