///<reference types="Cypress" /> 
require('cypress-xpath')

describe("Web Challenge", () => {

  it("tc01-validation_of_products_added_to_the_cart", () => {
    //Previous interactions of the user
    cy.login()
    cy.wait(2000)
    cy.productAdded()
    cy.wait(2000)
    
    //Principal interactions of the user
    cy.intercept("POST", "https://api.demoblaze.com/viewcart")
    .as("viewCart")
    cy.get("#cartur")
    .should("be.visible")
    .should("have.text", "Cart")
    .click()
    cy.get("h2")
    .should("be.visible")
    .should("contain.text", "Products")

    //Validation of the quantity of added products.
    cy.intercept("Post", "https://api.demoblaze.com/view").as("productsQuantity")
// cy.xpath("(//td[contains(.,'Sony vaio i5')])").each(($el, index, $list) => {
// cy.log($el.text())
// })
  })
})
