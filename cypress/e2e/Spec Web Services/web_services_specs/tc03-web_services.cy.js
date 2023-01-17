describe("Challenge Web services", () => {
  it('tc03-web_services', () => {
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
      })
      .as("send_ok");

    // Validation of the Response Schema
    cy.validationResponseSchema()
  });
});
