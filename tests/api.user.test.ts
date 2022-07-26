import request from 'supertest'
import app from '../src/index'
import { LIST_USER_URL, USER_CREATE_URL, USER_DEFAULT_URL, USER_DELETE_URL, USER_UPDATE_URL } from '../src/util/constants/api_routers/user.api'

//criar teste para conexao com o banco ok
//criar testes unitarios para a api ok 

describe('GET /user' + USER_DEFAULT_URL, () => {
    it('[Testing user get api] Should return 200 OK', () => {
        return request(app).get('/user' + USER_DEFAULT_URL).then((response) => {
            expect(response.statusCode).toBe(200)
        })
    })
})

describe('GET /user' + LIST_USER_URL, () => {
    it('[Testig user list api] Should return 200 OK', () => {
        return request(app).get('/user' + LIST_USER_URL).expect(200)
    })
}) 

describe('POST /user' + USER_CREATE_URL, () => {
    it('[Testing user create api] Should return 201 OK', () => {
        const user = {
            first_name: 'testew',
            last_name: 'testeNome',
            password: 'testando',
            email: 'teste@gmail.com'
        }

        return request(app).post('/user' + USER_CREATE_URL).send(user).set('Content-Type', 'application/json').set('Accept', 'application/json').then((response) => {
            expect(response.statusCode).toBe(201)
        })
    })
})

describe('UPDATE /user' + USER_UPDATE_URL, () => {
    it('[Testing user update api] Should return 200 OK', () => {
        return request(app).put('/user' + USER_UPDATE_URL).expect(200)
    })
})

describe('DELETE /user' + USER_DELETE_URL, () => {
    it('[Testing user delete api] Should return 200 OK', () => {
        return request(app).delete('/user' + USER_DELETE_URL).expect(200)
    })
})