describe("renders the home page", () => {
  it("renders correctly", () => {
    cy.visit("/");
    cy.get("#container").should("exist");
    cy.get("#navbar").should("exist");
  });
});
