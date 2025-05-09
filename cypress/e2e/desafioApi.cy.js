/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidade: API de Usuários', () => {
    let usuarioId;
    const user = {
        nome: faker.person.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        administrador: faker.datatype.boolean().toString()
    };

    context('Quando o usuário é cadastrado com sucesso', () => {
        it.only('Deve retornar status 201 e o ID do usuário', () => {
            cy.log(JSON.stringify(user, null, 2));

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
                cy.log(usuarioId)
            });
        });
    });

    context('Quando o usuário realiza login', () => {
        it('Deve retornar status 200 e um token de autenticação', () => {
            cy.request({
                method: 'POST',
                url: '/login',
                body: {
                    email: user.email,
                    senha: user.senha
                }
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('token');
            });
        });
    });

    context('Quando o usuário é buscado pelo ID', () => {
        it.only('Deve retornar status 200 e os dados corretos do usuário', () => {
            cy.request({
                method: 'GET',
                url: `${Cypress.env('apiBaseUrl')}/usuarios/${usuarioId}`
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
                url: `/usuarios/${usuarioId}`
            }).then((response) => {
                expect(response.status).to.eq(200);
            });
        });
    });
});
