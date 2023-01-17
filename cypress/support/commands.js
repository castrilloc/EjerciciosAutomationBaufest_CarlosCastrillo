// User access
Cypress	.Commands.add('userAccess', () => {
  cy.clearLocalStorage()
  cy.clearCookies()
  cy.viewport("macbook-16")
  cy.visit("https://www.demoblaze.com/index.html").as('URL')
  cy.url().should('eq', 'https://www.demoblaze.com/index.html')
  cy.title().should('eq', 'STORE')
  cy.log("♦ Successful access ♦").as("log1")
})

// User valid loging
Cypress.Commands.add('login', () => {
    cy.clearLocalStorage()
    cy.clearCookies()
    cy.viewport("macbook-16")
    cy.visit("https://www.demoblaze.com/index.html").as('URL')
    cy.url().should('eq', 'https://www.demoblaze.com/index.html')
    cy.title().should('eq', 'STORE')
    cy.log("♦ Successful access ♦").as("log1")

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
  cy.expect(str).to.equal('Welcome validUser.')
  })
  cy.log('Welcome').as('log3')

  // User click on Log in
  cy.intercept('POST', 'https://api.demoblaze.com/check').as('Log_in_ok')
  cy.xpath("//button[@type='button'][contains(.,'Log in')]")
  .click()
  .should('have.class', 'btn btn-primary')

  // The CTA button "Sign in" change to "Welcome validUser"
  Cypress.on('uncaught:exception', (err, runnable) => {
  cy.get("#nameofuser")
  .should('have.class', 'nav-link')
  .should('be.visible')
  return false
})
})

// Adding products to the cart
Cypress.Commands.add('productAdded', () => {
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

  //Validation of product added
  cy.intercept('POST', 'https://api.demoblaze.com/addtocart')
  .as('addToCart')
  });

  
//♦♦♦PETS♦♦♦
  // Getting the pet
  Cypress.Commands.add("getPet", (petId) => {
    return cy.request({
      method: 'GET',
      url: `https://petstore.swagger.io/v2/pet/${petId}`,
    });
  });

  //Data pet creation
  Cypress.Commands.add("createPet", (petData) => {
    return cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/pet',
      body: petData
    });
  });

  //validation of Response Schema
  import chai from 'chai';
  import chaiJsonSchema from 'chai-json-schema';
  import responseSchema from '../e2e/Response-schema/response-schema.json';
  Cypress.Commands.add("validationResponseSchema", () => {
    chai.use(chaiJsonSchema);

    const body = {
      "id": 0,
      "category": {
      "id": 0,
      "name": "string"
      },
      "name": "Atlasian",
      "photoUrls": [
      "string"
      ],
      "tags": [
      {
      "id": 0,
      "name": "string"
      }
      ],
      "status": "available"
      }
      cy.log('Sending request with body:', body);
      cy.request({
        method: 'PUT',
        url: 'https://petstore.swagger.io/v2/pet',
        body: body
      }).then((response) => {
        cy.log('Response received with status:', response.status);
        cy.log('Response received with body:', response.body);
        expect(response.status).to.eq(200);
        chai.expect(response.body).to.be.jsonSchema(responseSchema);
        }).as("response_schema_OK");
  });