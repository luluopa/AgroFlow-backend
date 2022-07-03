import { Optional } from 'sequelize/types'

export type UserAttributes = {
  id: number
  first_name: string
  last_name: string
  password: string
  email: string
  username: string
  is_deleted: boolean
  created_at: Date
  updated_at: Date
  deleted_at: Date
}

export type UserCreationAttributes = Optional<UserAttributes, 'id'>
