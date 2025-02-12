import { test, expect } from '@playwright/test';

// Test for accessing the home page (GET request)
test('API GET Request (Access Home)', async({ request }) => {
    const response = await request.get('https://api.orangeandlemons.io/api/v1/home');

    // Assert the response status for GET request (for example, 200 OK)
    expect(response.status()).toBe(200);



});



