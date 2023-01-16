///<reference types="Cypress" /> 
require('cypress-xpath')

describe("Web Challenge", () => {
  it("tc02-user_sign_up", () => {
  cy.userAccess()

  // Visibillity of sign up modal
  cy.get("#signin2").should('be.visible')
  .should("contain.text", "Sign up")
  .click()

  cy.get("#signInModal")
  .should('be.visible')
  .log("♦ The sign up modal it's visible ♦")
  .as("log2")

  // User leave the input username in blank
  cy.get("#sign-username")
  .click()
  .should('have.class', 'form-control')

  // User leave the input username in blank
  cy.get("#sign-password")
  .click()
  .should('have.class', 'form-control')

  // User visualize the blank fields alert
  Cypress.on('uncaught:exception', (err, runnable) => {
    cy.on('window:alert', (str) => {
    cy.expect(str).to.equal('Please fill out Username and Password.')
    return false
    })
  })
  cy.log('blank fields').as('log3')

  // User click on Sign up
  cy.xpath("//button[@type='button'][contains(.,'Sign up')]")
  .click()
  .should('have.class', 'btn btn-primary')
  })
})