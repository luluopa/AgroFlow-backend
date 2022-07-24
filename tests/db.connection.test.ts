import request from 'supertest'
import app from '../src/index'
import { CHECKDB_URL } from '../src/util/constants/api_routers/basic.api'

describe('GET ' + CHECKDB_URL , () => {
    it('should return 200 OK', () => {
      return request(app).get(CHECKDB_URL).expect(200)
    })
})