import request from 'supertest'
import app from '../src/index'

describe('GET /db/', () => {
    it('should return 200 OK', () => {
      return request(app).get('/db/').expect(200)
    })
})