/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidade: API de Usuários', () => {

    // Decalaração de variáveis usadas nos testes
    let usuarioId;
    const user = {
        nome: faker.person.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        administrador: faker.datatype.boolean().toString()
    };

    context('Quando o usuário é cadastrado com sucesso', () => {
        it('Deve retornar status 201 e o ID do usuário', () => {
            // Log para verificar dados do usuário antes do teste
            cy.log(JSON.stringify(user, null, 2));

            // Requisição do tipo POST para realizar cadastro e validar response body
            cy.request({
                method: 'POST',
                url: `${Cypress.env('apiBaseUrl')}/usuarios`,
                body: user,
                failOnStatusCode: false
            }).then((response) => {
                cy.log(response.body);
                expect(response.status).to.eql(201);
                expect(response.body.message).to.eql("Cadastro realizado com sucesso");
                expect(response.body._id).to.not.empty;
                expect(response.body).to.have.property('_id');
                usuarioId = response.body._id;
                cy.log(usuarioId);
            });
        });
    });

    context('Quando o usuário realiza login', () => {
        it('Deve retornar status 200 e um token de autenticação', () => {
            cy.request({
                method: 'POST',
                url: `${Cypress.env('apiBaseUrl')}/login`,
                body: {
                    email: Cypress.env('userEmail'),
                    password: Cypress.env('userSenha')
                },
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.message).to.eq("Login realizado com sucesso");
                expect(response.body.authorization).to.not.empty;
            });
        });
    });

    context('Quando o usuário é buscado pelo ID', () => {
        it('Deve retornar status 200 e os dados corretos do usuário', () => {
            cy.request({
                method: 'GET',
                url: `${Cypress.env('apiBaseUrl')}/usuarios/${usuarioId}`,
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eql(200);
                expect(response.body.nome).to.eql(user.nome);
                expect(response.body.email).to.eql(user.email);
                expect(response.body.password).to.eql(user.password);
                expect(response.body.administrador).to.eql(user.administrador);
                expect(response.body._id).to.eql(usuarioId);
            });
        });
    });

    context('Quando o usuário é excluído pelo ID', () => {
        it('Deve retornar status 200 confirmando a exclusão', () => {
            cy.request({
                method: 'DELETE',
                url: `${Cypress.env('apiBaseUrl')}/usuarios/${usuarioId}`,
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.message).to.eq("Registro excluído com sucesso");
            });
        });
    });
});
