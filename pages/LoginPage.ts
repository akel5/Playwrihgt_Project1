import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  private usernameInput = this.page.locator('#username');
  private passwordInput = this.page.locator('#password');
  private loginButton = this.page.locator('#login button');
  private flashMessage = this.page.locator('#flash b');
  private flashMessageLogout = this.page.locator('id=flash');
  private logoutButton =  this.page.getByRole('link', { name: 'logout' });
  

  constructor(page: Page) { 
    super(page);
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async logout() {
    await this.logoutButton.click();
  }

   getFlashMessage() {
    return this.page.locator('#flash b');
  }

  getFlashLogoutMessage() {
    return this.flashMessageLogout;
  }
}
