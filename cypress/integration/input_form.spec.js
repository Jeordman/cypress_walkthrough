describe("Input form", () => {
  const textInput = "Buy milk";

  beforeEach(() => {
    cy.visit("/");
  });

  it("Accepts user input", () => {
    cy.get("[data-cy-input]")
      .type(textInput) //type in box and check if it works
      .should("have.value", textInput);
  });

  it("Submits a new todo", () => {
    cy.get("[data-cy-input")
      .type(textInput)
      .type(`{enter}`) //hit enter key on keyboard
      .should("have.value", "");

    cy.get("[data-cy-input]").type(textInput);

    cy.get("[data-cy-submit]").click();

    cy.get("[data-cy-input]").should("have.value", "");

    cy.get(".todos")
      .should("be.visible")
      .should("have.length", 6)
      .eq(-1)
      .should("contain", textInput);
  });
});
