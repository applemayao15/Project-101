import { test, expect } from '@playwright/test';

// Test for accessing the Music page (POST request)
test('API POST Request (Access Music)', async({ request }) => {
    const response = await request.post('https://api.orangeandlemons.io/api/v1/music/list', {
        data: {
            "userId": 24,
            "page": 1,
            "limit": 1000,
            "skipCache": false
          }
    });

    // Assert the response status for POST request (for example, 200 OK)
    expect(response.status()).toBe(200);


});



