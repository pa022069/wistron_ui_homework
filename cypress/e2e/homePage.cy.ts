describe("template spec", () => {
  it("passes", () => {
    cy.viewport(1366, 768);
    cy.visit("http://localhost:3000");
    cy.get("#firstName").type("firstName").should("have.value", "firstName");
    cy.get("#lastName").type("lastName").should("have.value", "lastName");
    cy.get("#email")
      .type("test@test.com")
      .should("have.value", "test@test.com");
    cy.get("#password").type("password@22").should("have.value", "password@22");
    cy.get("#checkbox").check().should("be.checked", true);
    cy.contains("Create an Free Account!").click();
  });
});
