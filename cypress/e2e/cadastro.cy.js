/// <reference types="cypress" />

describe('Cadastro de novo usuário', () => {
  before(() => {
    cy.visit('http://automationexercise.com')
  })

  it('Deve realizar cadastro e exclusão de usuário com sucesso', () => {
    // Navega até a página de Login/Signup
    cy.get('a[href="/login"]').click()

    // Verifica que a página de cadastro está visível
    cy.url().should('eq','https://automationexercise.com/login')

    // Preenche nome e email
    cy.get('input[data-qa="signup-name"]').type('Alexandre QA')
    cy.get('input[data-qa="signup-email"]').type('alexandre.qa@teste.com')
    cy.get('button[data-qa="signup-button"]').click()

    // Verifica que a tela de informações da conta está visível
    cy.url().should('eq','https://automationexercise.com/signup')

    // Marca checkboxes
    cy.get("#id_gender1").click();

    // Preenche informações do cadastro
    cy.get("[data-qa='password']").type("password1234");
    cy.get('select[data-qa="days"]').select('1')
    cy.get('select[data-qa="months"]').select('1')    
    cy.get('select[data-qa="years"]').select('1990')

    // Preenche informações obrigatorias
    cy.get("[data-qa='first_name']").type("Ale");
    cy.get("[data-qa='last_name']").type("last test");
    cy.get("[data-qa='address']").type("street 1");
    cy.get("[data-qa='country']").type("United States");
    cy.get("[data-qa='state']").type("CA");
    cy.get("[data-qa='city']").type("L");
    cy.get("[data-qa='city']").type("Los A");
    cy.get("[data-qa='city']").type("Los Angeles");
    cy.get("[data-qa='zipcode']").type("0988789");
    cy.get("[data-qa='mobile_number']").type("22980976");

    // Cria conta
    cy.get('button[data-qa="create-account"]').click()

    // Verifica que a conta foi criada
    cy.url().should('eq','https://automationexercise.com/account_created')
    cy.contains('b', 'Account Created!').should('be.visible')
    cy.get('a[data-qa="continue-button"]').click()

    // Confirma que o usuário está logado
    cy.contains('b', 'Alexandre QA').should('be.visible')

    // Deleta conta
    cy.get('a[href="/delete_account"]').click()
    cy.url().should('eq','https://automationexercise.com/delete_account')
    cy.contains('b', 'Account Deleted!').should('be.visible')
    cy.get('[data-qa="continue-button"]').click()
  })
})
