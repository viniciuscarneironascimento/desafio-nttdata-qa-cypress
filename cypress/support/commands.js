// Comando personalizado para efetuar o login
Cypress.Commands.add('login', (email, senha) => {
  cy.get('[data-testid="email"]').type(email);
  cy.get('[data-testid="senha"]').type(senha, { log: false });
  cy.get('[data-testid="entrar"]').click();
})

// Comando personalizado para realizar cadastro de novo usuario
Cypress.Commands.add('cadastrarUsuario', (nome, email, senha) => {
  cy.get('[data-testid="nome"]').type(nome);
  cy.get('[data-testid="email"]').type(email);
  cy.get('[data-testid="password"]').type(senha, { log: false });
  cy.get('[data-testid="cadastrar"]').click();
})

// Comando personalizado para realizar logout
Cypress.Commands.add('logout', () => {
  cy.get('[data-testid="logout"]').click();
})

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })