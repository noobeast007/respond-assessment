// page-objects/dashboard.page.ts
import { Page } from '@playwright/test';

export class DashboardPage {
  constructor(private page: Page) {}

  async navigateToDashboard() {
    await this.page.goto('https://app.respond.io/space/251910/dashboard');  // Assuming baseURL is set
  }

  async getDashboardTitle() {
    return await this.page.title();  // Get the title of the dashboard page
  }

  // Add more methods as needed for dashboard interactions
}
