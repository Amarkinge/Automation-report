import 'cypress-iframe';

describe('Login Test', () => {
    beforeEach(() => {
        cy.visit('https://www.inmotionhosting.com');
    });

    it('Login with invalid credentials', () => {
        cy.get('.btn-login-container > .nav-link').click();
        cy.get('#username').type('kingamar98@gmail.com');
        cy.get('#password').type('Amar');
    
        cy.wait(1500);
 cy.get('#login-submit').click({ force: true });
    }); 
}); 