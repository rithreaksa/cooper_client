/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe('User attempts to view his/her performance data', () => {
    beforeEach(function() {
        cy.server();
        cy.route({
            method: 'GET',
            url: 'http://localhost:3000/api/v1/performance_data',
            response: 'fixture:performance_data_index.json'
        })
        cy.route({
            method: 'POST',
            url: 'http://localhost:3000/api/v1/auth/sign_in',
            response: 'fixture:login.json',
            headers: {
                "uid": "hej@gmail.com" 
            }
        })
        cy.visit("/");

        cy.get('#login').click();
        cy.get('#login-form').within(() => {
            cy.get('#email').type('hej@gmail.com')
            cy.get('#password').type('password')
            cy.get('button').contains('Submit').click()
        })
    });

    it('successfully', async () => {
        cy.get('#show-index').click()
        cy.get('#index').within(() => {
            cy.contains('Below Average')
            cy.contains('Average')
            cy.contains('Above Average')
        })
    })
})