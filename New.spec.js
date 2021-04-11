/// <reference types="Cypress" />

//git test commnet
    it('First test', () => {
        cy.visit('https://next.privat24.ua/deposit/open')
        cy.get('tbody').find('td').eq(7)
    } )

it.only('Find the side bar', ()=>{
    cy.viewport(1920, 1080)
    cy.visit('https://docs.cypress.io/api/commands/children')
    cy.get('main').find('nav').find('ul').find('li').find('a').eq(1).click()

})