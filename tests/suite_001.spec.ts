import { test } from '@playwright/test';

test('[C1] Successful login', async ({ page }) => {
    console.log('Successfully logged in');
});

test('[C2] Failed login', async ({ page }) => {
    console.log('Failed to log in');
});
