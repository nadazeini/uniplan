describe("renders the search page", () => {
  it("renders correctly", () => {
    cy.visit("/search-teachers");
    cy.get("#searchpage").should("exist");
    cy.get("#search").should("exist");
  });
});

describe("can search teacher", () => {
  it("allows to type and search", () => {
    cy.visit("/search-teachers");
    cy.get("input").clear();
    cy.get("input").type("teacher1");
    cy.get("button").click();
  });

  it("displays results", () => {
    cy.get("#results").should("exist");
    cy.get("input").click();
    cy.get(".search").click();
  });
});
