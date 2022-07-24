import request from 'supertest'
import app from '../src/index'
import { USER_CREATE_URL, USER_DEFAULT_URL } from '../src/util/constants/api_routers/user.api'

//criar teste para conexao com o banco ok
//criar testes unitarios para a api ...

//testar o criar ok
//testar o deletar
//testar o update
//testar o get para usuario unico e lista de usuarios

describe('GET /user' + USER_DEFAULT_URL, () => {
    it('[Testing user get api] Should return 200 Ok', () => {
        return request(app).get(USER_DEFAULT_URL).then((response) => {
            expect(response.statusCode).toBe(200)
        })
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

        return request(app).post('/user/' + USER_CREATE_URL).send(user).set('Content-Type', 'application/json').set('Accept', 'application/json').then((response) => {
            expect(response.statusCode).toBe(201)
        })
    })
})

//o teste precisa deleter o mesmo usuario que criou no banco