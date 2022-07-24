import request from 'supertest'
import app from '../src/index'
import { INDEX_URL } from '../src/util/constants/api_routers/basic.api'

describe('GET' + INDEX_URL, () => {
  it('should return 200 OK', () => {
    return request(app).get(INDEX_URL).expect(200)
  })
})
