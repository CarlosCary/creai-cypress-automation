export class HomePage {
    visit() {
      cy.visit('/');
    }
  
    body() {
      return cy.get('body');
    }
  
    // Header Section
    logo() {
      return cy.get('.navbar11_container .navbar11_logo');
    }
  
    contactCta() {
      return cy.get('a[trigger="contact_cta"][location="navbar"]');
    }
  
    aboutUsHeaderLink() {
      return cy.get('.navbar11_container .navbar11_link').contains('About us');
    }
  
    clickAboutUsHeader() {
      this.aboutUsHeaderLink().click({ force: true });
    }
  
    // Footer Section
    footer() {
      return cy.get('footer');
    }
  }
  