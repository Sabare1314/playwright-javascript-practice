import { test, expect } from '@playwright/test';

test('Verify that the login page loads successfully.', async ({ page }) => {

try {
    // Navigate to the login page
    await page.goto('https://www.saucedemo.com/');

    // Verify the page title
    await expect(page).toHaveTitle('Swag Labs');

    // Verify the username field
    const usernameField = page.locator('[data-test="username"]');
    await expect(usernameField).toBeVisible();
    await usernameField.fill('standard_user');

    // Verify the password field
    const passwordField = page.locator('[data-test="password"]');
    await expect(passwordField).toBeVisible();
    await passwordField.fill('secret_sauce');

    // Verify the login button
    const loginButton = page.getByRole('button', { name: 'Login' });
    await expect(loginButton).toBeVisible();

    // Click the login button
    await loginButton.click();

    // Verify successful login
    await expect(page).toHaveURL(/inventory/);

    // Print success message
    console.log('Test Passed!');

} catch (error) {
    // Print error message
    console.error('Test Failed! Error:', error.message);

    // Mark the test as failed in Playwright
    throw error;
}
});