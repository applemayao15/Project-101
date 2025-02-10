describe('End To End Testing', () => {
    it('Visit the IperformApp.io', () => {
      cy.visit('https://admin-staging.iperformapp.io/login'); // Navigate to the URL

      //it('Login with valid credentials', () => {
      //Enter username
      cy.get('.w-80.mb-5 > .w-full > .flex').type('maxlife');

      //Enter password
      cy.get('.mb-10 > .w-full > .flex').type('i8zs9h02!2Z#j');
        
      //Click the login button
      cy.get(':nth-child(5) > .inline-flex').click();
    

   
      // Visit Resend to get the OTP
      cy.visit('https://resend.com/emails'); // Navigate to the Resend URL
      cy.origin('https://resend.com', () => {
        // Interact with the Resend website to find the OTP
      cy.contains('Email').type('apple@iperformapp.com');
      cy.contains('Password').type('PAssword1234@');
      cy.contains('Continue').click();
      cy.wait(5000)
      cy.contains('Continue').click();


    // describe('Email OTP Request Automation', () => {
    //     it('should request OTP for email successfully', () => {
    //       const apiKey = 're_123456789';  // The API key for authentication
    //       const otpRequestEndpoint = '/api/request-otp-email';
    //       const email = 'edward@iperformapp.com';  // Email address of the user requesting OTP



          describe('OTP Login Automation with Resend API', () => {
            it('should request a new OTP and log in', () => {
              cy.visit('https://resend.com/emails');
          
              cy.contains('Email').type('apple@iperformapp.com');
              cy.contains('Password').type('PAssword1234@');
              cy.contains('Continue').click();
              cy.wait(5000)
          
              cy.get('input[name="otp"]').should('be.visible');
          
          
              // Fetch OTP from Resend API
              cy.task('fetchOtpFromResend').then((otp) => {
                cy.get('input[name="otp"]').type(otp);  // Enter the OTP
                cy.get('button[type="submit"]').click();  // Submit the form
                cy.url().should('eq', 'https://resend.com/emails');  // Check for login success
              });
            });
          });
          
      
  });  
});
});


