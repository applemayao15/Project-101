import { test, expect } from '@playwright/test';

test('API POST Request (Valid)', async({ request }) => {
    // Successful login case
    const response = await request.post('https://api.orangeandlemons.io/api/v1/auth/signin', {
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            username: 'maxsoussan',
            password: '^xzW3WrnG1BREyPh',
        },
    });

    expect(response.status()).toBe(200);
});


test('API POST Request (Invalid)', async({ request }) => {
    const response = await request.post('https://api.orangeandlemons.io/api/v1/auth/signin', {
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            username: 'maxsoussan',
            password: 'wrong',
        },
    });

    expect(response.status()).toBe(401); // Expect Unauthorized status


});


// // Test for accessing the home page (GET request)
// test('API GET Request (Access Home)', async({ request }) => {
//     const response = await request.get('https://api.orangeandlemons.io/api/v1/home');

//     // Assert the response status for GET request (for example, 200 OK)
//     expect(response.status()).toBe(200);

// });





