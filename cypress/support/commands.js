Cypress.Commands.add('watchConsoleErrors', () => {
    Cypress.on('window:before:load', (win) => {
        cy.stub(win.console, 'error').as('consoleError')
    });
});

Cypress.Commands.add('denyCookies', () => {
    cy.get('#CybotCookiebotDialogBodyButtonDecline').should('be.visible').as('denyButton');
    cy.get('@denyButton').click();
});