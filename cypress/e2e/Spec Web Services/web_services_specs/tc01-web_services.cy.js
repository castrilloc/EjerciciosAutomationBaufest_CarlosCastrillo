describe("Challenge Web services", () => {
  it('tc01-web_services', () => {
    cy.createPet({
        id: 0,
        category: {
            id: 0,
            name: "string"
        },
        name: "Atlasian",
        photoUrls: [
            "string"
        ],
        tags: [
            {
                id: 0,
                name: "string"
            }
        ],
        status: "available"
    }).then((response) => {
        // Validates that the status code is 200
        expect(response.status).to.eq(200);
    });
    // Validation of the Response Schema
    cy.validationResponseSchema()
  });
});

