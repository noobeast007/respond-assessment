import { Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly emailInput: string;
    readonly passwordInput: string;
    readonly loginButton: string;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = '//*[@id="input-7"]'; // Assuming the email input selector
        this.passwordInput = '//*[@id="input-9"]'; // Assuming the password input selector
        this.loginButton = '//*[@id="authContainer"]/div[1]/div[2]/div[1]/div[1]/form[1]/div[4]/button[1]'; // Assuming the submit button selector
    }

    async navigateToLogin() {
        await this.page.goto('https://app.respond.io/user/login');
    }

    async login(email: string, password: string) {
        await this.page.fill(this.emailInput, email);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }
}
