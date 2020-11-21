/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe("Cooper Client calculates successfully", () => {
  beforeEach(() => {
    cy.server();
    cy.visit("/");
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v1/auth/sign_in",
      response: "fixture:login.json",
      headers: {
        uid: "hej@gmail.com",
      },
    });
    cy.get("#login").click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("hej@gmail.com");
      cy.get("#password").type("password");
      cy.get("button").contains("Submit").click();
    });
  });

  it("calculates cooper performance", () => {
    cy.get("input#distance").type("1000");
    cy.get("select#gender").select("female");
    cy.get("input#age").type("23");
    cy.get("p#cooper-message").should(
      "contain",
      "23 y/o female running 1000 meters."
    );
    cy.get("p#cooper-result").should("contain", "Result: Poor");
  });
});
