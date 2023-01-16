///<reference types="Cypress" /> 

describe("Web Challenge", () => {

    it("tc02-url_access", () => {
        cy.clearLocalStorage()
        cy.clearCookies()
        cy.viewport("macbook-16")
        cy.visit("https://www.demoblaze.com/invalidpage").as('URL')
        cy.url().should('eq', 'https://www.demoblaze.com/invalidpage')
        cy.title().should('eq', 'STORE')
        cy.log("♦ Successful access ♦").as("log1")
    })
})