import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro de novo usuário', () => {
  context('Cenário: Cadastro com sucesso', () => {
    it('Deve realizar o cadastro com sucesso e redirecionar para o dashboard', () => {

      // Intercepta as requisições relevantes da tela
      cy.intercept('POST', '**/usuarios').as('postCadastro');
      cy.intercept('POST', '**/login').as('postLogin');
      cy.intercept('GET', '**/usuarios').as('getUsuarios');
      cy.intercept('GET', '**/produtos').as('getProdutos');

      // Acessa a tela inicial, valida exibição do botão e clica para acessar tela de cadastro
      cy.visit('/');
      cy.get('[data-testid="cadastrar"]')
        .should('be.visible')
        .and('have.text', 'Cadastre-se')
        .click();

      // Validação na tela de cadastro
      cy.url().should('include', '/cadastrarusuarios');
      cy.get('h2').should('contain', 'Cadastro');

      // Preenche e envia o formulário de cadastro do novo usuário
      const usuario = {
        nome: faker.person.firstName(),
        email: faker.internet.email(),
        senha: faker.internet.password(),
      };
      cy.cadastrarUsuario(usuario.nome, usuario.email, usuario.senha);

      // Aguarda a requisição de confirmação de cadastro com status 201
      cy.wait('@postCadastro').its('response.statusCode').should('eq', 201);

      // Valida mensagem de cadastro realizado com sucesso
      cy.contains('Cadastro realizado com sucesso').should('be.visible');

      // Aguarda as requisições da tela antes de prosseguir
      cy.wait('@postLogin').its('response.statusCode').should('eq', 200);
      cy.wait('@getUsuarios').its('response.statusCode').should('eq', 200);
      cy.wait('@getProdutos').its('response.statusCode').should('eq', 200);

      // Verifica dados no localStorage
      cy.window().then((win) => {
        const token = win.localStorage.getItem('serverest/userToken');
        expect(token).to.contain('Bearer');
      });

      // Verifica se a página carregou corretamente
      cy.url().should('include', '/home');
      cy.get('h1').should('contain', 'Serverest Store');
      cy.get('[data-testid="logout"]').should('be.visible');

      // Desloga do sistema e valida tela de redirecionamento
      cy.logout();
      cy.url().should('include', '/login');
      cy.get('h1').should('contain', 'Login');
    });
  });
});

describe('Funcionalidade: Login', () => {

  // Gancho executado para cada caso de teste
  beforeEach(() => {
    // Acessa a tela de login
    cy.visit('/login');
  });

  context('Cenário: Login com dados inexistentes', () => {
    it('Deve exibir mensagem de erro ao inserir email e senha inexistentes', () => {

      // Acessa comando personalizado para realizar o login com dados inexistentes
      const usuario = {
        nome: faker.person.firstName(),
        email: faker.internet.email(),
        senha: faker.internet.password(),
      };
      cy.login(usuario.email, usuario.senha);

      // Valida mensagem de erro exibida na tela
      cy.get('.alert.alert-secondary.alert-dismissible span')
        .eq(1)
        .should('have.text', 'Email e/ou senha inválidos');
    })
  })

  context('Cenário: Login com sucesso', () => {
    it('Deve acessar o sistema e visualizar o dashboard', () => {

        // Cria payload de usuário
        let user = {
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
        });
  
      // Intercepta as requisições relevantes da tela
      cy.intercept('POST', '**/login').as('postLogin');
      cy.intercept('GET', '**/usuarios').as('getUser');

      // Acessa comando personalizado para realizar o login com dados existentes recém-cadastrados
      cy.login(user.email, user.password);

      // Aguarda e valida o status das chamadas
      cy.wait('@postLogin').its('response.statusCode').should('eq', 200);
      cy.wait('@getUser').its('response.statusCode').should('eq', 200);

      // Valida URL da página logada
      cy.url().should('include', '/home');

      // Valida elementos exclusivos da tela logada
      cy.get('h1').should('contain', 'Serverest Store');
      cy.get('[data-testid="logout"]').should('be.visible');

      // Desloga do sistema e valida tela de redirecionamento
      cy.logout();
      cy.url().should('include', '/login');
      cy.get('h1').should('contain', 'Login');
    });
  })
})
