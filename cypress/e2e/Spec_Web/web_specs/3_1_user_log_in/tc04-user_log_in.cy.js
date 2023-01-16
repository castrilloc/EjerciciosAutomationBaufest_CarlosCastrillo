///<reference types="Cypress" /> 
require('cypress-xpath')

describe("Web Challenge", () => {
  it("tc04-user_log_in", () => {
  cy.userAccess()

  // Visibillity of log in modal
  cy.get("#login2").should('be.visible')
  .should("contain.text", "Log in")
  .click()

  cy.get("#logInModal")
  .should('be.visible')
  .log("♦ The Log in modal it's visible ♦")
  .as("log2")

  // User enters a valid username
  cy.get("#loginusername")
  .click()
  .should('have.class', 'form-control')
  .should('be.visible')

  // User enters a valid password
  cy.get("#loginpassword")
  .click()
  .should('have.class', 'form-control')
  .should('be.visible')

  // User visualize the welcome alert
  Cypress.on('uncaught:exception', (err, runnable) => {
    cy.on('window:alert', (str) => {
    cy.expect(str).to.equal('blank fields')
    return false
    })
  })
  cy.log('blank fields').as('log3')

  // User click on Log in
  cy.intercept('POST', 'https://api.demoblaze.com/check').as('Log_in_not_ok')
  cy.xpath("//button[@type='button'][contains(.,'Log in')]")
  .click()
  .should('have.class', 'btn btn-primary')

  })
})