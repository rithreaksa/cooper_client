/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe("User can sign up", () => {
  beforeEach(() => {
    cy.server();
    cy.visit("/");
  });

  it("when user sign up", () => {
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v1/auth",
      response: "fixture:signup.json",
      headers: {
        uid: "user@gmail.com",
      },
    });
    cy.get("#sign-up").click();
    cy.get("#sign-up-form").within(() => {
      cy.get("#email").type("user@gmail.com");
      cy.get("#password").type("password");
      cy.get("#password_confirmation").type("password");
      cy.get("button").contains("Submit").click();
    });
    cy.get("#message").should("contain", "Hi user@gmail.com");
  });
});
