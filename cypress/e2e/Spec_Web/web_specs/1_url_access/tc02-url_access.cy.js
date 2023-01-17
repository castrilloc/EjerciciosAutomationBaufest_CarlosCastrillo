describe("Web Challenge", () => {
  it("tc02-url_access", () => {
      cy.clearLocalStorage()
      cy.clearCookies()
      cy.viewport("macbook-16")
      cy.request({
          method: "GET",
          url: "https://www.demoblaze.com/invalidpage",
          failOnStatusCode: false
      }).then((response) => {
          expect(response.status).to.eq(404)
          cy.log("The URL is invalid").as("log1")
      })
  });
});
