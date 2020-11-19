/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe("User attempts save data", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v1/auth/sign_in",
      response: "fixture:login.json",
      headers: {
        uid: "user@mail.com",
      },
    });
    cy.visit("/");

    cy.get("#login").click();
    cy.get("login-form").within(() => {
      cy.get("#email").type("user@mail.com");
      cy.get("#password").type("password");
      cy.get("button").contains("addressSubmit").click();
    });
  });

  it("successfully", () => {
    cy.get("input#distance").type("1000");
    cy.get("select#gender").select("female");
    cy.get("input#age").type("23");
    cy.get("#response-message").should("contain", "Your entry was saved");
  });

  it("can save two different entries", () => {
    cy.get("input#distance").type("1000");
    cy.get("select#gender").select("female");
    cy.get("input#age").type("23");
    cy.get("#save-result").click();
    cy.get("#response-message").should("contain", "Your entry was saved");
    cy.get("input#distance").clear().type("1500");
    cy.get("#save-result").click();
    cy.get("#response-message").should("contain", "Your entry was saved");
  });
});
