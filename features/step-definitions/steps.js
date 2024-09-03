import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/Loginpage.js';
import Homepage from '../pageobjects/Homepage.js';

const pages = {
    login: LoginPage
}
Given('user is on LoginPage', async () => {
    await LoginPage.open();
    // Tuliskan kode di sini untuk mengubah frase di atas menjadi aksi konkret
});

Then('user should be redirected to Homepage', async () => {
  await Homepage.validateOnHomepage();
  // Write code here that turns the phrase above into concrete actions
})

When('user login using {string} as username and {string} as password', async (user_name, password) => {
  await LoginPage.textBoxUsername.setValue(user_name);
  await LoginPage.textBoxPassword.setValue(password);
  await LoginPage.clickLoginButton();
  // Write code here that turns the phrase above into concrete actions
})


When('click login button', async () => {
  await LoginPage.clickLoginButton();
  // Write code here that turns the phrase above into concrete actions
})
