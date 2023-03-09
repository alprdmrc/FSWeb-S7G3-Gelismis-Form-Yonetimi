/// <reference types="cypress" />

context("Genel test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Formu doldur", () => {
    cy.get("#firstName").type("Alper").should("have.value", "Alper");
    cy.get("#lastName").type("Demirci").should("have.value", "Demirci");
    cy.get("#email")
      .type("alper@alper.com")
      .should("have.value", "alper@alper.com");
    cy.get("#password").type("123456").should("have.value", "123456");
    cy.get("#acceptTerms").check();
  });
});
