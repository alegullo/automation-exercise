/// <reference types="cypress" />

describe('Cadastro de novo usuário', () => {
  // Define dados do usuário em variáveis para fácil modificação
  const userName = 'Alexandre QA';
  const userEmail = `alexandre.qa+${Date.now()}@teste.com`; // Usa timestamp para email único
  const userPassword = 'password1234';
  const userDay = '1';
  const userMonth = '1';
  const userYear = '1990';
  const userFirstName = 'Ale';
  const userLastName = 'last test';
  const userAddress = 'street 1';
  const userCountry = 'United States'; // Valor que corresponde a uma opção no select
  const userState = 'CA';
  const userCity = 'Los Angeles';
  const userZipcode = '0988789';
  const userMobileNumber = '22980976';


  before(() => {
    cy.visit('http://automationexercise.com');
  });

  it('Deve realizar cadastro e exclusão de usuário com sucesso', () => {
    // Navega até a página de Login/Signup
    cy.get('a[href="/login"]').click();

    // Verifica que a página de cadastro está visível
    cy.url().should('eq','https://automationexercise.com/login');
    cy.contains('h2', 'New User Signup!').should('be.visible'); // Adicionando uma verificação de texto

    // Preenche nome e email usando comando customizado
    cy.fillSignupForm(userName, userEmail);

    // Verifica que a tela de informações da conta está visível
    cy.url().should('eq','https://automationexercise.com/signup');
    cy.contains('b', 'Enter Account Information').should('be.visible'); // Adicionando uma verificação de texto

    // Preenche informações do cadastro usando comando customizado
    cy.fillAccountInformationForm(
      userPassword,
      userDay,
      userMonth,
      userYear,
      userFirstName,
      userLastName,
      userAddress,
      userCountry,
      userState,
      userCity,
      userZipcode,
      userMobileNumber
    );

    // Cria conta
    cy.get('button[data-qa="create-account"]').click();

    // Verifica que a conta foi criada
    cy.url().should('eq','https://automationexercise.com/account_created');
    cy.contains('b', 'Account Created!').should('be.visible');
    cy.get('a[data-qa="continue-button"]').click();

    // Confirma que o usuário está logado
    // Pode ser necessário adicionar uma espera ou verificação mais robusta aqui
    // dependendo de como a página carrega após o clique no continue
    cy.url().should('eq', 'https://automationexercise.com/'); // Verifica se voltou para a home
    cy.contains('b', userName).should('be.visible'); // Verifica o nome de usuário logado

    // Deleta conta
    cy.get('a[href="/delete_account"]').click();
    cy.url().should('eq','https://automationexercise.com/delete_account');
    cy.contains('b', 'Account Deleted!').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();

    // Opcional: Verificar se voltou para a home após deletar a conta
    cy.url().should('eq', 'https://automationexercise.com/');
  });
});
