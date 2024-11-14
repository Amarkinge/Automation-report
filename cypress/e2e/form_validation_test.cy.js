describe('Form Validation Test', () => {
    before(() => {
        cy.visit('https://www.inmotionhosting.com');
    });
  
    it('Check form validation', () => {
        cy.get('#supportDropDown > .subnav-title').click();
        cy.window().should('have.property', 'jQuery');
        cy.wait(15000);
        
    });
});
  