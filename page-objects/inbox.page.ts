// page-objects/inbox.page.ts
import { Page } from '@playwright/test';

export class InboxPage {
  constructor(private page: Page) {}

  async clickOnElement() {
    // Click the specified element using XPath
    await this.page.click('//*[@id="root"]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]/div[1]/div[1]/div[2]');
  }

  async navigateToInbox() {
    await this.page.goto('https://app.respond.io/space/251910/inbox/222977549'); // Directly navigate to inbox URL if needed
  }

  async verifyElementInInbox() {
    // Verify the specified element using XPath
    const isVisible = await this.page.isVisible('//*[@id="root"]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/span[1]');
    return isVisible; // Return true or false based on visibility
  }
}
