/// <reference types="cypress" />

describe('Home Page', () => {
  beforeEach(() => {
    // 1. Launch browser e 2. Navigate to url
    cy.visit('http://automationexercise.com')
  })

  it('Test Case 6 - Contact Us Form', () => {
    // 3. Verify that home page is visible successfully
    cy.get('body').should('be.visible')
    cy.url().should('include', 'automationexercise.com')
    
    // Verificação adicional da página inicial
    cy.get('.navbar-nav').should('be.visible')

    // 4. Click on 'Contact Us' button
    cy.contains('Contact us').click()

    // 5. Verify 'GET IN TOUCH' is visible
    cy.contains('h2', 'Get In Touch').should('be.visible')
    
    // Verificação adicional do formulário de contato
    cy.get('.contact-form').should('be.visible')

    // 6. Enter name, email, subject and message
    cy.get('input[name="name"]').type('João Silva')
    cy.get('input[name="email"]').type('joao.silva@exemplo.com')
    cy.get('input[name="subject"]').type('Teste de Automação')
    cy.get('textarea[name="message"]').type('Esta é uma mensagem de teste para verificar o funcionamento do formulário de contato.')

    // 7. Upload file
    cy.get('input[name="upload_file"]').attachFile('example.txt')

    // 8. Click 'Submit' button
    cy.get('input[name="submit"]').click()

    // 9. Click OK button (confirmação do alert)
    cy.on('window:confirm', () => true)

    // 10. Verify success message 'Success! Your details have been submitted successfully.' is visible
    cy.contains('Success! Your details have been submitted successfully.').should('be.visible')

    // 11. Click 'Home' button and verify that landed to home page successfully
    cy.get('a[href="/"]').first().click()
    
    // Verificação adicional de que voltou para a página inicial
    cy.url().should('eq','https://automationexercise.com/')
  })

  it('Test Case 7 - Verify Test Cases Page', () => {

    // 1. Verify that home page is visible successfully
    cy.url().should('eq','https://automationexercise.com/')

    // 2. Click on 'Test Cases' button
    cy.contains('Test Cases').click()

    // 3. Verify user is navigated to test cases page successfully
    cy.url().should('eq','https://automationexercise.com/test_cases')
    cy.contains('b', 'Test Cases').should('be.visible')
  })
})

