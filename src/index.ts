import express, { Express } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import database from './models'
import basicrouters from './routers/basicRouters'
import userRouter from './routers/userRouters'

dotenv.config()

const app: Express = express()
const port = process.env.PORT
const env = process.env.NODE_ENV

// create application/json parser
const jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: true })

// setting up the cors middldeware
app.use(cors());

app.use(jsonParser)
app.use(urlencodedParser)

app.use('/', basicrouters)
app.use('/user', userRouter)

if (env !== 'test') {
  database.sync().then(() => {
    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`)
    })
  })
}

export default app
