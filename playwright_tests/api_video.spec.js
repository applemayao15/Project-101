import { test, expect } from '@playwright/test';

// Test for accessing the Videos page (GET request)
test('API GET Request (Access Videos)', async({ request }) => {
    const response = await request.get('https://api.orangeandlemons.io/api/v1/video/category/list?userId=24&page=1&limit=100&isExclusive=false');

    // Assert the response status for GET request (for example, 200 OK)
    expect(response.status()).toBe(200);



});



