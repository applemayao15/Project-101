describe('OTP Login Automation with Resend API', () => {
    it('should request a new OTP and log in', () => {
      cy.visit('https://resend.com/emails');
  
      cy.get('input[name="email"]').type('your_apple@iperformapp.come');
      cy.get('input[name="password"]').type('PAssword');
      cy.get('button[type="submit"]').click();
  
      cy.get('input[name="otp"]').should('be.visible');
      cy.get('button#resend-otp').click();  // Trigger OTP resend
  
      // Fetch OTP from Resend API
      cy.task('fetchOtpFromResend').then((otp) => {
        cy.get('input[name="otp"]').type(otp);  // Enter the OTP
        cy.get('button[type="submit"]').click();  // Submit the form
        cy.url().should('eq', 'https://resend.com/emails');  // Check for login success
      });
    });
  });
  