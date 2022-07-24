import request from 'supertest'
import app from '../src/index'
import { USER_CREATE_URL } from '../src/util/constants/api_routers/user.api'

//criar teste para conexao com o banco
//criar testes unitarios para a api
//testes de integração

//testar o criar
//testar o deletar
//testar o update
//testar o get para usuario unico e lista de usuarios

describe('POST ' + USER_CREATE_URL, () => {
    it('[Testing user create api] Should return 201 OK', () => {
        const user = {
            first_name: 'teste',
            last_name: 'testeNome',
            password: 'testando',
            email: 'teste@gmail.com'
        }

        return request(app).post(USER_CREATE_URL).set(user).then((response) => {
            expect(response.statusCode).toBe(201)
        })
    })
})
