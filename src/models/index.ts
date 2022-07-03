import { Sequelize } from 'sequelize-typescript'
import NODE_ENVIROMENT from '../config/env'
import ENV_DB from '../config/db.config'
import { User } from './user'

const DB_DATA = ENV_DB[NODE_ENVIROMENT]

const database: Sequelize = new Sequelize(
  DB_DATA['DATABASE_NAME'],
  DB_DATA['DATABASE_USER'],
  DB_DATA['DATABASE_PASS'],
  {
    host: DB_DATA['DB_HOST'],
    dialect: 'postgres',
    models: [User]
  }
)

export default database