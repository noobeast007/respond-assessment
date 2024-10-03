import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/login.page';
import { DashboardPage } from '../page-objects/dashboard.page';
import { InboxPage } from '../page-objects/inbox.page';

test.describe('Login flow', () => {

  test('should log in successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const inboxPage = new InboxPage(page);

    // Navigate to login page
    await loginPage.navigateToLogin();

    // Perform login
    await loginPage.login('izzulisyraf@gmail.com', 'Respond@1'); // Use valid email and password

    await page.waitForTimeout(2000);

    //
    await dashboardPage.navigateToDashboard();

    const title = await dashboardPage.getDashboardTitle();
    expect(title).toBe('respond.io');  //

    await inboxPage.navigateToInbox();

  });
});
