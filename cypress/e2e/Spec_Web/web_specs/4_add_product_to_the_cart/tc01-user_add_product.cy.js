///<reference types="Cypress" /> 
require('cypress-xpath')

describe("Web Challenge", () => {
  beforeEach(() => {
      cy.login()
      cy.wait(2000)
      cy.intercept('POST', 'https://api.demoblaze.com/addtocart')
      .as('addToCart')
  })

  it("tc01-user_add_product", () => {
    //Principal interaction of the user
      cy.get(`[onclick="byCat('notebook')"]`)
      .click()
      cy.xpath("//a[contains(.,'Sony vaio i5')]")
      .click()
      cy.get("h2")
      .should("have.text", "Sony vaio i5")
      cy.get("#tbodyid > div.row > div > a")
      .click()

    //Click OK on the alert
      cy.on('window:alert', (str) => {
        cy.expect(str).to.equal('Product added.')
        })
        cy.log('Product_added').as('Product_added')
  })
})
