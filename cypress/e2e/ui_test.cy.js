describe('UI Elements Test', () => {
    before(() => {
      cy.visit('https://www.inmotionhosting.com/');
    });
  
    it('Verify presence of key UI elements', () => {
        cy.get('.desktop-icon-menu > .imh-language-switcher > .country-selector > .wgcurrent > .wglanguage-name').should('be.visible');
        cy.get('.desktop-icon-menu > .imh-comment > .chat-btn-header > .imh-ds-icon').should('be.visible');
        cy.get('.desktop-icon-menu > .imh-comment > .chat-btn-header > .imh-ds-icon').should('be.visible');
        cy.get(':nth-child(5) > .nav-link > .imh-ds-icon > .cartitems').should('be.visible');
        cy.get('#supportDropDown > .subnav-title').should('be.visible');
        cy.get('#supportDropDown > .subnav-title').should('be.visible');
        cy.get(':nth-child(4) > .col-xs-12 > div > p > .ppb-button').should('be.visible');
        cy.get('[style="padding-top: 20px;"] > .col-xs-12 > p > .ppb-button').should('be.visible');
        cy.get('.col-lg-3 > .button > .ppb-button').should('be.visible');
        cy.get('#domain_search_domain').should('be.visible');
        cy.get('.imh-footer-bottom > .container').should('be.visible');
    });
  });
  