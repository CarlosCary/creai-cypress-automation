import { HomePage } from '../../pages/homepage.page';

const home = new HomePage();

describe('Homepage - Mobile viewport', () => {
    beforeEach(() => {
        cy.viewport('iphone-x');
        home.visit();
        cy.denyCookies();
    });

    // Mobile smoke test to ensure key homepage elements remain visible on small screens
    it('displays key elements correctly on mobile', () => {
        home.logo().should('be.visible');

        home.contactCta()
        .should('be.visible')
        .and('have.attr', 'href', '/contact');
        
        //Hero Section
        cy.contains('h1', 'AI-powered solutions for').should('be.visible');
        cy.contains('h1', 'human-centered operations').should('be.visible');

        home.footer().should('be.visible');
    });
});