/// <reference types="cypress" />

describe('Login', () => {
  
  beforeEach(() => {
    cy.visit('http://automationexercise.com');
  });
  it('Login com sucesso', () => {
    cy.login('ale@test.com', 'testale'); // reliza login com sucesso

  });
});