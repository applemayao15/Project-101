const axios = require('axios');

module.exports = (on, config) => {
  // Define the custom task to fetch OTP from Resend
  on('task', {
    async fetchOtpFromResend() {
      const apiKey = 'YOUR_RESEND_API_KEY';  // Replace with your actual API key from Resend
      const inboxId = 'YOUR_INBOX_ID';  // Replace with your inbox ID or relevant parameters

      try {
        // Make a GET request to Resend API to fetch messages
        const response = await axios.get(`https://api.resend.com/inboxes/${inboxId}/messages`, {
          headers: {
            'Authorization': `Bearer ${apiKey}`,  // Use your API key for authentication
          },
        });

        // Extract OTP from the email body (assuming OTP is a 6-digit code)
        const otpMessage = response.data.messages[0].body;
        const otpMatch = otpMessage.match(/\d{6}/);  // Adjust the regex if the OTP format is different

        if (otpMatch) {
          return otpMatch[0];  // Return the OTP
        } else {
          throw new Error('OTP not found in the email body');
        }
      } catch (error) {
        console.error('Error fetching OTP from Resend:', error);
        throw error;  // Re-throw the error to stop the test
      }
    },
  });
};
