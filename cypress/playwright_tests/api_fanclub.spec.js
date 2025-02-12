import { test, expect } from '@playwright/test';

// Test for accessing the Fanclub page (POST request)
test('API POST Request (Access Fanclub)', async({ request }) => {
    const response = await request.post('https://api.orangeandlemons.io/api/v1/fanclub/posts', {
        data: {
                "userId": 24,
                "page": 1,
                "limit": 10
              }
        

    });

    // Assert the response status for POST request (for example, 200 OK)
    expect(response.status()).toBe(200);



});



