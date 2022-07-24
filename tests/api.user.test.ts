import request from 'supertest'
import app from '../src/index'

//criar teste para conexao com o banco
//criar testes unitarios para a api
//testes de integração

//testar o criar
//testar o deletar
//testar o update
//testar o get para usuario unico e lista de usuarios

describe('POST /user/create [Testing user create api]', () => {
    it('Should return 201 OK', () => {
        const user = {
            first_name: 'teste',
            last_name: 'testeNome',
            password: 'testando',
            email: 'teste@gmail.com'
        }

        return request(app).post('/user/create').set({
            first_name: 'teste',
            last_name: 'testeNome',
            password: 'testando',
            email: 'teste@gmail.com'
        }).then((response) => {
            expect(response.statusCode).toBe(201)
        })
    })
})
