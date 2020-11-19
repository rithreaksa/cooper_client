/* eslint-disable no-undef */

/// <reference types="Cypress" />

describe("User authenticates", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("successfully with valid credentials", () => {
    cy.get("#login").click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("user@user.com");
      cy.get("#password").type("password");
      cy.get("button").contains("Submit").click();
    });
    cy.get("#message").should("contain", "Hi user@user.com");
  });

  it("unsuccessfully with invalid credentials", () => {
    cy.get("#login").click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("user@user.com");
      cy.get("#password").type("wrong_password");
      cy.get('button').contains('Submit').click()
    });
    cy.get("#message").should("contain", "Invalid login credentials. Please try again.");
  });
});
