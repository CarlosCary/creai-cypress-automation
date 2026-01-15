import { HomePage } from '../../pages/homepage.page';

const home = new HomePage();

describe('Homepage - Load', () => {

  it('returns HTTP 200 for the initial document', () => {
    cy.intercept({ method: 'GET', url: '/', resourceType: 'document' }).as('homeDoc');
    home.visit();
    cy.wait('@homeDoc').its('response.statusCode').should('eq', 200);
    home.body().should('be.visible');
  });

  it('loads the home page without errors', () => {
    cy.watchConsoleErrors();
    home.visit();
    cy.get('@consoleError').should('not.have.been.called');
  });
});

describe('Homepage - Header', () => {
  beforeEach(() => {
    home.visit();
    cy.denyCookies();
  });

  it('logo displays correctly', () => {
    home.logo()
      .should('be.visible')
      .invoke('attr', 'src')
      .then((src) => {
        cy.request(src).its('status').should('eq', 200);
      });
  });

  it('validate call to action button is displayed', () => {
    home.contactCta()
      .should('be.visible')
      .and('have.attr', 'href', '/contact');
  });
});

describe('Homepage - Key sections visibility', () => {
  beforeEach(() => {
    cy.viewport(1366, 768);
    home.visit();
    cy.denyCookies();
  });

  it('hero section shows main headline', () => {
    cy.contains('h1', 'AI-powered solutions for').should('be.visible');
    cy.contains('h1', 'human-centered operations').should('be.visible');
  });

  it('displays key messaging in the Services section', () => {
    cy.contains(
      'h2:visible',
      'Evolve and optimize your operations with our unique AI solutions',
    ).scrollIntoView().should('be.visible');

    cy.contains('h3:visible', 'AI Systems Framework').should('be.visible');
    cy.contains('h3:visible', 'Custom Solutions Factory').should('be.visible');
    cy.contains('h3:visible', 'Talent as a Service').should('be.visible');
  });

  it('displays key footer messaging and navigation links', () => {
    home.footer().should('be.visible');

    home.footer().within(() => {
      cy.contains(/^Step into the future of business with AI.$/).should('be.visible');
      cy.contains(/^Ciudad de México$/).should('be.visible');
      cy.contains(/^Contact$/).should('be.visible').and('have.attr', 'href', '/contact');
      cy.contains(/^About us$/).should('be.visible').and('have.attr', 'href', '/about-us');
    });
  });
});

describe('Homepage - Navegation', () => {
  beforeEach(() => {
    home.visit();
    cy.denyCookies();
  });

  it('navigates to About us when clicking the header link', () => {
    home.clickAboutUsHeader();
    cy.url().should('include', '/about-us');
  });
});
