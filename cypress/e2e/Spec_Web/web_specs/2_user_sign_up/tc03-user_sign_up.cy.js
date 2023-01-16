///<reference types="Cypress" /> 
require('cypress-xpath')

describe("Web Challenge", () => {
  it("tc03-user_sign_up", () => {
    cy.userAccess()

  // Visibillity of sign up modal
  cy.get("#signin2").should('be.visible')
  .should("contain.text", "Sign up")
  .click()

  cy.get("#signInModal")
  .should('be.visible')
  .log("♦ The sign up modal it's visible ♦")
  .as("log2")

  // User enters a valid username that already exist
  cy.get("#sign-username")
  .click()
  .should('have.class', 'form-control')
  .type("validUser")

  // User enters a valid password
  cy.get("#sign-password")
  .click()
  .should('have.class', 'form-control')
  .type('validPassword')

  // User visualize the user already exist alert
  cy.on('window:alert', (str) => {
  cy.expect(str).to.equal('This user already exist.')
  })
  cy.log('This user already exist.').as('log3')

  // User click on Sign up
  cy.xpath("//button[@type='button'][contains(.,'Sign up')]")
  .click()
  .should('have.class', 'btn btn-primary')
  })
})