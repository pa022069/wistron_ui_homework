describe("template spec", () => {
  it("passes", () => {
    cy.viewport(1366, 768);
    cy.visit("http://localhost:5173");
    cy.get("#firstName").type("firstName");
    cy.get("#lastName").type("lastName");
    cy.get("#email").type("test@test.com");
    cy.get("#password").type("password@22");
    cy.get("#checkbox").check();
    cy.contains("Create an Free Account!").click();
  });
});
