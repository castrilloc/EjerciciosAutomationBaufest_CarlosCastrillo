///<reference types="Cypress" /> 
require('cypress-xpath')

describe("Web Challenge", () => {
  it("tc01-user_log_in", () => {
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
  .type("validUser")

  // User enters a valid password
  cy.get("#loginpassword")
  .click()
  .should('have.class', 'form-control')
  .should('be.visible')
  .type("validPassword")

  // User visualize the welcome alert
  cy.on('window:alert', (str) => {
  cy.expect(str).to.equal('Welcome validUser')
  })
  cy.log('Welcome').as('log3')

  // User click on Log in
  cy.intercept('POST', 'https://api.demoblaze.com/check').as('Log_in_ok')
  cy.xpath("//button[@type='button'][contains(.,'Log in')]")
  .click()
  .should('have.class', 'btn btn-primary')

  // The CTA button "Sign in" change to "Welcome validUser"
  cy.get("#nameofuser")
  .should('have.class', 'nav-link')
  .should('be.visible')

  })
})