///<reference types="Cypress" /> 
require('cypress-xpath')

describe("Web Challenge", () => {
    it("tc01-user_log_out", () => {
        cy.login()
        cy.intercept('GET', 'https://api.demoblaze.com/entries').as('Log_out_ok')
        cy.get("#logout2").click()
  })
})