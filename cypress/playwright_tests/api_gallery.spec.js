import { test, expect } from '@playwright/test';

// Test for accessing the Gallery page (GET request)
test('API GET Request (Access Gallery)', async({ request }) => {
    const response = await request.get('https://api.orangeandlemons.io/api/v1/gallery');

    // Assert the response status for GET request (for example, 200 OK)
    expect(response.status()).toBe(200);



});



