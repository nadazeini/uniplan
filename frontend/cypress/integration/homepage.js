describe("renders the home page", () => {
  it("renders correctly", () => {
    cy.visit("/");
    cy.get("#container").should("exist");
    cy.get("#navbar").should("exist");
  });
  it("allows sign up", () => {
    cy.visit("/");
    cy.get(".signUp").click();
    cy.get("#name").clear();
    cy.get("#name").type("Nada");
    cy.get("#email").clear();
    cy.get("#email").type("nada@sjsu.edu");
    cy.get("#password1").clear();
    cy.get("#password1").type("nada");
    cy.get("#password2").clear();
    cy.get("#password2").type("nada");
    cy.get("button").click();
  });

  it("allows login to be used", () => {
    cy.visit("/");
    cy.get(".logIn").click();
    cy.get("#email").clear();
    cy.get("#email").type("test1@sjsu.edu");
    cy.get("#password").clear();
    cy.get("#password").type("test11");
  });

  it("allows existing user to login", () => {
    cy.visit("/");
    cy.get(".logIn").click();
    cy.get("#email").clear();
    cy.get("#email").type("nada@sjsu.edu");
    cy.get("#password").clear();
    cy.get("#password").type("nada");
    cy.get("button").click();
  });

  it("non-existing user cannot login", () => {
    cy.visit("/");
    cy.get(".logIn").click();
    cy.get("#email").clear();
    cy.get("#email").type("taylor");
    cy.get("#password").clear();
    cy.get("#password").type("taylor");
    cy.get("#email").clear();
    cy.get("#email").type("taylor@sjsu.edu");
    cy.get("button").click();
  });
});
