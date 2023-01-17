describe("Challenge Web services", () => {
    it('tc02-web_services', () => {
      const petId = 1;
      cy.getPet(petId).then((response) => {
        // Validation of the status code = 200
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('name');
        expect(response.body.name).to.be.a('string');
      });
    // Validation of the Response Schema
    cy.validationResponseSchema()
    });
  });
  