/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidade: API de Usuários', () => {

    let user;

    beforeEach(() => {
        // Cria payload de usuário
        user = {
            nome: faker.person.firstName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            administrador: faker.datatype.boolean().toString()
        };

        // Cadastra um novo usuário
        cy.request({
            method: 'POST',
            url: `${Cypress.env('apiBaseUrl')}/usuarios`,
            body: user,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eql(201);
            expect(response.body.message).to.eql("Cadastro realizado com sucesso");
            user.id = response.body._id; // salva ID para uso posterior, se necessário
        });
    });

    context('Quando o usuário realiza login', () => {
        it('Deve retornar status 200 e um token de autenticação', () => {
            cy.request({
                method: 'POST',
                url: `${Cypress.env('apiBaseUrl')}/login`,
                body: {
                    email: user.email,
                    password: user.password
                },
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.message).to.eq("Login realizado com sucesso");
                expect(response.body.authorization).to.not.be.empty;
            });
        });
    });

    context('Quando o usuário é cadastrado com sucesso', () => {
        it('Deve retornar status 201 e o ID do usuário', () => {

            // Payload de usuário
            let usuario = {
                nome: faker.person.firstName(),
                email: faker.internet.email(),
                password: faker.internet.password(),
                administrador: faker.datatype.boolean().toString()
            };

            // Requisição do tipo POST para realizar cadastro e validar response body
            cy.request({
                method: 'POST',
                url: `${Cypress.env('apiBaseUrl')}/usuarios`,
                body: usuario,
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eql(201);
                expect(response.body.message).to.eql("Cadastro realizado com sucesso");
                expect(response.body._id).to.not.empty;
            });
        });
    });

    context('Quando o usuário é buscado pelo ID', () => {
        it('Deve retornar status 200 e os dados corretos do usuário', () => {
            cy.request({
                method: 'GET',
                url: `${Cypress.env('apiBaseUrl')}/usuarios/${user.id}`,
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eql(200);
                expect(response.body.nome).to.eql(user.nome);
                expect(response.body.email).to.eql(user.email);
                expect(response.body.password).to.eql(user.password);
                expect(response.body.administrador).to.eql(user.administrador);
                expect(response.body._id).to.eql(user.id);
            });
        });
    });

    context('Quando o usuário é excluído pelo ID', () => {
        it('Deve retornar status 200 confirmando a exclusão', () => {
            cy.request({
                method: 'DELETE',
                url: `${Cypress.env('apiBaseUrl')}/usuarios/${user.id}`,
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.message).to.eq("Registro excluído com sucesso");
            });
        });
    });
});
