/// <reference types="cypress" />

describe('Login', () => {
  
  beforeEach(() => {
    cy.visit('http://automationexercise.com');
  });
  it('Login com sucesso', () => {
    cy.login('ale@test.com', 'testale'); // reliza login com sucesso
  });

  it('Login com email e senha incorreto', () => {
    // Navega até a página de Login/Signup
    cy.get('a[href="/login"]').click()

    // Verifica que a página de cadastro está visível
    cy.url().should('eq','https://automationexercise.com/login')
    cy.contains('h2', 'Login to your account').should('be.visible'); // Adicionando uma verificação de texto

    // Preenche os campos de login
    cy.get('input[data-qa="login-email"]').type('incorreto@test')
    cy.get('input[data-qa="login-password"]').type('incorreto@password')
    cy.get('button[data-qa="login-button"]').click()

    // Verifica a mensagem de erro
    cy.contains('Your email or password is incorrect!').should('be.visible')
  });

  it('Realizar login e fazer logoff', () => {
    cy.login('ale@test.com', 'testale'); // reliza login com sucesso

    cy.contains('b', 'ale test').should('be.visible'); // Verifica o nome de usuário logado

    cy.get('a[href="/logout"]').click(); // Clica no botão de logout

    cy.url().should('eq', 'https://automationexercise.com/login');
  })

  it('Tentar registrar um email existente', () => {
    cy.get('a[href="/login"]').click()

    // Verifica que a página de cadastro está visível
    cy.url().should('eq','https://automationexercise.com/login')

    // Adicionando uma verificação de texto
    cy.contains('h2', 'Login to your account').should('be.visible'); 

    // Preenche os campos de login
    cy.fillSignupForm('test ale', 'ale@test.com')

    // Verifica a mensagem de erro
    cy.contains('Email Address already exist!').should('be.visible')

  })
});