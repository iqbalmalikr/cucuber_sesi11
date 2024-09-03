@login
Feature: Test login

@positive @tc-1
Scenario: success login
Given user is on LoginPage
When user login using "<user_name>" as username and "<password>" as password
Then user should be redirected to Homepage

Examples:
|user_name     | password    |
|standard_user |secret_sauce |
|visual_user   |secret_sauceaaaa | 

