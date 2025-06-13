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

// cypress/support/commands.js

Cypress.Commands.add('fillSignupForm', (name, email) => {
  cy.get('input[data-qa="signup-name"]').type(name);
  cy.get('input[data-qa="signup-email"]').type(email);
  cy.get('button[data-qa="signup-button"]').click();
});

Cypress.Commands.add('fillAccountInformationForm', (password, day, month, year, firstName, lastName, address, country, state, city, zipcode, mobileNumber) => {
  cy.get("#id_gender1").click(); // Seleciona o gênero (assumindo masculino pelo id)
  cy.get("[data-qa='password']").type(password);
  cy.get('select[data-qa="days"]').select(day);
  cy.get('select[data-qa="months"]').select(month);
  cy.get('select[data-qa="years"]').select(year);
  cy.get("[data-qa='first_name']").type(firstName);
  cy.get("[data-qa='last_name']").type(lastName);
  cy.get("[data-qa='address']").type(address);
  cy.get("[data-qa='country']").select(country); // Usando select para país, pois é um dropdown
  cy.get("[data-qa='state']").type(state);
  cy.get("[data-qa='city']").type(city);
  cy.get("[data-qa='zipcode']").type(zipcode);
  cy.get("[data-qa='mobile_number']").type(mobileNumber);
  // Checkboxes de newsletter e ofertas podem ser adicionados aqui se necessário
});

