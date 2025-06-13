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

Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://www.saucedemo.com/')
    // Navega até a página de Login/Signup
    cy.get('a[href="/login"]').click()

    // Verifica que a página de cadastro está visível
    cy.url().should('eq','https://automationexercise.com/login')

    // Preenche os campos de login
    cy.get('input[data-qa="login-email"]').type(username)
    cy.get('input[data-qa="login-password"]').type(password)

    cy.get('button[data-qa="login-button"]').click()
})