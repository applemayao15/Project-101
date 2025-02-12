import { test, expect } from '@playwright/test';

// Test for accessing the About page (POST request)
test('API POST Request (Access About)', async({ request }) => {
    const response = await request.post('https://api.orangeandlemons.io/api/v1/fanclub/artist');

    // Assert the response status for POST request (for example, 200 OK)
    expect(response.status()).toBe(200);



});



