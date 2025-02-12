import { test, expect } from '@playwright/test';

// Test for accessing the Settings page (POST request)
test('API POST Request (Access Settings)', async({ request }) => {
    const response = await request.post('https://api.orangeandlemons.io/api/v1/profile', {
        form: {
            id: 24 ,
            username: 'maxsoussan',
            firstName: 'Max',
            lastName: 'Soussan',
            email: 'max@maxsoussan.com',
            gender: 'Male',
            dob: 'Sun Dec 06 1981 08:00:00 GMT+0800',

        }

    });

    // Assert the response status for POST request (for example, 200 OK)
    expect(response.status()).toBe(200);



});



