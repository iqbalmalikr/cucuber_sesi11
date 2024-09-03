@login
Feature: Test login


Scenario: success login
Given user is on LoginPage
When user login using "standard_user" as username and "secret_sauce" as password
Then user should be redirected to Homepage