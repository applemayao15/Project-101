describe('End To End Testing', () => {
    it('Visit the IperformApp.io', () => {
      cy.visit('https://staging.iperformapp.io/login/'); // Navigate to the URL

      // it('Login with valid credentials', () => {
      //Enter username
      cy.get('.w-80.mb-5 > .w-full > .flex').type('maxsoussan');

      //Enter password
      cy.get('.mb-6 > .w-full > .flex').type('2ddB0=7Cj8$4{');
        
      //Click the login button
      cy.get(':nth-child(5) > .inline-flex').click();
      cy.wait(5000)

      // visit menu bar
      cy.contains('Home').click();
      cy.wait(5000)
      cy.contains('About').click();
      cy.wait(5000)
      // Send Email from connect
      // cy.contains('About').click();
      // cy.contains('CONNECT').scrollIntoView().should('be.visible')
      // cy.get('.space-y-8 > :nth-child(1) > .flex').type('Apple')
      // cy.get('.space-y-8 > :nth-child(2) > .flex').type('apple@iperformapp.com')
      // cy.get('.space-y-8 > :nth-child(3) > .flex').type('SubjectEmailTest')
      // cy.get('textarea').type('MessageEmailTestOnly')
      // cy.get('.space-y-8 > .inline-flex > span').click();
      // cy.contains("Success! Your message has been sent. We'll get back to you soon.").should('exist').and('be.visible');
      // cy.wait(3000)
      cy.contains('Music').click();
      cy.wait(5000)
      cy.contains('Videos').click();
      cy.wait(5000)
      cy.contains('Gallery').click();
      cy.wait(5000)
      cy.contains('Fan Club').click();
      cy.contains('Latest Galleries').scrollIntoView().should('be.visible')
      cy.wait(9000)
      cy.contains('Settings').click();
      // View Settings Tab
      cy.wait(5000)  
      cy.contains('Profile').click();
      cy.wait(5000)  
      cy.contains('Change Password').click();
      cy.wait(5000)  
      cy.contains('Transactions').click();
      cy.wait(5000)  
      cy.contains('Notifications').click();

    
       Cypress.on('uncaught:exception', (err, runnable) => {
        // Ignore the specific error and allow tests to continue
        if (err.message.includes('Unable to decode audio data')) {
          return false; // Prevent Cypress from failing the test
        }
        // For all other exceptions, fail the test
        throw err;
      });

    
      //  Play Song
      //  cy.contains('Music').click();
      //  cy.wait(3000)
      //  cy.contains('All Music').scrollIntoView().should('be.visible')
      //  cy.get('.rounded-full').eq(0).click();

      // cy.get('.overflow-x-auto')
      // .scrollTo('100%', 0) // Scroll to the far right (100%)
      // .wait(5000)
      // .scrollTo('0%', 0); // Scroll back to the far left (0%)


      // Hamburger function
      cy.get('.justify-start > .rounded-full').first().click();
      


  });  
});