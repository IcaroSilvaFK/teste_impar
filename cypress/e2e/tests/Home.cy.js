/// <reference types="cypress" />

describe('Home page', () => {
  beforeEach(() => cy.visit('/'));
  it('should check if they are on the screen', () => {
    cy.get('[data-cy=button]').should('exist');
    cy.get('[data-cy=card]').should('exist');
  });
  it('should pops up a car when filtering', () => {
    cy.get('[data-cy=input-search]').type('Curso de react');
    cy.get('[data-cy=card]').should('exist');
  });
  it('should not appear a car when filter', () => {
    cy.get('[data-cy=input-search]').type('abobrinha');
    cy.get('[data-cy=card]').should('not.exist');
  });
  it('should the edit modal is not appearing on the screen', () => {
    cy.get('[data-cy=card-edit]').should('not.exist');
  });
  it('should the edit modal is appearing on the screen', () => {
    cy.get('[data-cy=button]').click();
    cy.get('[data-cy=card-edit]').should('exist');
  });
  it('should write in the input of creating card', () => {
    cy.get('[data-cy=button]').click();
    cy.get('[data-cy=card-edit]').should('exist');
    cy.get('[data-cy=create-cardinputText]').type('Hello world');
  });
  it('should create a card', () => {
    cy.request('POST', 'http://localhost:8080/cards', {
      id: '4ca5029f-9273-447c-96df-129490547cc4',
      title: 'Test cypress',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgfp-2a3tnpzj.stackpathdns.com%2Fwp-content%2Fuploads%2F2018%2F06%2Fdog-breeds-of-famous-dogs-1600x1065.jpg&f=1&nofb=1',
    });
  });

  it('should check if the card was created', () => {
    cy.findAllByText('Test cypress').should('exist');
  });
  it('should delete a card', () => {
    cy.get('[data-cy=card]')
      .find(':last-child')
      .get('[data-cy=button-delete]')
      .last()
      .click();
    cy.get('[data-cy=delete-modal]').should('exist');
    cy.findAllByText('Excluir').last().click();
  });
});
