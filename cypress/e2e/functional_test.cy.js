describe('E-commerce Functional Test', () => {
  beforeEach(() => {
   
    cy.visit('https://www.inmotionhosting.com/');
  });

  it('Search, add to cart, and checkout', () => {
  
   
   cy.get('.desktop-icon-menu > :nth-child(5) > .nav-link > .imh-ds-icon > .fa')
   .should('be.visible')  // Ensure the element is visible before clicking
   .click({ force: true })
 
  });
});
