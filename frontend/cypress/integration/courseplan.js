describe("test the transcripts page", () => {
  it("renders correctly", () => {
    cy.visit("/transcript");
    cy.get("#semester-form").should("exist");
    cy.get("#term-input").should("exist");
    cy.get("#year-input").should("exist");
    cy.get("#add-semester-button").should("exist");
  });

  it("can add a semester correctly", () => {
    cy.visit("/transcript");
    cy.get("body").click();
    cy.get("#term-input").click();
    cy.get('[data-value="Winter"]').click();
    cy.get("body").click();
    cy.get("#year-input").click();
    cy.get('[data-value="2024"]').click();
    cy.get("#add-semester-button").click();
    cy.get(".MuiButton-label > .MuiSvgIcon-root").click();
  });

  it("can delete semester correctly", () => {
    cy.visit("/transcript");
    cy.get(
      ':nth-child(3) > .icons > [style="cursor: pointer; color: red;"] > path'
    ).click();
  });

  it("can add course under semester", () => {
    cy.visit("/transcript");
    cy.get(
      ':nth-child(2) > [style="float: right; margin-top: -25px;"] > [style="cursor: pointer; color: rgb(53, 116, 195); margin-right: 10px;"]'
    ).click();
    cy.get("#standard-basic").clear();
    cy.get("#standard-basic").type("cs146{enter}");
  });

  it("can add delete a  under a semester", () => {
    cy.visit("/transcript");
    cy.get(
      ':nth-child(3) > .icons > [style="cursor: pointer; margin-right: -5px;"] > path'
    ).click();
  });
});
