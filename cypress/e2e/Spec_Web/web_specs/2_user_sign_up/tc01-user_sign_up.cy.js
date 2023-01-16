///<reference types="Cypress" /> 
require('cypress-xpath')
import { faker } from '@faker-js/faker';
const num = faker.random.numeric(3);
const userName = faker.name.firstName();

describe("Web Challenge", () => {
  it("tc01-user_sign_up", () => {
  cy.userAccess()

  // Visibillity of sign up modal
  cy.get("#signin2").should('be.visible')
  .should("contain.text", "Sign up")
  .click()

  cy.get("#signInModal")
  .should('be.visible')
  .log("♦ The sign up modal it's visible ♦")
  .as("log2")

  // User enters a valid username
  cy.get("#sign-username")
  .click()
  .should('have.class', 'form-control')
  .type(`${userName}${num}`)

  // User enters a valid password
  cy.get("#sign-password")
  .click()
  .should('have.class', 'form-control')
  .type('validPassword')

  // User clicks on Sign Up
  cy.on('window:alert', (str) => {
    if (str === 'Sign up successful.') {
        cy.expect(str).to.equal('Sign up successful.')
        cy.log('Sign up successful.').as('log3')
    } else {
        cy.expect(str).to.equal('This user already exist.')
        cy.log('This user already exist.').as('log3')
        cy.fail('♦ This user already exist. ♦')
    }
  })
  // User click on Sign up
  cy.xpath("//button[@type='button'][contains(.,'Sign up')]")
  .click()
  .should('have.class', 'btn btn-primary')
  })
})