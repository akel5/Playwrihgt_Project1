import { test, expect } from '../fixtures/testSetup';

test('Valid Login', async ({loginPage })=>{
    
  await loginPage.goto('https://practice.expandtesting.com/login');
  await loginPage.login('practice', 'SuperSecretPassword!');
  await expect(loginPage.getFlashMessage()).toContainText("You logged into a secure area!"); 

});

test('Invalid Login', async ({loginPage})=>{
  
  await loginPage.goto('https://practice.expandtesting.com/login');
  await loginPage.login('practice', 'SuperSecretPassword');
  await expect(loginPage.getFlashMessage()).toContainText("Your password is invalid!");

});

test('Logout', async ({loginPage})=>{
  
  await loginPage.goto('https://practice.expandtesting.com/login');
  await loginPage.login('practice', 'SuperSecretPassword!');
  await loginPage.logout();
  await expect(loginPage.getFlashLogoutMessage()).toContainText("You logged out of the secure area!");

});