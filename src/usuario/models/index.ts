import { Sequelize } from 'sequelize'
import NODE_ENVIROMENT from '../../config/env'
import ENV_DB from '../../config/db.config'

let information = ENV_DB[NODE_ENVIROMENT]

const DB_CONNECT = new Sequelize(
  information['DATABASE_NAME'],
  information['DATABASE_USER'],
  information['DATABASE_PASS'],
  {
    host: information['DB_HOST'],
    dialect: 'postgres',
  }
)

export default DB_CONNECT
